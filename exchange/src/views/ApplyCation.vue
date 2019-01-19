<template>
    <div>
    <div class="applycation" v-html="rawHtmlData">
    </div>
        <div class="bottom" v-if="appOutside">
            <a   target="view_window" href="https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic" >
                <div class="bottom-img">
                    <img  class='bottom-hehe' src="../assets/a.png"/>
                </div>
            </a>
            <a   target="view_window" href="https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic" >
                <div class="bottom-center">点击下载小睡眠App</div>
            </a>
            <a class="dl"  target="view_window" href="https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic" >
                <div class="bottom-dl">下&nbsp;&nbsp;载</div>
            </a>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Tool from '../js/tool.js'

    export default {
        name: "ApplyCation",
        data () {
            return {
                appOutside: false,
                saveFont: 1,
                title: '七天睡眠瘦身',
                rawHtmlData: ''
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
            },
            parseQuery(url) {
                var queryObj={};
                var reg=/[?&]([^=&#]+)=([^&#]*)/g;
                var querys=url.match(reg);
                if(querys){
                    for(var i in querys){
                        var query=querys[i].split('=');
                        var key=query[0].substr(1),
                            value=query[1];
                        queryObj[key]?queryObj[key]=[].concat(queryObj[key],value):queryObj[key]=value;
                    }
                }
                return queryObj;
            }
        },
        mounted () {
            const id = this.parseQuery(document.URL)

            switch (parseInt(id.article_id)) {
                case 1: { // 1
                    this.rawHtmlData = `<h3><b><span>配套知识<span lang="EN-US"> - </span>最好的瘦身教练</span></b></h3><p class="MsoNormal"><span>你好，欢迎加入心潮睡眠瘦身计划，以下是第一天练习的配套知识，非常的重要，希望你仔细阅读完，再开始今晚的音频练习。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>许多人在瘦身这件事上，常常会感到很孤单。你是一个人在战斗吗？我们很高兴来做你的战友。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>这套课程设计在<b>睡前</b>——这个特殊的时间练习<b style="mso-bidi-font-weight:
normal">，</b>是因为首先，身体和潜意识是非常精妙的，在我们睡着的时候，它们还在继续勤劳的工作，因此，睡前进行学习和练习，作用就能持续在睡眠中发挥，比白天练习的效果更好；其次，好的睡眠会显著减少你对食物的过度欲望，同时可以促进新陈代谢，减少体内脂肪的产生与堆积。因此，我们的瘦身计划，也会帮助你获得更优质的睡眠。
<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><b><span>课程每天分为知识和音频练习两个部分，首次开始请按顺序学习当天的知识，再完成当天的音频练习，其中音频部分建议多次重复练习</span></b><span>，在练习音频的过程中，走神或者入睡了都没关系，因为，你的潜意识一直在发挥作用，当你重新回来会发现更容易完成练习。课程结束之后也建议终生持续音频部分的练习，因为这些练习除了帮助维持苗条且健康的身材，也会帮助你找到自己最佳的状态，提高自信与魅力。因此，课程是<b>适合所有人群的，尤其适合希望获得更健康的好身材和提高魅力的人群。</b><span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>好了，让我们回到瘦身这件事。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>假设身体是机器，我们输入一个“瘦”的指令，身体就乖乖瘦下来，那事情就会变得简单许多。但是身体有它自己的意志。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>想象一下，如果你每天从起床到睡觉，做什么都是由别人决定的，想吃的不能吃，不想吃的被逼着吃；不想动的时候，被拽着动，而且都是你不喜欢的运动。你会开心吗？找着机会是不是就会反抗？<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>这些，都是我们的身体正在经历的生活。反抗，就是那些开戒后的大吃特吃，还有那些反弹回来的体重。身体其实是有自己的节奏和需要的，并不是我们想要它做什么，它就会照做。<b><span style="color: rgb(194, 79, 74);">你的身体比地球上任何的瘦身方法都聪明。它的需要它自己最清楚，吃什么、做什么运动、怎样会瘦，它自己都知道。</span></b>只是我们常常忽略它反馈的信号，而选择去相信外在的一些研究结果。然而，别人的研究结果并不能完全套用在我们自己独特的身体上。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>当你开始相信，你的身体能够为它自己找到最好的瘦身方法，你就开始了健康瘦身的第一步。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><img src="http://wx2.sinaimg.cn/mw690/006Zdy2vgy1fzavh0pko5j30p00e3abr.jpg" style="max-width:100%;"><span><br></span></p><p class="MsoNormal"><span>接下来的几天里，我们会带领你，去体会自己的身体对于食物的需要，对于运动的情绪以及对自己的态度。更关键的是，<b>我们会提供实用的、根据你自己身体需要的瘦身方法，一种完全根据你的情况而定制的，只属于你的方法。</b><span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>瘦身计划的第一步是帮助你和自己的身体做朋友，并以朋友平等的姿态来尊重它，让它听懂你的需要，同时也听听身体本尊的需要，从而有针对性地瘦身。然而，<b>身体的感知语言和我们头脑的认知语言并不是一回事。</b>所以第一个练习就是通过头脑和身体语言的共同点——可视化的想象开始，让身体听懂我们的需求，理解我们想要的目标。当我们对于瘦身后想成为的样子有了清晰的形象，就可以把这个形象传递给身体和潜意识，让它们与我们一起，持续向这个目标努力。<span lang="EN-US"><o:p></o:p></span></span></p><p>`
                }
                    break;
                case 2: {  // 2
                this.rawHtmlData = `<h3><b style="mso-bidi-font-weight:
normal"><span>配套知识 <span lang="EN-US">- </span>节食减肥那些事</span></b></h3><p class="MsoNormal"><span>晚上好，欢迎回到心潮睡眠瘦身计划。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>今天是我们并肩战斗的第二天。你今天过得怎样？<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>感觉一下自己的呼吸，慢慢吸气，再慢慢的呼气。无论白天发生了什么，都跟随呼吸一起释放出去，深深吸气，逐渐释放。放下一切，把注意放回到我们的瘦身计划。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>在开始具体行动之前，首先需要澄清一个问题，我们的瘦身计划，并不是要成为杂志中明星或模特的身材。那样的身材，不是经过修图，就是需要挨饿或者需要大量的时间和精力去维持。这样的维持，在某种程度上会对身体造成很大的负荷。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span style="text-align: left; font-family: Avenir, Helvetica, Arial, sans-serif; font-weight: bold; color: rgb(194, 79, 74);">我们的目标是让身体找到最自然、最健康的变瘦方案，不靠疯狂节食或剧烈锻炼来达到不自然的瘦，因为那样是在利用身体，甚至折磨身体。</span><span>我们是与身体合作，尊重它，想吃就吃，享受食物；想动就动，享受运动，从而找到我们的自然瘦，并自然而然长期保持，就好像那些天生不会胖的人。这套方法已经在英国和美国让数百万人成功瘦下来。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>很多数据表明，绝大部分采用节食的方法来瘦身的人，在停止节食之后，体重很容易反弹，甚至比之前更重。这是因为，<b>节食是强迫身体做它不愿意做的事情，当强迫停止之后，对于食物的渴望会倍增，体重自然就会反弹。</b><span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>二战时期，一位生物学家做了一个实验，通过节食让一组人总是处于半饥饿的状态。实验结束时，这组人都出现了对食物强迫性的渴望，即使在实验结束三个月后，这种强迫性的渴望也没有消失，他们的食量比实验前多了<span lang="EN-US">8</span>倍。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>有人说，那我持续一生节食就不会反弹了。确实有人是这样的，但一生是个漫长的过程，需要强大的意志力和自律力。我们的瘦身系统本就不是针对这样的人而设计。现实中，更多人是忙于学习和工作，没有精力维持节食或者大量锻炼，而我们就是帮助这些人，在<b>睡着觉、吃着饭、上着班或上着学</b>的同时，<b style="mso-bidi-font-weight:
normal">把身体瘦下来，同时更喜欢自己，也更加健康。</b><span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>除了瘦身之外，我们也将帮助你和自己的身体达成和谐的关系，让你开始听得懂它的信号和需求，更快速直接地感受到它的状态，从而保持你的健康。比如，不再依靠年度体检来判断健康与否，而是随时可以和身体对话，尽早处理身体的不适，避免延误。此外，在瘦身的过程中，<b>建议你不要频繁地去称体重，而是更多的去觉察自己的身体，平等地与它沟通，按照它自己舒服且稳定的模式进行。</b>如果它是不健康的，允许它恢复健康，再瘦下来。因此，测量体重尽量间隔两周或者更长时间。<span lang="EN-US"><o:p></o:p></span></span></p><p>`
            }
                break;
                case 3: {  // 3
                    this.rawHtmlData = `<h3><b><span>配套知识 <span lang="EN-US">- </span>饿了就吃，饱了立刻停</span></b></h3><p>晚上好，欢迎回到第三天的心潮睡眠瘦身计划。<br><br>如果我们跟你说:”要想瘦身，饿的时候就去吃吧。”<br><br>你会有什么反应？我们不是开玩笑，是真的有科学依据。<br><br>猜猜骆驼的驼峰里存储的是什么？其实并不是水，而是脂肪。由于骆驼的生存环境，它们的身体存储脂肪是因为不知道下一次什么时候进食。同样，当我们的身体感到饿的时候，它不知道我们是为了瘦，<span style="font-weight: bold;">只会以为是我们的生存受到威胁，就会用它自己的方法来保护你。</span><br><br>保护的方式有两种：<br><br>第一种是开始存储脂肪。具体表现就是当你每一次吃食物的时候，它会从食物中尽最大的可能去吸收多的脂肪，然后把它们存起来。男生多半存在肚子而女生多半存在小腹、臀部和大腿。<br><br>第二种是降低代谢率，从而节约能量的消耗，给你更多的保护。具体表现形式可能是精神不振、乏力、昏睡甚至会出现抑郁情绪。<br><br>所以，节食这种方式只会让身体产生误会。那怎么能让我们和身体这个团队劲往一处使呢？很简单，<span style="font-weight: bold;">身体饿了就给它吃，它就不会存储脂肪，也不会降低代谢了。</span><br><br><span style="font-weight: bold;">吃东西并不是我们变胖的理由，过量的吃才是。</span>怎样算过量呢？我们通常有两种饱的信号，一种是胃饱了，也就是身体饱了，这时候食物吃起来感觉可能还是好吃的；另一种是嘴饱了，也就是意识到自己饱了，这时候食物的感觉就没那么好了。<br><br>研究表明，胃发出饱的信号最长需要20分钟才能到达大脑。换句话说，当我们意识到自己饱了，往往已经饱了一段时间，甚至过饱了，这就导致容易过量的吃。幸运的是，<span style="font-weight: bold;">只要持续的练习对于胃的感觉的敏锐度，我们就可以缩短这个信号被大脑接收到的时间。</span><br><br>为了持续地瘦身，保持体重不反弹，我们必须和身体合作而不是对着干。身体感觉饱了，就说明已经得到足够的营养，再吃就是多余的能量了。<span style="font-weight: bold;"></span><br><br><span style="color: rgb(194, 79, 74); font-weight: bold;">因此关于瘦身，除了不要节食，更重要的原则是——胃饱了就要停。</span>今晚的练习就是帮助你觉察胃的信号。为此，我们设计了一个5分制的衡量标准，帮助你判断胃的饥饱程度。1分是饿得难受，2分是有点饿，3分是不饱也不饿，4分是有点饱，5分是撑得难受。</p><p><img src="http://wx3.sinaimg.cn/mw690/006Zdy2vgy1fzb6yp903ij30p00e3dig.jpg" style="max-width:100%;"><br></p><p>在开始时候，你需要集中注意，认真地用我们的方法，并且体会自己身体的反馈。慢慢地就会变得越来越简单，甚至在你意识到之前就会习惯这么做了，因为你的身体天生就是设计这么吃东西的。现在就一起进入今天的音频练习吧。</p><style>`
                }
                    break;
                case 4: {  // 4
                    this.rawHtmlData = `<h3><b><span>配套知识 <span lang="EN-US">- </span>情绪性进食</span></b></h3><p class="MsoNormal"><span>晚上好，欢迎回到第四天的心潮睡眠瘦身计划。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>今天过得好吗？带着怎样的心情来到这里呢？我们已经携手走了一段时间，现在我们要跟你聊一个更深的点——情绪化进食。
<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>在此之前，先分享一个故事：小北来到我们这里，诉说他对毕业的焦虑。这是他硕士的最后一年，可是每天一坐到桌前写论文，他就一直想要起来找东西吃，根本无法开始写。这样的状况持续了<span lang="EN-US">3</span>个月，眼看答辩的日子越来越近，论文一点进展都没有的他，还是不断的吃，同时越来越沮丧。我建议他，每次去拿食物之前，停一下，体会自己发生了什么。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>三天后，他回来我们这里，描述昨天又一次想吃东西的情景，与以往不同，他选择先安静地坐到沙发上，温暖的阳光从窗户洒进来，照在他的背上，支撑着他。他告诉我，他发现在吃东西时，他自己既不是饿、也不是觉得好吃，却有一种满足感和掌控感，这正是他写论文时极度缺乏的感觉——他想要的并不是吃东西，而是通过吃来获得满足。在体会到这一层后，他开始对自己产生了理解，还有一些同情。原来自己一直好努力想要抓到的<b>不是食物，而是写完论文的满足与对自己生命的掌控感。</b>在这之后，他一周内就完成了论文。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>回到我们每个人身上，有些时候，我们吃东西<b>不是真的因为饿</b>，可能是因为像小北一样压力大，也可能是感到孤单、难过、疲累或者任何其他的情绪。甚至可能是生活中的一些重要事件，比如压抑的婚姻、慢性疾病、繁杂的工作或是糟糕的人际关系，给我们带来巨大的情绪起伏，让我们无法很好的面对和处理，<b><span style="color: rgb(194, 79, 74);">于是我们就通过吃东西来抚慰自己，获得满足感和掌控感。在吃东西的那个瞬间，感觉自己和世界都不那么糟。</span></b><span>这样的方式起源于自我安慰，形成习惯之后，就影响了正常的饮食和健康。<span lang="EN-US"><o:p></o:p></span></span></span></p><p>该怎样分辨是情绪化饥饿还是生理的饥饿呢？一般来说，生理上的饥饿感是逐渐增强的，不是突然出现的，一开始的时候可能是胃部的一点信号，后来可能会有些空腹感。如果还是不吃的话，就可能感觉头晕、无力和疲劳。<span style="font-weight: bold;">而情绪化饥饿是很突然而且紧急的，感觉你要马上吃到嘴里才能罢休。</span></p><p>`
                }
                    break;
                case 5: {  // 5
                    this.rawHtmlData = `<h3><b><span>配套知识 <span lang="EN-US">- </span>享受食物</span></b></h3><p class="MsoNormal"><span>晚上好，欢迎回到第五天的心潮睡眠瘦身计划。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>这几天，你吃东西的习惯开始有一些变化了，你有留意到吗？生活的节奏让我们总有一种不停地行走的感觉，永远都有下一件事要做，而留给吃饭的时间是很少的，或者说纯粹的吃饭时间很少。和别人一起吃的时候，我们会专注与别人谈话，一个人的时候则可能看各种电子设备。
<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>瑞士的科学家曾经做过一个实验，把一组人的眼睛蒙起来吃东西，他们最后吃的量比平常少了约<span lang="EN-US">25%</span>。因为没有外界干扰，他们更能集中精神去品味食物的味道<span lang="EN-US">, </span>也更能感知到自己饱了的信号。当然我们不会建议你蒙起眼睛，<b>我们建议希望瘦身的你，更纯粹的吃饭，和食物建立起良好的关系</b>。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal">国外很多静心营就只做一件事，教你如何慢慢地吃饭，享受食物。在这样的设定下，当你真的慢下来的时候，就会发现连吃一颗葡萄都会分成几口去吃，而且每一口都足够满足。<span style="text-align: left; font-family: Avenir, Helvetica, Arial, sans-serif;"><span style="font-weight: bold;">所以，从今天开始，每次就餐都收起你的电子设备，专注于面前的食物，减缓你进食的速度，仔细体验食物进入你的嘴巴，你的嘴唇、舌头、牙齿和整个口部的感觉。<span style="color: rgb(194, 79, 74);">慢慢地享受食物，缓缓吞咽下去之后，体会你的身体感受，及时地去感觉胃的反馈，当你的胃感觉饱了或是吃到了不适合你的食物，就立刻停止下来。</span></span></span></p><p class="MsoNormal"><span style="text-align: left; font-family: Avenir, Helvetica, Arial, sans-serif; font-weight: bold;">这里所指的不适合你的食物，并不是通常营养学或者各种研究里所说的食物，而是你与自己的胃沟通的结果，专属于自己身体的需求。</span><span>比如有些人每次吃牛肉，身体都有一种没有活力的感觉。吃其他肉的时候没有这感觉。牛肉就是不适合他身体的肉。如果想吃，其实是他头脑的信号，而不是身体。头脑想吃是有很多种原因的，可能和之前的经历有关，也可能和情绪有关，但并不是我们身体在当下所需要的。所以，留意身体的反馈，也能帮助你了解，什么是最适合你身体的食物。<span lang="EN-US"><o:p></o:p></span></span></p><p>`
                }
                    break;
                case 6: {  // 6
                    this.rawHtmlData = `<h3><b><span>配套知识 <span lang="EN-US">- </span>增强身体代谢</span></b></h3><p class="MsoNormal"><span>晚上好，欢迎回到第六天的心潮睡眠瘦身计划。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>看到今天的标题，你大概能猜到我们今晚的主题了。你是带着怎样的心情来到这节课呢？是期待运动还是稍微有那么一点犹豫呢？不管怎样都先往下看吧。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>前面几天，我们都在讲吃东西，也就是能量的摄入，今天我们来聊聊能量的代谢。<b>当我们能够按照身体的真实需要来摄取能量之后，还有什么方法能让瘦身的效率变得更高，同时又能保持健康呢？那就是提高代谢率。</b><span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>代谢率是你的身体产生能量的速度。身体代谢率越快，消耗的能量就越多。也就是说，可能燃烧的脂肪就会越多。英国权威的糖尿病专家——苏珊</span><span arial="" unicode="" ms",sans-serif'="">·</span><span>杰布博士说过<span lang="EN-US">:“</span><b><span style="color: rgb(194, 79, 74);">提高代谢率有两种方法，一是别饿着自己，因为这样会降低代谢率；二是多运动。</span></b>”
<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>别饿着自己，我们已经练习了很多天，今天的重点在于多运动。<b>运动除了加快代谢，还有一个很重要的作用，就是帮我们排解压力。</b>在日常生活中，身体感受到情绪的压力时，神经系统会把这些压力当成真实的危险而变得紧张，身体也会因而紧张起来，聚集能量，好为我们逃离或者对抗危险做准备。但实际上，我们并不是真的要逃跑或对抗。但是神经已经变得紧张了，这些紧张感会储存在身体中。这时，可以通过运动来模拟逃跑和对抗的情形，帮助我们消耗体内的紧张感，排出相应的压力化学物质。另外，在运动之后，大脑还会分泌一种对缓解压力很有效的物质——内啡肽，所以，适量的运动会让情绪变得更好，精神更加集中。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>很多人一想起运动就是挥汗如雨和气喘吁吁。但其实运动并不局限于此。本质上，<b>任何能提高你的心跳速度，让你呼吸幅度变得更大的动作，都可以叫做运动。</b>所以，当你选择坐着而不是躺着的时候，你做了更多的运动；选择站着而不是坐着的时候，你做了更多的运动；选择在屋子里走来走去，又做了更多的运动；出去走得时间更久的时候，运动量又更大了一些。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>运动其实是一个循序渐进的过程。我们建议你，选择力所能及的运动，哪怕是简单的走走路。很多研究证实，走路不仅可以增进健康，还可以提高脑力。因此，只要是比平常多走一些路，让自己稍微觉得有点吃力的距离，也是很好的运动。<span lang="EN-US"><o:p></o:p></span></span></p><p>`
                }
                    break;
                case 7: {  // 7
                    this.rawHtmlData = `<p class="MsoNormal"><b><span>配套知识 <span lang="EN-US">- </span>睡觉减重<span lang="EN-US"><o:p></o:p></span></span></b></p><p class="MsoNormal"><span>晚上好，欢迎回到第七天的心潮睡眠瘦身计划。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>今天是最后一天了，你觉得时间过得快吗？今晚，我们选择以睡眠作为知识的结束，因为，睡个好觉，是最简单的瘦身技巧。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>首先，<b style="mso-bidi-font-weight:
normal">睡觉可以稳定基础代谢率，更快地瘦身</b>。<b><span lang="EN-US"><o:p></o:p></span></b></span></p><p class="MsoNormal"><span>其次，饥饿感是由体内两种激素协同产生，一种叫做“瘦素”，控制我们饱的感觉；另一种是“胃饥饿素”，控制饿的感觉。两种激素协同作用调节我们的饥饿感。在入睡之后，这两种激素会趋于平衡，让身体感觉不到饿，至少可以承受<span lang="EN-US">8</span>小时断食。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>美国斯坦福大学曾做过实验：实验者被分成两组，一组睡<span lang="EN-US">8</span>个小时，另一组睡<span lang="EN-US">5</span>个小时。结果，<span lang="EN-US">5</span>小时睡眠组，胃饥饿素分泌增加了约<span lang="EN-US">15%</span>，而瘦素的分泌量降低了<span lang="EN-US">15.5%</span>。两者综合的结果，就是食欲升高。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>另外，瑞典乌普萨拉大学的研究者发现，通宵不睡，会使食欲相关脑区的神经元被激活到最活跃的状态，这也证明了睡眠不足的人会更渴望食物。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>所以，睡不好的时候，你的胃饥饿素会更多的分泌，自然地想吃更多东西。而这些想吃的东西，并不是你身体真的需要，只是因为睡眠不好，产生的假性饥饿。<b>由于假性饥饿而吃进去的东西，只会紊乱你的基础代谢。而夜间的代谢率本来就慢，从宵夜摄取的热量，如果没有被消耗就会转变成脂肪，储存在身体里。</b>除此之外，熬夜的人还更容易吃高糖、高脂肪的食物。美国宾西法尼亚大学经过实验也发现，熬夜者比以往更喜欢吃高热量、高脂肪的食物。然而，在夜间进食高糖的食物，如米饭、面条等，会引起血糖浓度和胰岛素的急剧上升。另外，进食高脂肪食物，会导致血液中的甘油三酯水平显著升高。所以，熬夜或不佳的睡眠状况不仅妨碍瘦身，还会增加患糖尿病的风险。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal">因此，<span style="color: rgb(194, 79, 74);"><b style="mso-bidi-font-weight:
normal"><span>对于想要健康瘦身的你来说，好好睡觉，是一个既简单又有效的科学办法</span></b>。</span>当然，我们理解很多时候好好睡觉并不是说到就能做到的事情。首先，你可以结合小睡眠<span lang="EN-US">APP</span>的<b>睡眠记录功能，</b>培养按时睡觉的身体规律。另外，也可以尝试我们针对不同睡眠困扰的解决方案。<span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span>我们的睡眠瘦身知识到这里就结束了，<b>课程的结束不代表瘦身行动的结束。</b>如果你需要的话，可以回来反复学习；如果你已经掌握了，坚持音频练习的部分即可。
<span lang="EN-US"><o:p></o:p></span></span></p><p>`
                }
                    break;
                case 8: {  // 8
                    this.rawHtmlData = `<h3><b><span style="font-size:12.0pt;font-family:
宋体;color:black;mso-themecolor:text1">心潮呼吸瘦身法</span></b></h3><p class="MsoNormal"><span>大量研究表明，腹式呼吸不仅可以帮助消耗腹部脂肪，改善心肺功能，还可以在一定程度上帮助放松身心。睡前通过腹式呼吸这种简单的运动，不仅可以促进疲劳释放，还可以帮助提高睡眠质量。</span></p><p class="MsoNormal"><span>本练习结合了腹式呼吸练习与渐进式催眠放松，不仅可以帮助利用睡前这个时间瘦身减腹，还可以帮助提高入睡效率与提升睡眠质量，达到更健康的瘦身效果。</span></p><p class="MsoNormal"><span style="font-weight: bold; text-align: left; font-family: Avenir, Helvetica, Arial, sans-serif;">该练习适合除了孕妇以外的所有人群，每晚睡前练习。高血压和哮喘患者需有家人陪同练习。</span></p><style>`
                }
                    break;

            }




            const isCosleep = Tool.is_cosleep()
            if (!isCosleep) {
                this.appOutside = true
            }

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
        padding-bottom: px2html(30px);
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
    .bottom{
        height:px2html(40px);
        //overflow:hidden;
        background:#312736;
        width: 100%;
        position:fixed;
        bottom:0%;
        left:0px;

        font-size:px2html(15px);
        color:#fff;
        .bottom-img{
            width:px2html(60px);
            position:relative;
            position:absolute;
            height:px2html(61px);
            left:px2html(-3px);
            top:px2html(-16px);
            .bottom-hehe{
                position:absolute;
                height:px2html(60px);
                width: px2html(60px);
                left:px2html(9px);
                top:px2html(-6px);
                z-index:999;
            }
        }

        .bottom-center{
            position:absolute;
            right:52%;
            top:50%;
            width:100%;
            transform: translateX(50%) translateY(-50%);
            color: #837D86;
            font-family: PingFangSC;
        }
        .bottom-dl{
            position:absolute;
            right:px2html(40px);
            top:50%;
            background-color: #5A525E;
            padding:px2html(10px);
            color: #fff;
            padding-top:px2html(1px);
            padding-bottom:px2html(1px);
            border-radius:px2html(18px);
            transform: translateX(50%) translateY(-50%);
        }
    }
</style>
