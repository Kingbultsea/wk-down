<template>
  <transition enter-active-class="animated fadeIn">
  <div class="evaluation">
    <img :src="imgLink" style="opacity: 0.1;position: absolute;right: 1000px;bottom: 0px;">
    <div class="title">
      <div class="desc">{{tDesc}}</div>
      <div class="label">{{index + 1}}/7</div>
      <img class="img" :src="tBg" />
    </div>
    <div class="choice">
      <div class="list" v-for="(li, index) in choice" :index="index" @click="clickEvent" :key="index">{{li}}</div>
    </div>
  </div>
  </transition>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'evluation',
  data () {
    return {
      imgLink: 'https://images.weserv.nl/?url=' + (sessionStorage.getItem('avatar') || 'http://wx3.sinaimg.cn/mw690/006Zdy2vgy1g2h2dk8qw2j30za0u0ain.jpg'),
      index: 0,
      tDesc: '你目前是？',
      tBg: require('../assets/题目切图_slices/first@3x.png'),
      choice: ['A.学生党', 'B.上班族', 'C.自由职业'],
      clickBg: require('../assets/题目切图_slices/click@3x.png'),
      clickDefault: require('../assets/题目切图_slices/answer@3x.png'),
      busyClick: false,
      resultC: [],
      evData: [
        {
          title: '你目前是？',
          bg: require('../assets/题目切图_slices/first@3x.png'),
          choice: ['A.学生党', 'B.上班族', 'C.自由职业']
        },
        {
          title: '忙碌了一天，晚上你会通过哪种方式找回自我 ？',
          bg: require('../assets/题目切图_slices/second@3x.png'),
          choice: ['A.轻轻松松吃盘鸡，王者开黑上分。', 'B.熬夜追剧特别爽，一直追一直爽。', 'C.瑜伽跑步和养生，开启老年生活。', 'D.放松？不存在的，996加班学习ing。']
        },
        {
          title: '看了一眼时间，已经01:30了，你会 ？',
          bg: require('../assets/题目切图_slices/third@3x.png'),
          choice: ['A.去洗漱，睡觉觉。', 'B.没尽兴，继续玩。', 'C.还很早，发会呆。', 'D.继续熬，赶进度。']
        },
        {
          title: '熬了一晚上，第二天你是哪种状态 ？',
          bg: require('../assets/题目切图_slices/forth@3x.png'),
          choice: ['A.白天捧着保温杯，晚上继续熬。', 'B.休息三五天再熬，实在嗨不动。', 'C.好嗨哟，人生已达到高潮巅峰。', 'D.我是谁，我在哪，我要干什么。']
        },
        {
          title: '如果接到妈妈的电话，她会叮嘱你什么 ？',
          bg: require('../assets/题目切图_slices/fifth@3x.png'),
          choice: ['A.劝我别再加班了，担心我的身体健康。', 'B.劝我晚上早点睡，别老是熬夜玩游戏。', 'C.担心我学习太晚，让我每天早睡早起。', 'D.没什么可叮嘱的，就是和我聊聊家常。']
        },
        {
          title: '仅用眼睛找出入口9对应的出口',
          bg: require('../assets/题目切图_slices/sixth@3x.png'),
          choice: ['A.对应出口是A', 'B.对应出口是B', 'C.对应出口是C', 'D.对应出口是D']
        },
        {
          title: '对你来说，熬夜的资本是什么 ？',
          bg: require('../assets/题目切图_slices/seventh@3x.png'),
          choice: ['A.年轻就是资本，当然可以肆意挥霍。', 'B.姜还是老的辣，既能熬夜也会养生。', 'C.工资以论年薪，30万、100万……', 'D.要什么资本呢，纯粹就是想熬夜了。']
        }
      ]
    }
  },
  components: {

  },
  methods: {
    clickEvent (e) {
      if (this.busyClick) {
        return
      }
      this.busyClick = true
      this.index++
      this.resultC.push(e.target.getAttribute('index'))
      if (this.index === 7) {
        this.index--
        sessionStorage.setItem('result', JSON.stringify(this.resultC))
        this.$router.push('./r')
        return
      }
      e.target.style.background = `url(${this.clickBg})`
      e.target.style.backgroundSize = '100% 100%'
      // 修改
      const delay = navigator.userAgent.toLowerCase().match(/QQ/i)[0] === 'qq' ? 300 : 100
      setTimeout(() => {
        this.busyClick = false
        e.target.style.background = `url(${this.clickDefault})`
        e.target.style.backgroundSize = '100% 100%'
        this.tDesc = this.evData[this.index].title
        this.choice = this.evData[this.index].choice
        this.tBg = this.evData[this.index].bg
      }, delay)
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  .evaluation {
    width: px2html(375px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: px2html(550px);
    >.title {
      background: url("../assets/题目切图_slices/decorate@3x.png");
      width: px2html(307px);
      height: px2html(307px);
      background-size: 100% 100%;
      text-align: left;
      position: relative;
      >.desc {
        padding-top: px2html(36px);
        padding-left: px2html(48px);
        color: rgba(19, 19, 19, 1);
        font-size: px2html(18px);
        font-weight: 500;
        width: px2html(200px);
      }
      >.img {
        width: px2html(239px);
        padding-left: px2html(41px);
        position: relative;
        top: px2html(-4px);
      }
      >.label {
        position: absolute;
        right: px2html(25px);
        top: px2html(18px);
        font-size: px2html(10px);
        color: rgba(45, 45, 45, 1);
        font-weight: 400;
      }
    }
    >.choice {
      padding-top: px2html(10px);
      display: flex;
      min-height: px2html(220px);
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .list {
        width: px2html(304px);
        height: px2html(54px);
        background: url("../assets/题目切图_slices/answer@3x.png");
        background-size: 100% 100%;
        color: rgba(19, 19, 19, 1);
        font-size: px2html(15px);
        line-height: px2html(52px);
        text-align: left;
        text-indent: px2html(22px);
      }
    }
  }
</style>
