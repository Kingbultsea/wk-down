const db = require('./DataBase.js')
const superAgent = require('superagent')
const outputPic = require('./parseImg.js')
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
                uid: uid // dataParse.xml.Content[0]
            }
        })
        const z =  eval('(' + dbData[0].session + ')')
        let arr = eval('(' + dbData[0].session + ')')
        arr.push(data[0])
        console.log('update bug 检测更新')
        await db.update('user_session', { session: JSON.stringify(arr), update: new Date().getTime()}, { where: { uid: uid } })
    }

    static async addUser (uid, subject) {
        console.log(subject)
        const a = await db.insert(`user_session`, {
            uid: uid,
            session: JSON.stringify([subject[0]]),
            'message_leave': '',
            update: new Date().getTime()
        })
        console.log(a)
    }

    static async deleteUser (uid) {
        await db.delete('user_session', {
            uid
        })
    }

    static async getSesssion (uid) {
        const data = await db.select('user_session', {
            where: {
                uid: uid // dataParse.xml.Content[0]
            }
        })
        console.log(data.length)

        if (data.length === 0) {
            return 0
        } else {
            const mintime = new Date().getTime() - parseInt(data[0].update)
            const time = 1000 * 60 * 3
            if (mintime >= time && !data[0].message_leave) {
                console.log('用户太久没有回复了.. 三分钟')
                await Send.deleteUser(uid)
                return 0
            }


            console.log(eval('(' + data[0].session + ')').length)
            return eval('(' + data[0].session + ')').length
        }
    }

    static async limitTimes (uid) {
        const data = await db.select('user_session', {
            where: {
                uid: uid // dataParse.xml.Content[0]
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
        const dbData = await db.select('user_session', {
            where: {
                uid: uid // dataParse.xml.Content[0]
            }
        })
        if (dbData.length === 0) {
            return es
        } else {
            return eval('(' + dbData[0].session + ')')[0]// es 是第一次step = 0的时候 保留的东西哦
        }
    }

    static async saveLeaveMessage (uid, data) {
        await db.update('user_session', { message_leave: data[0] }, { where: { uid } })
    }

    static async hasLeaveMessage (uid) {
        const dbData = await db.select('user_session', {
            where: {
                uid: uid // dataParse.xml.Content[0]
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
                const data = { name: res.body.nickname, picUrl: res.body.headimgurl }
                resolve(data)
            })
        })
    }

    static async getMediaPic (designation, token, openid) {
        const { name, picUrl } = await Send.getUseData(token, openid)
        const hashPicName = await outputPic(designation, name, picUrl)

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
                uid // dataParse.xml.Content[0]
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
            for (let z in tap) {
                countTemplate[z] += tap[z]
            }
        }
        let copy = []
        console.log(countTemplate)
        countTemplate.forEach((z) => {
            copy.push(z)
        })
        countTemplate.forEach(() => {

        })
        const maxNum = countTemplate.sort()[countTemplate.length - 1]
        console.log(tags[copy.indexOf(maxNum) + 1])
        return tags[copy.indexOf(maxNum) + 1]
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
