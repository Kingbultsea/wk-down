<template>
  <div class="pic-list">
    <div class="outer-block">
      <div class="block" :style="{background: 'url(' + singlePic + ') 0% 0% / 100% 100%'}" v-for="(li, index) in choices" :key="index" @click="submitData(li.toId, li.score)">
        <div class="block-title">{{String.fromCharCode(65 + index)}}.</div>
        <div class="block-pic">
          <img class="block-pic-content" :src="li.picUrl">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    choices: Array
  },
  data () {
    return {
      singlePic: this.$root.style.singlePic
    }
  },
  methods: {
    submitData (toId, score) {
      this.$emit('subjectADJ', toId, score)
      // 需要发送toId 还有score
    }
  },
  mounted () {
    console.log(
      this.choices
    )
  },
  name: 'picList'
}
</script>

<style lang="scss" scoped>
.pic-list {
  width: 100%;
  min-height: px2html(313px);
  @include centerAlign;
  .outer-block {
    width: px2html(300px);
    overflow: hidden;
    text-align: left;
    .block {
      width: px2html(150px);
      height: px2html(150px);
      background: url("../assets/cosleep_item-photo_img_style01@3x(1).png");
      background-size: 100% 100%;
      display: inline-block;
      position: relative;
      .block-title {
        font-style: px2html(14px);
        font-weight: 900;
        position: absolute;
        top: px2html(10px);
        left: px2html(21px);
      }
      .block-pic {
        position: absolute;
        top: px2html(30px);
        left: px2html(21px);
        width: px2html(114px);
        height: px2html(94px);
        overflow: hidden;
        border-radius: px2html(5px);
        @include centerAlign;
        .block-pic-content {
          width: 100%;
        }
      }
    }
  }
}
</style>
