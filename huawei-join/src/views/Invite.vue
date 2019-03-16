<template>
  <div class="intail">
    <img class="bg" src="../assets/主页2psd.png">
    <img class="joinImg" src="../assets/joinUs.png" @click="toMain">
  </div>
</template>

<script>
export default {
  name: 'intail',
  methods: {
    toMain () {
      this.$router.push('/')
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
      top: 50%;
      transform: translateY(50%);
    }
  }
</style>
