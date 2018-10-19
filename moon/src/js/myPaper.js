import html2canvas from 'html2canvas'

var h = window.outerHeight

function circleWidth(width = 0.6){
    if( h <= 580 ){
        console.log('??')
    }

    var view_width = ( view.size.width/2 ) * width
    return view_width
}

function opacityToZero(path,velocity = 0.01){
    if(path.opacity <= 0.02){ path.opacity = 0;  return }
    path.opacity -= velocity
}

function opacityToOne(path, velocity = 0.01){
    path.opacity += velocity
    if(path.opacity >= 0.9){ path.opacity = 1;  return }
}

function addCirclePoint(obj,times){
    var hudu = (2*Math.PI / 360)
    var x, y
    for(var i = 0;i<times;i++){
        var z = 360/times * i
        x = Math.round( Math.cos(hudu*z)*circleWidth(1) +view.center.x)
        y = Math.round( Math.sin(hudu*z)*circleWidth(1) +view.center.y)
        var point = new Point(x, y)
        obj.add(point)
    }
}

function addCircleLine(segments,obj){
    var list = []
    for(var i = 0;i<60;i++){  //这的50我没有封装好 这个50是对应的条数 !!!!!!!
        var path = new Path()
        path.add(view.center)
        path.lineTo(segments[i].point)
        var ints = path.getIntersections(obj)
        var ints_circle = path.getIntersections(outer_circle)
        //console.log(ints[0].point)
        if(0 in ints){
            var link2 = new Path()
            link2.strokeWidth = 2
            link2.opacity = 0 //尝试性让他浮现
            link2.add(ints_circle[ints_circle.length - 1].point)
            link2.lineTo(ints[ints.length - 1].point)
            list.push(link2)
            listLength += link2.length
        }else{
            var link = new Path()
            link.strokeWidth = 2
            link.opacity = 0 //尝试性让他浮现
            link.add(ints_circle[ints_circle.length - 1].point)
            link.lineTo(view.center)
            //list.push(link)
            listLength += link.length
        }
    }

    return list
}

//这是那个用户按着这个东西画出来的圆
var outer_circle = new Path.Circle({
    center: view.center,
    radius: circleWidth(),
    strokeColor: '#F59A55',
    strokeWidth: 6
})

//就是那个圆点
var yd = new Path.Circle({
    center: view.center,
    radius: 6,
    strokeColor: '#F59A55',
    strokeWidth: 6,
    fillColor: '#F59A55'
})

//这个是圆的圆点
var outer_point = new Path()
addCirclePoint(outer_point,60)
//outer_point.add(new Point(Math.cos(50)*circleWidth(),Math.sin(50)*circleWidth()))

//画指针
var pointer = new Path(view.center, new Point(view.center.x-circleWidth(),view.center.y))
pointer.strokeColor = '#F59A55'
pointer.strokeWidth = 6
pointer.rotate(180, view.center)

//用户所画的东西的路径
var users_path = new Path({
    strokeColor: '#F59A55',
    strokeWidth: 4
})

var user_point_list = 0

function begin(){
    opacityToZero(outer_circle, 0.02) //外层圆变透明
}


view.onMouseDown = function (event) {
    users_path.add(event.point)
    console.log('dw')
}

view.onMouseDrag = function (event) {
    users_path.add(event.point)
    user_point_list += 1
    console.log('drag')
}


var circle_line_list = []
view.onMouseUp = function (){
    users_path.closePath()
    console.log(outer_point.segments)
    circle_line_list = addCircleLine(outer_point.segments,users_path)
    begin_result = true
}

var time = 0  //需要Init初始化的东西
var begin_result = false
var begin_init = true
var circle_line_list_length = 0
var addmooncake_font = false
var listLength = 0

function randomNum(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1,10);
            break;
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
            break;
        default:
            return 0;
            break;
    }
}
view.onFrame = function onFrame(event){

    if(!begin_result && begin_init){
        begin()
    }

    if(begin_result){//开始绘制最后结果的动画
        if(user_point_list <= 40){
            pointer.opacity = 0 //这是为了不那么难看
        }

        opacityToOne(outer_circle)
        opacityToOne(yd)
        if(circle_line_list_length  != circle_line_list.length){pointer.rotate(2.35, view.center)}else{
            console.log('关闭')
            pointer.opacity = 0
            begin_result = false //关闭动画
            addmooncake_font = true //开启添加图片
        }
        if(circle_line_list_length  <= circle_line_list.length / 1.5) opacityToZero(pointer,0.0083)

        if(circle_line_list_length < circle_line_list.length){
            opacityToOne( circle_line_list[circle_line_list_length] , 0.2)
            //circle_line_list[circle_line_list_length].opacity += 0.3

        }
        time += event.delta
        if(time >= 0.033){
            //绘制线条
            console.log(circle_line_list.length)
            if(circle_line_list_length < circle_line_list.length){
                circle_line_list[circle_line_list_length].strokeColor = '#F59A55'
                circle_line_list_length += 1
            }
            time = 0
        }



    }

    if(addmooncake_font){
        //添加最后的月饼
        //alert('bg'+randomNum(1,4))
        var s = 'bg'+randomNum(1,4)
        var pic_mooncake = new Raster(s)
        pic_mooncake.position = view.center
        pic_mooncake.size = new Size(circleWidth(0.74)*2, circleWidth(0.74)*2)
        users_path.strokeColor = 'red'
        var group = new Group([users_path, pic_mooncake])
        group.setClipped(true)
        group.fillColor = 'red'
        addmooncake_font = false
        begin_init = false


        //这个时候应该跳转到结果页面了 我在那弄一个pormise就ok了

        endS(listLength)
        changeToImage()
        //console.log()


        //var border = users_path.clone()

        //添加最后的框
        /*var outer_circle_border = new Path.Circle({
            center: view.center,
            radius: circleWidth(),
            strokeColor: '#F59A55',
            strokeWidth: 2
        })*/

        //var group2 = new Group([users_path, outer_circle])//这是画在外层的圆
        //group2.opacity = 0.5
    }

    //console.log(time)
    //pointer.rotate(3, view.center)
}

