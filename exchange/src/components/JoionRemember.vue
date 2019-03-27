<template>
    <div class="join-remember">
        <div class="template">
            <img src="../assets/cosleep_vip_img_logo@3x.png" class="vip-img" />
            <div class="one-title">会员免费畅享此内容</div>
            <div class="two-title">——— 了解更多会员权益 ———</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'joinRemember',
    mounted () {
        let width = document.documentElement.clientWidth
        let html = document.querySelector('html')
        html.style.fontSize = width / 10 + 'px'
        this.r = this[window.localStorage.getItem('result')]
    }
}
</script>

<style lang="scss" scoped>
    @function px2html($px){
        $rem: 37.5px;
        @return ($px / $rem) + rem;
    }
.join-remember {
    position: fixed;
    z-index: 999;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    >.template {
        width: px2html(290px);
        height: px2html(434px);
        background-color: #fff;
        border-radius: px2html(10px);
        display: flex;
        flex-direction: column;
        >.vip-img {
            width: px2html(125px);
            height: px2html(125px);
            padding-top: px2html(25px);
            box-sizing: initial;
        }
        >.one-title {
            box-sizing: initial;
            width: px2html(180px);
            font-size: px2html(20px);
            color: rgba(63, 168, 244, 1);
            padding-top: px2html(25px);
            text-align: start;
            font-weight: 500;
        }
        >.two-title {
            box-sizing: initial;
            color: rgba(63, 168, 244, 1);
            font-size: px2html(12px);
        }
    }
}
</style>
