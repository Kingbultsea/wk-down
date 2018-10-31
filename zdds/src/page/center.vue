<template>
    <div>
        <!-- <div class="all_code button_active" @click="getCode">
            点击获取
        </div> -->









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


              <div v-if="item.code_number == 10007" class="input_container">
                  <span>tag_id:</span>
                  <input type="text" v-model="dsb" @click.stop="showId">
                  <div class="jump_to" @click.stop="reTag_jump(item.code_number,tag_id)">跳转</div>
              </div>

              <div v-if="item.code_number == 1051" class="input_container">
                  <span>topic_id:</span>
                  <input type="text"  @click.stop="showId">
                  <div class="jump_to" @click.stop="redirectCtrl_jump(item.code_number,topic_id)">跳转</div>
              </div>

              <div v-if="item.code_number == 10009" class="input_container">
                  <span>userName:</span>
                  <input type="text"  @click.stop="showId">

                  <span>path:</span>
                  <input type="text"  @click.stop="showId">

                  <div class="jump_to" @click.stop="xcx_jump(item.code_number,userName,path)">跳转</div>
              </div>

              <div v-if="item.code_number == 10008" class="input_container">
                  <span>activity_link:</span>
                  <input type="text"  @click.stop="showId">
                  <div class="jump_to" @click.stop="wx_jump(item.code_number,activity_link)">跳转</div>
              </div>


              <div v-if="item.code_number == 1053" class="input_container" @click.stop="showId">
                  (暂时不做处理)
              </div>
          </li>
        </ul>
    </div>
</template>

<script>
import {codeList} from '../api/music.js'
export default {
    name: 'Center',
    data (){
        return{
            codeArr:[],
          wjh:{
              one: {one: '10010',two: 'kZkCCukLd3CHWMWZ'},
              two:'',
                three:{one:''},
            four: '',
            five:''
              },
          dsb:''

        }
    },
    created() {
       this.getCode();
    },
    methods: {
       getCode(){
           var _this = this;
           codeList().then(response => {
               console.log(response)
               _this.codeArr = response.data.data
               console.log(_this.codeArr)
           })
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
                "topic_id":topic
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
                "userName":userName,
                "path": path

            },function(err, result){})
        },
        wx_jump: function(code,activity_link){
            callAppRouter('Redirect',{
                "code":code,
                "activity_link":activity_link
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
      }







    }
}
</script>
<style>
    @import "../assets/public.css";
</style>

<style lang="scss" scoped>
  .wjh{
    *{
      box-sizing: border-box;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    .wjh-outer{
      width:90vw;
      border:1px solid #eee;
      padding:3px;
    }
    input{
      padding-left:20px;
      padding-right:20px;
    }
    margin-bottom:10px;
  }
</style>

