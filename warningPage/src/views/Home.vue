<template>
  <div class="home" :style="home_height">
    <p class="distance"><b>关于播放音频没有声音的问题</b></p>
    <p>如果您在升级3.7.1版本之后，出现了播放音频没声音的情况，请切换一下其他音频，然后再次点击之前的音频即可播放。</p>
    <img class="img-desc" src="../assets/ig.jpg">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      home_height: 0
    }
  },
  components: {
    HelloWorld
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  .home {
    width: px2html(375px);
    font-size: px2html(14px);
    text-align: justify;
    padding-left: px2html(20px);
    padding-right: px2html(20px);
    box-sizing: border-box;
    margin-top: px2html(20px);
    .distance {
      margin-bottom: px2html(20px);
      font-size: px2html(16px);
    }
    .img-desc {
      margin-top: px2html(20px);
      width: 100%;
    }
  }
</style>
