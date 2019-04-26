<template>
    <div class="button">
        <img class="top" src="../assets/f-day_btn.png" />
        <p class="bottom"><slot></slot></p>
    </div>
</template>

<script>
export default {
  name: 'button'
}
</script>

<style lang="scss" scoped>
.button {
    position: relative;
    height: px2html(60px);
    .top {
        height:100%;
    }
    .bottom {
        position:absolute;
        top: 50%;
        right: 50%;
        //height:60px;
        width: 100%;
        text-align:center;
        transform: translateX(50%) translateY(-50%);
        //font-size: px2html(14px);
    }
}
</style>
