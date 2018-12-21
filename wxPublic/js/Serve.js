const Koa = require('koa')
const Router = require('koa-router')
const xmlParser = require('koa-xml-body')
const bodyParser = require('koa-bodyparser')

const rds = require('./DataBase.js')

const Parse2Data = require('./Parse2Data.js')
const Parse2XML = require('./Parse2XML.js')

const app = new Koa()
const router = new Router()

app.use(xmlParser())
app.use(bodyParser())
app.use(router.routes())

router.get('/vx', async (ctx) => {
    const xml = ctx.request.body.xml
    const xmlParse = Parse2Data.parseMessage(xml)
    console.log(xml)
    console.log(xmlParse)
    /* 首先假如我是拿到那个id了 那么我现在就要把id给存在数据库了...  就用一个数据来记录吧[1,1,1,1,1,1] 初始化是 0 00 0 0 0  这个0 0 00 0的个数是
     * 根据题目的数量而变化的 这个也简单
     * 那说一下路程： 1. 用户访问 假如用户正确选择中题目的话 ctx.body = 'xml的相关题目'  然后这个时候记录用户的openid 还有选择的题目 2.用户回答问题 这个时候调用用户的openid 提取数据库的数据
     * 然后再次根据题目 还有题号出下一题 3. 最后假如判断出该题目的题数和回答数量相等 那么就直接得出结果 返回结果 结果需要用node canvas处理 我记得paperjs也是可以进行处理的
     * 返回完结果后 就根据openid 删除该openid 即使用户重新来过
     *
     *
     */
    const parse2XML = new Parse2XML('我的openid')
    ctx.body = parse2XML.message('用户的openid', '内容message')
})

app.listen('8083')
