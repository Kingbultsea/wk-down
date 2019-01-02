const Koa = require('koa')
const Router = require('koa-router')
const xmlParser = require('koa-xml-body')
const bodyParser = require('koa-bodyparser')
const fs = require('fs')
const superAgent = require('superagent')

const rds = require('./DataBase.js')

const Parse2Data = require('./Parse2Data.js')
const Parse2XML = require('./Parse2XML.js')
const Encrypt = require('./Encrypt.js')

const app = new Koa()
const router = new Router()

const appid_value = 'wxbaf03b7acb3c993a'

app.use(xmlParser())
app.use(bodyParser())
app.use(router.routes())

let ticket = 'glC91P1tjzm0GybMWqhztjfL+QR0AI7r6c0k0Jb+4ZFfLuTzrg68T2JhaJznGTML4+Q+qFbr68QUX2HbvCTuoc8vhRxmD/gRWpKY+DZ1k0cDTIYeJ9HlGi96oSznsFqnh4xMtsaaUmyZsndJ6e0qZAkOB5aJN56NQEwPsKAtJE3RsELB7XvY2pUFxrichAxC57XXWfDBz/8bw3g2eHQRE2Wz7t1y3/aIvKpKuk2ilo//WIlWVwI75EbuaUBkJjUFvRRJptaZFMCy+ox7G10DyOl6g+/uBva+bqMm5pZCcRqriLgDeWmqBXu1QkMVvYTYYZpVZUMHPYT5rzkAEe0AhOBD6tgtIiD8p/SDpl0OoyVZpifvjxPPwWq/p528DlRZKmqFnveesj3ijcfTS1WEiiPfxBJpOE0jS39MKQd16kNIlasFfYU07rA6jyR4R3gYYpM26hLxbebNrAE6EinE0Q==' // component_verify_ticket
let enctypeTicket = null
let pre_auth_code = null
let componentAccessToken = '17_WZXFNqOF-OoUVL3NOSm-LFvfMkmNUa7PtnRfCmi3flO12aw82p_t7O4C6I7ZBWynRG6Z2scAA_-ssGctigqIxMsIMzinOIjbD0uz8b48XmF5P_0a8L3VfhK01sCK9NQIGIp7DABp1ANnfC7HSLVfAJACVF'
let serveAccessToken = '17_vfPDrZh-8vJPQxZoRy35N3ENDl2G00lz9hZjg9-bR_jrz47xXUMepoWjCGkjQQbh8iFb3TWpq8s4ySrZpNXCqlSiB3f-afBQQaU8ICCdQZUXw1nhjhy66AbCxdkWJ7fKbCwm0M4pl_svx_TfIWEcAGDOCK' // 这是调用第三方的时候 需要的
let savePreAccessToken = 'refreshtoken@@@Xf_pWjheyA6S72KhSkcLwsBazP_W6_FlSz36qT5VD1g' // 第一次的时候跳转Url 可以获得 以后就需要refleash了
const encrypt = new Encrypt({
    appId: appid_value,
    encodingAESKey: 'eUbVREqK4jh9XHeYTZPHRTCzFz8PDWL2nieCZzganJv',
    token: 'LnrDkrmurYPe3yPgziYAdwaTuk2obn7s'
})

const wechat = require('co-wechat');

const config = {
    token: 'LnrDkrmurYPe3yPgziYAdwaTuk2obn7s',
    appid:  appid_value,
    encodingAESKey: 'eUbVREqK4jh9XHeYTZPHRTCzFz8PDWL2nieCZzganJv'
};

var WXCrypto = require('./wxcrypto');
var wx = new WXCrypto('LnrDkrmurYPe3yPgziYAdwaTuk2obn7s', 'eUbVREqK4jh9XHeYTZPHRTCzFz8PDWL2nieCZzganJv', appid_value);





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
    console.log(ctx.query)
    ctx.response.body = 'success'
})


router.get(`/wechat_open_platform/preauthcode`, async (ctx) => { // 发送pre_auth_code
    ctx.response.body = pre_auth_code
})


router.post(`/wechat_open_platform/wxd99a3002f523a899/message`, async (ctx) => {
    const xml = ctx.request.body.xml.Encrypt[0]
    const data = encrypt.decode(xml)
    const dataParse = Parse2Data.parseMessage(data)
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
    // componentAccessToken
    const serviceData = {
        'touser': dataParse.xml.FromUserName[0],
        'msgtype': 'text',
        'text':
            {
                'content': 'Hello World'
            },
        'appid': 'wxbaf03b7acb3c993a'
    }
    console.log(serviceData)
    console.log(componentAccessToken)
    console.log('shangm nagerwjiushi')
    superAgent.post(`https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=${serveAccessToken}`).send(serviceData).end((err, res) => {
        console.log('???')
        console.log(res.body)
    })

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
        const sendToData = parse2XML.messageAndPic(dataParse.xml.FromUserName, [{title: 'halo', desc: 'config', picUrl: 'http://wx4.sinaimg.cn/mw690/006Zdy2vgy1fwqjcett54j30go0i40th.jpg'}], dataParse.xml.CreateTime)
        console.log(sendToData)
        let [o, t] = wx.encrypt(sendToData, ctx.query.timestamp, ctx.query.nonce)
        err = o
        encryptedXML = t
    } else {
        encryptedXML = 'success'
    }

    console.log(err)

    ctx.response.type = 'xml'
    ctx.response.body = encryptedXML
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

function getServiceAccessToken () {
    const sdas = componentAccessToken
    if (!componentAccessToken) {
        return
    }
    superAgent.post(`https://api.weixin.qq.com/cgi-bin/component/api_query_auth?component_access_token=${sdas}`).send({
        "component_appid": appid_value ,
        "authorization_code": savePreAccessToken // 'queryauthcode@@@Rbk3GSiOB8WReuyRDwwXQJzWusqmZYyKW5xfvnPi3RTttMQ3XVOjilS18YUZ4hGtBiZdB-qtShMaBpDQHrF5cg'  // refreshtoken@@@Xf_pWjheyA6S72KhSkcLwsBazP_W6_FlSz36qT5VD1g
    }).end((err, res) => {
        console.log(res.body)
        serveAccessToken = res.body.authorization_info.authorizer_access_token
        savePreAccessToken = res.body.authorization_info.authorizer_refresh_token
    })
}
