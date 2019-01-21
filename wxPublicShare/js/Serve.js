const Koa = require('koa')
const Router = require('koa-router')
const xmlParser = require('koa-xml-body')
const bodyParser = require('koa-bodyparser')
const fs = require('fs')
const path = require("path")
const superAgent = require('superagent')

const db = require('./DataBase.js')

const Parse2Data = require('./Parse2Data.js')
const Parse2XML = require('./Parse2XML.js')
const Encrypt = require('./Encrypt.js')
const sendTouser = require('./sendTouser.js')
const Share = require('./Share')
const SleepStation = require('./SleepStation')

const app = new Koa()
const router = new Router()

const appid_value = 'wxbaf03b7acb3c993a'



app.use(xmlParser())
app.use(bodyParser())
app.use(router.routes())


let ticket = 'glC91P1tjzm0GybMWqhztjfL+QR0AI7r6c0k0Jb+4ZFfLuTzrg68T2JhaJznGTML4+Q+qFbr68QUX2HbvCTuoc8vhRxmD/gRWpKY+DZ1k0cDTIYeJ9HlGi96oSznsFqnh4xMtsaaUmyZsndJ6e0qZAkOB5aJN56NQEwPsKAtJE3RsELB7XvY2pUFxrichAxC57XXWfDBz/8bw3g2eHQRE2Wz7t1y3/aIvKpKuk2ilo//WIlWVwI75EbuaUBkJjUFvRRJptaZFMCy+ox7G10DyOl6g+/uBva+bqMm5pZCcRqriLgDeWmqBXu1QkMVvYTYYZpVZUMHPYT5rzkAEe0AhOBD6tgtIiD8p/SDpl0OoyVZpifvjxPPwWq/p528DlRZKmqFnveesj3ijcfTS1WEiiPfxBJpOE0jS39MKQd16kNIlasFfYU07rA6jyR4R3gYYpM26hLxbebNrAE6EinE0Q==' // component_verify_ticket
let enctypeTicket = null
let pre_auth_code = null
let componentAccessToken = ''
let serveAccessToken = '17_JJQGhkZPsIiIIM-J2Qjd2xYa5wweWW9YPogGKmh3XG4h_u3yUzlq_sF_ZMH_G6VVg3AD-LB1pNeP8_6n_9H-_OBg_7JKDfjY53RYaz6NwToHJtDiv5hJvedRM1vfxPtB0nmaDakcvpzgOiKkUJUaAEDDSD' // 这是调用第三方的时候 需要的
let savePreAccessToken = 'refreshtoken@@@Xf_pWjheyA6S72KhSkcLwsBazP_W6_FlSz36qT5VD1g' // 第一次的时候跳转Url 可以获得 以后就需要refleash了
const encrypt = new Encrypt({
    appId: appid_value,
    encodingAESKey: 'a7fk2zC8qdmEiHHPnt9bk2YqxaQQALBPAXnUq4WDu9H',
    token: 'q9Uew7m97qnEo9Y3QhmNThfaC2ETMpNm'
})

const wechat = require('co-wechat')


var WXCrypto = require('./wxcrypto')
var wx = new WXCrypto('LnrDkrmurYPe3yPgziYAdwaTuk2obn7s', 'eUbVREqK4jh9XHeYTZPHRTCzFz8PDWL2nieCZzganJv', appid_value)

router.post(`/wechat_open_platform/auth/callback`, async (ctx) => { // ticket 的微信推送
    ticket = ctx.request.body.xml.Encrypt[0]
    const xmlMsg = encrypt.decode(ticket)
    const rs = Parse2Data.parseMessage(xmlMsg)
    enctypeTicket = rs.xml.ComponentVerifyTicket[0]
    console.log(rs.xml)
    console.log(enctypeTicket)
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 5000)
    })
    ctx.response.body = 'success'
})

router.get(`/`, async (ctx) => { // 发送静态index资源
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./index.html')
})

router.get(`/agEAIopm81.txt`, async (ctx) => { // 发送静态txt
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./agEAIopm81.txt')
})

router.get(`/wechat_open_platform/submitac`, async (ctx) => { // 接收从前端页面跳转发来的authorization_code
    getServiceAccessToken(ctx.query.ac)
    ctx.response.body = 'success'
})


