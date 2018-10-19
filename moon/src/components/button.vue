<template>
    <div class="main">
        <img class="img" src="@/images/m_btn.svg">
        <p class="p"><slot/></p>
    </div>
</template>

<script>
    export default {
        //记住不要用内件来命名...  不然很麻烦 name都不给改呢
        name: "vuebutton"
    }
</script>

<style lang="scss" scoped>
    @function px2html($px){
        $rem: 37.5px;
        @return ($px / $rem) + rem;
    }

.main{
    position: relative;
    .img{
        width:px2html(170px);
        height: px2html(60px);
        //height: 3em;
        //width:6em;
    }
    .p{
        font-size: px2html(16px);
        //height:px2html(64px);
        //width:px2html(23px);
        position:absolute;
        top:px2html(19px);
        left:px2html(53px);

        color: #8B572A;
        //transform: ;
        //transform: translateY(50%) translateX(50%);
        //width:100%;
    }
}
</style>