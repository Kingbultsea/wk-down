const Koa = require('koa')
const Router = require('koa-router')
const xmlParser = require('koa-xml-body')
const bodyParser = require('koa-bodyparser')
const fs = require('fs')
const superAgent = require('superagent')

const db = require('./DataBase.js')

const Parse2Data = require('./Parse2Data.js')
const Parse2XML = require('./Parse2XML.js')
const Encrypt = require('./Encrypt.js')
const sendTouser = require('./sendTouser.js')

const app = new Koa()
const router = new Router()

const appid_value = 'wxbaf03b7acb3c993a'



app.use(xmlParser())
app.use(bodyParser())
app.use(router.routes())

let ticket = 'glC91P1tjzm0GybMWqhztjfL+QR0AI7r6c0k0Jb+4ZFfLuTzrg68T2JhaJznGTML4+Q+qFbr68QUX2HbvCTuoc8vhRxmD/gRWpKY+DZ1k0cDTIYeJ9HlGi96oSznsFqnh4xMtsaaUmyZsndJ6e0qZAkOB5aJN56NQEwPsKAtJE3RsELB7XvY2pUFxrichAxC57XXWfDBz/8bw3g2eHQRE2Wz7t1y3/aIvKpKuk2ilo//WIlWVwI75EbuaUBkJjUFvRRJptaZFMCy+ox7G10DyOl6g+/uBva+bqMm5pZCcRqriLgDeWmqBXu1QkMVvYTYYZpVZUMHPYT5rzkAEe0AhOBD6tgtIiD8p/SDpl0OoyVZpifvjxPPwWq/p528DlRZKmqFnveesj3ijcfTS1WEiiPfxBJpOE0jS39MKQd16kNIlasFfYU07rA6jyR4R3gYYpM26hLxbebNrAE6EinE0Q==' // component_verify_ticket
let enctypeTicket = null
let pre_auth_code = null
let componentAccessToken = '17_9LcclBuiv_VkZq9hEIXwaS7GbT7tTuaPkYJnQs_74bO2k8gufyxPvXkcPVR66kRFyQhjNP8U6JzAwlbUvmxVGNBpHxJXCCasvB84_r5Hv1AeW1qkUhkPVrofIHSlHyRw0ks_e6MHcL8xSfBaSTVdAEABCE'
let serveAccessToken = '17_abXWDUBgSbfLNoRdJJ1yVXMvDZa9sDBsl1loyoh0F4vUzlxplu4Z4w3vh5Siqn_VGCoD4bE3N1Tv1L6Qtn5JYmgKuMTn2CXgs_XTPqLwlBAznzq5Qa6aGHNcnr0z21jyo4qdFCb9gnY03J0KPXQeAIDEMF' // 这是调用第三方的时候 需要的
let savePreAccessToken = 'refreshtoken@@@Xf_pWjheyA6S72KhSkcLwsBazP_W6_FlSz36qT5VD1g' // 第一次的时候跳转Url 可以获得 以后就需要refleash了
const encrypt = new Encrypt({
    appId: appid_value,
    encodingAESKey: 'eUbVREqK4jh9XHeYTZPHRTCzFz8PDWL2nieCZzganJv',
    token: 'LnrDkrmurYPe3yPgziYAdwaTuk2obn7s'
})

const wechat = require('co-wechat')

const config = {
    token: 'LnrDkrmurYPe3yPgziYAdwaTuk2obn7s',
    appid:  appid_value,
    encodingAESKey: 'eUbVREqK4jh9XHeYTZPHRTCzFz8PDWL2nieCZzganJv'
};

var WXCrypto = require('./wxcrypto')
var wx = new WXCrypto('LnrDkrmurYPe3yPgziYAdwaTuk2obn7s', 'eUbVREqK4jh9XHeYTZPHRTCzFz8PDWL2nieCZzganJv', appid_value)


