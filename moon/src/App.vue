<template>
  <div id="app">
    <img  class="logo"  src="./images/f-day_img_openning_logo@3x.png"/>
    <img  class="title" src="./images/title.svg" />
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
    import Tool from '@/components/tool.js'
  require('@/js/sizeRem.js')

    export default {
        data () {
            return {
                isRouterAlive: true,
                return_url: window.location.href.split('#')[0].replace(/\?.+/,'')
            }
        },
        methods: {
            reload () {
                console.log('？')
                this.isRouterAlive = false
                this.$nextTick(() => (this.isRouterAlive = true))
            },
            callAppRouter(method, params={}, callback){
                let req = {
                    'Method': method,
                    'Data': params
                }, cbName = `CB_${Date.now()}_${Math.ceil(Math.random() * 10)}`;
                req = JSON.stringify(req);
                Xinchao.Web[cbName] = (err, result) => {
                    if (callback) {
                        callback(err, result);
                    }
                    delete Xinchao.Web[cbName];
                };
                if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
                    window.webkit.messageHandlers.XinchaoApp.postMessage({
                        req,
                        cbName
                    });
                } else {
                    XinchaoApp.callRouter(req, cbName);
                }
            },
            appShare(){
                const share_data  = {
                    type1:{
                        title: '教师节活动标题',
                        desc: '描述',
                        link: this.return_url,
                        imgUrl: 'http://wx4.sinaimg.cn/mw690/006Zdy2vgy1fw0xyrxzlxj305k05kgli.jpg',
                        shareType: 1
                    },
                    type2:{
                        title: '教师节活动标题',
                        //desc: '你画的多少分？PK一下！',
                        link: this.return_url,
                        imgUrl: 'http://wx4.sinaimg.cn/mw690/006Zdy2vgy1fw0xyrxzlxj305k05kgli.jpg',
                        shareType: 2
                    },
                    type3:{
                        imgUrl:'',//空出来 不然优先分享图片
                        shareType: 3
                    }
                }
                document.getElementById('share').value = JSON.stringify(share_data)
                document.getElementById('share2').value = JSON.stringify(share_data.type1)
                document.getElementById('share3').value = JSON.stringify(share_data.type2)
            },
            weixinSDK(url,bl){
                const getappid = new XMLHttpRequest();
                const that = this

                getappid.open('GET', url + '/web/v1/wechat/config?debug=1&url=' + encodeURIComponent( location.href.split('#')[0] ) )
                //alert( url + '/web/v1/wechat/config?debug=1&url=' + encodeURIComponent( location.href.split('#')[0] ) )
                //上面的 后面的那个url我傻了...  后面那个是填写你当前页面的东西的
                getappid.onreadystatechange = function(){
                    if(getappid.readyState === 4 && getappid.status === 200){
                        console.log('sdk ok')

                        let getSDK = JSON.parse( getappid.response )
                        console.log(getSDK.data.wechat_config)
                        getSDK.data.wechat_config.debug = false


                        //alert(    )


                        //我觉得是每次都要config把！
                        //localStorage.setItem('config',   JSON.stringify( getSDK.data.wechat_config )  )

                        //我觉得有可能是hash的问题
                        //alert('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx632d4c99bd681cf3&redirect_uri=' + encodeURI( location.href.split('#')[0] ) +'&response_type=code&scope=snsapi_userinfo#wechart_redirect')

                        if(bl && !localStorage.getItem('name')) window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx632d4c99bd681cf3&redirect_uri=' + encodeURI( location.href.split('#')[0] ) +'&response_type=code&scope=snsapi_userinfo#wechart_redirect'
                        if(!bl || localStorage.getItem('name')){
                            //alert('授权呀！')
                            wx.config( getSDK.data.wechat_config )
                            that.weixinShare()
                        }
                        //window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx632d4c99bd681cf3&redirect_uri=' + encodeURI( location.href.split('#')[0] ) +'&response_type=code&scope=snsapi_userinfo#wechart_redirect'
                    }
                }
                getappid.send()
            },
            weatherCode(){
                const QRblock = /code=(.+?)&/
                const code = window.location.href.match(QRblock)
                //code = code.replace('code=','')
                //没有理由啊 怎么回事 获取到code=?asdasdasd的啊 ....我日
                //alert( code )
                if(code){  return code } else{
                    return false
                }
            },
            weixinGetName(){
                if(!localStorage.getItem('name')){
                    const code = sessionStorage.getItem('code').replace(/code=/,'').replace(/\&.+/,'')
                    $.get('https://api.debug.psy-1.com/web/v1/wechat/user',{code}, (data)=>{console.log('jq都不行？');console.log(data.data.nickname);
                        localStorage.setItem('name', data.data.nickname)
                    })
                }
            },
            isWeiXin(){
                return /micromessenger/.test(navigator.userAgent.toLowerCase())
            },
            weixinInit(url){
                if( this.isWeiXin() ){
                    let code = this.weatherCode()
                    if(!code){  this.weixinSDK(url,true)  }
                    else{ this.weixinSDK(url,false);sessionStorage.setItem('code', code);this.weixinGetName()  }
                }
            },
            weixinShare(){

                //alert('执行share呀')
                //console.log( localStorage.getItem('config') )
                //wx.config( JSON.parse(localStorage.getItem('config')) );
                console.log(this.return_url)
                wx.ready(function(e){
                    wx.onMenuShareAppMessage({
                        title: '月饼',
                        desc: '这是描述',
                        link: this.return_url,
                        imgUrl: 'https://res.psy-1.com/cosleep/moonday/logo@3x.png',
                        success(){console.log('分享成功')}
                    })
                    wx.onMenuShareQQ({
                        title: '月饼',
                        desc: '这是描述',
                        link: this.return_url,
                        imgUrl: 'https://res.psy-1.com/cosleep/moonday/logo@3x.png',
                        success(){console.log('分享成功')}
                    })
                    wx.onMenuShareQZone({
                        title: '月饼',
                        desc: '这是描述',
                        link: this.return_url,
                        imgUrl: 'https://res.psy-1.com/cosleep/moonday/logo@3x.png',
                        success(){console.log('分享成功')}
                    })
                    wx.onMenuShareTimeline({
                        title: '月饼',
                        desc: '这是描述',
                        link: this.return_url,
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
            this.weixinInit('https://api.debug.psy-1.com')
            this.appShare()
            if(Tool.is_cosleep())document.querySelector("#dlx").style.display = 'none'
        }
    }
</script>


<style lang="scss" scoped>
  @function px2html($px){
    $rem: 37.5px;
    @return ($px / $rem) + rem;
  }


#app {
  background-image: url('./images/bg.svg');
  background-size:100% auto;
  height:100%;
  width:100%;
  position:fixed;

  .logo{
    position: fixed;
    left: px2html(20px);
    top: px2html(27px);
    height:px2html(25px);
    //width: px2html(90px);
  }
  .title{
    //max-width: 75vw;
    height: px2html(73px);
    position: fixed;
    top: px2html(79px);
    right:50vw;
    transform: translateX(50%);
  }
}
</style>
<style>
*{
  margin: 0;
  padding: 0;
}

html,
body {
  margin: 0;
  overflow: hidden;
  height:100vh;
  width:100vw;
}
canvas[resize], #app {
  width: 100%;
  height: 100%;
}
</style>
