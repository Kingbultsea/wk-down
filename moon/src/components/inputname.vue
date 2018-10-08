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
                    this.$router.push( {path:'/playing/b'} )
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.main{
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    position: relative;
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
        transform:translateX(50%);
        border-radius: 1em;
        input{
            background:none;
            outline:none;
            border:0px;
            font-size:1em;
            border-bottom: 2px #8B572A solid;
            text-align:center;
        }

    }
}
</style>
