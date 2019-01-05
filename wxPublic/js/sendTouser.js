const db = require('./DataBase.js')
const superAgent = require('superagent')
const outputPic = require('./parseImg.js')

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
                resolve()
            })
        })
    }

    static sendPic (toUser, mediaId, serveAccessToken) {
        const serviceData = {
            'touser': toUser, // dataParse.xml.FromUserName[0]
            'msgtype': 'mpnews',
            'mpnews':
                {
                    'media_id': mediaId
                },
            'appid': 'wxbaf03b7acb3c993a' // appid_value
        }
        return new Promise (resolve => {
            superAgent.post(`https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=${serveAccessToken}`).send(serviceData).end((err, res) => {
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
        await db.update('user_session', { session: JSON.stringify(arr) }, { where: { uid: uid } })
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
        await db.delete('table-name', {
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
            if (mintime >= time) {
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
        const time = 4000
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
                const data = { name: res.body.nickname, picUrl: res.body.headimgurl }
                resolve(data)
            })
        })
    }

    static async getMediaPic (designation, token, openid) {
        const { name, picUrl } = await Send.getUseData(token, openid)
        const picBuffer = await outputPic(designation, name, picUrl)
        let form = new FormData()
        form.append('file', dataURLToBlob(picBuffer), 'avatar.png')
        return new Promise((resolve) => {
            superAgent.post(`https://api.weixin.qq.com/cgi-bin/media/upload?access_token=${token}&type=image`).send(form).end(async function(err, res) {
                if (res.hasOwnProperty('errcode')) {
                    resolve()
                    return
                }
                await Send.sendPic(openid, res.media_id, openid)
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
        for (let i = 1; i < count.length + 1; i++) {
            const session = eval('(' + dbData[0].count + ')')
            userCount.push(session[i])
        }
        for (let i = 0; i < userCount; i++) {
            const tap = count[i][userCount[i]]
            for (let z in tap) {
                countTemplate[z] += tap[z]
            }
        }
        let copy = []
        countTemplate.forEach((z) => {
            copy.push(z)
        })
        countTemplate.forEach(() => {

        })
        const maxNum = countTemplate.sort()[countTemplate.length - 1]
        return tags[copy.indexOf(maxNum)]
    }
}

function dataURLToBlob(dataURL) { // 我不太确定...  所以干脆转换成64再去转换了 我知道性能不好... 先凑合用着先吧
    let BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) == -1) {
        let parts = dataURL.split(',');
        let contentType = parts[0].split(':')[1];
        let raw = parts[1];

        return new Blob([raw], {type: contentType});
    }
    else {
        let parts = dataURL.split(BASE64_MARKER);
        let contentType = parts[0].split(':')[1];
        let raw = window.atob(parts[1]);
        let rawLength = raw.length;

        let uInt8Array = new Uint8Array(rawLength);

        for (let i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }

        return new Blob([uInt8Array], {type: contentType});
    }
}

module.exports = Send