router.post(`/wechat_open_platform/auth/callback`, async (ctx) => { // ticket 的微信推送
    ticket = ctx.request.body.xml.Encrypt[0]
    const xmlMsg = encrypt.decode(ticket)
    const rs = Parse2Data.parseMessage(xmlMsg)
    enctypeTicket = rs.xml.ComponentVerifyTicket[0]
    console.log(enctypeTicket)
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 5000)
    })
    console.log('twice')
    ctx.response.body = 'success'
})

router.get(`/`, async (ctx) => { // 发送静态index资源
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./index.html')
})

router.get(`/wechat_open_platform/submitac`, async (ctx) => { // 接收从前端页面跳转发来的authorization_code
    getServiceAccessToken(ctx.query.ac)
    ctx.response.body = 'success'
})


router.get(`/wechat_open_platform/preauthcode`, async (ctx) => { // 发送pre_auth_code
    ctx.response.body = pre_auth_code
})


router.post(`/wechat_open_platform/wxd99a3002f523a899/message`, async (ctx) => {
    const xml = ctx.request.body.xml.Encrypt[0]
    const data = encrypt.decode(xml)
    const dataParse = Parse2Data.parseMessage(data)
    const userId = dataParse.xml.FromUserName[0]
    // dataParse.xml.CreateTime
    // dataParse.toUserName  dataParse.FromUserName dataParse.CreateTime  dataParse.MsgType dataParse.Content
    /* 首先假如我是拿到那个id了 那么我现在就要把id给存在数据库了...  就用一个数据来记录吧[1,1,1,1,1,1] 初始化是 0 00 0 0 0  这个0 0 00 0的个数是
     * 根据题目的数量而变化的 这个也简单
     * 那说一下路程： 1. 用户访问 假如用户正确选择中题目的话 ctx.body = 'xml的相关题目'  然后这个时候记录用户的openid 还有选择的题目 2.用户回答问题 这个时候调用用户的openid 提取数据库的数据
     * 然后再次根据题目 还有题号出下一题 3. 最后假如判断出该题目的题数和回答数量相等 那么就直接得出结果 返回结果 结果需要用node canvas处理 我记得paperjs也是可以进行处理的
     * 返回完结果后 就根据openid 删除该openid 即使用户重新来过
     *
     *
     */
    // 查询题目库 没有就返回回复false 什么的
    const step = await sendTouser.getSesssion(userId) // 先查询用户哪个阶段了
    const subjRequire = await sendTouser.getUserSubject(userId, dataParse.xml.Content)
    const result = await sendTouser.getSubject(subjRequire)
    console.log(result)
    if (!result) {
        console.log("/???sdasdas")
        ctx.response.body = 'success'
        return
    }
    console.log('gogo')
    for (let [index, i] of new Map( result.map( ( item, i ) => [ i, item ] ) )) {
        console.log(step + '-- 下面 -- 是index' + index)
        if (index === step) { // 符合当前阶段
            if (step === 0) {
                const key = await sendTouser.getCorrespondence(subjRequire)
                console.log(key)
                console.log('上面是Key哦')
                await sendTouser.sendMessage(userId, key, serveAccessToken)
                await sendTouser.addUser(userId, dataParse.xml.Content) // 第一次要添加用户
                await sendTouser.sendMessage(userId, i.title, serveAccessToken) // 发送是要发送当前题的 但是判断呢 就要判断上一个题目了~！
            }

            if (index === 0) {
                break // 第一题不判断！
            }
            if (result[index - 1].type === 'common') {
                if (result[index - 1].regulation.type === 'scope') {
                    if (parseInt(dataParse.xml.Content).toString() === 'NaN' || result[index - 1].msgType !== dataParse.xml.MsgType[0]) { // 错误输出
                        await sendTouser.sendMessage(userId, result[index - 1].error,serveAccessToken)
                        break
                    }
                    if (parseInt(dataParse.xml.Content) >= result[index - 1].regulation.one && parseInt(dataParse.xml.Content) <= result[index - 1].regulation.two) {
                        // 这里是符合规则的 所以是可以插入的
                        if (step === 0) { // 第一阶段应该insert 进用户
                           // await sendTouser.addUser(userId, dataParse.xml.Content)
                        } else {
                            // await sendTouser.sendMessage(userId, result[index + 1].title, serveAccessToken) // 发送题目
                            await sendTouser.sendMessage(userId, i.title, serveAccessToken) // 发送是要发送当前题的 但是判断呢 就要判断上一个题目了~！
                            await sendTouser.saveSession(userId, dataParse.xml.Content)// 存进数据库吧
                        }
                        break
                    } else {
                        await sendTouser.sendMessage(userId, result[index - 1].error,serveAccessToken)
                        break
                    }
                }
            }
            if (result[index + 1].type === 'correspondence') {
                if (result[index + 1].msgtype !== dataParse.xml.MsgType[0] || dataParse.xml.MsgType[0].indexOf('收到不支持的消息类型，暂无法显示') >= 0) {
                    await sendTouser.sendMessage(userId, result[index + 1].error,serveAccessToken)
                }
            }
            break
        } else {

        }
    }


    const serviceData = {
        'touser': dataParse.xml.FromUserName[0],
        'msgtype': 'text',
        'text':
            {
                'content': 'Hello World'
            },
        'appid': 'wxbaf03b7acb3c993a' // appid_value
    }
    console.log(serviceData)
    console.log(componentAccessToken)
    console.log('shangm nagerwjiushi')
    /* superAgent.post(`https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=${serveAccessToken}`).send(serviceData).end((err, res) => {
        console.log('???')
        console.log(res.body)
    }) */

    const msgType = dataParse.xml.MsgType[0]
    const parse2XML = new Parse2XML(dataParse.xml.ToUserName)
    let err = null
    let encryptedXML = null
    console.log(dataParse)
    if (msgType === 'text') {
        const sendToData = parse2XML.message(dataParse.xml.FromUserName, dataParse.xml.Content, dataParse.xml.CreateTime)
        let [o, t] = wx.encrypt(sendToData, ctx.query.timestamp, ctx.query.nonce)
        err = o
        encryptedXML = t
    } else
    if (msgType === 'image') {
        /* const sendToData = parse2XML.messageAndPic(dataParse.xml.FromUserName, [{title: 'halo', desc: 'config', picUrl: 'http://wx4.sinaimg.cn/mw690/006Zdy2vgy1fwqjcett54j30go0i40th.jpg'}], dataParse.xml.CreateTime)
        console.log(sendToData)
        let [o, t] = wx.encrypt(sendToData, ctx.query.timestamp, ctx.query.nonce)
        err = o
        encryptedXML = t */
        encryptedXML = 'success'
    } else {
        encryptedXML = 'success'
    }

    console.log(err)

    ctx.response.type = 'xml'
    ctx.response.body = 'success' // encryptedXML
})

