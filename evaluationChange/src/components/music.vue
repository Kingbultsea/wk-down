<template>
    <div>
        <img ref="audio" @click="musicPlay" class="music" :src="tgImg" />
        <audio  :src="musicPath" ref="zz" id="myaudio" controls hidden :loop="loop">
            <source  :src="musicPath" type="audio/mpeg" >
        </audio>
    </div>
</template>

<script>

export default {
  name: 'music',
  props: ['onPath', 'offPath', 'musicPath'],
  data () {
    return {
      toggle: true,
      loop: false
    }
  },
  computed: {
    tgImg () {
      let result = this.toggle // 这仅仅是为了触发
      this.toggle ? result = this.$props.offPath : result = this.$props.onPath
      return result
    }
  },
  methods: {
    musicPlay () {
      this.dontBorderMeFUCKYOU()
      try {
        if (document.getElementById('myaudio').paused) {}
      } catch (e) {
        if (this.toggle === true) {
          document.getElementById('myaudio').play()
          document.querySelector('.light').classList.add('light-go')
          this.toggle = false
        } else {
          document.getElementById('myaudio').pause()
          document.querySelector('.light').classList.remove('light-go')
          this.toggle = true
        }
      }
      const musicdom = document.getElementById('myaudio')

      console.log(musicdom)

      if (musicdom.paused) {
        console.log(musicdom)
        musicdom.play()
        document.querySelector('#myaudio').play()
        // document.querySelector('.music').classList.add('rotate')
        // musicdom.play()
        if (!musicdom.paused) {
          document.querySelector('.light').classList.add('light-go')
          this.toggle = false
        }
      } else {
        musicdom.pause()
        // document.querySelector('.music').classList.remove('rotate')
        if (musicdom.paused) {
          document.querySelector('.light').classList.remove('light-go')
          this.toggle = true
        }
      }
    },
    rawPlay () {
      const music_dom = document.querySelector('#myaudio')
      if (music_dom.paused) {
        music_dom.play()
        if (!music_dom.paused) {
          document.querySelector('.light').classList.add('light-go')
          this.toggle = false
        }
      }
    },
    rawPause () {
      const music_dom = document.querySelector('#myaudio')
      if (!music_dom.paused) {
        const music_dom = document.querySelector('#myaudio')
        music_dom.pause()
        if (music_dom.paused) {
          this.toggle = true
        }
      }
    },
    initMusic () {
      if (!this.$store.getters.isWeiXin) {
        if (this.$store.getters.isApp) {
          console.log('asdasdsad')
          this.musicCanPlaythrough()
        }
      } else {
        document.addEventListener('WeixinJSBridgeReady', () => {
          console.log('微信兄弟！')
          // this.musicCanPlaythrough()
          this.musicCanPlaythrough()
          this.rawPlay()
          console.log('??dasdasdasdas')
        }, false)
      }
    },
    musicCanPlaythrough () {
      console.log('asdasdsssb')
      // setTimeout(this.rawPlay,1000)
      const a = function promiseForBoolean (obj = {}) {
        let interval; let promise; let save = {}
        Object.assign(save, obj)
        const func = (resolve) => {
          if (obj.boolean === !save.boolean) {
            clearInterval(interval)
            resolve()
          }
        }
        promise = new Promise((resolve, reject) => {
          interval = setInterval(func.bind(null, resolve), 1000)
        })
        return promise
      }

      // a(get).then(this.rawPlay)
      // wjhTool.musicCount(100)
      // this.rawPlay()
      // 使用方法 外部音乐准备好了 get get.boolean = false  然后改成true 那我为什么不直接rawpaly? 哦 因为是initWeiXin启动的方法，但是我又不是真正准备好了 懂了。
    },
    dontBorderMeFUCKYOU () {
      localStorage.setItem('fuckyou', '1')
    }
  },
  mounted () {
    this.initMusic()
    localStorage.removeItem('fuckyou')
  }
}
</script>

<style lang="scss" scoped>
    .music{
        width: px2html(40px);
        height: px2html(40px);
    }
</style>

<style>
    .rotate{
        animation: rotate 7s infinite linear;
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
