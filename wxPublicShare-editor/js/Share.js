const db = require('./DataBase.js')
const db2 = require('./DataBase2')
const sendTouser = require('./sendTouser.js')

class Share {
    constructor (userId, accessToken, platFormId, unionid, nickName, picUrl) {
        this.userId = userId
        this.unionId = unionid
        this.nickName = nickName
        this.picUrl = picUrl

        this.accessToken = accessToken
        this.platFormId = platFormId

        this.maxPeopleCount = 6
        this.endTime = 1549987170
        this.updateMessageTimeStamp()
    }

    // data_message   key || '裂变'  res_list || ['喵喵喵', '喵喵喵2']   max_people_count  邀请人数达到奖品
    async start (content) {
        const data = await db.select('data_message', {
            where: {
                key: content
            }
        })

        if (data.length === 0) return

        this.maxPeopleCount = data[0].max_people_count
        this.endTime = data[0].end_time

        const resList = eval('(' + data[0].res_list + ')') // 发送裂变的相关句子
        for (let i of resList) {
            sendTouser.sendMessage(this.userId, i, this.accessToken)
        }

        await this.addOwner('old') // 添加用户进owner 这部分我是考虑到 用户是通过直接参与任务的 就不需要邀请了...
        const hash = await this.getOwnerHash()  // 获取用户的hash
        const qrCode = await this.getQRCodeUrl() // 获取平台的二维码url
        console.log(this.accessToken)
        this.annotation(`☟您已成功参与【小睡眠-小年】活动。\r\n\r\n`) // 活动说明
        sendTouser.getMediaPic(hash, this.accessToken, this.userId, qrCode, this.platFormId, 2, this.nickName, this.picUrl) // 发送用户海报
    }

    // owner  id  user_name   hash   accept_hash invitation_count || 0  update
    async addOwner (type = 'null') {
        const data = await db.select('owner', {
            where: {
                unionid: this.unionId
            }
        })

        if (data.length > 0) {
            console.log('用户已经有相关信息了 无需添加')
            return
        }

        const judge = await this.judgeOldUser()
        let accept_hash = type
        if (judge) {
            accept_hash = 'old'
        }

        const hash = await this.randomString(4)
        await db.insert(`owner`, {
            unionid: this.unionId,
            user_name: this.nickName,
            hash,
            accept_hash: accept_hash,
            invitation_count: 0,
            count_update: new Date().getTime(),
            update: new Date().getTime(),
            openid: this.userId
        })
    }

    async getOwnerHash () {
        const data = await db.select('owner', {
            where: {
                unionid: this.unionId
            }
        })

        return data[0].hash
    }

    async submitHash (content) {
        const data = await db.select('owner', {
            where: {
                hash: content
            }
        })

        if (data.length === 0) {
            console.log(`没有该hash${content}`)
            return
        }

        await this.addOwner() // 性能优化

        // 做一个判断 判断用户的accept_hash
        const userData = await db.select('owner', {
            where: {
                unionid: this.unionId
            }
        })

        const originData = await db.select('owner', {
            where: {
                hash: userData[0].accept_hash
            }
        })

        const acceptHash = userData[0].accept_hash
        console.log(acceptHash)
        if (acceptHash !== 'null') {
            if (acceptHash === 'old') {
                return
            }

            console.log('此邀请码你已经使用过了')

            if (originData[0].user_name === data[0].user_name) {
                this.annotation(`${originData[0].user_name}用户已成功邀请您参与【小睡眠-小年】活动。\r\n \r\n`)
                return
            }
            this.annotation(`${originData[0].user_name}用户已成功邀请您参与【小睡眠-小年】活动。由于每个用户仅能邀请从未关注过【小睡眠】的新用户，${data[0].user_name}用户邀请失败。\r\n \r\n`)
            return
        }

        if (userData[0].hash === content) {
            console.log('不能自己邀请自己哦')
            sendTouser.sendMessage(this.userId, '不能自己邀请自己哦~', this.accessToken)
            return
        }

        this.annotation(`${data[0].user_name}用户邀请您参与【小睡眠-小年】活动。\r\n\r\n`)

        // 需要去更新那位用户的invitation_count
        db.update('owner',
            {
                invitation_count: parseInt(data[0].invitation_count) + 1 ,
                count_update: new Date().getTime()
            },
            { where: { unionid: data[0].unionid } })

        db.update('owner',
            {
                accept_hash: content
            },
            { where: { unionid: this.unionId } })

    }

    async getQRCodeUrl () {
        const data = await db.select('appid_platform', {
            where: {
                appid: this.platFormId
            }
        })
        return data[0].qrcode_url
    }

