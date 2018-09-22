var height = 300
var width = 300
var minus = -50
var radius = view.center.x + minus
var angle = 0
var speed = 0.09

//这里是为了适配的
console.log('加载')
//document.getElementById('mooncake').src = 'images/bg'+ ['1', '2', '3'][randomNum(0,3)]
//苹果问题
document.body.style.overflow="hidden";


//动画开始的时候，与圆心链接的线条的样式
var dockLineColor = '#E6713B'
var dockLight = 1  //粗细  number

var circleColor = '#E6713B'  //圆形的color
var pointerColor = '#E6713B' //那个转动的指针的color
var pathColor = '#E6713B'  //圈住的path的color


var start = new Point(view.center.x, view.center.y) //中圆点
var end = new Point(view.center.x, view.center.y)
//var pointPath = new Path()
//pointPath.strokeWidth = 5;
//pointPath.strokeColor = '#E6713B'
//pointPath.add(new Point())

var myPath = new Path.Circle(view.center, 10);
myPath.strokeColor = '#E6713B';
myPath.fillColor = '#E6713B';
//myPath.strokeWidth = 5;
//myPath.add(new Point(view.center.x, view.center.y) );
//myPath.add(new Point(view.center.x+1, view.center.y));

var myCircle = new Path.Circle(view.center, radius);
myCircle.strokeColor  = circleColor
myCircle.strokeWidth = 5
//myCircle.remove()  这是删除那个圆的边框的


var pointer = new Path()
pointer.strokeColor = pointerColor
pointer.moveTo(start)
pointer.lineTo(start + [0, radius])
pointer.opacity = 0
pointer.strokeWidth = 3

//var bg = new Raster('mooncake')
//bg.size = paper.view.viewSize
//bg.position = view.center
//bg.opacity = 0.2
var raster = new Raster('mooncake13');



// Move the raster to the center of the view
raster.position = view.center;
raster.width =  radius *2
raster.height = radius *2
raster.opacity = 1
// Scale the raster by 50%
//raster.scale(0.5);

// Rotate the raster by 45 degrees:
//raster.rotate(45);


//var pointer2= new Path()
//pointer2.strokeColor = pointerColor
//pointer2.moveTo(start)
//pointer2.lineTo(start + [0, radius])




var path = new Path({
    strokeColor: pathColor,
    strokeWidth: 5
})



var pointList = []
function onMouseDown(event){
    var x = start.x - event.point.x
    var y = start.y - event.point.y
    var distance = Math.cbrt ( (x*x) + (y*y) )
    pointList.push(distance)
    console.log(distance)
    path.add(event.point)
}

function onMouseDrag(event) {
    var x = start.x - event.point.x
    var y = start.y - event.point.y
    var distance = Math.abs( Math.cbrt ( (x*x) + (y*y) ) )

    pointList.push(distance)
    console.log(distance)
    path.add(event.point)
}

var mooncake

function onMouseUp(event){



    //向中心闭合图形
    path.lineTo(start)
    path.closed = true

    //尝试clipMask来获取那个月饼
    // document.getElementById('mooncake').src = 'images/bg'+ ['1', '2', '3'][randomNum(0,2)]

    mooncake = new Raster('mooncake')
    mooncake.size = paper.view.viewSize
    mooncake.position = view.center
    mooncake.opacity = 0.2
    //path._clipMask = true

    //开始onFrame动画
    begin = true
    //path.clipMask = true

}


//onFrame 的操作
var toggle = true
var begin = false
var resultArea = 0
var await = true
var offestResultOpacity = 0

