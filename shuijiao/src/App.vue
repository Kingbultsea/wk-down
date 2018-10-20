<template>
  <div id="app">
   <router-view/>

    <div class="bottom">
      <div class="bottom-img">
        <img  class='bottom-hehe' src="./assets/hehe.png"/>
      </div>
      <p class="bottom-center">小睡眠，不负休憩好时光</p>
      <a class="dl"  target="view_window" href="https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic" >
        <p class="bottom-dl">下载</p>
      </a>
    </div>

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


  export default {
      data(){
          return {
              end: false
          }
      },
      methods:{
          close(){
              this.end = !this.end
              this.$children[0].close()
          }
      }
  }
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #fff;
  position: relative;
  //overflow-y:scroll;
  height:px2html(667px);
  width:px2html(200PX);
  overflow:hidden;

  -ms-touch-action: none;

  /* Prevent the callout on tap-hold and text selection */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* Prevent text resize on orientation change, useful for web-apps */
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  -ms-text-size-adjust: none;
  -o-text-size-adjust: none;
  text-size-adjust: none;

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
<style>
  a,a:link,a:visited,a:hover,a:active{
    text-decoration: none;
    color:inherit;
  }
  body{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: rgb(146, 204, 202);
    position:fixed;
    width:100%;
    height:100%;
  }
  *{
    padding: 0px;
    margin: 0px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
</style>