function changeToImage(){
    var dom = document.getElementById('test')
    html2canvas(dom, {onclone: (document)=>{
            document.getElementById('test').classList.add('changBG')
            var svgImg = paper.project.exportSVG()
            document.getElementById('test').innerHTML = ''
            document.getElementById('test').appendChild(svgImg)

    }}).then((canvas)=>{
        localStorage.setItem('canvasSrc', canvas.toDataURL() )
        window.location.href = window.location.href.split('#')[0] + '#/result'
    })
}

function endS(s){
    //alert(s)

    switch(true){
        case s<284:             localStorage.setItem('one','9');localStorage.setItem('lv','等级：Lv9民间画圣');localStorage.setItem('two',parseInt(  (  (284-s + 40) /284)*10 ) );     localStorage.setItem('wa', '心中有规矩，便能徒手画月饼。');break;
        case s<750 && s>=284:   localStorage.setItem('one','8');localStorage.setItem('lv','等级：Lv8绘画宗师');localStorage.setItem('two',parseInt(  (  (750-s) /(750-284) )*10 ) );   localStorage.setItem('wa', '挥一挥手指，画个大饼来充饥。');break;
        case s<1300 && s>=750:  localStorage.setItem('one','7');localStorage.setItem('lv','等级：Lv7天才画家');localStorage.setItem('two',parseInt(  (  (1300-s) /(1300-750) )*10 ) ); localStorage.setItem('wa', '画不圆的月饼，在你心里骚动。');break;
        case s<2600 && s>=1300: localStorage.setItem('one','6');localStorage.setItem('lv','等级：Lv6灵魂画手');localStorage.setItem('two',parseInt(  (  (2600-s) /(2600-1300) )*10 ) );localStorage.setItem('wa', '画月饼？不存在的，这明明是个哈密瓜。');break;
        case s<3300 && s>=2600: localStorage.setItem('one','5');localStorage.setItem('lv','等级：Lv5绘画达人');localStorage.setItem('two',parseInt(  (  (3300-s) /(3300-2600) )*10 ) );localStorage.setItem('wa', '你画的月饼，是被玉兔偷吃了吗？');break;

        case s<4000 && s>=3300: localStorage.setItem('one','4');localStorage.setItem('lv','等级：Lv4画室学徒');localStorage.setItem('two',parseInt(  (  (4000-s) /(4000-3300) )*10 ) );localStorage.setItem('wa', '你画的月饼是艺术，别人很难懂！');break;
        case s<4500 && s>=4000: localStorage.setItem('one','3');localStorage.setItem('lv','等级：Lv3绘画能手');localStorage.setItem('two',parseInt(  (  (4500-s) /(4500-4000) )*10 ) );localStorage.setItem('wa', '心中有月饼，画什么都能吃！');break;
        case s<5000 && s>=4500: localStorage.setItem('one','2');localStorage.setItem('lv','等级：Lv2新手临摹');localStorage.setItem('two',parseInt(  (  (5000-s) /(5000-4500) )*10 ) );localStorage.setItem('wa', '月饼，在哪？完全没看见！');break;
        case s<5800 && s>=5000: localStorage.setItem('one','1');localStorage.setItem('lv','等级：Lv1手残菜鸟');localStorage.setItem('two',parseInt(  (  (5800-s) /(5800-5000) )*10 ) );localStorage.setItem('wa', '月饼被吃货藏起来了，你猜是谁？');break;
        case s<64000 && s>=5800: localStorage.setItem('one','0');localStorage.setItem('lv','等级：Lv1手残菜鸟');localStorage.setItem('two',randomNum(0,9));localStorage.setItem('wa', '这个月饼需要用显微镜才能看到。');break;
    }
    if(   s<284 && parseInt(  (  (284-s + 40) /284)*10 ) >= 6 ) {
        localStorage.setItem('lv','等级：Lv10神来之手');localStorage.setItem('wa', '磨具做出的月饼，还没你画的圆！');
    }
    console.log(parseInt(  (  (284-s + 40) /284)*10) + '神来只收的判断')
    console.log(user_point_list)

    localStorage.setItem('ms',['天马行空派','典雅清新派','气势豪放派','婉约含蓄派','抽象概念派',
        '新印象画派','立体主义派','鬼畜画风派','简约唯美派','浪漫主义派',
        '田园情怀派','写实学院派','民间意念派','奔放野兽派','抽风大师派',
        '表现主义派','极简画风派','自然主义派','古典高雅派','超现实画派'][randomNum(0,12)])

    /*if(user_point_list<4) {
        localStorage.setItem('one', '0');
        localStorage.setItem('lv', '等级：Lv1手残菜鸟');
        localStorage.setItem('two', randomNum(0,9));
    }
    if(user_point_list>=4 && user_point_list<17) {
        localStorage.setItem('one', '1');
        localStorage.setItem('lv', '等级：Lv1手残菜鸟');
        localStorage.setItem('two', randomNum(0,9));
    }*/

    console.log(s)


    //284 为90分吧
    //750 为80分吧
    //1300为70分吧
    //2600为60分吧
    //3300为50分
    //4000为40分
    //4500为30分
    //5000为20分吧
    //5800为10分吧
    //6400为0分吧
}