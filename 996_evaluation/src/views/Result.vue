<template>
    <div class="result animated fadeIn">
      <div class="template" id="canvas">
        <img class="background-img" src="../assets/结果页_slices/wireframe@3x2.png" />
        <div class="block"></div>
        <img class="title-img" src="../assets/结果页_slices/headline@3x.png"/>
        <div class="serial-number">编号：{{ serialNumber }}</div>
        <div class="content">
          <img src="../assets/frame@3x3.png" style="width: 100%;height: 100%;position: absolute;left: 0px;top: 0px;">
          <div class="user-name">{{ userName }}</div>
          <div class="date">{{date}}</div>
          <div class="authenticate" v-for="(li, index) in authenticate" :key="index + 3">{{ li }}</div>
          <div class="debt">你已经欠下<span style="color: red">{{ time }}</span>小时的睡眠债。</div>
          <div class="advance" v-for="(li, index) in advance" :key="index">{{ li }}</div>
          <div class="profile">
            <img class="bg" style="width: 100%;height: 100%;position: absolute" src="../assets/z/frame@3x.png">
            <img class="img" ref="myImg" :src="avatar"/>
            <!-- <img class="img" ref="myImg" src="../assets/profile.jpg"/> -->
          </div>
          <img v-if="isApp" src="../assets/appQRBlock.png" class="QRblock">
          <img v-else src="../assets/weixinQRBlock.png" class="QRblock">
          <img v-show="tickOnePosition === 0" class="tick t1" src="../assets/tick@3x.png" />
          <img v-show="tickOnePosition === 1" class="tick t2" src="../assets/tick@3x.png" />
          <img v-show="tickOnePosition === 2" class="tick t3" src="../assets/tick@3x.png" />
          <img v-show="tickTwoPosition === 0" class="tick t4" src="../assets/tick@3x.png" />
          <img v-show="tickTwoPosition === 1" class="tick t5" src="../assets/tick@3x.png" />
          <img v-show="tickTwoPosition === 2" class="tick t6" src="../assets/tick@3x.png" />
        </div>
      </div>
      <div class="button" @click="toDownLoad">领取工伤补贴</div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
/* eslint-disable */
import WJH from '../js/wjhJS'
import html2canvas from 'html2canvas'
import Tool from '../js/tool.js'

