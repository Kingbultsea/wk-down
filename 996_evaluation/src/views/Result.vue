<template>
  <transition enter-active-class="animated fadeIn">
    <div class="result">
      <div class="template" id="canvas">
        <div class="block"></div>
        <img class="title-img" src="../assets/结果页_slices/headline@3x.png"/>
        <div class="content">
          <img src="../assets/frame@3x.png" style="width: 100%;height: 100%;position: absolute;left: 0px;top: 0px;">
          <div class="user-name">{{ userName }}</div>
          <div class="date">{{date}}</div>
          <div class="authenticate" v-for="(li, index) in authenticate" :key="index + 3">{{ li }}</div>
          <div class="debt">你已经欠下了<span style="color: red">{{ time }}</span>小时的睡眠债</div>
          <div class="advance" v-for="(li, index) in advance" :key="index">{{ li }}</div>
          <div class="advance">此人耐操,无需休息,建议997</div>
          <div class="profile">
            <img class="bg" style="width: 100%;height: 100%;position: absolute" src="../assets/z/frame@3x.png">
            <img class="img" :src="avatar"/>
          </div>
          <img src="../assets/profile.jpg" class="QRblock">
          <img v-show="tickOnePosition === 0" class="tick t1" src="../assets/tick@3x.png" />
          <img v-show="tickOnePosition === 1" class="tick t2" src="../assets/tick@3x.png" />
          <img v-show="tickOnePosition === 2" class="tick t3" src="../assets/tick@3x.png" />
          <img v-show="tickTwoPosition === 0" class="tick t4" src="../assets/tick@3x.png" />
          <img v-show="tickTwoPosition === 1" class="tick t5" src="../assets/tick@3x.png" />
          <img v-show="tickTwoPosition === 2" class="tick t6" src="../assets/tick@3x.png" />
        </div>
      </div>
      <div class="button">安慰苦逼的你</div>
    </div>
  </transition>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
/* eslint-disable */
import WJH from '../js/wjhJS'
import html2canvas from 'html2canvas'

