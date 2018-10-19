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

      <div class="bottom">
        <div class="bottom-img">
          <img  class='bottom-hehe' src="../assets/hehe.png"/>
        </div>
        <p class="bottom-center">小睡眠，不负休憩好时光</p>
        <a class="dl"  target="view_window" href="https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic" >
        <p class="bottom-dl">下载</p>
        </a>
      </div>
    </div>

    <transition name="fade">
      <div v-if="tips_toggle" class="tips">点一次就好，不要太贪心哦~</div>
    </transition>

    <div class="end" v-if="end">
      <div class="outer">
        <img class="end-bg" src="https://webres.psy-1.com/sgy/dist/static/img/tinysleep_sheep_window_bg.fbc1ed4.png" />
        <p class="one-p">试听结束</p>
        <p class="two-p">想听完整版？</p>
        <a class="dl"  target="view_window" href="https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic" >
          <p class="three-p">去下载小睡眠</p>
        </a>
        <div @click="close" class="close"></div>
      </div>

    </div>


  </div>



</template>

<script>
// @ is an alias to /src
require('@/components/sizeRem.js')
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

export default {
  name: 'home',
    data(){
        return {
            offPath: 'https://res.psy-1.com/music/voice/tinysleep_sheep_stop2-jwlPPhdRF58oErMNroV2.png',
            onPath: 'https://res.psy-1.com/music/voice/tinysleep_sheep_play2-BHgSoY5B6WFClAfSEh2i.png',
            dianzan:1000,
            danmu_list:[],
            max:25,
            tips_toggle:false,
            one:1,
            two:'01 : 12',
            music_intro: '',
            func_id:'10012',
            func_type:'4',
            sharecode:'sharecode=b7e7a268e5c374ce65b72a5f4af686a6a28ab369',
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
              this.share_img = data.data.music_data.share_imgurl
              this.bg_img = data.data.music_data.page_bg_img
              this.title_img = data.data.music_data.page_title_img
              this.changeBG(data.data.music_data.page_bg_color)

              this.musicPath = data.data.music_data.musicurl_try
              //document.querySelector('#myaudio').setAttribute('src',data.data.music_data.musicurl_try)

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
            $.get(url + '/web/v1/smallslleep/music/voteData',{func_id:this.func_id, func_type:this.func_type, sharecode:this.sharecode}, (data)=>{console.log('jq都不行？');

            })
        },
      close(){
          this.end = !this.end
          this.$children[0].musicPlay()
          this.someThingShow()
          //document.querySelector('#myaudio').play()
      },
      zanClick(){
          this.apiDianZanClick(this.url)
          if(!localStorage.getItem('mark')){
              this.dianzan += 1
              localStorage.setItem('mark','1')
          }else{
              this.tips_toggle = true
              setTimeout(()=>{
                  this.tips_toggle = false
              },1000)
          }

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
           const a = 72 - Math.round(document.querySelector('#myaudio').currentTime)
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
                this.end = true;
            })
        }
    },
    created(){
        this.apiDianZan('https://api.debug.psy-1.com')
    },
  mounted(){
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
                  that.max = 15
              },7000)
          }


      }
      a = setInterval(zz,2000)




      this.someThingShow()

      setInterval(()=>{
          this.musicCount()
      },1000)

     /* setTimeout(()=>{
          this.$children[0].musicPlay()
      },200) */


      //this.$children[0].musicPlay()

  }
}
</script>

<style lang="scss" scoped>
  .home{
    position: relative;
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
        right:px2html(-200px);
        transform: translateX(100%);

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
    .bottom{
      height:px2html(40px);
      //overflow:hidden;
      background:rgba(0,0,0,0.5);
      width:px2html(375px);
      position:fixed;
      bottom:0%;

      font-size:px2html(13px);
      color:#fff;
      .bottom-img{
        width:px2html(60px);
        position:relative;
        overflow:hidden;
        position:absolute;
        height:px2html(51px);
        left:px2html(10px);
        top:px2html(-20px);
        .bottom-hehe{
          position:absolute;
          height:px2html(90px);
          left:px2html(-40px);
          top:px2html(-2px);
          z-index:999;
        }
      }


      .bottom-center{
        position:absolute;
        right:50%;
        top:50%;
        transform: translateX(50%) translateY(-50%);
        color:skyblue;
      }
      .bottom-dl{
        position:absolute;
        right:px2html(30px);
        top:50%;
        border:1px #fff solid;
        padding:px2html(10px);
        padding-top:px2html(1px);
        padding-bottom:px2html(1px);
        border-radius:px2html(8px);
        transform: translateX(50%) translateY(-50%);
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

    .end{
      width:100%;
      height:100%;
      background:#6b6ba75c;
      position:fixed;
      top:0;
      left:0;
      z-index:10000;
      background-color: rgba(146, 204, 202,0.5);
      .outer{
        position:absolute;
        top:45%;
        left:50%;
        font-size:px2html(13px);
        transform: translateX(-50%) translateY(-50%);
        display:flex;
        flex-direction:column;
        align-items: center;
        .end-bg{
          width:px2html(300px);
        }
        .one-p{
          position:relative;
          top:px2html(-160px);
          font-size:px2html(18px);
          color:skyblue;
          font-weight:900;
        }
        .two-p{
          position:relative;
          top:px2html(-120px);
          color:skyblue;
        }
        .three-p{
          position:relative;
          top:px2html(-110px);
          padding:px2html(3px);
          background:skyblue;
          width:px2html(100px);
          color:#fff;
          border-radius:px2html(10px);
        }
        .close{
          position:absolute;
          //background:red;
          width:px2html(80px);
          height:px2html(90px);
          right:px2html(5px);
          top:0%;
        }
      }

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
    animation: move ease-in 4s forwards;
    animation-fill-mode: forwards;
  }
  @keyframes move{
    0%{
      transform: translateX( 50% );
    }
    100% {
      transform: translateX( px2html(-575px) );
    }
  }


  .stop{
    animation-play-state:paused;
  }
  .run{
    animation-play-state:running;
  }
</style>
