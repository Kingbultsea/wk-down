<template>
  <transition enter-active-class="animated fadeIn">
    <div class="result">
      <div class="template" id="canvas">
        <div class="block"></div>
        <img class="title-img" src="../assets/结果页_slices/headline@3x.png"/>
        <div class="serial-number">编号：{{ serialNumber }}</div>
        <div class="content">
          <img src="../assets/frame@3x.png" style="width: 100%;height: 100%;position: absolute;left: 0px;top: 0px;">
          <div class="user-name">{{ userName }}</div>
          <div class="date">{{date}}</div>
          <div class="authenticate" v-for="(li, index) in authenticate" :key="index + 3">{{ li }}</div>
          <div class="debt">你已经欠下<span style="color: red">{{ time }}</span>小时的睡眠债。</div>
          <div class="advance" v-for="(li, index) in advance" :key="index">{{ li }}</div>
          <div class="profile">
            <img class="bg" style="width: 100%;height: 100%;position: absolute" src="../assets/z/frame@3x.png">
            <img class="img" ref="myImg" :src="avatar"/>
          </div>
          <img src="../assets/block.png" class="QRblock">
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
      serialNumber: WJH.randomNum(10000, 20000),
      avatar: 'https://images.weserv.nl/?url=' + (sessionStorage.getItem('avatar') || 'http://wx3.sinaimg.cn/mw690/006Zdy2vgy1g2h2dk8qw2j30za0u0ain.jpg'),
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
            { authenticate: ['把习题当枕头，用单词来提神。', '刷题更要紧，通宵不过打点滴。', '通宵最大的好处是不用早起。', '复习到十二点，预习到第二天。', '上班族996算什么，学生都是007！'], advance: ['前一百名确诊没救的同学，额外送一套《五三》。', '少年，看你骨骼惊奇，送你瓶神仙水，睡觉学习两不误。'] },
            { authenticate: ['考试多娇，引来学生熬夜通宵。', '我愿与题共眠，在梦中拿满分！', '通宵学习，一切全凭信念！', '想成功先发疯，拼了命晚上冲。', '堆积的作业，代表月亮消灭你！'], advance: ['说困肯定是装的，起来学习！', '忙完好好睡一觉，说不定还能梦到元素周期表！'] },
            { authenticate: ['拜室友所赐，被熬熟了。', '天才如我，也免不了熬夜刷题。', '作业布置少，爸妈添砖加瓦。', '室友不睡，大家甭想睡！', '考试前别人在复习，我在预习。'], advance: ['熬夜会传染，请进行深度隔离。', '“没梦的人和咸鱼没分别。” “你不睡怎么做梦？”'] }],
          [
            { authenticate: ['深夜，脑袋不良情绪循环播放。', '硬把北京时间过成纽约时间。', '为了告别失眠，我选择通宵。', '已经位列仙班，还需要睡觉吗？', '再不熬就老了，哪有时间放肆。'], advance: ['请就近办理本地三甲医院ICU贵宾卡。', '下午放学后操场跑10圈，今晚肯定早早入睡！'] },
            { authenticate: ['晚上不想睡，白天不想醒。', '晚睡的人，上辈子是折翼天使。', '每天都靠咖啡提神续命。', '睡太早，我怎么出现在你梦里。', '每天一小熬，三天一大熬。'], advance: ['把表调慢一点，这样一天怎么都不会过去了呢。', '“劳动一日，可得一夜的安眠。”不知道谁说的。'] },
            { authenticate: ['最后再玩一盘，就一盘！', '明明该睡了，偏偏精神极好。', '晚上不睡，白天瞌睡。', '熬夜是必修课，睡觉是选修课。', '哪里是熬夜，分明是在熬手机！'], advance: ['别再立Flag了，毕竟你说的早睡早起，从没兑现。', '睡个好觉能加分，熬夜失眠请重修。'] }
          ],
          [
            { authenticate: ['熬夜到天亮，作业堆满房。', '觉可以不睡，游戏一定要打。', '白天灵魂出窍，晚上带嗨全场。', '熬夜抢空投，吃鸡难自拔。', '超级夜猫启动，燃烧吧小宇宙！'], advance: ['扶我起来，还能再战3小时。', '麻烦请先感谢一下，室友不杀之恩！'] },
            { authenticate: ['白天上课犯困，晚上通宵上分。', '熬夜不好，所以我才决定通宵。', '眼前不太黑，你说的夜并不晚。', '睡得越早，时间越少，太亏！', '牺牲睡觉，才能把时间填满。'], advance: ['立刻加入掉分车队，断了王者的梦，吃鸡的命。', '世界上最大的谎言就是“我不困！”'] },
            { authenticate: ['人生苦短，越睡越晚。', '晚上尽力熬夜，白天拼命早起。', '不熬夜，难道要浪费时间吗？', '习惯了晚睡，跟夜作对。', '习惯了晚睡，跟夜作对。', '熬夜比学习轻松多了。'], advance: ['罚抄10遍单词，反正你也不困。', '小仙女请先睡，丑小鸭请随意。'] }
          ]
        ],
        worker: [
          [
            { authenticate: ['深夜才思泉涌，夜晚效率迸发。', '我一点也不累，不过七天没睡。', '没有熬夜做不好的，有就通宵。', '工作到十二点，加班到第二天。', '昼夜不分，反正都是在工作。'], advance: ['请在工位常备心脏起搏器，以备不时之需。', '此人过于拼命，升职、加薪、给全套！'] },
            { authenticate: ['你见过凌晨四点的公司吗？', '熬夜还要早起，没人疼没人懂。', '连爱情都不要，也要熬夜加班。', '我一点也不累，不过七天没睡。', '时间也阻止不了我加班的热情。'], advance: ['加油，机会总留给有准备的人，但不一定是加班的人。', '你天赋秉异，送你一瓶神仙水，睡觉工作两不误。'] },
            { authenticate: ['身体在熬夜，灵魂在蹦迪。', '台灯是光，熬是梦想者的倔强。', '我心里只有一件事，就是工作。', '熬夜加班，早起打卡，实在惨。', '熬夜不值得，但加班费值得。'], advance: ['请额外缴纳住宿费，以提高公司整体收益。', '“没梦的人和咸鱼有分别？” “你不睡怎么做梦？”'] }
          ],
          [
            { authenticate: ['白天是大家的，夜晚是我的。', '整个世界都睡了，我熬夜想你。', '完全无法抵挡夜生活的诱惑。', '熬夜变胖，才能装下满腔委屈。', '从早嗨到晚，熊猫眼炯炯有神。'], advance: ['时日不多，继续骄傲放纵。', '暗夜无边，危机四伏，早睡保命要紧！'] },
            { authenticate: ['宁愿熬夜，也不愿拿加班费。', '你习惯熬夜，我也假装睡不着。', '躺下一瞬间，刷起朋友圈。', '养剧一整年，追剧一整晚。', '我都睡了，还有谁陪你熬夜？'], advance: ['请搜索下“猝死”的新闻，如果害怕还有救。', '努力工作吧，它能拯救你，埋头苦干可以让你好眠！'] },
            { authenticate: ['熬夜=不愿意结束美好的一天。', '我也不想熬，谁叫自由迷人。', '只有夜晚才真正属于自己。', '白天困成狗，晚上嗨不够。', '等一句晚安，我倒头就睡。'], advance: ['熬夜能拉进你和医生的距离，如果TA是你暗恋对象，挺好。', '夜间助眠有三宝：高数、领导和校长。'] }
          ],
          [
            { authenticate: ['除了睡觉，让我做什么都可以。', '在剧中堕落，在游戏中沉沦。', '猫科动物转世，夜猫本尊！', '忙碌和熬夜是自我治愈的良方。', '红牛续命，熬夜通宵不在话下。'], advance: ['赶快买份保险吧，反正受益人不是你。', '书本是个好东西，能让人犯困，尤其是无字天书。'] },
            { authenticate: ['年轻人不熬夜还是年轻人吗？', '习惯了晚睡，跟夜作对。', '我就是不想睡，别叫我停下来。', '投资未来的人，忠于熬夜。', '我的白天和晚上可以无缝衔接。'], advance: ['使用中老年套装：热水枸杞保温杯，熬夜续航更持久。', '麻烦买个手机信号屏蔽器。'] },
            { authenticate: ['明明困得不行，就是不想睡。', '每一个夜猫，都是有故事的人。', '不睡觉是因为更爱做白日梦。', '我的时间，全靠夜里中挤出来。', '时间有限，熬夜得趁早。'], advance: ['强制打卡，晚睡扣工资，做老板该多为员工健康着想。', '佛祖仁慈，就不上十大酷刑了，明天开始996吧！'] }
          ]
        ],
        free: [
          [
            { authenticate: ['深夜思绪放飞，抓都抓不住。', '唯有通宵，能在熬夜后早起。', '熬夜加班，直到主机冒烟。', '忙着优秀，都抽不出时间睡觉。', '枕着夜色，在工作里沉沦。'], advance: ['升官发财指日可待，但请别让自己英年早逝。', '睡得久不如睡得好，咖啡奶茶麻烦戒一下！'] },
            { authenticate: ['钱没赚够，觉也没睡好。', '熬夜？没有，不是，别瞎说。', '你的黑眼圈比黑洞都深邃。', '做不完的工作，熬不完的夜。', '熬夜是小事，为工作不值一提！'], advance: ['看看存款有多少，再决定要不要熬夜，毕竟一晚ICU不便宜。', '夜间助眠有三宝：断网、停电和长跑。'] },
            { authenticate: ['革命尚未成功，同志仍需熬夜。', '创作灵感一上来，难以停下来。', '沉迷于工作无法自拔。', '睡觉只能做梦，工作将会圆梦。', '熬夜考证复习，考后卧床不起。'], advance: ['别仗着漂亮帅气就熬夜，熬久了也会变胖变成变秃头。', '睡得久不如睡得好，不如买套好床品，俘获周公的心。'] }
          ],
          [
            { authenticate: ['情况过于惨烈，无法一一说明。', '假装快乐，都是熬夜的好手！', '这个夜，情绪起伏太过强烈。', '听说熬夜会猝死，我尽量通宵。', '失眠的夜，依靠手机连接世界。'], advance: ['此人已走火入魔，严重消耗后台数据，请先垫付下费用。', '书本是个好东西，能让人犯困，尤其是无字天书。'] },
            { authenticate: ['熬夜伤身，不熬夜伤心。', '开着灯入睡，闭着眼思念。', '熬了整晚，发了多少疯自己懂。', '工作是种体验，熬夜是种享受。', '晚上嗨翻天，白天倒头睡。'], advance: ['扶他起来，也就只能再熬一会儿。', '白天别瞌睡，晚上攒到一起好好睡！'] },
            { authenticate: ['孜孜不倦修仙，勤勤恳恳养生。', '想你的夜，实在难眠！', '在世界清醒前，我独占夜的黑。', '晚一点睡，才能想你久一点。', '那些孤独的夜，耳朵塞满音乐。'], advance: ['此人需要一个对象，组织安排一下,开启强制哄睡模式。', '放下手机，立地成佛。'] }
          ],
          [
            { authenticate: ['熬得不是夜，是自由孤独灵魂。', '我欲成仙，快乐齐天。', '是谁，让我坠入夜的深渊！', '睡多久不重要，重要是睡过了。', '习惯熬夜，任思绪撒野狂奔。'], advance: ['此人耐操，无需休息，建议007。', '建议重返校园，重修高数，毕竟天书有助睡眠！'] },
            { authenticate: ['熬夜成瘾，只为等你一句晚安。', '不是我睡得晚，是你们睡太早。', '不想睡，阳光没出现怎么睡？', '白天被摧残，晚上寻自我。', '为了透支思念，我特意晚睡。'], advance: ['换个暗恋者，喜欢你的人舍不得你熬夜。', '下班别打滴滴了，直接摩拜骑回家吧，累了好睡觉！'] },
            { authenticate: ['一边熬夜一边蹦养生迪。', '说好了要早睡，只是说说而已。', '长夜漫漫，无心入睡。', '熬夜比工作轻松多了。', '越晚越疯，越黑越闹。'], advance: ['夜猫回头金不换，更衣早起做贤人。', '美的人都先睡，丑的人请随意。'] }
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
      df.splice(WJH.randomNum(0, df.length - 1), 1)
      df.splice(WJH.randomNum(0, df.length - 1), 1)
      df.splice(WJH.randomNum(0, df.length - 1), 1)
      this.authenticate = df
      this.advance.push(
        this.desc[type][this.tickOnePosition][this.tickOnePosition].advance[WJH.randomNum(0, 1)]
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
    console.log(sessionStorage.getItem('avatar'), '头像link', this.avatar)
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
      background-position: px2html(-2px) 0px;
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
        padding-top: px2html(12px);
      }
      >.serial-number {
        color: rgba(45, 45, 45, 1);
        font-size: px2html(8px);
        text-align: right;
        height: px2html(4px);
        width: px2html(280px);
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
          top: px2html(177px);
          font-size: px2html(15px);
          left: px2html(65px);
          width: px2html(500px);
          text-align: left;
        }
        >.advance {
          width: px2html(220px);
          position: relative;
          color: rgba(45, 45, 45, 1);
          top: px2html(210px);
          font-size: px2html(15px);
          text-align: left;
          left: px2html(65px);
          height: px2html(50px);
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        >.debt {
          position: absolute;
          color: rgba(45, 45, 45, 1);
          top: px2html(220px);
          font-size: px2html(15px);
          left: px2html(65px);
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
            width: px2html(40px);
            height: px2html(40px);
            margin-top: px2html(5px);
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
      width: px2html(209px);
      height: px2html(52px);
      background-image: url("../assets/03.gif");
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