function getComponentAccessToken () {
    if (enctypeTicket) {
        console.log('拥有')
    } else {
        console.log('没有')
    }
    const params = {
        component_appid: appid_value,
        component_appsecret: '1411ed5052d629cd7492fcc4d239dac8',
        component_verify_ticket: enctypeTicket || 'ticket@@@r1lV6LjqKuJQh6D7iGMSY6QX3m33fl2qRJjUgA4MmlDwfHeFhAeGpCn4qHfqJHHrSfZu2bq4O6JAyHKjemYrJA'
    }
    console.log(enctypeTicket)
    superAgent.post(`https://api.weixin.qq.com/cgi-bin/component/api_component_token`).send(params).end((err, res) => {
        console.log('??token')
        console.log(res.body)
        console.log(res.body.component_access_token)
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
        console.log(res.body.pre_auth_code)
        pre_auth_code = res.body.pre_auth_code
    })
}

setInterval(getComponentAccessToken, 9 * 60 * 1000)
// getComponentAccessToken()
app.listen('8080')

function getServiceAccessToken (ac) {
    let sdas = componentAccessToken
    sdas = '17_P8FZ3WYsL_3_1mxMatblwPWVRjn1geo6WWYw0ktGtSNm51VP21JCPvtgSAoK0HpqqQXu-GTuJB1Y37hawU24IaqauXm56CNpdecVAq6T_WAXktcCWiuQ441P7FvHYoy3BPbHJvzgPhjYLPQaQSWjAIAXZD'
    if (!componentAccessToken) {
        console.log('服务器还没有满9分钟 或者猜中ticket时间~  无效本次接入')
        return
    }
    console.log('??')
    superAgent.post(`https://api.weixin.qq.com/cgi-bin/component/api_query_auth?component_access_token=${sdas}`).send({
        "component_appid": appid_value ,
        "authorization_code": 'queryauthcode@@@kiUFvBpAw13w-zwE0iin9NdwrtJUoR-u9l5GrwS3E6iktM7JzIMkr1nOdVBEbJ-nxRx0f1Q8HugDngAQ6FDsvA'//ac // 'queryauthcode@@@Rbk3GSiOB8WReuyRDwwXQJzWusqmZYyKW5xfvnPi3RTttMQ3XVOjilS18YUZ4hGtBiZdB-qtShMaBpDQHrF5cg'  // refreshtoken@@@Xf_pWjheyA6S72KhSkcLwsBazP_W6_FlSz36qT5VD1g
    }).end(async (err, res) => {
        console.log(res.body)
        if (!res.body.authorization_info.authorizer_access_token) {
            return
        }
        serveAccessToken = res.body.authorization_info.authorizer_access_token
        savePreAccessToken = res.body.authorization_info.authorizer_refresh_token
        await db.delete(`appid_platform`, {
            appid: `${res.body.authorization_info.authorizer_appid}`
        }).then((res) => {
            console.log(res)
        })
        db.insert(`appid_platform`, {
            appid: `${res.body.authorization_info.authorizer_appid}`,
            authorization_code: res.body.authorization_info.authorizer_refresh_token,
            authorization_access_token: res.body.authorization_info.authorizer_access_token,
            update: new Date().getTime()
        })
        console.log('???')
    })
}

