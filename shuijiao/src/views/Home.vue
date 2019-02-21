<template>
  <div class="home">
    <img class="top-img" :src="bg_img"/>
    <img class="title1" :src="title_img"/>
    <music class="music" :offPath="offPath" :onPath="onPath" ></music>
    <div class="music-count">{{two}}</div>
    <span></span>
    <div class="danmu">
      <div mark="1" v-for="li in danmu_list" :style="{top:li.top}"  @click="fuck" class=" danmu-list moveLeftAnimatin">
        <img class="danmu-list-touxiang" :src="li.img"/>
        <p class="danmu-list-sentance">{{li.info}}</p>
      </div>
    </div>
    <!--<music class="music" :musicPath="musicPath" :offPath="offPath" :onPath="onPath" />-->

    <div class="desc">
      <img @click="zanClick" class="dianzan-img move-top" src="https://res.psy-1.com/music/voice/tinysleep_sheep_like2-7PqzI3Mc7kjzzeCKNSP4.png" />
      <div class="dianzan move-top">已有<span class="inner">{{dianzan}}</span>人点赞</div>


      <div class="top">
        <!--<img class="ig" src="../images/f-day_img_transform.png"/>-->
        <div class="swa" v-html= "music_intro">

        </div>
        <div class="xwa">

        </div>

        <div class="xx">

            <img class="xx-img" src="https://res.psy-1.com/music/voice/tinysleep_sheep_bottom_line2-buAPsmFJlLt7NdM4Nd34-MmpN6znmAth1TfIlPQk3.png" />

          <img  class='xx-hehe' src="../assets/hehe.png"/>
        </div>

      </div>

    </div>





  </div>



</template>

<script>
// @ is an alias to /src
require('@/components/sizeRem.js')
import BScroll from 'better-scroll'
import music from '@/components/music.vue'
import shareTool from '@/components/shareandgetname.js'


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

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