function onFrame(event) {
   // var mooncakeInner = new Raster('mooncake')
   // mooncakeInner.size = paper.view.viewSize
   // mooncakeInner.position = view.center
   // mooncakeInner.opacity = 1


    if(myCircle.opacity >= 0.05) { myCircle.opacity -= 0.02; pointer.opacity += 0.02 ; raster.opacity -= 0.02 }else{ myCircle.opacity = 0.00000001 ; pointer.opacity = 1; raster.opacity = 0.00000001}
    //console.log(mooncakeInner.opacity)



    //动画
    if(angle >= -6.3  && begin){

        //指针旋转
        pointer.rotate(speed * 56.5, start)
        myCircle.opacity = 1
        raster.opacity = 0.1




        //线条绘制
        var dock = new Path({
            strokeColor: dockLineColor,
            strokeWidth: dockLight
        })
        dock.opacity = 0.5
        dock.moveTo(start)
        dock.lineTo(start + [Math.sin(angle) * radius, Math.cos(angle) * radius])
        angle -= speed

        //path.addTo(dock)
        //删除中间线条
        //console.log( path.hasChildren(dock) )



    }
    //动画结束后获取area
    if(angle <= -6.3  && await){
        //删除指针
        pointer.remove()
        //删除背景圆
        raster.remove()
        //pointer2.remove()
        console.log('这里错误吗？')

        var result =  myCircle.subtract(path)
        //result.fillColor = 'red'

        var offestResult = myCircle.subtract(result)
        offestResult.fillColor = '#f48f4b'
        offestResult.opacity = offestResultOpacity
        offestResultOpacity += 0.04



        //path画出了外面的那部分
        var outerPath = path.subtract(myCircle)


        var compoundPath = new CompoundPath({
            children: [ offestResult, outerPath ]
        })

        compoundPath.fillColor = '#f48f4b'


        if(offestResultOpacity >0.2){
            offestResultOpacity = 0.2
        }

        //console.log(offestResult.opacity)
        //console.log("开始计算")
        if(offestResultOpacity === 0.2){
            //绘制月饼
            var mooncake = new Raster('mooncake'+ ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'][randomNum(0,11)])
            mooncake.size = paper.view.viewSize
            mooncake.position = view.center
            //compoundPath.fillColor = '#f48f4b'
            //mooncake.opacity = 0.1
            //compoundPath.fillStyle = mooncake.style
            //compoundPath.strokeColor = '#E6713B'
            //compoundPath.strokeWidth = 3
            var compoundImage =  new Group([compoundPath,mooncake])
            compoundImage.setClipped(true)


            //compoundPath.visible = false
            //显示月饼
            //mooncake.opacity = 0
            //compoundPath.fillColor = '#f48f4b'
            //mooncake.bringToFront()

            //compoundPath.drawImage(img)

            //compoundPath.clipMask = true
            //我想关闭之后添加一个月饼吧
            //var mooncakeShadow = new Raster('mooncake')
            //mooncakeShadow.size = paper.view.viewSize
            //mooncakeShadow.position = view.center


            //这里开始计算距离
            //超级难计算...
            //console.log("开始计算")

            var output_distance = []
            pointList.forEach(function (value, index, array) {
               if(array[index+1]) output_distance.push( (Math.abs(value - array[index+1]) ))
            })

            //这里要计算近似值了
            var similly = output_distance.reduce(function(previousValue, currentValue, currentIndex, array){
                return previousValue + currentValue
            },20)

            console.log(similly/output_distance.length)

            //成绩单
            document.getElementsByClassName('score-frame')[0].style.visibility = 'visible'
            //这里dom还没有更新所以你下面修改dom是做不到的
            //a

            console.log(pointList.length)
            if(pointList.length > 170 && ( similly <40 || similly > 35)){ similly -= 16}
            else if(pointList.length > 250 && ( similly <35 || similly > 32)){ similly -= 17}
            else if(pointList.length > 250 && ( similly <32 || similly > 20)){ similly -= 18}
            //获取总分
            var simillyTwo = similly.toFixed(2);
            console.log(simillyTwo)

            //style的取值
            var styleList = ['天马行空派','典雅清新派','气势豪放派','婉约含蓄派','抽象概念派',
'新印象画派','立体主义派','鬼畜画风派','简约唯美派','浪漫主义派',
            '田园情怀派','写实学院派','民间意念派','奔放野兽派','抽风大师派',
'表现主义派','极简画风派','自然主义派','古典高雅派','超现实画派']
            var favouriteMooncake = ['纯正莲蓉','栗蓉月饼','玫瑰豆沙','五仁月饼','蛋黄豆沙',
'双黄莲蓉','流心奶黄','红豆月饼','五仁月饼','云腿月饼',
            '酥皮月饼','水果月饼','冰皮月饼','榴莲冰皮','至尊蛋黄'
            ,'芝麻月饼','流心蛋黄','陈皮豆沙','五仁火腿','五仁叉烧',
            '冬蓉月饼','鲜肉月饼','玫瑰月饼','果仁月饼','红豆蛋黄'
        ]



            //计算得分，修改成绩 姓名等级风格
            var changeOneSrc = document.getElementById('scoreOne')
            var name = document.getElementById('name')
            var degreed = document.getElementById('degreed')
            var style = document.getElementById('style')
            var information = document.getElementById('information')

            //个位数分数修改
            var zero = document.getElementById('scoreTwo')
            //"images/number_"+ randomNum(0,3) +".svg"

            if(pointList.length <= 40){  changeOneSrc.src = 'images/number_0.svg'; zero.src = "images/number_"+ randomNum(5,9) +".svg" ;degreed.innerText = "等级：Lv1手残菜鸟"; information.innerText = ["这个月饼需要用显微镜才能看到","你确定这是一个月饼吗?"][Math.round(Math.random())] } //这是为了排除点的
            else if(similly>=0 && similly<=15){ changeOneSrc.src = 'images/number_9.svg';  zero.src = "images/number_"+ randomNum(5,9) +".svg"; console.log( "images/number_"+ randomNum(0,9) );degreed.innerText = "等级：Lv9民间画圣"; information.innerText = ["心中有规矩便能徒手画月饼。","磨具做出的月饼，还没你画的圆！"][Math.round(Math.random())] }
            else if(similly>15 && similly<=19){ changeOneSrc.src = 'images/number_9.svg';  zero.src = "images/number_"+ randomNum(0,4) +".svg"; console.log( "images/number_"+ randomNum(0,9) );degreed.innerText = "等级：Lv9民间画圣"; information.innerText = ["心中有规矩便能徒手画月饼。","磨具做出的月饼，还没你画的圆！"][Math.round(Math.random())] }
            else if(similly>19 && similly<=23){ changeOneSrc.src = 'images/number_8.svg';  zero.src = "images/number_"+ randomNum(5,9) +".svg"; console.log( "images/number_"+ randomNum(0,9) );degreed.innerText = "等级：Lv8绘画宗师"; information.innerText = ["挥一挥手指，画个大饼来充饥。","举头望明月，低头大饼香。"][Math.round(Math.random())]}
            else if(similly>23 && similly<=27){ changeOneSrc.src = 'images/number_8.svg';  zero.src = "images/number_"+ randomNum(0,4) +".svg"; console.log( "images/number_"+ randomNum(0,9) );degreed.innerText = "等级：Lv8绘画宗师"; information.innerText = ["十五的月饼，十六圆。","画不圆的月饼，在你心里骚动。"][Math.round(Math.random())]}
            else if(similly>27 && similly<=31){ changeOneSrc.src = 'images/number_7.svg';  zero.src = "images/number_"+ randomNum(6,9) +".svg"; console.log( "images/number_"+ randomNum(0,9) );degreed.innerText = "等级：Lv7绘画宗师"; information.innerText = ["画月饼？不存在的，这明明是个哈密瓜。","别人画月饼，你画个盘子。"][Math.round(Math.random())]}
            else if(similly>31 && similly<=35){ changeOneSrc.src = 'images/number_7.svg';  zero.src = "images/number_"+ randomNum(3,5) +".svg"; console.log( "images/number_"+ randomNum(0,9) );degreed.innerText = "等级：Lv7天才画家"; information.innerText = ["你画的月饼是艺术，别人很难懂！","画月饼？不存在的，这明明是个哈密瓜。"][Math.round(Math.random())]}
            else if(similly>35 && similly<=40){ changeOneSrc.src = 'images/number_7.svg';  zero.src = "images/number_"+ randomNum(1,2) +".svg"; console.log( "images/number_"+ randomNum(0,9) );degreed.innerText = "等级：Lv7天才画家"; information.innerText = ["你画的月饼是艺术，别人很难懂","你画的月饼，是被玉兔偷吃了吗？"][Math.round(Math.random())]}
            else if(similly>40 && similly<=50){ changeOneSrc.src = 'images/number_6.svg';  zero.src = "images/number_"+ randomNum(6,9) +".svg"; console.log( "images/number_"+ randomNum(0,9) );degreed.innerText = "等级：Lv6灵魂画手"; information.innerText = '心中有月饼，画什么都能吃！'}
            else if(similly>50 && similly<=60){ changeOneSrc.src = 'images/number_6.svg';  zero.src = "images/number_"+ randomNum(0,5) +".svg"; console.log( "images/number_"+ randomNum(0,9) );degreed.innerText = "等级：Lv6灵魂画手"; information.innerText = ["你画的月饼是艺术，别人很难懂","你画的月饼，是被玉兔偷吃了吗？"][Math.round(Math.random())]}
            else if(similly>60 && similly<=80){ changeOneSrc.src = 'images/number_5.svg';  zero.src = "images/number_"+ randomNum(0,9) +".svg"; console.log( "images/number_"+ randomNum(0,9) );degreed.innerText = "等级：Lv5绘画达人"; information.innerText = '月饼，在哪？完全没看见！'}
            else if(similly>80){ changeOneSrc.src = 'images/number_1.svg'; zero.src = "images/number_"+ randomNum(5,9) +".svg";degreed.innerText = "等级：Lv1手残菜鸟"; information.innerText = ["月饼被谁吃了一口啦？","月饼被吃货藏起来了，你猜是谁"][Math.round(Math.random())] }

            //console.log( randomNum(0,4) )
            //console.log( pointList.length )
            //获取用户名称
            var getName = new XMLHttpRequest()

            //code正则获取


            //alert(code)



            //alert(getAllName)
            if(!getAllName) {
                getName.open('GET', 'https://api.debug.psy-1.com' +'/web/v1/wechat/user?code='+code)
                getName.onreadystatechange = function(){
                    //alert(getName.readyState+' '+getName.status)
                    if(getName.readyState === 4){
                        //alert(getName.readyState+' '+getName.status)
                        if(getName.status === 200){
                            //alert(JSON.parse( getName.response ).data.nickname)
                            var getJson = JSON.parse( getName.response ).data.nickname
                            var url = window.location.href + '&name=' + getJson
                            //window.location.href = url
                            //alert(  url )
                            getAllName = getJson//因为我是转换成图片的 所以是获取不了text innerhtml的
                            name.innerHTML = getJson
                            //alert('修改名称')
                            changeToimage()
                        }
                    }
                    //alert()
                }
                getName.onerror = function(msg){
                    //alert('错误了')
                    //alert(getName.readyState+' '+getName.status)
                    location.reload()
                }
                getName.send()
            }else{
                name.innerHTML = getAllName ;
                changeToimage()

            }
            //name.innerHTML = getAllName
            //name.innerHtml



            //name.innerHTML = '口味：'+ favouriteMooncake[Math.floor(Math.random()*20)];
            style.innerText = "风格：" + styleList[Math.floor(Math.random()*20)];



            //paper转换
            //var ImageNew = new Image()
            //ImageNew.src = document.getElementById('myCanvas').toDataURL()
            //console.log(ImageNew.src)






            /*var divContent = document.getElementById("load_svg").innerHTML;
            var width = document.getElementById('load_svg').clientWidth
            var height = document.getElementById('load_svg').clientHeight
            var data = "data:image/svg+xml," +
                "<svg xmlns='http://www.w3.org/2000/svg' width='"+ width +"' height='"+height+"'>" +
                "<foreignObject width='100%' height='100%'>" +
                "<div xmlns='http://www.w3.org/1999/xhtml' style='font-size:16px;font-family:Helvetica'>" +
                divContent +
                "</div>" +
                "</foreignObject>" +
                "</svg>";
            var img = new Image();*/
            //img.src = data.replace(/\#/g,"");
            //console.log(img.src)
            //document.getElementById('load_svg').innerHTML = ''
            //document.getElementById('load_svg').appendChild(img)




            //offestResult.strokeColor = '#E6713B'
            //offestResult.strokeWidth = 3
            await = false

        }

        //结束
        resultArea = offestResult.area
        begin = false




        //完成动画后 添加再来一次按钮

    }

}

function getUserName(){

}

function changeToimage(){
    var svgImg = paper.project.exportSVG()
    svgImg.id = 'deletedSVG'
    //console.log(svgImg.id)
    document.getElementById('load_svg').appendChild(svgImg)
    //document.getElementById('myCanvas')
    //paper.project.exportSVG()

    //转换成图片
    document.getElementById('myCanvas').setAttribute("class", "backgroundred");

    html2canvas(document.getElementById('myCanvas')).then(function(canvas){

        var img = new Image()
        img.src = canvas.toDataURL("image/png")


        //为了更换掉上面的页面
        var svg = document.getElementById('deletedSVG')
        svg.parentNode.removeChild(svg)

        //console.log(svg.style.height)
        img.setAttribute('class', 'w740')

        document.getElementById('load_svg').appendChild(img)

        alert('这里svg转换成img')

        //var url = img.src.replace(/^data:image\/[^;]+/, 'data:application/octet-stream');
        //window.open(url);
        //canvas.toBlob()

        html2canvas(document.getElementById("saveImg")).then(function(canvas){



            var img2 = new Image()
            img2.src = canvas.toDataURL("image/png")
            document.getElementById("saveImg").innerHTML = ''
            document.getElementById('saveImg').appendChild(img2)

            alert('这里把整个saveImg转换成img')

            //var url = img.src.replace(/^data:image\/[^;]+/, 'data:application/octet-stream');
            //window.open(url);
            //canvas.toBlob()
        })


    })
}