<template>
    <div class="main">
        <div class="input">
            <p>请输入你的昵称</p>
            <input v-model="name"  maxlength="8" limit="6">
            <div @click="submit">确定</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "inputname",
        data(){
            return {
                name: ''
            }
        },
        methods:{
            submit(){
                if(!this.name) this.name = '无名同学'  //小失误 就是if条件判断的时候没有加上this
                if(this.name){  //又是上面的失误 看来这个情况挺严重的呀
                    localStorage.setItem('name',this.name)
                    this.$router.push( {path:'/playpage'} )
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @function px2html($px){
        $rem: 37.5px;
        @return ($px / $rem) + rem;
    }


.main{
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    position: relative;
    font-size:px2html(16px);
    .input{
        position: absolute;
        background: rgba(255,255,255,1);
        width: 80vw;
        height: 50vw;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        right:50%;
        top: 50%;
        transform: translateY(-50%) translateX(50%);
        border-radius: 1em;
        color:#8B572A;
        input{
            background:none;
            outline:none;
            border:0px;
            font-size:px2html(18px);
            color:#8B572A;
            border-bottom: px2html(2px) #8B572A solid;
            text-align:center;
            padding-bottom: px2html(2px);
        }

    }
}
</style>
