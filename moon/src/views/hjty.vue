<template>
    <div class="result-download">
        <img  src="../images/dsd.png"/>
        <div class="background" >
            <p>月下酣眠，暖声陪伴。</p> <p>梦醒时分，记录睡眠。</p> <p>小睡眠App让你拥有好睡眠！</p>
            <a id="dw" href="https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic">
                <bt>立刻下载</bt>
            </a>
        </div>
    </div>
</template>

<script>
    import bt from '../components/button.vue'
    import Tool from '@/components/tool.js'
    export default {
        name: "hjty",
        components: {
            bt
        },
        mounted(){
            if(Tool.is_cosleep() ){
                document.getElementById('dw').style.display = 'none'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @function px2html($px){
        $rem: 37.5px;
        @return ($px / $rem) + rem;
    }

    .result-download {
        //display:flex;
        height:100vh;
        width:100vw;
        position:fixed;
        background-color: #F59A55;

        &>img{
           width:px2html(375px);
           height:px2html(370px);
        }
        .background{
            position:absolute;
            //position:relative;
            //z-index:9999;
            //background-color: #F59A55;
            //height:300px;
            //flex-grow:1;
            display:flex;
            flex-direction: column;
            align-items: center;
            top:px2html(360px);
            width:px2html(375px);
            height:px2html(297px);
            font-size:px2html(12px);
            &>p{
                color:#8B572A;
                padding-bottom:px2html(15px);
            }
        }
    }
</style>