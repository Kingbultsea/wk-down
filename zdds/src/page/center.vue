<template>
    <div>
        <!-- <div class="all_code button_active" @click="getCode">
            点击获取
        </div> -->
        <div  class="wjh">
            <div class="wjh-outer">
                链接跳转
                <input   v-model="wjh.twelve" placeholder="跳转链接" style="width: 100%;background-color: #eee" />
                <a :href="wjh.twelve"><button @click.stop="twelve" type="info">提交</button></a>
            </div>
        </div>








      <ul class="code_list">
          <li v-for="(item, index) in codeArr" @click.prevent="redirectCtrl(item.code_number)">
              {{ item.code_desc }}({{item.code_number}})


            <div v-if="item.code_number == 10010" class="wjh">
              <div class="wjh-outer">
                <input  @click.stop="showId" v-model="wjh.one.one" placeholder="code" style="width: 100%;background-color: #eee" />
                <input  @click.stop="showId" v-model="wjh.one.two" placeholder="music" style="width: 100%;background-color: #eee" />
                <button @click.stop="one" type="info">提交</button>
              </div>
            </div>

            <div v-if="item.code_number == 1026" class="wjh">
              <div class="wjh-outer">
                <input  @click.stop="showId" v-model="wjh.three.one" placeholder="tag_id" style="width: 100%;background-color: #eee" />
                  <input  @click.stop="showId" v-model="wjh.three.two" placeholder="id" style="width: 100%;background-color: #eee" />
                <button @click.stop="three" type="info">提交</button>
              </div>
            </div>

            <div v-if="item.code_number == 1017" class="wjh">
              <div class="wjh-outer">
                <input  @click.stop="showId" v-model="wjh.four" placeholder="tag_id" style="width: 100%;background-color: #eee" />
                <button @click.stop="four" type="info">提交</button>
              </div>
            </div>

            <div v-if="item.code_number == 10012" class="wjh">
              <div class="wjh-outer">
                <input  @click.stop="showId" v-model="wjh.five" placeholder="broadcast_id" style="width: 100%;background-color: #eee" />
                <button @click.stop="five" type="info">提交</button>
              </div>
            </div>

              <div v-if="item.code_number == 10016" class="wjh">
                  <div class="wjh-outer">
                      <input  @click.stop="showId" v-model="wjh.six" placeholder="prepare_id" style="width: 100%;background-color: #eee" />
                      <button @click.stop="six" type="info">提交</button>
                  </div>
              </div>

              <div v-if="item.code_number == 1052" class="wjh">
                  <div class="wjh-outer">
                      <input  @click.stop="showId" v-model="wjh.seven" placeholder="category_id" style="width: 100%;background-color: #eee" />
                      <input  @click.stop="showId" v-model="wjh.eight" placeholder="voice_id" style="width: 100%;background-color: #eee" />
                      <button @click.stop="seven" type="info">提交</button>
                  </div>
              </div>

              <div v-if="item.code_number == 1047" class="wjh">
                  <div class="wjh-outer">
                      <input  @click.stop="showId" v-model="wjh.nine" placeholder="id" style="width: 100%;background-color: #eee" />
                      <button @click.stop="nine" type="info">提交</button>
                  </div>
              </div>

              <div v-if="item.code_number == 10007" class="wjh">
                  <div class="wjh-outer">
                      <input  @click.stop="showId" v-model="wjh.ten.one" placeholder="tag_id" style="width: 100%;background-color: #eee" />
                      <input  @click.stop="showId" v-model="wjh.ten.two" placeholder="recommend_id" style="width: 100%;background-color: #eee" />
                      <button @click.stop="ten" type="info">提交</button>
                  </div>
              </div>

              <div v-if="item.code_number == 10021" class="wjh">
                  <div class="wjh-outer">
                      <input  @click.stop="showId" v-model="wjh.eleven" placeholder="password" style="width: 100%;background-color: #eee" />
                      <button @click.stop="toDeepLink(10021)" type="info">提交</button>
                  </div>
              </div>

              <div v-if="item.code_number == 10023" class="wjh">
                  <div class="wjh-outer">
                      <input  @click.stop="showId" v-model="wjh.twelve" placeholder="id" style="width: 100%;background-color: #eee" />
                      <button @click.stop="twelve" type="info">提交</button>
                  </div>
              </div>

              <div v-if="item.code_number == 10024" class="wjh">
                  <div class="wjh-outer">
                      <input  @click.stop="showId" v-model="wjh.thirteen" placeholder="category_id" style="width: 100%;background-color: #eee" />
                      <button @click.stop="thirteen" type="info">提交</button>
                  </div>
              </div>

              <div v-if="item.code_number == 10025" class="wjh">
                  <div class="wjh-outer">
                      <input  @click.stop="showId" v-model="wjh.fourteen.one" placeholder="goods_id" style="width: 100%;background-color: #eee" />
                      <input  @click.stop="showId" v-model="wjh.fourteen.two" placeholder="goods_badge_text" style="width: 100%;background-color: #eee" />
                      <button @click.stop="fourteen" type="info">提交</button>
                  </div>
              </div>

              <div v-if="item.code_number == 10017" class="wjh">
                  <div class="wjh-outer">
                      <input  @click.stop="showId" v-model="wjh.fifteen.one" placeholder="goods_id" style="width: 100%;background-color: #eee" />
                      <input  @click.stop="showId" v-model="wjh.fifteen.two" placeholder="goods_badge_text" style="width: 100%;background-color: #eee" />
                      <button @click.stop="fifteen" type="info">提交</button>
                  </div>
              </div>

              <div v-if="item.code_number == 1053" class="wjh">
                  <div class="wjh-outer">
                      <input  @click.stop="showId" v-model="wjh.sixteen" placeholder="activity_link" style="width: 100%;background-color: #eee" />
                      <button @click.stop="sixteen" type="info">提交</button>
                  </div>
              </div>

              <div v-if="item.code_number == 10029" class="wjh">
                  <div class="wjh-outer">
                      <input  @click.stop="showId" v-model="wjh.seventeen" placeholder="star_id" style="width: 100%;background-color: #eee" />
                      <button @click.stop="seventeen" type="info">提交</button>
                  </div>
              </div>







              <div v-if="item.code_number == 1051" class="input_container">
                  <span>topic_id:</span>
                  <input type="text" v-model="A" @click.stop="showId">
                  <div class="jump_to" @click.stop="redirectCtrl_jump(item.code_number,topic_id)">跳转</div>
              </div>

              <div v-if="item.code_number == 10009" class="input_container">
                  <span>userName:</span>
                  <input type="text"  v-model="B" @click.stop="showId">

                  <span>path:</span>
                  <input type="text" v-model="C" @click.stop="showId">

                  <div class="jump_to" @click.stop="xcx_jump(item.code_number,userName,path)">跳转</div>
              </div>

              <div v-if="item.code_number == 10008" class="input_container">
                  <span>activity_link:</span>
                  <input type="text" v-model="D" @click.stop="showId">
                  <div class="jump_to" @click.stop="wx_jump(item.code_number,activity_link)">跳转</div>
              </div>


              <!-- <div v-if="item.code_number == 1053" class="input_container" @click.stop="showId">
                  (暂时不做处理)
              </div> -->
          </li>
        </ul>
    </div>