async function refleashAuthorizerAccessToken () {
    const getData = await db.select('appid_platform')
    let sdas = componentAccessToken
    sdas = '17_P8FZ3WYsL_3_1mxMatblwPWVRjn1geo6WWYw0ktGtSNm51VP21JCPvtgSAoK0HpqqQXu-GTuJB1Y37hawU24IaqauXm56CNpdecVAq6T_WAXktcCWiuQ441P7FvHYoy3BPbHJvzgPhjYLPQaQSWjAIAXZD'
    for (let i of getData) {
        const mintime = new Date().getTime() - parseInt(i.update)
        const time = 1// 1000 * 60 * 60
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
                authorizer_refresh_token: 'queryauthcode@@@kiUFvBpAw13w-zwE0iin9NdwrtJUoR-u9l5GrwS3E6iktM7JzIMkr1nOdVBEbJ-nxRx0f1Q8HugDngAQ6FDsvA' // 授权方的刷新令牌
            }
            superAgent.post(`https://api.weixin.qq.com/cgi-bin/component/api_authorizer_token?component_access_token=${sdas}`).send(params).end(async (err, res) => {
                console.log(res.body)
                // res.body.authorizer_access_token
                // res.body.authorizer_refresh_token // 刷新码 这里就要去更数据库拉
                if (res.body.errcode) {
                    console.log('??asdasdasdad')
                    return
                }
                await db.delete(`appid_platform`, {
                    appid: i.appid
                }).then((res) => {
                    console.log(res)
                })
                db.insert(`appid_platform`, {
                    appid: i.appid,
                    authorization_code: res.body.authorizer_refresh_token,
                    authorization_access_token: res.body.authorizer_access_token,
                    update: new Date().getTime()
                })
            })
        }
    }

}
// refleashAuthorizerAccessToken()
// getServiceAccessToken()