export default {
  name: 'result',
  data () {
    return {
      isApp: Tool.is_cosleep(),
      serialNumber: WJH.randomNum(10000, 20000),
      avatar: '',
      userName: localStorage.getItem('name') || '无名同学',
      time: 0,
      tickOnePosition: 0,
      tickTwoPosition: 0,
      date: WJH.dateFormat(new Date(), 'yy年M月d日'),
      result: sessionStorage.getItem('result'),
      authenticate: [],
      advance: [],
      backgroundResultSave: require('../assets/bg.png'),
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
            { authenticate: ['把习题当枕头，用单词来提神。', '刷题更要紧，通宵不过打点滴。', '通宵最大的好处是不用早起。', '复习到十二点，预习到第二天。', '上班族996算什么，学生都是007！'], advance: ['此学生已熬得金刚不坏之身，刀枪不入。', '这病有点严重，给你开个病假条吧，不长，半年而已。'] },
            { authenticate: ['考试多娇，引来学生熬夜通宵。', '我愿与题共眠，在梦中拿满分！', '通宵学习，一切全凭信念！', '想成功先发疯，拼了命晚上冲。', '堆积的作业，代表月亮消灭你！'], advance: ['致教导主任，该学生过于劳累，建议放假30天。', '学习过于忘我，连睡觉都顾不上，罚你停课一周。'] },
            { authenticate: ['拜室友所赐，被熬熟了。', '天才如我，也免不了熬夜刷题。', '作业布置少，爸妈添砖加瓦。', '室友不睡，大家甭想睡！', '考试前别人在复习，我在预习。'], advance: ['致任课老师，该学生因熬夜不适，不宜写作业，宜卧床。', '该学生熬夜过于频繁，需请假休息。'] }],
          [
            { authenticate: ['深夜，脑袋不良情绪循环播放。', '硬把北京时间过成纽约时间。', '为了告别失眠，我选择通宵。', '已经位列仙班，还需要睡觉吗？', '再不熬就老了，哪有时间放肆。'], advance: ['致家长，请就近办理本地三甲医院ICU贵宾卡。', '再任性，华佗再世也救不了你。'] },
            { authenticate: ['晚上不想睡，白天不想醒。', '晚睡的人，上辈子是折翼天使。', '每天都靠咖啡提神续命。', '睡太早，我怎么出现在你梦里。', '每天一小熬，三天一大熬。'], advance: ['致校医，熬夜会传染，请对此人进行隔离。', '作业太容易，学生无法捧着作业入睡，应提升课程难度。'] },
            { authenticate: ['最后再玩一盘，就一盘！', '明明该睡了，偏偏精神极好。', '晚上不睡，白天瞌睡。', '熬夜是必修课，睡觉是选修课。', '哪里是熬夜，分明是在熬手机！'], advance: ['致班主任，该同学熬夜病重，建议放假3天，在家休息。', '爱玩爱闹就是不爱睡觉，罚你周末补课。'] }
          ],
          [
            { authenticate: ['熬夜到天亮，作业堆满房。', '觉可以不睡，游戏一定要打。', '白天灵魂出窍，晚上带嗨全场。', '熬夜抢空投，吃鸡难自拔。', '超级夜猫启动，燃烧吧小宇宙！'], advance: ['致家长，治不了，及时行乐，告辞！', '放下手机，你也能成佛！'] },
            { authenticate: ['白天上课犯困，晚上通宵上分。', '熬夜不好，所以我才决定通宵。', '眼前不太黑，你说的夜并不晚。', '睡得越早，时间越少，太亏！', '牺牲睡觉，才能把时间填满。'], advance: ['致同学，扶他起来，还能再熬3小时。', '按照黑眼圈深浅批假，该学生可以请假10天。'] },
            { authenticate: ['人生苦短，越睡越晚。', '晚上尽力熬夜，白天拼命早起。', '不熬夜，难道要浪费时间吗？', '习惯了晚睡，跟夜作对。', '习惯了晚睡，跟夜作对。', '熬夜比学习轻松多了。'], advance: ['致校长，因熬夜病毒扩散，建议全校停课一周。', '该学生过于苦逼，郊外踏青麻烦安排一下。'] }
          ]
        ],
        worker: [
          [
            { authenticate: ['深夜才思泉涌，夜晚效率迸发。', '我一点也不累，不过七天没睡。', '没有熬夜做不好的，有就通宵。', '工作到十二点，加班到第二天。', '昼夜不分，反正都是在工作。'], advance: ['请在工位常备心脏起搏器，以备不时之需。', '恭喜你，修仙得道，终于可以放下工作，立地成佛了！'] },
            { authenticate: ['你见过凌晨四点的公司吗？', '熬夜还要早起，没人疼没人懂。', '连爱情都不要，也要熬夜加班。', '我一点也不累，不过七天没睡。', '时间也阻止不了我加班的热情。'], advance: ['巴厘岛豪华团7天6夜，吃住行公司全包。', '安排到迪拜体验富豪生活，除了睡觉就是买买买！'] },
            { authenticate: ['身体在熬夜，灵魂在蹦迪。', '台灯是光，熬是梦想者的倔强。', '我心里只有一件事，就是工作。', '熬夜加班，早起打卡，实在惨。', '熬夜不值得，但加班费值得。'], advance: ['这周不宜加班，宜约会聚餐。', '工作过于忘我，连睡觉都顾不上，罚你带薪停工两天。'] }
          ],
          [
            { authenticate: ['白天是大家的，夜晚是我的。', '整个世界都睡了，我熬夜想你。', '完全无法抵挡夜生活的诱惑。', '熬夜变胖，才能装下满腔委屈。', '从早嗨到晚，熊猫眼炯炯有神。'], advance: ['时日不多，继续骄傲放纵。', '公司安排一辆房车，节约上下班时间，多睡一点是一点。'] },
            { authenticate: ['宁愿熬夜，也不愿拿加班费。', '你习惯熬夜，我也假装睡不着。', '躺下一瞬间，刷起朋友圈。', '养剧一整年，追剧一整晚。', '我都睡了，还有谁陪你熬夜？'], advance: ['致领导，此人已熬秃头，需植发，请提前发放年终奖。', '这病有点严重，给你开个病假条吧，不长，一个月而已。'] },
            { authenticate: ['熬夜=不愿意结束美好的一天。', '我也不想熬，谁叫自由迷人。', '只有夜晚才真正属于自己。', '白天困成狗，晚上嗨不够。', '等一句晚安，我倒头就睡。'], advance: ['员工集体出游，户外团建一天。', '书本使人犯困，带薪进修麻烦领导安排一下。'] }
          ],
          [
            { authenticate: ['除了睡觉，让我做什么都可以。', '在剧中堕落，在游戏中沉沦。', '猫科动物转世，夜猫本尊！', '忙碌和熬夜是自我治愈的良方。', '红牛续命，熬夜通宵不在话下。'], advance: ['此人耐操，无需休息，建议007。', '建议老板为该员工投保，受益人填公司，稳赚不赔。'] },
            { authenticate: ['年轻人不熬夜还是年轻人吗？', '习惯了晚睡，跟夜作对。', '我就是不想睡，别叫我停下来。', '投资未来的人，忠于熬夜。', '我的白天和晚上可以无缝衔接。'], advance: ['热水、枸杞、保温杯，熬夜续航更持久。', '工作没挑战，员工无法枕着方案入睡，建议加大难度。'] },
            { authenticate: ['明明困得不行，就是不想睡。', '每一个夜猫，都是有故事的人。', '不睡觉是因为更爱做白日梦。', '我的时间，全靠夜里中挤出来。', '时间有限，熬夜得趁早。'], advance: ['按照黑眼圈深浅批假，该员工可以休假5天。', '佛祖仁慈，就不上十大酷刑了，明天开始996吧！'] }
          ]
        ],
        free: [
          [
            { authenticate: ['深夜思绪放飞，抓都抓不住。', '唯有通宵，能在熬夜后早起。', '熬夜加班，直到主机冒烟。', '忙着优秀，都抽不出时间睡觉。', '枕着夜色，在工作里沉沦。'], advance: ['我家祖传六代老中医，这病情真治不了。', '时日不多，且行且珍惜。'] },
            { authenticate: ['钱没赚够，觉也没睡好。', '熬夜？没有，不是，别瞎说。', '你的黑眼圈比黑洞都深邃。', '做不完的工作，熬不完的夜。', '熬夜是小事，为工作不值一提！'], advance: ['该员工恪尽职守，已严重透支，建议带薪休假14天。', '此人应熬夜过度肥胖，特批一个月带薪减肥假。'] },
            { authenticate: ['革命尚未成功，同志仍需熬夜。', '创作灵感一上来，难以停下来。', '沉迷于工作无法自拔。', '睡觉只能做梦，工作将会圆梦。', '熬夜考证复习，考后卧床不起。'], advance: ['致老板，此人过于拼命，建涨2倍工资。', '该员工因熬夜，比同龄人更成熟，更适合升职做领导。'] }
          ],
          [
            { authenticate: ['情况过于惨烈，无法一一说明。', '假装快乐，都是熬夜的好手！', '这个夜，情绪起伏太过强烈。', '听说熬夜会猝死，我尽量通宵。', '失眠的夜，依靠手机连接世界。'], advance: ['此人已走火入魔。', '因熬夜病重，已下病危通知书，请尽快还清睡眠债。'] },
            { authenticate: ['熬夜伤身，不熬夜伤心。', '开着灯入睡，闭着眼思念。', '熬了整晚，发了多少疯自己懂。', '工作是种体验，熬夜是种享受。', '晚上嗨翻天，白天倒头睡。'], advance: ['扶他起来，也就只能再熬一会儿。', '爱玩爱闹就是不爱睡觉，罚你周末加班。'] },
            { authenticate: ['孜孜不倦修仙，勤勤恳恳养生。', '想你的夜，实在难眠！', '在世界清醒前，我独占夜的黑。', '晚一点睡，才能想你久一点。', '那些孤独的夜，耳朵塞满音乐。'], advance: ['老黄历上说，今天不宜出门上班，宜躺着睡觉。', '从发量来看，该员工可获得一笔秃头危机补贴。'] }
          ],
          [
            { authenticate: ['熬得不是夜，是自由孤独灵魂。', '我欲成仙，快乐齐天。', '是谁，让我坠入夜的深渊！', '睡多久不重要，重要是睡过了。', '习惯熬夜，任思绪撒野狂奔。'], advance: ['赶快买份保险吧，反正受益人不是你。', '请在房间常备心脏起搏器，以备不时之需。'] },
            { authenticate: ['熬夜成瘾，只为等你一句晚安。', '不是我睡得晚，是你们睡太早。', '不想睡，阳光没出现怎么睡？', '白天被摧残，晚上寻自我。', '为了透支思念，我特意晚睡。'], advance: ['熬夜病毒扩散，停工10天。', '无字天书有助睡眠，麻烦提前抢购。'] },
            { authenticate: ['一边熬夜一边蹦养生迪。', '说好了要早睡，只是说说而已。', '长夜漫漫，无心入睡。', '熬夜比工作轻松多了。', '越晚越疯，越黑越闹。'], advance: ['有保温杯傍身，多喝热水，专治熬夜后各种身体不适。', '下班别打滴滴了，直接摩拜骑回家吧，累了好睡觉！'] }
          ]
        ],
      }
    }
  },
  components: {

  },
  methods: {
    toDownLoad () {
      this.$router.push('./download')
    },
    parseToPic () {
      const dom = document.querySelector('#canvas')
      html2canvas(dom, { onclone: (document) => {
          document.querySelector('#canvas').style.visibility = 'initial'
          document.querySelector('#canvas').style.backgroundColor = '#c5b099'
          document.querySelector('#canvas').style.backgroundImage = `url(${this.backgroundResultSave})`
        }, useCORS: true }).then((canvas) => {
        const img = new Image()
        img.src = canvas.toDataURL()
        img.style.width = '100%'

        // img.style.position = 'absolute'
        // img.style.left = '50%'
        // img.style.top = '50%'
        // img.style.transform = 'translateX(-50%) translateY(-50%)'

        // dom.innerHTML = ''
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
      const df = this.desc[type][this.tickOnePosition][this.tickTwoPosition].authenticate
      df.splice(WJH.randomNum(0, df.length - 1), 1)
      df.splice(WJH.randomNum(0, df.length - 1), 1)
      df.splice(WJH.randomNum(0, df.length - 1), 1)
      if (sessionStorage.getItem('df')) {
        this.authenticate = JSON.parse(sessionStorage.getItem('df'))
      } else {
        sessionStorage.setItem('df', JSON.stringify(df))
        this.authenticate = df
      }

      if (sessionStorage.getItem('advance')) {
        this.advance = JSON.parse(sessionStorage.getItem('advance'))
      } else {
        this.advance.push(
          this.desc[type][this.tickOnePosition][this.tickTwoPosition].advance[WJH.randomNum(0, 1)]
        )
        sessionStorage.setItem('advance', JSON.stringify(this.advance))
      }
      console.log(this.desc[type][this.tickOnePosition])
      console.log(df, this.desc[type][this.tickOnePosition][this.tickTwoPosition].advance[0])
      return 0
    },
    lv (d) {
      for (let i of this.one) {
        if (i[0] === parseInt(d[3]) && i[1] === parseInt(d[5]) && i[2] === parseInt(d[6])) {
          if (sessionStorage.getItem('time')) {
            this.time = sessionStorage.getItem('time')
            return 0
          }
          this.time = WJH.randomNum(801, 1200)
          sessionStorage.setItem('time', this.time)
          return 0
        }
      }
      for (let i of this.two) {
        if (i[0] === parseInt(d[3]) && i[1] === parseInt(d[5]) && i[2] === parseInt(d[6])) {
          if (sessionStorage.getItem('time')) {
            this.time = sessionStorage.getItem('time')
            return 1
          }
          this.time = WJH.randomNum(401, 800)
          sessionStorage.setItem('time', this.time)
          return 1
        }
      }
      if (sessionStorage.getItem('time')) {
        this.time = sessionStorage.getItem('time')
        return 2
      }
      sessionStorage.setItem('time', this.time)
      this.time = WJH.randomNum(0, 400)
      return 2
    },
    toBase64 (url, callback, outputFormat = 'image/png') {
      let canvas = document.createElement('canvas')
      let ctx = canvas.getContext('2d')
      const img = new Image()
      img.crossOrigin = 'Anonymous'
      img.onload = () => {
        canvas.height = img.height
        canvas.width = img.width
        ctx.drawImage(img, 0, 0)
        const dataURL = canvas.toDataURL(outputFormat)
        callback.call(this, dataURL)
        canvas = null
      }
      img.src = url
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
    const l = localStorage.getItem('avatar') || 'http://wx3.sinaimg.cn/mw690/006Zdy2vgy1g2h2dk8qw2j30za0u0ain.jpg'
    this.avatar = 'https://images.weserv.nl/?url=' + l
    console.log(localStorage.getItem('avatar'), '头像link', this.avatar)
    this.parseToPic()
    console.log(WJH.dateFormat(new Date(), 'yy年M月d日hh时m分s秒'))
    const r = JSON.parse(this.result)
    if (!r) {
      this.$router.push('./')
      return
    }
    console.log(
      this.tickOnePosition = this.occupationalInjuryType(r), r, this.tickTwoPosition = this.lv(r), this.authenticateAndAdvance(r)
    )
    let changeToLuoMa = ['I', 'II', 'III']
    let type = ['报复性熬夜', '被迫式熬夜', '习惯性熬夜']
    this.$parent.shareM(`我是${changeToLuoMa[this.tickTwoPosition]}级工伤，属于${type[this.tickOnePosition]}，你呢？`, '和我一起PK，看看谁伤得更重')
  }
}
</script>

<style lang="scss">
  .result {
    width: px2html(375px);
    overflow-x: hidden;
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    .template::before {
      content: ' ↑ ↑ ↑长按上方保存图片';
      height: 1px;
      width: px2html(160px);
      position: absolute;
      color: rgba(19, 19, 19, 1);
      font-size: px2html(11px);
      font-weight: 700;
      bottom: px2html(1px);
      right: px2html(0px);
    }
    >.template {
      // visibility: hidden;
      position: relative;
      margin-top: px2html(11px);
      width: px2html(340px);
      height: px2html(494px);
      background-size: 100% 100%;
      // background-image: url("../assets/bg.png");
      background-position: px2html(-2px) 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      >.background-img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
      }
      >.block {
        border-radius: px2html(10px);
        width: px2html(300px);
        height: px2html(464px);
        position: fixed;
        z-index: 999;
        overflow: hidden;
        opacity: 0;
        img {
          pointer-events: initial;
        }
      }
      >.title-img {
        // width: px2html(242px);
        height: px2html(47px);
        padding-top: px2html(12px);
        position: relative;
      }
      >.serial-number {
        color: rgba(45, 45, 45, 1);
        font-size: px2html(8px);
        text-align: right;
        height: px2html(4px);
        width: px2html(280px);
        position: relative;
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
          left: px2html(25px);
          top: px2html(29px);
          width: px2html(203px);
          overflow: hidden;
          height: px2html(22px);
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
          top: px2html(177px);
          font-size: px2html(15px);
          left: px2html(65px);
          width: px2html(500px);
          text-align: left;
        }
        >.debt {
          position: relative;
          color: rgba(45, 45, 45, 1);
          top: px2html(177px);
          font-size: px2html(15px);
          left: px2html(65px);
          text-align: left;
        }
        >.advance {
          width: px2html(220px);
          position: relative;
          color: rgba(45, 45, 45, 1);
          top: px2html(192px);
          font-size: px2html(15px);
          text-align: left;
          left: px2html(65px);
          height: px2html(50px);
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        >.QRblock {
          position: absolute;
          width: px2html(42px);
          height: px2html(42px);
          bottom: px2html(30px);
          left: px2html(25px);
        }
        >.profile {
          position: absolute;
          right: px2html(17px);
          top: px2html(15px);
          width: px2html(57px);
          height: px2html(54px);
          background-size: 100% 100%;
          >.bg {
            margin-left: px2html(-9px);
          }
          >.img {
            position: relative;
            z-index: 99;
            margin-left: px2html(-4px);
            width: px2html(42px);
            height: px2html(42px);
            margin-top: px2html(4px);
            border-radius: px2html(8px);
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
      margin-top: px2html(8px);
      width: px2html(209px);
      height: px2html(52px);
      background-image: url("../assets/h5.gif");
      background-size: 100% 100%;
      text-align: center;
      font-size: px2html(15px);
      color: rgba(43, 43, 43, 1);
      font-size: px2html(15px);
      line-height: px2html(50px);
      overflow: hidden;
      font-weight: 700;
    }
  }
</style>
