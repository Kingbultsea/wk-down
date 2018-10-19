<template>
    <div class="score-frame">
        <div  class="score-tainer">
            <div class="score-border" id="saveImg">
                <img src="../images/finally_title@3x.png" />
                <div id="load_svg" class="container"  ontouchstart="gtouchstart()" ontouchmove="gtouchmove()" ontouchend="gtouchend()">
                    <!--<button id="download_svg">test</button><!--下载按钮哦-->
                    <div class="container-score-frame">
                        <ul>
                            <li>姓名：<span class="name" id="name">{{name}}</span></li>
                            <li id="degreed">{{lv}}</li>
                            <li class="ms">风格：{{ms}}</li>
                        </ul>
                        <div>
                            <div class="one">成绩:</div>
                            <div class="two">
                                <div>
                                    <img id="scoreOne" :src="one"/>
                                    <img id="scoreTwo" :src="two"/>
                                </div>
                                <div>
                                    <img src="../images/line.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="information" class="infomation">
                    </div>
                    <div class="desc">{{wa}}</div>
                </div>
                <div class="bottom">
                    <img src="../images/f-day_img_openning_logo@2x.png" class="left" />
                    <div class="right" >
                    <img class="o" src="../images/QRcode.png">
                    <img  class="sentance"   src="../images/font.png"/>
                    </div>
                </div>
            </div>
        </div>
        <p class="small-tips">*长按上方保存图片*</p>
        <div class="score-bottom" >
            <vueButton @click.native="tohjty">阖家团圆</vueButton>
            <vueButton  @click.native="again">再玩一次</vueButton>
        </div>
    </div>
</template>

