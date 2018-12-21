class Parse2XML {
    constructor (fromUser) {
        this.fromUser = fromUser
    }

    message (toUser, mesg = '') {
        const timeStamp = Math.floor(Date.now() / 1000)
        return `<xml>
                    <ToUserName>< ![CDATA[${toUser}] ]></ToUserName>
                    <FromUserName>< ![CDATA[${this.fromUser}] ]></FromUserName>
                    <CreateTime>${timeStamp}</CreateTime>
                    <MsgType>< ![CDATA[text] ]></MsgType>
                    <Content>< ![CDATA[${mesg}] ]></Content>
                </xml>`.trim()
    }

    messageAndPic (toUser, list = [{title: '', desc: '', picUrl: ''},{}]) {
        const timeStamp = Math.floor(Date.now() / 1000) // 这里我也想封装起来... 因为万一错了呢？ 岂不是浪费几分钟维护？ 但是好像需要外部传才好.. emm...
        let itemsData = null
        for (let i of list) {
            itemsData += `<item>
                              <Title>< ![CDATA[${i.title}] ]></Title>
                              <Description>< ![CDATA[${i.desc}] ]></Description>
                              <PicUrl>< ![CDATA[${i.picUrl}] ]></PicUrl>
                          </item>`.trim()
        }
        return `<xml>
                    <ToUserName>< ![CDATA[${toUser}] ]></ToUserName>
                    <FromUserName>< ![CDATA[${this.fromUser}] ]></FromUserName>
                    <CreateTime>${timeStamp}</CreateTime>
                    <MsgType>< ![CDATA[news] ]></MsgType>
                    <ArticleCount>1</ArticleCount>
                    <Articles>
                        ${itemsData}
                    </Articles>
                </xml>`.trim()
    }
}

module.exports = Parse2XML
