<template>
    <div class="main">
        <div class="input">
            <p style="font-weight:600">输入昵称:</p>
            <input v-model="name"  maxlength="8" limit="8">
        </div>
        <ButtonI @click.native="submit" class="button">开始测试</ButtonI>
    </div>
</template>

<script>
import ButtonI from '@/components/button.vue'
/* eslint-disable */

export default {
    name: 'inputname',
    data () {
        return {
            name: ''
        }
    },
    methods:{
        submit(){
            if(!this.name) this.name = '无名同学'  //小失误 就是if条件判断的时候没有加上this
            if(this.name){  //又是上面的失误 看来这个情况挺严重的呀
                sessionStorage.setItem('name', this.name)
                this.$router.push( {path:'/e'} )
            }
        }
    },
    components:{
        ButtonI
    },
    mounted(){

    },
    beforeDestroy () {
      setTimeout(() => {
        const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
        window.scrollTo(0, Math.max(scrollHeight - 1, 0));
      }, 100);
    }
}
</script>

<style lang="scss" scoped>
.main{
    width: 100vw;
    min-height: px2html(567px);
    display:flex;
    flex-direction: column;
    align-items: center;
    flex-grow:1;
    justify-content: center;
    //background: rgba(0,0,0,0.5);
    position: relative;

    .input{
        background: url('../assets/f-day_bg_input.png');
        background-size: 100% 100%;
        width: 80vw;
        height: 50vw;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 1em;
        color:#391f13;
        font-size:px2html(28px);

        input{
            border: none;
            -moz-appearance:none;
            -webkit-appearance : none ;/*解决ios上按钮的圆角问题*/
            border-radius: 0;/*解决ios上输入框圆角问题*/
            outline:medium;/*去掉鼠标点击的默认黄色边框*/
            background-color: transparent;



            position:relative;
            top:px2html(-30px);
            background:none;
            outline:none;
            border:0px;
            font-size:px2html(28px);
            font-weight: 500;
            color: #3d2417;
            border-bottom: px2html(2px) #391f13 solid;
            width:px2html(224px);
            text-align:center;
            padding-bottom: px2html(8px);
        }

    }
    .button{
         position: relative;
         z-index:9999;
         font-size:px2html(18px);
         color: #381e12;
         font-weight:500;
    }

}
</style>