export default {
  name: 'home',
    data(){
        return {
            offPath: 'https://res.psy-1.com/music/voice/tinysleep_sheep_stop2-jwlPPhdRF58oErMNroV2.png',
            onPath: 'https://res.psy-1.com/music/voice/tinysleep_sheep_play2-BHgSoY5B6WFClAfSEh2i.png',
            dianzan:1000,
            danmu_list:[],
            max:30,
            tips_toggle:false,
            one:1,
            two:'',
            music_intro: '',
            func_id:getQueryString('func_id'),
            func_type:getQueryString('func_type'),
            sharecode:getQueryString('sharecode'),
            url:'https://api.debug.psy-1.com',
            get_danmu_data: '',
            end: false,
            share_title:'',
            share_desc:'',
            share_img:'',
            share_bg:'',
            bg_img:'',
            title_img:''


        }
    },
  components: {
    music
  },
    methods:{
      changeBG(c){
          document.querySelector('#app').style.backgroundColor = c
      },
        changeTitle(){

        },
        changeCenter(){

        },
      apiInit(url){

      },
      apiDianZan(url){
          $.get(url + '/web/v1/smallslleep/music/voteData',{func_id:this.func_id, func_type:this.func_type, sharecode:this.sharecode}, (data)=>{
          //const getData = JSON.parse(data.data)
              let mark = 0
              if(localStorage.getItem('mark')){
                  mark = parseInt( localStorage.getItem('mark') )
              }
          this.dianzan = data.data.share_reg_count +mark
          this.music_intro = data.data.music_data.music_intro
              let z = data.data.music_data.music_intro.replace(/\n/g,'</p><p>')
              const result = '<p>' + z
              this.music_intro = result
              console.log(data.data.music_data)

              this.share_desc = data.data.music_data.share_desc
              this.share_title = data.data.music_data.share_title
              document.title = data.data.music_data.share_title
              this.share_img = data.data.music_data.share_imgurl
              this.bg_img = data.data.music_data.page_bg_img
              document.querySelector('body').style.backgroundColor = this.bg_img
              this.title_img = data.data.music_data.page_title_img
              this.changeBG(data.data.music_data.page_bg_color)

              this.musicPath = data.data.music_data.musicurl_try
              document.querySelector('#myaudio').setAttribute('src',data.data.music_data.musicurl_try)

              const danmudata = eval('(' +data.data.music_data.share_danmu+')')
              console.log(danmudata)
              this.get_danmu_data = danmudata



              //share
              const share = new shareTool({pic:this.share_img, url:window.location.href.split('#')[0], title:this.share_title, desc:this.share_desc})
              share.rawWeiXinShare('https://api.debug.psy-1.com')
              if(this.$store.getters.isApp)  share.appInit()


          })
      },
        apiDianZanClick(url){
          const that =this
            $.post(url + '/web/v1/smallslleep/music/shareActiveVote',{func_id:this.func_id, func_type:this.func_type, sharecode:this.sharecode}, (data)=>{console.log('jq都不行？');
                if(data.status == 1){
                    console.log('zaaaa')
                    this.dianzan += 1
                }else{
                    this.$parent.tips_toggle = true
                    setTimeout(()=>{
                        this.$parent.tips_toggle = false
                    },1000)
                }
            })
        },
      close(){
          this.end = !this.end
          this.$children[0].musicPlay()
          this.someThingShow()
          //document.querySelector('#myaudio').play()
      },
        shuaXinZan(url){
            $.post(url + '/web/v1/smallslleep/music/shareActiveView',{func_id:this.func_id, func_type:this.func_type, sharecode:this.sharecode}, (data)=>{console.log('jq都不行？asdsasdas');

            })
        },
      zanClick(){
          this.apiDianZanClick(this.url)
          //this.shuaXinZan(this.url)





      },
        fuck(e){
          //e.target.classList.remove('moveLeftAnimatin')
            e.preventDefault()
            if(e.target.getAttribute("mark")){

                console.log(e.target)

                if( e.target.getAttribute("mark") == 1 ){
                    const save =getComputedStyle( e.target ).transform
                    e.target.style.transform = save
                    e.target.setAttribute("mark","0");
                    e.target.classList.remove('moveLeftAnimatin')
                    setTimeout(()=>{
                        e.target.classList.add('moveLeftAnimatin')
                        e.target.setAttribute("mark","1");
                    },2000)
                }else{


                }
            }else{

                console.log(e.target.parentNode)
                if( e.target.parentNode.getAttribute("mark") == 1 ){
                    const save = getComputedStyle( e.target.parentNode ).transform
                    console.log(save)
                    //alert(save)
                    e.target.parentNode.style.transform = save
                    e.target.parentNode.setAttribute("mark","0");
                    e.target.parentNode.classList.remove('moveLeftAnimatin')
                    setTimeout(()=>{
                        e.target.parentNode.classList.add('moveLeftAnimatin')
                        e.target.parentNode.setAttribute("mark","1");
                    },2000)
                }else{


                }
            }


        },
        danmuXiTong(){
           const suji = this.get_danmu_data[randomNum(0,9)]
          const duix = {info:'九嶷山',img:'',top:'10%'}
          duix.top = randomNum(0,100) + '%'
            duix.info = suji.info
            duix.img = suji.img
            this.danmu_list.push(duix)
        },
        musicCount(){
           const a = Math.round(document.querySelector('#myaudio').duration) - Math.round(document.querySelector('#myaudio').currentTime)
            this.two = this.formatSeconds(    a   )
      },
        formatSeconds(value) {
            var secondTime = parseInt(value);// 秒
            var minuteTime = 0;// 分
            var hourTime = 0;// 小时
            if(secondTime > 60) {//如果秒数大于60，将秒数转换成整数
                //获取分钟，除以60取整数，得到整数分钟
                minuteTime = parseInt(secondTime / 60);
                //获取秒数，秒数取佘，得到整数秒数
                secondTime = parseInt(secondTime % 60);
                //如果分钟大于60，将分钟转换成小时
                if(minuteTime > 60) {
                    //获取小时，获取分钟除以60，得到整数小时
                    hourTime = parseInt(minuteTime / 60);
                    //获取小时后取佘的分，获取分钟除以60取佘的分
                    minuteTime = parseInt(minuteTime % 60);
                }
            }
            let mark = ''
            if(parseInt(secondTime) < 10){
                mark = '0'
            }
            var result = mark + parseInt(secondTime) + " ";

            let mark2 = '0'

            result = mark2 + parseInt(minuteTime) + " : " + result;

            if(hourTime > 0) {
                result = "" + parseInt(hourTime) + "小时" + result;
            }
            return  result;
        },
        someThingShow(){
            let c =  new Promise((resolve,reject)=>{
                function inter(){
                    if(document.querySelector('#myaudio').ended){
                        resolve()
                        clearInterval(z)

                    }
                }
                const z = setInterval(inter,1000)

            })

            c.then(()=>{
                this.$parent.end = true;
            })
        }
    },
    created(){
        this.apiDianZan('https://api.debug.psy-1.com')
        this.shuaXinZan('https://api.debug.psy-1.com')
    },
  mounted(){


      localStorage.removeItem('mark')

      let a
      const that = this
      function zz(){
          that.danmuXiTong.apply(that)
          that.max -=1

          if(that.max < 1){
              clearInterval(a)
              setTimeout(()=>{
                  that.danmu_list = []
                  a = setInterval(zz,2000)
                  that.max = 30
              },7000)
          }


      }
      a = setInterval(zz,4000)




      this.someThingShow()

      setInterval(()=>{
          this.musicCount()
      },1000)



     /* setTimeout(()=>{
          this.$children[0].musicPlay()
      },200) */


      //this.$children[0].musicPlay()
      let wrapper = document.querySelector('#app')
      let scroll = new BScroll(wrapper, {
          click: true,
          bounce: {
              top: false,
              bottom: false,
              left: false,
              right: false
          }
      })

      console.log(this.func_id)



  }
}
</script>

