<template>
    <div class="result">
        <div class="title">测评结果：{{r[0]}}</div>
        <div class="content">{{r[1]}}</div>
        <div class="link" @click="toResult(r[3])">{{r[2]}}</div>
        <div class="submit">
            <div class="button" @click="toResult(r[3])">马上练习</div>
        </div>
        <!-- <JoionRember /> -->
    </div>
</template>

<script>

    export default {
        name: "result",
        data () {
            return {
                r: ['', '', '', ''],
                A: ['A.冷静型学霸', '你有潜力做一位冷静型学霸。当紧急状况发生时，你通常是那个最冷静的人，会首先去想解决问题的方案。你清楚地知道自己喜欢什么，不太容易受别人影响。你认为学习是一件很个人的事情，凭自己的能力就可以做到很好。你不太关心其他同学的学习成绩，因为你认为那是他们应该要自己负责的事情。你需要的关键词是“表达自己的脆弱”', '推荐音频：《冷静型学霸唤醒》', 'https://www.heartide.com/app/redirect?code=1052&category_id=1&voice_id=10119'],
                B: ['B.暖心型学霸', '你有潜力做一位暖心型学霸。当紧急情况发生时，你的心里总是会注意到其他人，你会首先去帮助需要帮助的人，大家一起逃生，才是你舒服的方式。你的喜好有时并不是那么地明确，因为你会做很多事情来让你在意的人开心。你会花时间去认真学习，同时也会花时间去给其他同学讲解题目。你需要的关键词是“尊重自己的需求”', '推荐音频：《暖心型学霸唤醒》', 'https://www.heartide.com/app/redirect?code=1052&category_id=1&voice_id=10120'],
                C: ['C. 直觉型学霸', '你有潜力做一位直觉型学霸。当紧急情况发生时，你通常需要时间去发一会呆，然后才会有逃生的反应。你常常有很多爱好和创意，很多时候只停留在脑洞阶段，并不是每一个你都会去执行。你的成绩好，因为你内在有一个对世界和知识的直觉系统，你凭着内在的直觉去答题就会答对。 你不是很擅长分享经验给其他同学，因为你自己也很难分析解释这种直觉系统。你需要的关键词是“相信自己的天赋。”', '推荐音频：《直觉型学霸唤醒》', 'https://www.heartide.com/app/redirect?code=1052&category_id=1&voice_id=10121']
            }
        },
        methods: {
            toResult(e) {
                window.location.href = e
            }
        },
        components: {
        },
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
    .result {
        position: fixed;
        top: 0;
        left: 0;
        padding-bottom: px2html(500px);
        width: px2html(375px);
        box-sizing: border-box;
        padding-left: px2html(25px);
        padding-right: px2html(25px);
        >.title {
            color: rgba(0, 0, 0, 1);
            font-size: px2html(20px);
            width: px2html(287px);
            height: px2html(25px);
            padding-bottom: px2html(30px);
            padding-top: px2html(20px);
            text-align: left;
            box-sizing: initial;
            font-weight: bold;
        }
        .content {
            color: rgba(0, 0, 0, 0.6);
            font-size: px2html(14px);
            text-align: justify;
            padding-bottom: px2html(30px);
        }
        .link {
            color: rgba(63, 168, 244, 1);
            font-size: px2html(14px);
            font-weight: bold;
            text-align: left;
        }
        .submit {
            position: fixed;
            width: 100vw;
            bottom: 0px;
            left: 0px;
            height: px2html(75px);
            background-color: rgba(255, 255, 255, 1);
            display: flex;
            justify-content: center;
            align-items: center;
            border-top: px2html(1px) rgba(0, 0, 0, 0.1) solid;
            .button {
                background-color: rgba(74, 144, 226, 1);
                width: px2html(255px);
                height: px2html(35px);
                border-radius: px2html(18px);
                color: rgba(255, 255, 255, 1);
                font-size: px2html(15px);
                display: flex;
                justify-content: center;
                align-items: center;
                transition: .5s;
            }
        }
    }
</style>
