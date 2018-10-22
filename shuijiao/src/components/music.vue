<template>
    <div>
        <img ref="audio" @click="musicPlay" class="music" :src="tgImg" />
        <audio  src="" ref="zz" id="myaudio" controls hidden>
            <source  :src="musicPath" type="audio/mpeg" >
        </audio>
    </div>
</template>

<script>
    export default {
        name: "music",
        props:['onPath', 'offPath', 'musicPath'],
        data(){
            return {
                toggle: false,
                musicdom: document.getElementById('myaudio')
            }
        },
        computed:{
            tgImg(){
                let result = this.toggle //这仅仅是为了触发
                this.toggle ? result = this.$props.offPath : result = this.$props.onPath
                return result
            }
        },
        methods:{
            musicPlay(){
                this.dontBorderMeFUCKYOU()

                const musicdom = document.getElementById('myaudio')
                if(musicdom.paused) {
                    document.querySelector('.music').classList.add('rotate')
                    console.log(document.getElementById('myaudio'))
                    document.getElementById('myaudio').play()
                    console.log('fgh')
                    //musicdom.play()
                    //document.getElementById("myaudio").load()
                    this.toggle = true
                }else{
                    musicdom.pause()
                    document.querySelector('.music').classList.remove('rotate')
                    this.toggle = false
                }

            },
            rawPlay(){
                const music_dom = document.querySelector('#myaudio')
                if(music_dom.paused){
                    music_dom.play()
                    this.toggle =  true
                }
            },
            initMusic(){
                if(!this.$store.getters.isWeiXin){
                    if(  this.$store.getters.isApp   ){
                        console.log('??')
                        setTimeout(()=>{
                            this.rawPlay()
                        },500)


                    }
                }else{
                    document.addEventListener("WeixinJSBridgeReady", ()=>{
                        console.log('浏览器非苹果播放')
                            //this.musicPlay()
                        this.rawPlay()
                    }, false)
                }
            },
            dontBorderMeFUCKYOU(){
                localStorage.setItem('fuckyou','1')
            }
        },
        mounted(){

            const that = this
                this.initMusic()

            const musicdom = document.getElementById('myaudio')
            let s  =  false
            /*setTimeout(()=>{
                musicdom.addEventListener("canplaythrough",function(){
                    //that.initMusic()
                    console.log("加载完成！");
                    s = true
                },false);
            },500) */

            /*musicdom.addEventListener("error",function(){
                setTimeout(()=>{
                    console.log("加载失败！");
                    if(!s)location.reload();
                },5000)

            },false);*/




            localStorage.removeItem('fuckyou')



        }
    }
</script>

<style lang="scss" scoped>
    .music{
        width: px2html(30px);
        height: px2html(30px);
    }
</style>

<style>
    .rotate{
       // animation: rotate 7s infinite linear;
    }
    @keyframes rotate{
        0%{
            transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
        }
    }

</style>