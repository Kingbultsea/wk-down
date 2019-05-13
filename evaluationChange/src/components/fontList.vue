<template>
  <div class="font-list">
    <div class="block" :style="{background: 'url(' + singleFont + ') 0% 0% / 100% 100%'}" v-for="(li, index) in choices" :key="index" @click="submitData(li.toId, li.score)">
      <div class="block-content">{{String.fromCharCode(65 + index)}}.{{ li.content }}</div>
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
      singleFont: this.$root.style.singleFont
    }
  },
  methods: {
    submitData (toId, score) {
      this.$emit('subjectADJ', toId, score)
      // 需要发送toId 还有score
    }
  },
  name: 'fontList',
  mounted () {
    console.log(this.$props.choices)
  }
}
</script>

<style lang="scss" scoped>
.font-list {
  width: 100%;
  min-height: px2html(313px);
  // @include centerContent;

  .block {
    width: 100%;
    height: px2html(65px);
    background: url("../assets/cosleep_item-photo_img_style01@3x.png");
    background-size: 100% 100%;
    position: relative;
    .block-content {
      font-size: px2html(14px);
      height: px2html(14px);
      line-height: px2html(14px);
      font-weight: 900;
      position: absolute;
      left: px2html(51px);
      top: px2html(23px);
    }
  }

}
</style>
