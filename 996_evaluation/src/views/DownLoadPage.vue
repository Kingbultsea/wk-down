<template>
    <div class="DownLoadPage">

        <img class="ig" src="../assets/img_pic2@3x.png"/>
        <a target="view_window" href="https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic">
            <!--<Button id="dl" class="button" >为老爸找回好梦</Button>-->
            <img   id="dl" class="button"  src="../assets/btn_download@3x.png">
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

        .button{
            position: relative;
            z-index:9999;
            font-size:px2html(15px);
            font-weight:700;
            color: #381e12;
            padding-top: px2html(40px);
            height:px2html(39px);
        }
    }
</style>
