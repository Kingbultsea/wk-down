<template>
    <div class="studyB">
        <div class="title">学霸测评 - 唤醒内在学霸能力</div>
        <div class="content">
            为什么别人轻轻松松拿高分，轻而易举成学霸？而你埋头苦读，成绩却只上升一点点，甚至丝毫没有起色。你怀疑自己能力，找了很多学习攻略……
        </div>
        <div class="content">
            其实，每个人都有自己的优势，你只是没有发现而已，以至于藏在基因里的学霸潜能没有发挥出来。想唤醒自己内在的学霸能力？快来测试吧！
        </div>
        <div class="content">
            以下场景，请按自己的第一直觉选择，不要选择自己觉得应该做的。最近一次大考，因为实际成绩和预期的分数差很多，心情很不好，于是决定报个旅游团，坐邮轮旅游散心。
        </div>
        <div class="break"></div>
        <div class="question-template" v-for="(li, index) in list" :key="index">
            <div class="title">{{li.title}}</div>
            <div class="choice" v-for="(li2, index2) in li.questions" :key="index2" @click="tap(index, index2)">
                <div class="button">
                    <div class="inner" v-if="li2.choice"></div>
                </div>
                <div class="content">{{li2.content}}</div>
            </div>
        </div>
        <div class="submit">
            <div class="button" :style="{backgroundColor: bg_color}" @click="toResult">马上提交</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "studyB",
    data () {
        return {
            list: [
                {title: '1.出游当天，你会怎么打发在邮轮上的时间？', questions: [{ choice: false, content: 'A.仔细思考自己的人生目标，并总结考试考砸的原因。'}, { choice: false, content: 'B.暂时不想考试的事，愿意和周围的人聊天打发时间。'}, { choice: false, content: 'C.一个人待着，发呆，睡觉，或者做一些开心的事情。'}]},
                {title: '2.人齐后，导游让大家坐好，并告知轮船即将启程。但导游自己却不小心摔倒，大家都吓了一跳，你第一反应是？', questions: [{ choice: false, content: 'A.心里默默地想：真笨，还提醒别人呢。'}, { choice: false, content: 'B.上前把导游扶起来。'}, { choice: false, content: 'C.选择继续发呆/放空。'}]},
                {title: '3.你安静地坐在位置上，却被不认识的人打了一巴掌，你第一反应是？', questions: [{ choice: false, content: 'A.很生气，马上打回去一巴掌。'}, { choice: false, content: 'B.很生气，但不会出手，而是质问对方：“为什么打我？”'}, { choice: false, content: 'C.很懵，回过神生气的时候，对方已经离开了。'}]},
                {title: '4.在邮轮上，你看见喜欢的人和TA的恋人在一起，你当时会怎么想？', questions: [{ choice: false, content: 'A.我会让自己变得更好，让TA转而喜欢上我。'}, { choice: false, content: 'B. 我应该要祝福TA，并继续保持朋友关系。'}, { choice: false, content: 'C.脑洞自己和TA正在经历虐恋。'}]},
                {title: '5.邮轮航行的途中，突然游船撞到不明物体，开始下沉。你第一反应会是？ ', questions: [{ choice: false, content: 'A.一个人冷静地去找救生船。'}, { choice: false, content: 'B.寻求大家的力量，一起逃生。'}, { choice: false, content: 'C.下意识地发呆，然后再行动。'}]}
            ],
            can_submit: false,
            bg_color: 'rgba(0, 0, 0, 0.2)',
            result: '',
            toggle: {
                0: 'A',
                1: 'B',
                2: 'C'
            }
        }
    },
    watch: {
        list: {
            handler () {
                let result = {}
                let times = 0
                for (let [i, value] of this.list.entries()) {
                    for (let [i2, value2] of value.questions.entries()) {
                        if (value2.choice === true) {
                            result[i2] = (result[i2] || 0) + 1
                            times++
                        }
                    }
                }
                console.log(times)
                if (times === this.list.length) {
                    this.can_submit = true
                    this.bg_color = 'rgba(74, 144, 226, 1)'
                    if (result[0] >= 4) {
                        this.result = 'A'
                    }
                    if (result[1] >= 4) {
                        this.result = 'B'
                    }
                    if (result[2] >= 4) {
                        this.result = 'C'
                    }
                    if (result[0] && result[0] === 3) {
                        this.result = 'A'
                    }
                    if (result[2] && result[2] === 3) {
                        this.result = 'C'
                    }
                    if (result[1] && result[1] === 3) {
                        this.result = 'B'
                    }
                    if (result[0] && result[0] === 2 && result[1] && result[1] === 2 && result[2] && result[2] === 1) {
                        this.result = 'A'
                    }
                    if (result[0] && result[0] === 2 && result[2] && result[2] === 2 && result[1] && result[1] === 1) {
                        this.result = 'A'
                    }
                    if (result[2] && result[2] === 2 && result[1] && result[1] === 2 && result[0] && result[0] === 1) {
                        this.result = 'C'
                    }
                }
                console.log(times)
                console.log(result)
                console.log(this.result)
            },
            deep: true
        }
    },
    methods: {
        setSizeRem () {
            let width = document.documentElement.clientWidth
            let html = document.querySelector('html')
            html.style.fontSize = width / 10 + 'px'
        },
        tap (listIndex, choiceIndex) {
            const length = this.list[listIndex].questions.length
            for (let i = 0; i < length; i++) {
                this.list[listIndex].questions[i].choice = false
            }
            this.list[listIndex].questions[choiceIndex].choice = true
        },
        toResult () {
            if (this.result) {
                this.$router.push('/result')
                window.localStorage.setItem('result', this.result)
            }
        }
    },
    mounted () {
        /*if (window.localStorage.getItem('result')) {
            this.$router.push('/result')
        } */
        let onmove = false
        document.addEventListener('scroll', () => {
            let sTop = document.body.scrollTop + document.documentElement.scrollTop
            if ((sTop / (document.body.clientHeight - document.documentElement.clientWidth)) >= 0.7) {
                // window.scrollTo(0, document.body.clientHeight / 2.3)
                console.log('??')
                if (onmove) {
                    return
                }
                document.querySelector('body').style.overflowY = 'hidden'
            } else {
                onmove = false
            }
            console.log(document.body.clientHeight - document.documentElement.clientWidth)

        })

        var startx, starty;
        //获得角度
        function getAngle(angx, angy) {
            return Math.atan2(angy, angx) * 180 / Math.PI;
        };

        //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
        function getDirection(startx, starty, endx, endy) {
            var angx = endx - startx;
            var angy = endy - starty;
            var result = 0;

            //如果滑动距离太短
            if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
                return result;
            }

            var angle = getAngle(angx, angy);
            if (angle >= -135 && angle <= -45) {
                result = 1;
            } else if (angle > 45 && angle < 135) {
                result = 2;
            } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
                result = 3;
            } else if (angle >= -45 && angle <= 45) {
                result = 4;
            }

            return result;
        }
        //手指接触屏幕
        document.addEventListener("touchstart", function(e) {
            startx = e.touches[0].pageX;
            starty = e.touches[0].pageY;
        }, false);
        //手指离开屏幕
        document.addEventListener("touchend", function(e) {
            var endx, endy;
            endx = e.changedTouches[0].pageX;
            endy = e.changedTouches[0].pageY;
            var direction = getDirection(startx, starty, endx, endy);
            switch (direction) {
                case 0:

                    break;
                case 1:
                    break;
                case 2:
                    onmove = true
                    document.querySelector('body').style.overflowY = 'scroll'
                    break;
                case 3:

                    break;
                case 4:

                    break;
                default:
            }
        }, false);

        this.setSizeRem()
        // document.querySelector('#app').style.overflow = 'hidden'
        // document.querySelector('#app').style.height = '100Vh'
    }

}
</script>

<style scoped lang="scss">
    @function px2html($px){
        $rem: 37.5px;
        @return ($px / $rem) + rem;
    }
.studyB {
    padding-bottom: px2html(200px);
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
    .break {
        width: 100%;
        height: px2html(1px);
        background-color: rgba(0, 0, 0, 0.2);
    }
    .question-template {
        padding-top: px2html(15px);
        margin-bottom: px2html(10px);
        position: relative;
        >.title {
            font-size: px2html(14px);
            color: rgba(0, 0, 0, 0.6);
            font-weight: bold;
            text-align: justify;
        }
        .choice {
            margin-top: px2html(10px);
            padding-bottom: px2html(1px);
            .content {
                padding-bottom: px2html(10px);
            }
        }
        .button {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: 1px rgba(0, 0, 0, 0.2) solid;
            position: absolute;
            box-sizing: initial;
            transform: translateY(5px) translateX(2px);
            display: flex;
            justify-content: center;
            align-items: center;
            .inner {
                width: 8px;
                height: 8px;
                background-color: rgba(63, 168, 244, 0.8);
                border-radius: 50%;
            }
        }
        .content {
            padding-left: px2html(20px);
            color: rgba(0, 0, 0, 0.6);
        }
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