<script>
    import vueButton from '@/components/button.vue'
    import html2canvas from 'html2canvas'

    export default {
        name: "result",
        data(){
            return {
                one: require('@/images/number_'+localStorage.getItem('one')+'.svg'),
                two: require('@/images/number_'+localStorage.getItem('two')+'.svg'),
                lv: localStorage.getItem('lv'),
                name:localStorage.getItem('name'),
                wa:localStorage.getItem('wa'),
                ms:localStorage.getItem('ms'),
                return_url:window.location.href.split('#')[0].replace(/\?.+/,''),
                fuck:'asdasdasd'
            }
        },
        components: {
            vueButton
        },
        methods:{
            setImgSize(img, id){
                const img_scale = img.height / img.width
                const content_scale = document.getElementById(id).offsetHeight / document.getElementById(id).offsetWidth

                if(img_scale < content_scale){
                    img.width = ( document.getElementById(id).offsetWidth + 40  )
                }else{
                    img.height = (document.getElementById(id).offsetHeight +40)
                }
            },
            tohjty(){


                this.$router.push({path: '/hjty'})
            },
            append(){
                const dom = document.getElementById('information')
                const img = new Image()
                img.src = localStorage.getItem('canvasSrc')
                //const minus = window.outerHeight <= 580 ? -20 : -45
                //img.width = dom.offsetWidth - minus
                this.setImgSize(img, 'information')
                img.id = 'asd'
                dom.appendChild(img)



                html2canvas(document.getElementsByClassName('score-border')[0], {onclone: (document)=>{
                        document.getElementsByClassName('score-border')[0].classList.add('visiable')
                    }}).then((canvas)=>{
                    const img = new Image()
                    img.src = canvas.toDataURL()
                    img.classList.add('resultImg')
                    img.style.width = '100%'
                    img.style.height = '100%'
                    //img.style.borderRadius = '27px'
                    document.getElementsByClassName('score-tainer')[0].innerHTML = ''
                    document.getElementsByClassName('score-tainer')[0].appendChild(img)
                    document.getElementsByClassName('score-tainer')[0].classList.add('visiable')
                    document.getElementsByClassName('score-tainer')[0].style.animation = "opa 1s" ;
                    //localStorage.setItem('canvasSrc', canvas.toDataURL() )
                })




            },
            again(){
                console.log('zz')
                if( localStorage.getItem('reload') == 1  ){
                    //alert('有呀')
                    localStorage.setItem('reload','0')
                    //this.$router.go()
                    this.$router.push({path: '/playpage'})
                    location.reload()
                }
                if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
                    this.$router.push({path: '/playpage'})
                }

                //this.$root.reload()

                //this.$router.go()

            }
            ,
            getName(){
                const that = this
                console.log('现在进去了getName')
                return new Promise(function(resolve){
                    resolve()

                })

            },
            sendGetName(){
                //const xml = new XMLHttpRequest()
                //alert(sessionStorage.getItem('code').replace(/code=/,'')+'这是获取code的啊')
                //console.log('promise启动')
                //console.log(sessionStorage.getItem('code').replace(/code=/,''))
                //console.log('https://api.debug.psy-1.com' +'/web/v1/wechat/user?code=' + sessionStorage.getItem('code').replace(/code=/,'').replace(/\&.+/,''))
                //const code = sessionStorage.getItem('code').replace(/code=/,'').replace(/\&.+/,'')

            },
            getNameInit(){
                console.log('??')
                if(this.isWeiXin()){
                    console.log('对的 是微信 可以问题出在哪？')
                    const name = localStorage.getItem('name')
                    if( !name ){  this.getName().then(()=>{
                        //alert('这也太奇怪了吧？？？？')
                        console.log('对的 取不到名称就去取')
                        this.append()
                    }).catch( (e)=>{console.log(e)})  }else{
                        //alert('有name')
                        console.log('没有name哦')
                        this.name = name
                        this.$nextTick ( this.append )
                    }
                }
                if(!this.isWeiXin()){  //就是普通的 获取name啦
                    this.name = localStorage.getItem('name')
                }
            },
            isWeiXin(){
                return /micromessenger/.test(navigator.userAgent.toLowerCase())
            },
            weixinSDK(){
                const getappid = new XMLHttpRequest();
                const that = this

                getappid.open('GET', url + '/web/v1/wechat/config?debug=1&url=' + encodeURIComponent( location.href.split('#')[0] ) )
                getappid.onreadystatechange = function(){
                    if(getappid.readyState === 4 && getappid.status === 200){
                        wx.config( getSDK.data.wechat_config )
                        that.weixinShare()
                    }
                }
            },
            weixinShare(){
                const that = this
                //console.log( localStorage.getItem('config') )
                //wx.config( JSON.parse(localStorage.getItem('config')) );
                console.log(this.fuck)
                wx.ready(()=>{
                    wx.onMenuShareAppMessage({
                        title: '月饼',
                        desc: '我画的月饼'+localStorage.getItem('one') +localStorage.getItem('two')+'分，来看看你画的月饼有多圆？',
                        link: location.href.split('#')[0],
                        imgUrl: 'https://res.psy-1.com/cosleep/moonday/logo@3x.png',
                        success(){console.log('分享成功')}
                    })
                    wx.onMenuShareQQ({
                        title: '月饼',
                        desc: '我画的月饼'+localStorage.getItem('one') +localStorage.getItem('two')+'分，来看看你画的月饼有多圆？',
                        link: location.href.split('#')[0],
                        imgUrl: 'https://res.psy-1.com/cosleep/moonday/logo@3x.png',
                        success(){console.log('分享成功')}
                    })
                    wx.onMenuShareQZone({
                        title: '月饼',
                        desc: '我画的月饼'+localStorage.getItem('one') +localStorage.getItem('two')+'分，来看看你画的月饼有多圆？',
                        link: location.href.split('#')[0],
                        imgUrl: 'https://res.psy-1.com/cosleep/moonday/logo@3x.png',
                        success(){console.log('分享成功')}
                    })
                    wx.onMenuShareTimeline({
                        title: '月饼',
                        desc: '我画的月饼'+localStorage.getItem('one') +localStorage.getItem('two')+'分，来看看你画的月饼有多圆？',
                        link: location.href.split('#')[0],
                        imgUrl: 'https://res.psy-1.com/cosleep/moonday/logo@3x.png',
                        success(){console.log('分享成功')}
                    })


                    wx.error((res)=>{
                        alert(res)
                    })
                })

            }

        },
        mounted(){
            //this.getNameInit()
            //this.sendGetName()
            //this.sendGetName()
            //this.changeToimg()

               this.weixinShare()
               this.append()


        }
    }
</script>