export default {
  name: 'result',
  data () {
    return {
      avatar: sessionStorage.getItem('avatar') || '',
      userName: sessionStorage.getItem('name') || '无名同学',
      time: 0,
      tickOnePosition: 0,
      tickTwoPosition: 0,
      date: WJH.dateFormat(new Date(), 'yy年M月d日'),
      result: sessionStorage.getItem('result'),
      authenticate: [],
      advance: [],
      A: [{2: '0', 3: '1'}, {2: '0', 3: '0'}, {2: '1', 3: '0'}, {2: '3', 3: '1'}, {2: '1', 3: '1'}], // 报复性熬夜
      B: [{2: '2', 3: '0'}, {2: '2', 3: '3'}, {2: '3', 3: '0'}, {2: '3', 3: '3'}, {2: '3', 3: '3'}], // 被迫式熬夜
      C: [{2: '1', 3: '2'}, {2: '2', 3: '1'}, {2: '0', 3: '2'}, {2: '2', 3: '2'}, {2: '1', 3: '3'}], // 习惯性熬夜 其他 特殊处理 随便选一个
      one: [
        [0, 1, 0], [0, 1, 3],	[1, 1, 0], [2, 1, 3], [3, 1, 0], [3, 2, 3],
        [0, 0, 0], [0, 0, 3], [1, 0, 0], [2, 0 ,3], [3, 0, 0], [3, 0, 3],
        [0, 3, 0], [0, 3, 3], [1, 3, 0], [2, 3, 3], [3, 3, 0], [3, 3, 3],
        [0, 0, 1], [0, 0, 2], [1, 0, 2], [1, 0, 3], [3, 0, 1], [3, 0, 2],
        [0, 3, 1], [0, 3, 2], [1, 3, 2], [1, 3, 3], [3, 3, 1], [3, 3, 2]
      ], // 工伤级别
      two: [
        [0, 1, 1], [0, 1, 2], [1, 1, 2], [1, 1, 3], [3, 1, 1], [3, 1, 2],
        [0, 2, 0], [0, 2, 3], [1, 2, 0], [2, 2, 3], [3, 2, 0], [3, 2, 3],
        [2, 0, 1], [1, 0, 1], [2, 0, 2], [2, 0, 0], [2, 3, 2], [2, 3, 0],
        [2, 3, 1], [2, 3, 2]
      ],
      desc: {
        student: [
          [
            { authenticate: ['把习题册当枕头，用单词书提神的勇士。', '刷题堪比打印机，通宵不过打点滴。', '通宵最大的好处是不用早起。'], advance: ['前一百名确诊没救的同学，额外送一套《五三》。'] },
            { authenticate: ['考试如此多娇，引来无数学生熬夜通宵。', '与书作伴，与题共眠，毕竟梦中能拿满分！', '通宵学习不是兴趣使然，一切全凭信念！'], advance: ['说困肯定是装的，起来学习！'] },
            { authenticate: ['拜室友所赐，被熬熟了。', '别人以为我靠天分，其实熬夜刷题才是常态。', '老师作业布置少了，爸妈添砖加瓦。'], advance: ['熬夜会传染，请进行深度隔离。'] }],
          [
            { authenticate: ['深夜，脑袋里的不良情绪循环播放。', '明明没有出国留学，硬把北京时间过成纽约时间。', '为了告别失眠，我选择直接通宵。'], advance: ['请就近办理本地三甲医院ICU贵宾卡。'] },
            { authenticate: ['晚上不想睡，白天不想醒。', '熬夜的人，上辈子都是折翼的天使。', '每天都靠咖啡提神续命。'], advance: ['把表调慢一点，这样一天怎么都不会过去了呢。'] },
            { authenticate: ['最后再玩一盘，就一盘！', '明明该睡了，偏偏精神极好。', '晚上不睡，白天瞌睡。'], advance: ['别再立Flag了，毕竟你说的早睡早起，从没兑现。'] }
          ],
          [
            { authenticate: ['熬夜到天亮，作业堆满房。', '觉可以不睡，游戏一定要打。', '白天困到灵魂出窍，晚上嗨到地动山摇。'], advance: ['扶我起来，还能再战3小时。'] },
            { authenticate: ['白天上课犯困，晚上通宵上分。', '都说熬夜对身体不好，所以决定通宵。', '眼前的黑不是黑，你说的夜有多晚。'], advance: ['立刻加入掉分车队，断了王者的梦，吃鸡的命。'] },
            { authenticate: ['人生苦短，越睡越晚。', '晚上尽力熬夜，白天拼命早起。', '“别熬夜了” “大胆，你竟敢浪费时间！”'], advance: ['罚抄10遍单词，反正你也不困。'] }
          ]
        ],
        worker: [
          [
            { authenticate: ['深夜才思泉涌，夜晚效率迸发。', '我一点也不累，不过七天没睡。', '没什么是熬夜还做不好的，如果有，那就通宵。'], advance: ['请在工位常备心脏起搏器，以备不时之需。'] },
            { authenticate: ['你见过凌晨四点的公司吗？', '熬夜后还要早起，没人心疼没人懂。', '与公司的电脑有了感情，只想拥它入眠。'], advance: ['加油，机会总留给有准备的人，但不一定是加班的人。'] },
            { authenticate: ['身体在熬夜，灵魂在蹦迪。', '台灯是夜猫的光，熬夜是梦想者的倔强。', '我心里只有一件事，那就是工作。'], advance: ['请额外缴纳住宿费，以提高公司整体收益。'] }
          ],
          [
            { authenticate: ['白天是大家的，夜晚是我的。', '整个世界都睡了，我熬着夜想你。', '完全无法抵挡夜生活的诱惑。'], advance: ['时日不多，继续骄傲放纵。'] },
            { authenticate: ['看看手机的剩余电量，像不像错过的加班费？', '你习惯熬夜，我也假装和你一样睡不着。', '躺下的一瞬间，下意识刷起朋友圈。'], advance: ['请搜索下“猝死”的新闻，如果害怕还有救。'] },
            { authenticate: ['熬夜=不愿意结束美好的一天。', '我也不想熬夜，谁叫自由如此迷人。', '只有夜晚才真正属于自己。'], advance: ['熬夜能拉进你和医生的距离，如果TA是你暗恋对象，挺好。'] }
          ],
          [
            { authenticate: ['除了睡觉，让我做什么都可以。', '晚上的你，在剧中堕落，在游戏中沉沦，视死如归。', '猫科动物转世，夜猫本尊！'], advance: ['赶快买份保险吧，反正受益人不是你。'] },
            { authenticate: ['年轻人不熬夜还是年轻人吗？', '习惯了晚睡，跟夜作对。', '我就是不想睡，别叫我停下来。'], advance: ['使用中老年套装：热水枸杞保温杯，熬夜续航更持久。'] },
            { authenticate: ['明明困得不行，就是不想睡。', '每一个夜猫，都是有故事的人。', '睡觉就是做梦，但我更爱做白日梦。'], advance: ['强制打卡，晚睡扣工资，做老板该多为员工健康着想。'] }
          ]
        ],
        free: [
          [
            { authenticate: ['深夜思绪放飞自我，抓都抓不住。', '通宵是唯一熬夜后还能早起的生活方式。', '熬夜加班赶进度，直到主机冒烟。'], advance: ['升官发财指日可待，但请别让自己英年早逝。'] },
            { authenticate: ['钱没赚够，觉也没睡好。', '熬夜？我没有，我不是，别瞎说，只是跨时区工作而已。', '你的黑眼圈比黑洞都深邃。'], advance: ['看看存款有多少，再决定要不要熬夜，毕竟一晚ICU不便宜。'] },
            { authenticate: ['革命尚未成功，同志仍需熬夜。', '创作灵感一上来，整个人都停不下来。', '沉迷于工作无法自拔。'], advance: ['别仗着漂亮帅气就熬夜，熬久了也会变胖变成变秃头。'] }
          ],
          [
            { authenticate: ['情况过于惨烈，无法一一说明。', '假装快乐的人，都是熬夜的一把好手！', '这个夜，情绪起伏太过强烈。'], advance: ['此人已走火入魔，严重消耗后台数据，请先垫付下费用。'] },
            { authenticate: ['熬夜伤身，不熬夜伤心。', '开着灯入睡，闭着眼思念。', '熬了一整晚，发了多少疯，只有自己懂。'], advance: ['扶他起来，也就只能再熬一会儿。'] },
            { authenticate: ['孜孜不倦修仙，勤勤恳恳养生。', '想你不是熬夜的借口，却是难眠的理由！', '在世界清醒前，我独占夜的黑。'], advance: ['此人需要一个对象，组织安排一下,开启强制哄睡模式。'] }
          ],
          [
            { authenticate: ['熬得不是夜，是自由、孤独、灵魂。', '我欲成仙，快乐齐天。', '是谁，让我坠入夜的深渊！'], advance: ['此人耐操，无需休息，建议007。'] },
            { authenticate: ['熬夜成瘾，等你一句晚安，戒不掉了。', '不是我睡得晚，是你们睡得太早。', '不想睡，阳光没出现怎么睡？'], advance: ['换个暗恋者，喜欢你的人舍不得你熬夜。'] },
            { authenticate: ['一边熬夜一边蹦养生迪，怕死又反动。', '说好了要早睡，只是说说而已。', '长夜漫漫，无心入睡。'], advance: ['夜猫回头金不换，更衣早起做贤人。'] }
          ]
        ],
      }
    }
  },
  components: {

  },
  methods: {
    parseToPic () {
      const dom = document.querySelector('#canvas')
      html2canvas(dom, { onclone: (document) => {
          document.querySelector('#canvas').style.visibility = 'initial'
        }, useCORS: true }).then((canvas) => {
        const img = new Image()
        img.src = canvas.toDataURL()
        img.style.width = '113%'

        img.style.position = 'absolute'
        img.style.left = '50%'
        img.style.top = '50%'
        img.style.transform = 'translateX(-50%) translateY(-50%)'

        dom.innerHTML = ''
        const div = document.createElement("div")
        div.classList.add('block')
        div.appendChild(img)
        console.log(document)

        dom.appendChild(div)
        dom.style.visibility = 'initial'
        dom.classList.add('change-canvas-border-radius')
      })
    },
    authenticateAndAdvance (d) {
      let type = ''
      d[0] === '0' ? type = 'student' : d[0] === '1' ? type = 'worker' : d[0] === '2' ? type = 'free' : false
      const df = this.desc[type][this.tickOnePosition][this.tickOnePosition].authenticate
      df.splice(WJH.randomNum(0, 2), 1)
      this.authenticate = df
      this.advance.push(
        this.desc[type][this.tickOnePosition][this.tickOnePosition].advance[0]
      )
      this.advance.push(
        this.desc[type][this.tickOnePosition][this.tickOnePosition].advance[0]
      )
      console.log(df, this.desc[type][this.tickOnePosition][this.tickOnePosition].advance[0])
      return 0
    },
    lv (d) {
      for (let i of this.one) {
        if (i[0] === parseInt(d[3]) && i[1] === parseInt(d[5]) && i[2] === parseInt(d[6])) {
          this.time = WJH.randomNum(801, 1200)
          return 0
        }
      }
      for (let i of this.two) {
        if (i[0] === parseInt(d[3]) && i[1] === parseInt(d[5]) && i[2] === parseInt(d[6])) {
          this.time = WJH.randomNum(401, 800)
          return 1
        }
      }
      this.time = WJH.randomNum(0, 400)
      return 2
    },
    occupationalInjuryType (d) {
      for (let i of this.A) {
        if (i[2] === d[1] && i[3] === d[2]) {
          return 0
        }
      }
      for (let i of this.B) {
        if (i[2] === d[1] && i[3] === d[2]) {
          return 1
        }
      }
      for (let i of this.B) {
        if (i[2] === d[1] && i[3] === d[2]) {
          return 2
        }
      }
      return 0
    }
  },
  mounted () {
    console.log(sessionStorage.getItem('avatar'), '头像link', this.avatar)
    this.parseToPic()
    console.log(WJH.dateFormat(new Date(), 'yy年M月d日hh时m分s秒'))
    const r = JSON.parse(this.result)
    if (!r) {
      conosle.log('???')
      this.$router.push('./')
      return
    }
    console.log(
      this.tickOnePosition = this.occupationalInjuryType(r), r, this.tickTwoPosition = this.lv(r), this.authenticateAndAdvance(r)
    )
    console.log(this.tickTwoPosition, '威海市呢么是是his222啊')
  }
}
</script>