router.get(`/wechat_open_platform/preauthcode`, async (ctx) => { // 发送pre_auth_code
    ctx.response.body = pre_auth_code
})


function runMessage (id, tk) {
    let serveAccessToken = tk
    setInterval(async () => {
        serveAccessToken = await refleashSelfAccessToken(id)
        console.log('内部刷新token')
    }, 4.5 * 60 * 1000)

    router.post(`/wechat_open_platform/${id}/message`, async (ctx) => {
        console.log(serveAccessToken)
        const xml = ctx.request.body.xml.Encrypt[0]
        const data = encrypt.decode(xml)
        const dataParse = Parse2Data.parseMessage(data)

        const userId = dataParse.xml.FromUserName[0]
        const { name, unionid, picUrl, sex, all } = await sendTouser.getUseData(serveAccessToken, userId)

        ctx.response.body = 'success'

        console.log(unionid + '这是用户的unionid！！！')
        // 第二套代码
        /* const sleepStation = new SleepStation({nickName: name, unionId: unionid, picUrl, openId: userId, platFormId: id, serveAccessToken, sex})
        console.log(dataParse)
        sleepStation.logicCall({content: dataParse.xml.Content ? dataParse.xml.Content[0] : dataParse.xml.PicUrl ? dataParse.xml.PicUrl[0] : 'none', contentType: dataParse.xml.MsgType[0], mediaId: dataParse.xml.MediaId ? dataParse.xml.MediaId[0] : 'none' })
        return */

        // 裂变套题 逻辑
        if (!await sendTouser.limitTimes(unionid, 2)) { // 时间冲突
            console.log('时间冲突')
            return
        }
        const share = new Share(userId, serveAccessToken, id, unionid, name, picUrl, all)
        let ctn = dataParse.xml.Content ? dataParse.xml.Content[0] : 'none'
        if (await share.end(ctn)) {

        } else {
            share.start(ctn)
            share.submitHash(ctn)
            share.getReward(ctn)
        }








        const step = await sendTouser.getSesssion(unionid, userId, serveAccessToken) // 先查询用户哪个阶段了
        const subjRequire = await sendTouser.getUserSubject(unionid, dataParse.xml.Content) // 封装处理
        const result = await sendTouser.getSubject(subjRequire)
        // 第一套 回答题计算分数的
        if (!result) { // 如果没有题的情况下
            console.log('没有题')
            return
        }
        if (!await sendTouser.limitTimes(unionid, 1)) { // 时间冲突
            sendTouser.sendMessage(userId, '机会只有一次。\r\n希望你能好好珍惜。', serveAccessToken)
            return
        }
        for (let [index, i] of new Map( result.map( ( item, i ) => [ i, item ] ) )) {
            if (index === step) { // 符合当前阶段
                if (step === 0) { // 用户的第一次
                    const key = await sendTouser.getCorrespondence(subjRequire)
                    sendTouser.sendMessage(userId, JSON.stringify(key + 'rrrr rrrr' + i.title).replace(/rrrr/g, '\r\n').replace(/^\"|\"$/g, '').replace(/REPLACE/, name), serveAccessToken) // 发送是要发送当前题的 但是判断呢 就要判断上一个题目了~！
                    sendTouser.addUser(unionid, dataParse.xml.Content, name) // 第一次要添加用户
                    return
                }

                if (index === 0) {
                    break // 第一题不判断！
                }
                if (result[index - 1].type === 'common') {
                    if (result[index - 1].regulation.type === 'scope') {
                        if (parseInt(dataParse.xml.Content).toString() === 'NaN' || result[index - 1].msgType !== dataParse.xml.MsgType[0]) { // 错误输出
                            sendTouser.sendMessage(userId, result[index - 1].error,serveAccessToken)
                            return
                        }
                        if (parseInt(dataParse.xml.Content) >= result[index - 1].regulation.one && parseInt(dataParse.xml.Content) <= result[index - 1].regulation.two) {
                            // 这里是符合规则的 所以是可以插入的
                            sendTouser.sendMessage(userId, JSON.stringify(i.title).replace(/rrrr/g, '\r\n').replace(/^\"|\"$/g, ''), serveAccessToken) // 发送是要发送当前题的 但是判断呢 就要判断上一个题目了~！
                            sendTouser.saveSession(unionid, dataParse.xml.Content)// 存进数据库吧
                            return
                        } else { // 不符合规则
                            sendTouser.sendMessage(userId, result[index - 1].error,serveAccessToken)
                            return
                        }
                    }
                }

                break
            }

            if (step === result.length) { // 最后一步的操作
                const have = await sendTouser.hasLeaveMessage(unionid) // 查看有没有留言
                if (have) {
                    console.log('拥有最后一次留言')
                    break
                }
                if (i.type === 'correspondence') {
                    if (i.msgType !== dataParse.xml.MsgType[0] || dataParse.xml.MsgType[0].indexOf('收到不支持的消息类型，暂无法显示') >= 0) {
                        sendTouser.sendMessage(userId, i.error,serveAccessToken)
                    } else {
                        sendTouser.sendMessage(userId, '好了，我们已经把你的故事保存下来啦。', serveAccessToken)
                        sendTouser.saveLeaveMessage(unionid, dataParse.xml.Content)
                        const tag = await sendTouser.count(unionid, subjRequire)
                        sendTouser.getMediaPic(tag, serveAccessToken, userId, null/* 二维码链接 */, null/*平台id*/, 1/*类型*/, name, picUrl)
                    }
                }
            }
        }





    })
}
// runMessage('wxd99a3002f523a899')
async function getPlatFormId () {
    const dbData = await db.select('appid_platform')
    for (let i of dbData) {
        runMessage(i.appid, i.authorization_access_token)
    }
}

function getComponentAccessToken () {
    if (enctypeTicket) {
        console.log('拥有')
    } else {
        console.log('没有')
        return
    }
    const params = {
        component_appid: appid_value,
        component_appsecret: '1411ed5052d629cd7492fcc4d239dac8',
        component_verify_ticket: enctypeTicket || 'ticket@@@r1lV6LjqKuJQh6D7iGMSY6QX3m33fl2qRJjUgA4MmlDwfHeFhAeGpCn4qHfqJHHrSfZu2bq4O6JAyHKjemYrJA'
    }
    console.log(enctypeTicket)
    superAgent.post(`https://api.weixin.qq.com/cgi-bin/component/api_component_token`).send(params).end((err, res) => {
        if (err) {
            return
        }
        console.log(res.body.component_access_token)
        console.log(res.body)
        componentAccessToken = res.body.component_access_token
        superAgent.post(`https:// api.weixin.qq.com /cgi-bin/component/api_authorizer_token?component_access_token=${componentAccessToken}`).send(params).end((err, res) => {

        })
        getPreAuthCode(res.body.component_access_token)
    })
}

function getPreAuthCode (cat) {
    const params = {
        'component_appid': appid_value
    }
    superAgent.post(`https://api.weixin.qq.com/cgi-bin/component/api_create_preauthcode?component_access_token=${cat}`).send(params).end((err, res) => {
        console.log('每九分钟获取一次预授权码')
        console.log(res.body)
        console.log(res.body.pre_auth_code)
        pre_auth_code = res.body.pre_auth_code
    })
}

setInterval(getComponentAccessToken, 9 * 60 * 1000)
setInterval(refleashAuthorizerAccessToken, 10 * 60 * 1000) // 60分钟刷新一次哦 5:58
getPlatFormId() // 这个是询问公众号 启动
// getComponentAccessToken()
app.listen('8080')


function getServiceAccessToken (ac) {
    let sdas = componentAccessToken
    // sdas = '17_wTs-O5nTKAhVGeAJatblwPWVRjn1geo6WWYw0hvVL-u5Z8b6eafFJFeFMDAgzXxLcBQZkgZ59tT4-rfs0W-L7plemcBE23vlKNLq7jZRJocroXlzozNqYMH0qMSv5zAc41qiZ1qnz3IzmBD6BNQfAGAXJM'
    if (!componentAccessToken) {
        console.log('服务器还没有满9分钟 或者猜中ticket时间~  无效本次接入')
        return
    }
    console.log('??')
    superAgent.post(`https://api.weixin.qq.com/cgi-bin/component/api_query_auth?component_access_token=${sdas}`).send({
        "component_appid": appid_value ,
        "authorization_code": ac // 'queryauthcode@@@Rbk3GSiOB8WReuyRDwwXQJzWusqmZYyKW5xfvnPi3RTttMQ3XVOjilS18YUZ4hGtBiZdB-qtShMaBpDQHrF5cg'  // refreshtoken@@@Xf_pWjheyA6S72KhSkcLwsBazP_W6_FlSz36qT5VD1g
    }).end(async (err, res) => {
        console.log(res.body)
        if (res.body.hasOwnProperty('errcode')) {
            console.log('无效的authorization_code')
            return
        }

        serveAccessToken = res.body.authorization_info.authorizer_access_token
        savePreAccessToken = res.body.authorization_info.authorizer_refresh_token
        await db.delete(`appid_platform`, {
            appid: `${res.body.authorization_info.authorizer_appid}`
        }).then((res) => {
            console.log(res)
        })

        // 获取qrcode_url
        const platFormInfo = await new Promise((resolve) => {
            superAgent.post(`https://api.weixin.qq.com/cgi-bin/component/api_get_authorizer_info?component_access_token=${sdas}`).send({component_appid: appid_value, authorizer_appid: res.body.authorization_info.authorizer_appid}).then((err, res) => {
                resolve(err.body.authorizer_info)
                console.log('获取qrcodeurl' + err.body.authorizer_info.qrcode_url)
            })
        })

        const dbData = await db.select('appid_platform')
        let w = true
        for (let i of dbData) {
            if (i.appid === res.body.authorization_info.authorizer_appid) {
                w = false
            }
        }
        if (w) {
            runMessage(res.body.authorization_info.authorizer_appid, res.body.authorization_info.authorizer_access_token)
        }

        await db.insert(`appid_platform`, {
            appid: `${res.body.authorization_info.authorizer_appid}`,
            authorization_code: res.body.authorization_info.authorizer_refresh_token,
            authorization_access_token: res.body.authorization_info.authorizer_access_token,
            update: new Date().getTime(),
            qrcode_url: platFormInfo.qrcode_url,
            name: platFormInfo.principal_name
        })

    })
}

async function refleashSelfAccessToken (platFormId) {
    const data = await db.select('appid_platform', {
        where: {
            appid: platFormId
        }
    })
    return data[0].authorization_access_token
}

async function refleashAuthorizerAccessToken () {
    const getData = await db.select('appid_platform')
    let sdas = componentAccessToken
    if (!sdas) {
        return
    }
    for (let i of getData) {
        const mintime = new Date().getTime() - parseInt(i.update)
        const time = 1000 * 60 * 60
        console.log('??')
        if (mintime <= time) {
            console.log(mintime)
            console.log(`这个appid${i.appid}还没有到过期时间，无需更新`)
            return
        } else {
            console.log('update~~~')
            const params = {
                component_appid: appid_value,
                authorizer_appid: i.appid, // 授权方的appid
                authorizer_refresh_token: i.authorization_code // 授权方的刷新令牌
            }
            superAgent.post(`https://api.weixin.qq.com/cgi-bin/component/api_authorizer_token?component_access_token=${sdas}`).send(params).end(async (err, res) => {
                console.log(res.body)
                // res.body.authorizer_access_token
                // res.body.authorizer_refresh_token // 刷新码 这里就要去更数据库拉
                if (res.body.hasOwnProperty('errcode')) {
                    console.log('获取刷新码的时候错误')
                    return
                }

                await db.update('appid_platform', { authorization_code: res.body.authorizer_refresh_token, authorization_access_token: res.body.authorizer_access_token }, { where: { appid: i.appid } })

                /* await db.delete(`appid_platform`, {
                    appid: i.appid
                }).then((res) => {
                    console.log(res)
                })
                db.insert(`appid_platform`, {
                    appid: i.appid,
                    authorization_code: res.body.authorizer_refresh_token,
                    authorization_access_token: res.body.authorizer_access_token,
                    update: new Date().getTime()
                }) */
            })
        }
    }

}

// getServiceAccessToken()
