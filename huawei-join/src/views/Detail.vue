<template>
  <div class="detail">
    <img class="bg" src="../assets/详情页.png">
    <img class="joinImg" src="../assets/joinUs.png" @click="toMain">
  </div>
</template>

<script>
export default {
  name: 'Detail',
  methods: {
    toMain () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
  .detail {
    .bg {
      width: 100%;
    }
    .joinImg {
      width: px2html(71px);
      position: fixed;
      right: 0;
      top: 50%;
      transform: translateY(50%);
    }
  }
</style>
