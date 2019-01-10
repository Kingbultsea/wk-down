const db = require('./DataBase.js')
const superAgent = require('superagent')
const { outputPic, outputPicShare } = require('./parseImg.js')
const FormData = require('form-data')
const fs = require('fs')
const path = require("path")
const request = require('request')
const Blob = require('blob')
const { canvasToBlob } = require('blob-util')

class Send {
    static sendMessage (toUser, content, serveAccessToken) {
        const serviceData = {
            'touser': toUser, // dataParse.xml.FromUserName[0]
            'msgtype': 'text',
            'text':
                {
                    'content': content
                },
            'appid': 'wxbaf03b7acb3c993a' // appid_value
        }
        return new Promise (resolve => {
            superAgent.post(`https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=${serveAccessToken}`).send(serviceData).end((err, res) => {
                if (res.body.hasOwnProperty('errcode')) {
                    console.log(serveAccessToken)
                }
                console.log(res.body)
                resolve()
            })
        })
    }

    static sendPic (toUser, mediaId, serveAccessToken) {
        console.log(serveAccessToken)
        const serviceData = {
            'touser': toUser, // dataParse.xml.FromUserName[0]
            'msgtype': 'image',
            'image':
                {
                    'media_id': mediaId
                }
        }
        console.log(serviceData)
        return new Promise (resolve => {
            superAgent.post(`https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=${serveAccessToken}`).send(serviceData).end((err, res) => {
                console.log(res.body)
                resolve()
            })
        })
    }

    static async getSubject (key) {
        const subjectList = await db.select('subject_list', {
            where: {
                title: key // dataParse.xml.Content[0]
            }
        })
        if (subjectList[0]) { // 查询题目库
            const subject = eval('(' + subjectList[0].subject + ')')
            console.log(subject)
            return subject
        } else {
            return false
        }
    }

    static async getCorrespondence (title) {
        const dbData = await db.select('subject_list', {
            where: {
                title: title // dataParse.xml.Content[0]
            }
        })
        // console.log(dbData[0].correspondence)
        return dbData[0].correspondence
    }

    static async saveSession (uid, data) {
        const dbData = await db.select('user_session', {
            where: {
                unionid: uid // dataParse.xml.Content[0]
            }
        })
        const z =  eval('(' + dbData[0].session + ')')
        let arr = eval('(' + dbData[0].session + ')')
        arr.push(data[0])
        console.log('update bug 检测更新')
        await db.update('user_session', { session: JSON.stringify(arr), update: new Date().getTime()}, { where: { unionid: uid } })
    }

    static async addUser (uid, subject, name) {
        console.log(subject)
        const a = await db.insert(`user_session`, {
            unionid: uid,
            session: JSON.stringify([subject[0]]),
            'message_leave': '',
            update: new Date().getTime(),
            user_name: name
        })
        console.log(a)
    }

    static async deleteUser (uid, session) {
        await db.update('user_session', {
            save_session: session,
            session: ''
        }, {
            where: {
                unionid: uid
            }
        })
    }

    static async getSesssion (uid, openid, accessToken) {
        const data = await db.select('user_session', {
            where: {
                unionid: uid // dataParse.xml.Content[0]
            }
        })
        console.log(data.length)

        if (data.length === 0) {
            return 0
        } else {
            if (data[0].save_session) {
                return 9999
            }

            const mintime = new Date().getTime() - parseInt(data[0].update)
            const time = 1000 * 60 * 3
            if (mintime >= time && !data[0].message_leave) {
                console.log('用户太久没有回复了.. 三分钟')
                Send.sendMessage(openid, '很遗憾，你的操作已超时，现已结束流程，期待下次活动见', accessToken)
                await Send.deleteUser(uid, data[0].session)
                return 9999
            }


            console.log(eval('(' + data[0].session + ')').length)
            return eval('(' + data[0].session + ')').length
        }
    }

    static async limitTimes (uid, type = 2) {
        let table = null

        switch (true) {
            case (type === 1): {
                table = 'user_session'
            }
                break;
            case (type === 2): {
                table = 'owner'
            }
                break;
        }

        const data = await db.select(table, {
            where: {
                unionid: uid // dataParse.xml.Content[0]
            }
        })
        if (data.length === 0) {
            return true // true 是可以进行下去
        }
        const mintime = new Date().getTime() - parseInt(data[0].update)
        const time = 1000 * 5
        console.log(mintime)
        if (mintime <= time) {
            return false
        } else {
            return true
        }
    }

    static async getUserSubject (uid, es) {
        console.log(uid)
        const dbData = await db.select('user_session', {
            where: {
                unionid: uid // dataParse.xml.Content[0]
            }
        })
        console.log(dbData)
        if (dbData.length === 0) {
            return es
        } else {
            return eval('(' + dbData[0].session + ')')[0]// es 是第一次step = 0的时候 保留的东西哦
        }
    }

    static async saveLeaveMessage (uid, data) {
        await db.update('user_session', { message_leave: data[0] }, { where: { unionid: uid } })
    }