</template>

<script>
import {codeList} from '../api/music.js'
import axios from 'axios'
export default {
    name: 'Center',
    data (){
        return{
            codeArr:[],
          wjh:{
              one: {one: '10010',two: 'kZkCCukLd3CHWMWZ'},
              two:'',
                three:{one:'', two:''},
              four: '',
              five: '',
              six: '',
              seven: '',
              eight: '',
              nine: '',
              ten: {
                  one: '',
                  two: ''
              },
              eleven: '',
              twelve: '',
              thirteen: '',
              fourteen: {
                  one: '',
                  two: ''
              },
              fifteen: {
                  one: '',
                  two: ''
              },
              sixteen: '',
              seventeen: ''
              },
          dsb:'',
          A:'',
          B:'',
          C:'',
          D:'',
          E:''

        }
    },
    created() {
       this.getCode();
       console.log('11:30!~')
    },
    methods: {
       getCode(){
           var _this = this;
           const Http = new XMLHttpRequest()
           Http.open('GET', 'https://api.psy-1.com/web/v1/cosleep/func/code')
           Http.send()
           Http.onreadystatechange = function(e) {
               console.log(JSON.parse(e.currentTarget.response))
               _this.codeArr = JSON.parse(e.currentTarget.response).data
           }
           /* axios.get('https://api.psy-1.com/web/v1/cosleep/func/code').then((data) => {
               console.log(data)
               this.codeArr = data.data.data
           }) */
       },
       redirectCtrl: function(code){
            callAppRouter('Redirect',{
                "code":code,
                // "close":1
            },function(err, result){})
        },
        showId: function(){
            console.log('showId')
        },
        redirectCtrl_jump: function(code,topic){
            callAppRouter('Redirect',{
                "code":code,
                "topic_id":this.A
            },function(err, result){})
        },
        reTag_jump: function(code,tag_id){
            callAppRouter('Redirect',{
                "code":code,
                "tag_id":this.dsb
            },function(err, result){})
        },

        xcx_jump: function(code,userName,path){
            callAppRouter('Redirect',{
                "code":code,
                "userName":this.B,
                "path": this.C

            },function(err, result){})
        },
        wx_jump: function(code,activity_link){
            callAppRouter('Redirect',{
                "code":code,
                "activity_link":this.D
            },function(err, result){})
        },
      topic_id(){

      },
      tag_id(){

      },
      activity_link(){

      },
      path(){

      },
      userName(){

      },


      //另起炉灶
      toDeepLink (code, tg) {
           console.log(code)
          if (this.wjh.eleven) {
              code += '&password=' + this.wjh.eleven
          }
          const myCode = code

          const that = this
          let createIframe = (function () {
              let iframe
              return function () {
                  if (iframe) {
                      return iframe
                  } else {
                      iframe = document.createElement('iframe')
                      iframe.style.display = 'none'
                      document.body.appendChild(iframe)
                      return iframe
                  }
              }
          })()

          let baseScheme = 'cosleep://'
          let createScheme = function (options) {
              let urlScheme = baseScheme
              for (let item in options) {
                  urlScheme = urlScheme + item + '=' + encodeURIComponent(options[item]) + '&'
              }
              urlScheme = urlScheme.substring(0, urlScheme.length - 1)
              return encodeURIComponent(urlScheme)
          }

          let openApp = function () {
              var localUrl = createScheme()
              var openIframe = createIframe()
              if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                  // 判断是否是ios,具体的判断函数自行百度
                  // alert("cosleep://deeplink?code=10010&music_detail_code="+that.code)

                  window.location.href = 'cosleep://deeplink?code=' + myCode
                  that.toDownLoad()

                  var loadDateTime = Date.now()
                  setTimeout(function () {
                      var timeOutDateTime = Date.now()
                      if (timeOutDateTime - loadDateTime < 1000) {
                          // window.location.href = "cosleep://deeplink?code=10010&music_detail_code="+that.code
                          // window.location.href = 'cosleep://deeplink?code=10010&music_detail_code=kZkCCukLd3CHWMWZ'
                          // console.log(decodeURI("cosleep://deeplink?code=10010&music_detail_code="+that.code +"&"+ encodeURI( that.musicDetail() )))

                          window.location.href = 'cosleep://deeplink?code=' + myCode
                          that.toDownLoad()
                      }
                  }, 25)
              } else if (!/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                  // 判断是否是android，具体的判断函数自行百度
                  /* if (false) {
                    // chrome浏览器用iframe打不开得直接去打开，算一个坑
                    window.location.href = localUrl
                  } else {
                    // 抛出你的scheme
                    openIframe.src = localUrl
                  } */
                  // 抛出你的scheme
                  openIframe.src = localUrl
                  setTimeout(function () {
                      // alert("cosleep://deeplink?code=10010&music_detail_code="+this.code)

                      window.location.href = 'cosleep://deeplink?code=' + myCode
                      that.toDownLoad()

                      // window.location.href = 'cosleep://deeplink?code=10010&music_detail_code=kZkCCukLd3CHWMWZ'
                  }, 500)
              } else {
                  // 主要是给winphone的用户准备的,实际都没测过，现在winphone不好找啊
                  openIframe.src = localUrl
                  setTimeout(function () {
                      // window.location.href = 'https://www.heartide.com/download/smallsleep'
                  }, 500)
              }
          }
          openApp()
      },

      //氛围脑波 播放音频组合
      one(){

        const that = this
        var  createIframe=(function(){
          var iframe;
          return function(){
            if(iframe){
              return iframe;
            }else{
              iframe = document.createElement('iframe');
              iframe.style.display = 'none';
              document.body.appendChild(iframe);
              return iframe;
            }
          }
        })()

        var baseScheme = "cosleep://"
        var createScheme=function(options){
          var urlScheme=baseScheme;
          for(var item in options){
            urlScheme=urlScheme+item + '=' + encodeURIComponent(options[item]) + "&";
          }
          urlScheme = urlScheme.substring(0, urlScheme.length - 1);
          return encodeURIComponent(urlScheme);
        }

        var openApp=function(){
          var localUrl=createScheme();
          var openIframe=createIframe();
          if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
            //判断是否是ios,具体的判断函数自行百度
            //alert("cosleep://deeplink?code=10010&music_detail_code="+that.code)
            //console.log(decodeURI("cosleep://deeplink?code=10010&music_detail_code="+that.code +"&"+ encodeURI( that.musicDetail() )))
            window.location.href = "cosleep://deeplink?code="+that.wjh.one.one+"&music_detail_code="+that.wjh.one.two // +"&"+ encodeURI( that.musicDetail() )
            var loadDateTime = Date.now();
            setTimeout(function () {
              var timeOutDateTime = Date.now();
              if (timeOutDateTime - loadDateTime < 1000) {
                // window.location.href = "cosleep://deeplink?code=10010&music_detail_code="+that.code
                //window.location.href = 'cosleep://deeplink?code=10010&music_detail_code=kZkCCukLd3CHWMWZ'
                //console.log(decodeURI("cosleep://deeplink?code=10010&music_detail_code="+that.code +"&"+ encodeURI( that.musicDetail() )))
                window.location.href = "cosleep://deeplink?code="+that.wjh.one.one+"&music_detail_code="+that.wjh.one.two // +"&"+ encodeURI( that.musicDetail() )
              }
            }, 25);
          }else if(!/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
            //判断是否是android，具体的判断函数自行百度
            if (false) {
              //chrome浏览器用iframe打不开得直接去打开，算一个坑
              window.location.href = localUrl;
            } else {
              //抛出你的scheme
              openIframe.src = localUrl;
            }
            setTimeout(function () {
              //alert("cosleep://deeplink?code=10010&music_detail_code="+this.code)
              //alert("cosleep://deeplink?code="+that.wjh.one.one+"&music_detail_code="+that.wjh.one.two)
              window.location.href = "cosleep://deeplink?code="+that.wjh.one.one+"&music_detail_code="+that.wjh.one.two
              //window.location.href = 'cosleep://deeplink?code=10010&music_detail_code=kZkCCukLd3CHWMWZ'
            }, 500);
          }else{
            //主要是给winphone的用户准备的,实际都没测过，现在winphone不好找啊
            openIframe.src = localUrl;
            setTimeout(function () {
              window.location.href = "https://www.heartide.com/download/smallsleep";
            }, 500);
          }
        }
        openApp()
      },
      //siri捷径
      two(){
        callAppRouter('Redirect',{
          "code":10011,
          // "close":1
        },function(err, result){})
      },

      three(){
         let pre = {
           "code":1026
         }
         if(this.wjh.three.one){
           pre.tag_id = this.wjh.three.one
         }
          if(this.wjh.three.two){
              pre.id = this.wjh.three.two
          }
        callAppRouter('Redirect',pre,function(err, result){})
      },

      four(){
        let pre = {
          "code":1017
        }
        if(this.wjh.four){
          pre.article_id = this.wjh.four
        }
        callAppRouter('Redirect',pre,function(err, result){})
      },

      five(){
        let pre = {
          "code":10012
        }
        if(this.wjh.five){
          pre.broadcast_id = this.wjh.five
        }
        callAppRouter('Redirect',pre,function(err, result){})
      },

      six () {
          let pre = {
              "code":10016
          }
          if(this.wjh.six){
              pre.prepare_id = this.wjh.six
          }
          callAppRouter('Redirect',pre,function(err, result){})
      },

      seven () {
          let pre = {
              "code":1052
          }
          if(this.wjh.seven){
              pre.category_id = this.wjh.seven
          }
          if (this.wjh.eight) {
              pre.voice_id = this.wjh.eight
          }
          callAppRouter('Redirect', pre, function(err, result){})
      },

      nine () {
          let pre = {
              "code": 1047
          }
          if(this.wjh.nine){
              pre.id = this.wjh.nine
          }
          callAppRouter('Redirect',pre,function(err, result){})
      },

      ten () {
          let pre = {
              "code": 10007
          }
          if(this.wjh.ten.one){
              pre.tag_id = this.wjh.ten.one
          }
          if (this.wjh.ten.two) {
              pre.recommend_id = this.wjh.ten.two
          }
          callAppRouter('Redirect',pre,function(err, result){})
      },

        twelve () {
            let pre = {
                "code": 10023
            }
            if(this.wjh.twelve){
                pre.id = this.wjh.twelve
            }
            callAppRouter('Redirect',pre,function(err, result){})
        },

        thirteen () {
            let pre = {
                "code": 10024
            }
            if(this.wjh.thirteen){
                pre.category_id = this.wjh.thirteen
            }
            callAppRouter('Redirect',pre,function(err, result){})
        },

        fourteen () {
            let pre = {
                "code": 10025
            }
            if(this.wjh.fourteen.one){
                pre.goods_id = this.wjh.fourteen.one
            }
            if (this.wjh.fourteen.two) {
                pre.goods_badge_text = this.wjh.fourteen.two
            }
            console.log('s')
            callAppRouter('Redirect',pre,function(err, result){})
        },

        fifteen () {
            let pre = {
                "code": 10017
            }
            if(this.wjh.fifteen.one){
                pre.goods_id = this.wjh.fifteen.one
            }
            if (this.wjh.fifteen.two) {
                pre.goods_badge_text = this.wjh.fifteen.two
            }
            callAppRouter('Redirect',pre,function(err, result){})
        },

      sixteen () {
        let pre = {
          "code": 1053
        }
        if(this.wjh.sixteen){
          pre.activity_link = this.wjh.sixteen
        }
        callAppRouter('Redirect',pre,function(err, result){})
      },

      seventeen () {
        let pre = {
          "code": 1053
        }
        if(this.wjh.seventeen){
          pre.star_id = this.wjh.seventeen
        }
        callAppRouter('Redirect',pre,function(err, result){})
      }








    }
}
</script>
<style>
    @import "../assets/public.css";
</style>

<style scoped>
  .wjh{

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;

    margin-bottom:10px;
  }
  .wjh-outer{
      width:90vw;
      border:1px solid #eee;
      padding:3px;
  }
  .wjh input{
      padding-left:20px;
      padding-right:20px;
  }
  *{
      box-sizing: border-box;
  }
</style>