<style lang="scss" scoped>
    @function px2html($px){
        $rem: 37.5px;
        @return ($px / $rem) + rem;
    }

    .score-frame{
        animation: opa 1s;

        font-size:0.8em;
        position: fixed;
        z-index: 999;
        width: 100%;
        height: 100%;
        top: 0;
        overflow: hidden;
        background-color: #F59A55;
        //display: flex;
        overflow: scroll;
        //visibility: hidden;
        //display: none;
        flex-direction: column;
        .score-tainer{  //就是那个玩意
            box-sizing: border-box;
            //flex-grow: 7;
            visibility: collapse;    //记住下 你要调试的时候 设置这里！
            width: 100%;
            height: px2html(470px);
            overflow:hidden;
            //opacity:0;

            //height: 100%;
            padding: px2html(20px);
            padding-bottom: 0em;//这里为了适配下下面的小tips
            padding-top: px2html(5px);
            background-size: 100% 100%;
            //border: #f59a55 solid 0.1em;
            display: flex;
            .score-border{
                width: 100%;
                //height: 100%;
                //flex-grow: 1;
                background-image: url('../images/bg.svg');
                background-size: 100% auto;
                //background-color: #FFF8E8;
                box-sizing: border-box;
                padding-top: 0.1em;
                box-shadow: 3px 3px #F59A55, 4px 4px #8b572a;
                display: flex;
                flex-direction: column;
                border: px2html(2px) rgba(173, 133, 97, 1) solid;
                //border-radius: px2html(13px);
                img {
                    width: 100%;
                    //padding-bottom: 0.1em;
                }
                .container{
                    box-sizing: border-box;
                    margin: 0.2em;
                    //flex-grow: 1;
                    border-top: rgba(173, 133, 97, 0.7) 2px dotted;
                    border-bottom: rgba(173, 133, 97, 0.7) 2px dotted;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    position: relative;

                    .container-score-frame{
                        justify-content: space-between;
                        display: flex;
                        padding-top: px2html(7px);
                        position: relative;
                        height:px2html(114px);
                        bottom: px2html(5px);
                        //padding-bottom: 1em;
                        color: #8B572A;
                        width: 100%;
                        ul{
                            list-style-type: none;
                            font-size: px2html(13px);
                            .name{
                                color: #492A0F;
                                font-size: px2html(20px)!important;
                                position:relative;
                                bottom:px2html(3px);
                            }
                        }
                        div{
                            display: flex;
                            align-items: center;
                            justify-content: stretch;

                            .one{
                                padding-right: 1em;
                                font-size:px2html(13px);
                                position: relative;
                                bottom:px2html(9px);
                            }
                            .two {
                                display: flex;
                                flex-direction: column;
                                div:nth-of-type(1){


                                    #scoreOne, #scoreTwo{
                                        width: px2html(20px);
                                        height: px2html(35px);
                                    }

                                }
                                div:nth-of-type(2){
                                    img{
                                        width: px2html(58px);
                                        height: px2html(17px);
                                    }

                                }
                            }

                        }
                    }
                    svg{
                        flex-grow: 1;
                        max-width: 100%;
                    }
                    img{
                        //margin:0.2em;
                        width: 100%;
                        height: 100%;
                    }
                    .infomation{
                        //position: absolute;
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        //top:1em;
                        bottom: 1px;
                        order: 3;
                        font-size: 1em;
                        color: #8B572A;
                        //flex-grow:1;
                        width:100%;
                        height: px2html(390px);
                        //padding: 0.1em;
                        align-items: center;
                        overflow: hidden;
                        img{
                            position:absolute;
                            top:50%;
                        }
                    }
                    .desc{
                        order:4;
                        font-size: px2html(13px);
                        padding-bottom:px2html(5px);
                        color: #8B572A;
                        //font-size:.7rem;
                    }
                }
                .bottom{
                    .left{
                        //margin-top:1em;
                        margin-left:px2html(15px);
                        width:px2html(75px);
                        height:px2html(15px);
                    }
                    .right{
                        float:right;text-align:right;
                        .o{
                            display:block;
                            float:right;
                            height: px2html(43px);;
                            width: px2html(43px);;
                            padding: 0em;
                            padding-right: px2html(17px);;
                            padding-bottom: 0.1em;
                        }
                        .sentance{
                            width:px2html(66px);
                            height: px2html(12px);
                            margin-right:px2html(5px);
                            float:right;clear:right
                        }
                    }
                }

            }



        }
        .small-tips{
            font-size: px2html(11px);
            text-align: right;
            margin-right: px2html(20px);
            color: #8B572A;
            opacity: 0.7;
            margin-top:px2html(2px);
        }
        .score-bottom{
            //flex-grow: 1;
            display: flex;
            height:px2html(50px);
            justify-content: space-around;
            //margin-bottom: px2html(-30px);
        }
    }
</style>
<style>
    .visiable{
        visibility: initial!important;
    }

    @keyframes opa
    {
        from {opacity: 0;}
        to {opacity: 1;}
    }
    .asd{

    }
</style>