<style lang="scss" scoped>
  .home{
    position: relative;
    height:px2html(1280px);
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
    .music {
      position:fixed;
      z-index:9999;
      right: px2html(10px);
      top: px2html(15px);
    }
    .title1{
      width:px2html(250px);
      position:absolute;
      transform: translateX(50%);
      right:50%;
      z-index: 3;
      top:px2html(30px);
    }

    .top-img{
      width:px2html(375px);
      position:absolute;
      top:0px;
      left:0px;
    }
    .danmu{
      backrgound:red;
      position:fixed;
      z-index:999;
      font-size:px2html(8px);
      height:px2html(200px);
      width:px2html(375px);
      .danmu-list{
        position:absolute;

        background:rgba(0, 0, 0, 0.5);
        display:flex;
        align-items: center;
        border-radius:px2html(30px);
        //top:100%;
        right:px2html(-375px);
        //transform: translateX(100%);

        .danmu-list-sentance{
          font-size:px2html(12px);
          padding-right:px2html(10px);
          color:#fff;
        }
        .danmu-list-touxiang{
          height:px2html(30px);
          width:px2html(30px);
          padding:px2html(5px);
          border-radius:50%;
        }
      }
    }
    .desc{
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: px2html(597px);
      width:px2html(375px);
      top:px2html(480px);

      .dianzan {
        font-size: px2html(10px);
        color: #fff;
        padding-top:px2html(20px);
        .inner {
          margin-left: px2html(5px);
          margin-right: px2html(5px);
          font-weight: 900;
          font-size: px2html(17px);
        }
      }

      .move-top{
        position:relative;
        top:px2html(-60px);
      }
      .dianzan-img{
        width:px2html(60px);
        z-index:999;
      }

      .top {
        width: px2html(340px);
        height: px2html(554px);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size:px2html(13px);
        color:#fff;
        font-weight: 900;
        text-align:center;
        position:relative;
        top: px2html(80px);
        .swa{
          position:relative;
          top: px2html(-48px);
          padding-bottom:px2html(20px);
        }
        .xwa{
          position:relative;
          top: px2html(-40px);
          p{
            padding:px2html(1px);
          }
        }
        .xx{
          width:px2html(375px);
          //height:px2html(6350px);
          position:relative;
          top:px2html(-80px);

          .xx-img{
            width:100%;
            //height:px2html(50px);
          }
          .xx-hehe{
            height:px2html(90px);
          }
        }

        .ig{
          width:px2html(300px);
          height:px2html(300px);
          position:relative;
          top: px2html(-20px);
        }
      }

    }

    .tips{
      position:fixed;
      top:50%;
      right:50%;
      transform:translateX(50%) translateY(-50%);
      font-size:px2html(10px);
      background:rgba(0,0,0,0.5);
      color:#fff;
      padding:px2html(8px);
      border-radius:px2html(10px);
      padding-left:px2html(15px);
      padding-right:px2html(15px);
      //width:px2html(375px);
    }
    .music {
      position:absolute;
      z-index:9999;
      right: 50%;
      top: px2html(190px);
      transform: translateX(50%);
    }
    .music-count{
      position:absolute;
      right: 50%;
      top: px2html(230px);
      font-size:px2html(10px);
      transform: translateX(50%);
      color:#fff
    }



  }
</style>
<style lang="scss">
  .swa{
    p{
      padding:px2html(3px);
      margin-top:px2html(3px);
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
    /* color: rgb(23,23,23);*/

  }


  .moveLeftAnimatin{
    animation: move ease-in 8s forwards;
    animation-fill-mode: forwards;
  }
  @keyframes move{
    100% {
      transform: translateX( px2html(-875px) );
    }
  }


  .stop{
    animation-play-state:paused;
  }
  .run{
    animation-play-state:running;
  }
</style>
