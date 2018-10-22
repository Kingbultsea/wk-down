<template>
    <div>
        <img ref="audio" @click="musicPlay" class="music" :src="tgImg" />
        <audio ref="miao" src="" ref="zz" id="myaudio" controls hidden>
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
            initMusic(){
                if(!this.$store.getters.isWeiXin){
                    if(  this.$store.getters.isApp   ){
                        console.log('??')
                        this.$refs.miao.play()

                            //this.musicPlay()

                    }
                }else{
                    document.addEventListener("WeixinJSBridgeReady", ()=>{
                        console.log('浏览器非苹果播放')
                            this.musicPlay()

                    }, false)
                }
            },
            dontBorderMeFUCKYOU(){
                localStorage.setItem('fuckyou','1')
            }
        },
        mounted(){
            setTimeout(()=>{
                this.initMusic()
            },1000)



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