<template>
  <div class="success">
    <div class="title">报名成功</div>
    <div class="desc">请添加微信进入报名审核群审核成功后我们将 会在3月21日前通过电话或微信（yoning-wu） 的方式进行通知</div>
    <img class="QRblock" src="../assets/二维码.png">
    <div class="more" @click="toDeatil">更多详情</div>
    <img class="bg" src="../assets/背景.png">
  </div>
</template>

<script>
export default {
  name: 'success',
  methods: {
    toDeatil () {
      this.$router.push('/detail')
    }
  }
}
</script>

<style lang="scss" scoped>
  .success {
    width: px2html(375px);
    display: flex;
    align-items: center;
    flex-direction: column;
    .title {
      padding-top: px2html(56px);
      color: rgba(243, 169, 81, 1);
      font-size: px2html(30px);
      font-weight: 900;
      position: relative;
      z-index: 2;
    }
    .desc {
      text-align: justify;
      width: px2html(273px);
      padding-top: px2html(30px);
      font-size: px2html(13px);
      color: rgba(255, 255, 255, 1);
      position: relative;
      z-index: 2;
    }
    .QRblock {
      padding-top: px2html(50px);
      width: px2html(154px);
      position: relative;
      z-index: 2;
    }
    .more {
      position: relative;
      z-index: 2;
      margin-top: px2html(43px);
      color: #fff;
      width: px2html(146px);
      background-color: rgba(243, 169, 81, 1);
      height: px2html(35px);
      border-radius: px2html(18px);
      font-weight: 500;
      font-size: px2html(18px);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .bg {
      left: 0;
      bottom: 0;
      position: absolute;
      width: px2html(375px);
      z-index: 1;
    }
  }
</style>
