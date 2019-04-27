<template>
    <div class="DownLoadPage">

        <img class="ig" src="../assets/img_pic2@3x.png"/>
        <a target="view_window" href="https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic">
            <!--<Button id="dl" class="button" >为老爸找回好梦</Button>-->
          <div id="dl" class="button">立刻下载</div>

        </a>

    </div>
</template>

<script>
/* eslint-disable */
import Tool from '../js/tool.js'
export default {
    name: "DownLoadPage",
    components:{
    },
    mounted(){
        if(Tool.is_cosleep()){
            document.querySelector('#dl').style.display = 'none'
        }
    }
}
</script>

<style lang="scss" scoped>
    .DownLoadPage {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;
        justify-content: space-around;

            .ig{
                width:px2html(320px);
                height:px2html(400px);
                padding-top: px2html(52px);
            }

        .button {
          width: px2html(209px);
          height: px2html(52px);
          background-image: url("../assets/03.gif");
          background-size: 100% 100%;
          text-align: center;
          font-size: px2html(15px);
          color: rgba(43, 43, 43, 1);
          font-size: px2html(15px);
          line-height: px2html(50px);
          overflow: hidden;
          font-weight: 700;
        }
    }
</style>
