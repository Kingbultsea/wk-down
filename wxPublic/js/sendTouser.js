const db = require('./DataBase.js')
const superAgent = require('superagent')

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
                console.log('???')
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
            console.log('存在哦')
            const subject = eval('(' + subjectList[0].subject + ')')
            console.log(subject)
            return subject
        } else {
            return false
        }
    }
    static async getCorrespondence (title) {
        console.log(title)
        console.log('奇怪？')
        const dbData = await db.select('subject_list', {
            where: {
                title: title // dataParse.xml.Content[0]
            }
        })
        // console.log(dbData[0].correspondence)
        return dbData[0].correspondence
    }
    static async saveSession (uid, data) {
        console.log('??好奇怪为什么会是2呢？')
        const dbData = await db.select('user_session', {
            where: {
                uid: uid // dataParse.xml.Content[0]
            }
        })
        console.log(dbData[0].session)
        const z =  eval('(' + dbData[0].session + ')')
        let arr = eval('(' + dbData[0].session + ')')
        arr.push(data[0])
        console.log(arr)
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
            console.log(eval('(' + data[0].session + ')').length)
            return eval('(' + data[0].session + ')').length
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
}

module.exports = Send
