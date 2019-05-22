<template>
  <transition enter-active-class="animated fadeIn">
    <div class="subject">
      <div class="block-title">
        <img class="block-title-bg" :src="this.$root.style.answerBg">
        <div class="block-title-inner">{{ title }}</div>
        <div class="block-title-desc" v-if="!subjectImg">{{ content }}</div>
        <div class="block-title-image" v-if="subjectImg"><img :src="subjectImg" style="height: 100%" /></div>
        <img class="block-title-icon" src="../assets/cosleep_test_img_logo1@3x.png">
        <div class="block-title-page">{{ index + 1 }}/{{ maxLength }}</div>
        <div class="block-title-back" @click="preSelection" v-if="this.savePreIndex.length >= 2">上一题</div>
      </div>
      <div class="sj-list" :is="currentComponentName" @subjectADJ="subjectADJ" :choices="choices"></div>
    </div>
  </transition>
</template>

<script>
import SinglePic from '@/components/picList'
import SingleFont from '@/components/fontList'
import FontAndPic from '@/components/fontAndPic'

export default {
  name: 'Subject',
  data () {
    return {
      index: 0,
      selections: '',
      currentComponentName: '',
      title: '',
      content: '',
      maxLength: '',
      choices: [],
      score: 0,
      savePreIndex: [], // 保存上一个index 才可以返回上一题
      savePreScore: [], // 保存上一个score
      subjectImg: ''
    }
  },
  methods: {
    preSelection () { // 上一题
      this.subjectADJ(this.savePreIndex.pop(), this.savePreScore.pop(), true)
    },
    subjectADJ (toId = 0, score = 0, lastMode = false) {
      console.log(toId + '  ---  ')
      /* eslint-disable */
      isNaN(toId) ? '' : toId = parseInt(toId)
      try {
        navigator.vibrate(10)
      } catch {
      }
      if (toId === 'end') {
        this.score += score
        sessionStorage.setItem('score', this.score)
        this.$router.push('/rs')
        return
      } else if (toId === 'next') {
        if (!lastMode) {
          this.savePreIndex.push(this.index)
          this.savePreScore.push(this.score)
        }

        this.index += 1
        if (this.index === this.selections.length) { // 如果遇到最后一个还是next的话
          this.score += score
          sessionStorage.setItem('score', this.score)
          this.$router.push('/rs')
          return
        }
      } else {
        if (!lastMode) {
          this.savePreIndex.push(this.index)
          this.savePreScore.push(this.score)
        }
        this.index = toId
      }

      lastMode ? this.score = score : this.score += score
      console.log(this.index, '问题')
      const data = this.selections[this.index]
      this.currentComponentName = data.type
      this.title = data.title
      this.content = data.content
      this.choices = data.selections
      this.subjectImg = data.hasOwnProperty('subjectImg') ? data.subjectImg : ''
      console.log(data)
      console.log(score, toId)
    }
  },
  components: {
    SingleFont,
    SinglePic,
    FontAndPic
  },
  mounted () {
    setTimeout(() => {
      if (!this.$root.amountData) { // 测试需要
        this.$router.push('./')
      }
      this.selections = this.$root.amountData.selections
      this.maxLength = this.$root.amountData.selections.length
      this.subjectADJ()
    }, 0)
  }
}
</script>

<style lang="scss" scoped>
.subject {
  width: px2html(375px);
  min-height: max-content;
  min-height: px2html(667px);
  box-sizing: border-box;
  padding-bottom: px2html(64px);
  z-index: 1;
  position: relative;
  @include centerContent;
  justify-content: flex-start;
  .block-title {
    width: 100%;
    height: px2html(290px);
    position: relative;
    .block-title-image {
      margin-top: px2html(87px);
      margin-left: px2html(88px);
      position: absolute;
      width: px2html(205px);
      height: px2html(115px);
      @include centerContent;
      overflow: hidden;
    }
    .block-title-bg {
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
      z-index: -1;
    }
    .block-title-inner, .block-title-desc, .block-title-page, .block-title-back{
      color: rgba(0, 0, 0, 0.8);
      font-weight: bold;
      position: absolute;
      text-align: justify;
      width: px2html(290px);
    }
    .block-title-inner {
      font-size: px2html(18px);
      left: px2html(45px);
      top: px2html(35px);
    }
    .block-title-desc {
      z-index: 8;
      font-size: px2html(14px);
      left: px2html(62px);
      top: px2html(73px);
      width: px2html(255px);
    }
    .block-title-icon {
      width: px2html(45px);
      position: absolute;
      left: px2html(45px);
      top: px2html(205px);
    }
    .block-title-page {
      width: max-content;
      top: px2html(229px);
      right: px2html(40px);
      height: px2html(14px);
      font-size: px2html(14px);
    }
    .block-title-back {
      width: max-content;
      top: px2html(227px);
      right: px2html(90px);
      height: px2html(14px);
      font-size: px2html(14px);
      color: rgba(0, 0, 0, .5);
    }
  }
  .sj-list {
    @include centerContent;
    flex-grow: 1;
  }
}
</style>