    static async hasLeaveMessage (uid) {
        const dbData = await db.select('user_session', {
            where: {
                unionid: uid // dataParse.xml.Content[0]
            }
        })
        if (dbData[0].message_leave) {
            return true
        } else {
            return false
        }
    }

    static getUseData (token, openid) {
        return new Promise((resolve) => {
            superAgent.get(`https://api.weixin.qq.com/cgi-bin/user/info?access_token=${token}&openid=${openid}&lang=zh_CN`).end((err, res) => {
                console.log(res.body)
                const data = { name: res.body.nickname, picUrl: res.body.headimgurl, unionid: res.body.unionid }
                resolve(data)
            })
        })
    }

    static async getMediaPic (designation, token, openid, qrCodeUrl = null, platFormId = null, type = 2) { // 1是第一套活动 2是会员裂变活动
        const { name, picUrl } = await Send.getUseData(token, openid)

        let hashPicName = null
        if (type === 1) {
            hashPicName = await outputPic(designation, name, picUrl)  // 这个是第一次活动的图片生成
        } else
        if (type === 2) {
            hashPicName = await outputPicShare(designation, name, picUrl, qrCodeUrl, platFormId) // 这是分裂 分享活动生成的图片
        }

        return new Promise((resolve) => {
            /* superAgent.post(`https://api.weixin.qq.com/cgi-bin/media/upload?access_token=${token}&type=image`).send(form).end(async function(err, res) {
                console.log(res.body)
                if (res.hasOwnProperty('errcode')) {
                    resolve()
                    return
                }
                await Send.sendPic(openid, res.media_id, openid)
                resolve()
            }) */
            console.log(hashPicName)
            let formData = {
                my_field: 'my_value',
                my_file:  fs.createReadStream(path.join(__dirname, `../img/${hashPicName}.png`))
            }

            request.post({url:`https://api.weixin.qq.com/cgi-bin/media/upload?access_token=${token}&type=image`, formData: formData}, async function(err, httpResponse, body) {
                if (err) {
                    return console.error('upload failed:', err)
                }
                console.log(JSON.parse(body))
                console.log(body)
                console.log(JSON.parse(body).media_id)
                console.log('Upload successful!  Server responded with:', body)
                await Send.sendPic(openid, JSON.parse(body).media_id, token)
                resolve()
            })
        })
    }

    static async count (uid, title) {
        const dbData = await db.select('user_session', {
            where: {
                unionid: uid // dataParse.xml.Content[0]
            }
        })

        const subjectData = await db.select('subject_list', {
            where: {
                title
            }
        })

        const count = eval('(' + subjectData[0].count + ')') // 从题目上面取出来的东西
        const tags = eval('(' + subjectData[0].tags + ')')
        let countTemplate = new Array(tags.length).fill(0)
        let userCount = []
        for (let i = 2; i < count.length + 2; i++) {
            const session = eval('(' + dbData[0].session + ')')
            userCount.push(session[i])
        }
        console.log(userCount)
        console.log(count)
        console.log('上面那两就是你想要的撒')
        for (let i = 0; i < userCount.length; i++) {
            const tap = count[i]
            console.log(tap)
            for (let z in tap[i]) {
                console.log(z)
                countTemplate[parseInt(z) - 1] += tap[parseInt(z)]
            }
        }
        let copy = []
        console.log(countTemplate)
        countTemplate.forEach((z) => {
            copy.push(z)
        })
        console.log(tags)
        console.log(copy)
        const maxNum = countTemplate.sort()[countTemplate.length - 1]
        console.log(maxNum)
        console.log(tags[copy.indexOf(maxNum) + 1])
        return tags[copy.indexOf(maxNum) + 1]
    }

    static async getQRcodePicUrl (serveAccessToken) {
        const dataProps = {
            expire_seconds: 2592000,
            action_name: 'QR_STR_SCENE',
            action_info: {
                'invitation_code': 123
            }
        }
        console.log(JSON.stringify(dataProps))
        return new Promise((resolve, reject) => {
            console.log(serveAccessToken)
            superAgent.post(`https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=${serveAccessToken}`).send(JSON.stringify(dataProps)).end((err, res) => {
                if (err) {
                    console.log('获取ticket的时候出错了(QRcode)')
                    reject()
                }
                if (res.body.hasOwnProperty('errcode')) {
                    console.log('出错了')
                    console.log(res.body)
                    resolve()
                }
                superAgent.post(`https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=${res.body.ticket}`).end((err, res) => {
                    if (err) reject()
                    console.log(res.body)
                    console.log(res.files)
                    resolve()
                })
            })
        })
    }
}

function dataURIToBlob(dataURI) {
    dataURI = dataURI.replace(/^data:/, '');

    const type = dataURI.match(/image\/[^;]+/);
    const base64 = dataURI.replace(/^[^,]+,/, '');
    const arrayBuffer = new ArrayBuffer(base64.length);
    const typedArray = new Uint8Array(arrayBuffer);

    for (let i = 0; i < base64.length; i++) {
        typedArray[i] = base64.charCodeAt(i);
    }

    return new Blob([arrayBuffer], {type})
}

module.exports = Send
