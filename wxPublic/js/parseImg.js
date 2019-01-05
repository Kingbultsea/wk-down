const { createCanvas, loadImage } = require('canvas')
const fs = require('fs')
const path = require("path")

const width = 397
const height = 758


async function start (designation, name, picUrl) {
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

    return canvas.toDataURL('image/jpeg', { quality: 0.8}, (err, jpeg) => {})  // canvas.toBuffer('image/jpeg', { quality: 0.8 })

    fs.writeFile(path.join(__dirname, '../img/bbc.png'), canvas.toBuffer('image/jpeg', { quality: 0.8 }), (err) => {
        if (err) {
            console.log(err)
        }
    })
}

module.exports = start
