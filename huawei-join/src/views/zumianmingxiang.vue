<template>
  <div class="intail">
    <img class="bg" src="../assets/H5助眠冥想新品.png">
    <img class="joinImg" src="../assets/joinUs.png" @click="toMain">
    <div class="to-detail" @click="toDeatil">活动详情</div>
  </div>
</template>

<script>
export default {
  name: 'intail',
  methods: {
    toMain () {
      this.$router.push('/')
    },
    toDeatil () {
      this.$router.push('/detail')
    }
  }
}
</script>

<style lang="scss" scoped>
  .intail {
    position: relative;
    .bg {
      width: 100%;
    }
    .joinImg {
      width: px2html(71px);
      position: fixed;
      right: 0;
      top: 90%;
      transform: translateY(-100%);
    }
    .to-detail {
      position: absolute;
      width: px2html(123px);
      height: px2html(35px);
      font-size: px2html(17px);
      color: #fff;
      top: px2html(788px);
      right: 50%;
      transform: translateX(50%);
      background-color: rgba(71, 75, 122, 1);
      border-radius: px2html(18px);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
