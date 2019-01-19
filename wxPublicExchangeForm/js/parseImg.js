const { createCanvas, loadImage } = require('canvas')
const fs = require('fs')
const path = require("path")



async function outputPic (designation, name, picUrl) {
    const width = 397
    const height = 758

    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')

    ctx.font = '30px Impact'
    ctx.fillText('Awesome!', width, height)

    var text = ctx.measureText('Awesome!')
    ctx.strokeStyle = 'rgba(255,45,78,0.5)'
    ctx.beginPath()

    await loadImage(path.join(__dirname, '../img/bg.png')).then((image) => {
        ctx.drawImage(image, 0, 0, width, height)
    }) // 绘制背景


    ctx.font = '50px "Comic Sans"'
    ctx.fillText(designation, 50, 450) // 绘制称号

    await loadImage(path.join(__dirname, '../img/logo区域.png')).then((image) => {
        ctx.drawImage(image, 0, 0, width, height)
    })

    await loadImage(picUrl).then((image) => {



        ctx.save()

        ctx.beginPath()
        // ctx.arc(75, 325, 25, 0, Math.PI * 2, false)

        function roundRect(x, y, w, h, r) {
            if (w< 2 * r) r = w / 2;
            if (h < 2 * r) r = h / 2;
            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.arcTo(x + w, y, x + w, y + h, r);
            ctx.arcTo(x + w, y + h, x, y + h, r);
            ctx.arcTo(x, y + h, x, y, r);
            ctx.arcTo(x, y, x + w, y, r);
            ctx.closePath();
        }
        roundRect(50, 300, 50, 50, 10);



        ctx.clip()
        ctx.drawImage(image, 50, 300, 50, 50)
        ctx.restore()
    }) // 绘制头像

    ctx.font = '20px "Comic Sans"'
    ctx.fillText(name, 230, 330) // 绘制文字


    await loadImage(path.join(__dirname, '../img/blockCode.png')).then((image) => {
        ctx.drawImage(image, width - 131, height - 140, 100, 100)
    }) // 绘制二维码

    // return canvas // canvas.toBuffer('image/jpeg', { quality: 0.8 })// canvas.toDataURL('image/jpeg', { quality: 0.8}, (err, jpeg) => {})  // canvas.toBuffer('image/jpeg', { quality: 0.8 })

    return new Promise((resolve) => {
        const hash = randomString(1)
        fs.writeFile(path.join(__dirname, '../img/'+ hash +'.png'), canvas.toBuffer('image/jpeg', { quality: 0.8 }), (err) => {
            if (err) {
                console.log(err)
            }
            resolve(hash)
        })
    })
}

async function outputPicShare (designation, name, picUrl, qrCodeUrl, platFormId) {
    const width = 612
    const height = 920
    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')

    console.log('获取不了picUrl??' + picUrl)

    await loadImage(path.join(__dirname, '../img/share_template_one.png')).then((image) => {
        ctx.drawImage(image, 0, 0, width, height)
    }) // 绘制背景

    ctx.font = '24px "Noto Sans CJK SC Bold"'
    ctx.fillStyle = 'rgb(19, 129, 229)'
    ctx.fillText(designation, 190, 809) // 绘制文字

    ctx.font = '24px "Noto Sans CJK SC Bold"'
    ctx.fillStyle = "rgb(255, 255, 255)"
    ctx.fillText(name, 141, 149) // 绘制名称

    await loadImage(picUrl).then((image) => {
        ctx.drawImage(image, 37, 102, 80, 80)
    }) // 绘制头像


    return new Promise((resolve) => {
        const hash = randomString(2)// platFormId

        fs.exists(path.join(__dirname, '../img/'+ hash +'.png'), (exists) => {

                console.log('???')
                fs.writeFile(path.join(__dirname, '../img/'+ hash +'.png'), canvas.toBuffer('image/jpeg', { quality: 1 }), (err) => {
                    console.log('??')
                    if (err) {
                        console.log(err)
                    }
                    resolve(hash)
                })

        })
    })

}

function randomString(len) {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

function circleImg (ctx, img, x, y, r) {
    ctx.save()
    let d =2 * r
    let cx = x + r
    let cy = y + r
    ctx.arc(cx, cy, r, 0, 2 * Math.PI)
    ctx.clip()
    ctx.drawImage(img, x, y, d, d)
    ctx.restore()
}

module.exports = { outputPic, outputPicShare }