<style lang="scss">
  .result {
    width: px2html(375px);
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    .template::before {
      content: '*长按保存*';
      height: 1px;
      width: 100px;
      position: absolute;
      color: rgba(19, 19, 19, 1);
      font-size: px2html(11px);
      font-weight: 700;
      bottom: px2html(1px);
      right: px2html(0px);
    }
    >.template {
      visibility: hidden;
      position: relative;
      margin-top: px2html(11px);
      width: px2html(340px);
      height: px2html(494px);
      background-size: 100% 100%;
      background-image: url("../assets/结果页_slices/wireframe@3x.png");
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      >.block {
        border-radius: px2html(10px);
        width: px2html(300px);
        height: px2html(464px);
        position: absolute;
        z-index: 999;
        overflow: hidden;
      }
      >.title-img {
        width: px2html(242px);
        height: px2html(47px);
        padding-top: px2html(25px);
      }
      >.content {
        width: px2html(301px);
        height: px2html(401px);
        background-size: 100% 100%;
        position: relative;
        >.user-name {
          color: rgba(45, 45, 45, 1);
          font-size: px2html(18px);
          position: absolute;
          left: px2html(45px);
          top: px2html(29px);
          width: px2html(153px);
          text-align: center;
        }
        >.date {
          text-align: left;
          color: rgba(45, 45, 45, 1);
          font-size: px2html(11px);
          position: absolute;
          top: px2html(364px);
          left: px2html(203px);
        }
        >.authenticate {
          position: relative;
          color: rgba(45, 45, 45, 1);
          top: px2html(182px);
          font-size: px2html(11px);
          left: px2html(70px);
          width: px2html(500px);
          text-align: left;
        }
        >.advance {
          position: relative;
          color: rgba(45, 45, 45, 1);
          top: px2html(230px);
          font-size: px2html(11px);
          width: px2html(500px);
          text-align: left;
          left: px2html(65px);
        }
        >.debt {
          position: absolute;
          color: rgba(45, 45, 45, 1);
          top: px2html(215px);
          font-size: px2html(11px);
          left: px2html(70px);
        }
        >.QRblock {
          position: absolute;
          width: px2html(40px);
          height: px2html(40px);
          bottom: px2html(30px);
          left: px2html(26px);
        }
        >.profile {
          position: absolute;
          right: px2html(17px);
          top: px2html(10px);
          width: px2html(57px);
          height: px2html(54px);
          background-size: 100% 100%;
          >.bg {
            margin-left: px2html(-9px);
          }
          >.img {
            position: relative;
            z-index: 99;
            margin-left: px2html(-5px);
            width: px2html(43px);
            height: px2html(43px);
            margin-top: px2html(4px);
            border-radius: px2html(10px);
          }
        }
        >.tick {
          width: px2html(18px);
          height: px2html(18px);
          position: absolute;
          top: px2html(85px);
        }
        >.t1 {
          left: px2html(62px);
        }
        >.t2 {
          left: px2html(137px);
        }
        >.t3 {
          left: px2html(212px);
        }
        >.t4 {
          top: px2html(132px);
          left: px2html(62px);
        }
        >.t5 {
          top: px2html(132px);
          left: px2html(137px);
        }
        >.t6 {
          top: px2html(132px);
          left: px2html(212px);
        }
      }
    }

    >.button {
      width: px2html(209px);
      height: px2html(52px);
      background-image: url("../assets/button@3x.png");
      background-size: 100% 100%;
      text-align: center;
      font-size: px2html(15px);
      color: rgba(43, 43, 43, 1);
      font-size: px2html(15px);
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
    }
  }
</style>
