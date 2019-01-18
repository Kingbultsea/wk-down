<template>
    <div class="applycation" v-html="rawHtmlData">
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "ApplyCation",
        data () {
            return {
                saveFont: 1,
                rawHtmlData: `<h3><b><span>配套知识<span lang="EN-US"> - </span>最好的瘦身教练</span></b></h3><p class="MsoNormal"><span>你好，欢迎加入心潮睡眠瘦身计划，以下是第一天练习的配套知识，非常的重要，希望你仔细阅读完，再开始今晚的音频练习。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>许多人在瘦身这件事上，常常会感到很孤单。你是一个人在战斗吗？我们很高兴来做你的战友。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>这套课程设计在<b>睡前</b>——这个特殊的时间练习<b style="mso-bidi-font-weight:
normal">，</b>是因为首先，身体和潜意识是非常精妙的，在我们睡着的时候，它们还在继续勤劳的工作，因此，睡前进行学习和练习，作用就能持续在睡眠中发挥，比白天练习的效果更好；其次，好的睡眠会显著减少你对食物的过度欲望，同时可以促进新陈代谢，减少体内脂肪的产生与堆积。因此，我们的瘦身计划，也会帮助你获得更优质的睡眠。
<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><b><span>课程每天分为知识和音频练习两个部分，首次开始请按顺序学习知识，再完成相应的音频练习，其中音频部分建议多次重复练习</span></b><span>，在练习音频的过程中，走神或者入睡了都没关系，因为，你的潜意识一直在发挥作用，当你重新回来会发现更容易完成练习。课程结束之后也建议终生持续音频部分的练习，因为这些练习除了帮助维持苗条且健康的身材，也会帮助你找到自己最佳的状态，提高自信与魅力。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>好了，让我们回到瘦身这件事。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>假设身体是机器，我们输入一个“瘦”的指令，身体就乖乖瘦下来，那事情就会变得简单许多。但是身体有它自己的意志。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>想象一下，如果你每天从起床到睡觉，做什么都是由别人决定的，想吃的不能吃，不想吃的被逼着吃；不想动的时候，被拽着动，而且都是你不喜欢的运动。你会开心吗？找着机会是不是就会反抗？<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>这些，都是我们的身体正在经历的生活。反抗，就是那些开戒后的大吃特吃，还有那些反弹回来的体重。身体其实是有自己的节奏和需要的，并不是我们想要它做什么，它就会照做。<b><span style="color: rgb(194, 79, 74);">你的身体比地球上任何的瘦身方法都聪明。它的需要它自己最清楚，吃什么、做什么运动、怎样会瘦，它自己都知道。</span></b>只是我们常常忽略它反馈的信号，而选择去相信外在的一些研究结果。然而，别人的研究结果并不能完全套用在我们自己独特的身体上。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>当你开始相信，你的身体能够为它自己找到最好的瘦身方法，你就开始了健康瘦身的第一步。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><img src="http://wx2.sinaimg.cn/mw690/006Zdy2vgy1fzavh0pko5j30p00e3abr.jpg" style="max-width:100%;"><span><br></span></p><p class="MsoNormal"><span>接下来的几天里，我们会带领你，去体会自己的身体对于食物的需要，对于运动的情绪以及对自己的态度。更关键的是，<b>我们会提供实用的、根据你自己身体需要的瘦身方法，一种完全根据你的情况而定制的，只属于你的方法。</b><span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>瘦身计划的第一步是帮助你和自己的身体做朋友，并以朋友平等的姿态来尊重它，让它听懂你的需要，同时也听听身体本尊的需要，从而有针对性地瘦身。然而，<b>身体的感知语言和我们头脑的认知语言并不是一回事。</b>所以第一个练习就是通过头脑和身体语言的共同点——可视化的想象开始，让身体听懂我们的需求，理解我们想要的目标。当我们对于瘦身后想成为的样子有了清晰的形象，就可以把这个形象传递给身体和潜意识，让它们与我们一起，持续向这个目标努力。<span lang="EN-US"><o:p></o:p></span></span></p><p>`
            }
        },
        methods: {
            getMessage() {
                console.log(this.$route.query.id)
                axios.get('url', {
                    params: {
                        id: this.$route.query
                    }
                }).then((res) => {
                    this.rawHtmlData = res.body
                }).catch((err) => {
                    console.log(err)
                })
            }
        },
        mounted () {
            const that = this
            function setSizeRem () {
                let width = document.documentElement.clientWidth
                let html = document.querySelector('html')
                that.saveFont = html.style.fontSize
                html.style.fontSize = width / 10 + 'px'
            }
            setSizeRem()
            window.addEventListener('resize', setSizeRem)

            this.getMessage()
            this.rawHtmlData = this.rawHtmlData.replace(/194/g, '255').replace(/79/g, '95').replace(/74/g, '95')
            console.log("?")
        },
        destroyed () {
            const that = this
            function setSizeRem () {
                let html = document.querySelector('html')
                html.style.fontSize = that.saveFont
            }
            setSizeRem()
        }
    }
</script>

<style lang="scss">
    html, body {
        padding: 0;
        margin: 0;
        background-color: #FFFFFC;
    }
    @function px2html($px){
        $rem: 37.5px;
    @return ($px / $rem) + rem;
    }
    .applycation {
        text-align: left;
        width: px2html(375px);
        padding-left: px2html(25px);
        padding-right: px2html(25px);
        box-sizing: border-box;
        margin: 0 auto;
        h1 {
            font-size: px2html(32px);
        }
        h2 {
            font-size: px2html(24px);
        }
        h3 {
            font-size: px2html(20px);
            font-width: Bold;
        }
        h4 {
            font-size: px2html(16px);
        }
        h5 {
            font-size: px2html(13.28px);
        }
        h6 {
            font-size: px2html(12px);
        }
        p {
            margin-top: px2html(23px);
            font-size: px2html(14px);
            width: 100%;
            overflow: hidden;
            word-wrap: break-word;
            word-break: normal;
            overflow: hidden;
        }
        img {
            display: block;
            max-width: 90% !important;
            margin: 0 auto;
        }
    }
</style>
