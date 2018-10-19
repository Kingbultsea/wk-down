<template>
  <div class="main">
    <img class="bg" src="@/images/m_start_img.svg" />
    <div class="rest"></div>
    <div class="bottom-button" @click="toPlayingPage">
      <vueButton class="go">马上开始</vueButton>
    </div>
    <a id="dlx" class="bottom-download" target="view_window" href="https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic">
      <img  src="@/images/start_tocosleep_btn2.gif"/>
    </a>
    <InputName v-if="inputshow"  style="position:fixed;"/>
  </div>
</template>

<script>
// @ is an alias to /src
//不能破折号命名哦 import c-s from的时候

import vueButton from '@/components/button.vue'
import InputName from '@/components/inputname.vue'
import Tool from '@/components/tool.js'

export default {
  name: 'home',
  data(){
      return {
          inputshow:false
      }

  },
  components: {
      vueButton,
      InputName
  },
  methods:{
      toPlayingPage(){

          const that = this
          if( !this.isWeiXin() ){

              if (Tool.is_cosleep()  ) {  //判断是否app端口  判断用户是否登录 如果不是app或者没有登录，就让他输入名称吧
                  //   development

                  this.callAppRouter('isLogin',{},(err, result)=>{
                      if( JSON.parse(result).msg === '已登录' ) {

                          this.callAppRouter('Login',{},(err,result)=>{
                              try{
                                  let r = JSON.parse(result)
                                  localStorage.setItem('name',r.data.name)
                                  console.log(r.data.name)
                              }catch(e){
                                  localStorage.setItem('name',result.data.name)
                                  console.log(result.data.name)
                              }
                              that.$router.push({path:'/playpage'})
                          })

                      }else{
                          //this.callAppRouter('Login')
                          if(!localStorage.getItem('name')) {  this.inputshow = true }else{
                              that.$router.push({path:'/playpage'})
                          }
                      }
                  })

                  //alert(this.callAppRouter('Login'))

              } else {
                  if(!localStorage.getItem('name')) {  this.inputshow = true }else{
                      that.$router.push({path:'/playpage'})
                  }
              }


          }else{
              that.$router.push({path:'/playpage'})
          }
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
      isWeiXin(){
          return /micromessenger/.test(navigator.userAgent.toLowerCase())
      }
  },
  mounted(){

  }
}
</script>

<style lang="scss" scoped>
  @function px2html($px){
    $rem: 37.5px;
    @return ($px / $rem) + rem;
  }

  .main{
    display: flex;
    height:100%;
    //min-height:px2html(600px);
    width:100%;
    position:fixed;
    overflow:scroll;

    .bg{
      position:absolute;
      right:50%;
      top: px2html(100px);
      transform: translateX(50%);
      width: px2html(380px);
      height:px2html(400px);
      z-index:-1;
    }
    .rest{
      position:fixed;
      height:px2html(200px);
      z-index:-1;
      width:100%;
      height:100%;
      top:px2html(450px);
      background: #F59A55;
    }

    .bottom-button{
      position: fixed;
      //z-index:;
      height:3em;
      left:px2html(103px);
      top: px2html(448px);
    }
    .bottom-download{
      position: fixed;
      right: 50%;
      transform: translateX(50%);
      //height:1em;
      top: px2html(495px);
      img{
        height:px2html(23px);
      }
    }

  }
</style>