    async getReward (content) {
        let ranking = null

        if (content !== '邀请数') {
            return
        }

        const platFormdata = await db.select('data_message')

        // 用户的排名得分
        const data = await db.select('owner', {
            where: {
                unionid: this.unionId
            }
        })

        console.log(this.unionId)

        if (data.length === 0) {
            console.log('用户还没有接受任务')
            return
        }

        const sortData = await db.select('owner', {
                orders: [['invitation_count', 'desc'], ['count_update', 'asc']]
        })
        console.log(sortData)
        for (let i = 0; i < sortData.length; i++) {
            if (sortData[i].unionid === this.unionId) {
                ranking = i + 1
                break
            }
        }

        if (parseInt(data[0].invitation_count) >= parseInt(platFormdata[0].max_people_count)) {
            // 兑换码这里填写
            const conversion_code = await this.getConversionCode()
            console.log(conversion_code)
            sendTouser.sendMessage(this.userId, `您已成功邀请${data[0].invitation_count}位用户，邀请数排名第${ranking}位。\r\n \r\n恭喜您成功解锁【小睡眠15天会员】。\r\n邀请排名前10可获得价值58元的热敷眼罩。\r\n活动截止至2019年2月12日24:00。\r\n \r\n您的15天会员兑换码为：${conversion_code}\r\n会员兑换说明：\r\n1.会员有效期为15天，兑换需在一周内进行兑换，逾期失效。\r\n2.此次活动，不允许兑换多次。\r\n3.兑换步骤：\r\n（1）打开【小睡眠App】；\r\n（2）点击左上角【头像按钮】，点击【会员中心】；\r\n（3）点击右上角【…】，点击【礼品中心】，输入“兑换码”即可。`, this.accessToken)
        } else {
            sendTouser.sendMessage(this.userId, `您已成功邀请${data[0].invitation_count}位用户，邀请数排名第${ranking}位。\r\n \r\n再邀请${parseInt(platFormdata[0].max_people_count) - parseInt(data[0].invitation_count)}位，就能成功解锁【小睡眠15天会员】。\r\n邀请排名前10可获得价值58元的热敷眼罩。\r\n活动截止至2019年2月12日24:00。`, this.accessToken)
        }

    }

    async annotation (content = null) {
        const platFormdata = await db.select('data_message')

        const data = await db.select('owner', {
            where: {
                unionid: this.unionId
            }
        })

        if (content) {
            sendTouser.sendMessage(this.userId, `${content}您的邀请码为：${data[0].hash}\r\n\ \r\n活动说明：\r\n1.成功邀请${platFormdata[0].max_people_count}位新用户，即可解锁【小睡眠15天会员】。\r\n2.邀请排名前10的用户，可以获得价值58元的热敷眼罩。\r\n3.回复【邀请数】可以实时查看自己参与活动的情况。\r\n4.本活动截止至2019年2月12日24:00。`, this.accessToken)
        } else {
            sendTouser.sendMessage(this.userId, `您的邀请码为：${data[0].hash}\r\n\ \r\n活动说明：\r\n1.成功邀请${platFormdata[0].max_people_count}位新用户，即可解锁【小睡眠15天会员】。\r\n2.邀请排名前10的用户，可以获得价值58元的热敷眼罩。\r\n3.回复【邀请数】可以实时查看自己参与活动的情况。\r\n4.本活动截止至2019年2月12日24:00。`, this.accessToken)
        }
    }

    async end () { // 活动结束
        if (Math.round(new Date / 1000) >= this.endTime) {
            console.log('活动结束了')
            sendTouser.sendMessage(this.userId, `【小睡眠-小年】活动已结束，新一期活动即将上线，请关注我们近期的推送。`)
            return true // true 是活动结束了
        } else {
            console.log('活动还没有结束')
            return false // 活动还没有结束
        }
    }

    async randomString (len) {
        len = len || 32
        let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'    // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
        let maxPos = $chars.length
        let pwd = ''
        for (let i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
        }

        const hash = pwd.toUpperCase()

        const data = await db.select('owner', {
            where: {
                hash
            }
        })

        if (data.length === 0) {
            return hash
        } else {
            const newHash = await this.randomString(len)
            return newHash
        }
    }

    async updateMessageTimeStamp () {
        try {
            db.update('owner',
                {
                    update: new Date().getTime()
                },
                { where: { unionid: this.unionId } })
        } catch (e) {

        }
    }

    async getConversionCode (unionid) {
        const data = await db.select('owner', {
            where: {
                unionid
            }
        })

        if (data[0].conversion_code) {
            console.log('用户已经拥有了hashCode 无需插入')
            return data[0].conversion_code
        }

        const hashCode = randomString(10)
        db2.insert('cosleep_mp', {
            code_mp_user: unionid,
            code_cosleep_use: hashCode,
            code_used: 0,
            code_vip_time: 77760000, // 15 * 24 * 60 * 60 * 60    15 天
            created_at: ("" + new Date().getTime()).substr(0, 10),
            updated_at: ("" + new Date().getTime()).substr(0, 10)
        })
        db.select('owner', {
            update: {
                conversion_code: hashCode
            }
        }, {
            where: {
                unionid
            }
        })
        return hashCode
    }

    async judgeOldUser (unionid) {
        const data2 = db2.select('mp_user', {
            where: {
                unionid
            }
        })
        if (data2.length === 0) {
            return false
        }
        return true
    }

}

function randomString(len) {
    len = len || 32;
    let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'   /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    let maxPos = $chars.length
    let pwd = ''
    for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return pwd.toLowerCase().replace(/[0-9]*/g, '')
}

module.exports = Share
