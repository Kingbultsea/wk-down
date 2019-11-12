<template>
    <div>
        <div class="button_list">
            <h4>1.登录接口</h4>
            <div @click="login" class="button_active">登录接口</div>
        </div>
        <div class="button_list">
             <h4>2.分享接口</h4>
            <div @click="shareCtrl" class="button_active">分享接口</div>
        </div>
        <div class="button_list">
            <h4>3.网页重定向</h4>
            <!-- <div @click="redirectCtrl" class="button_active">重定向(发现中心)</div>
            <div @click="redirectCtrl2" class="button_active">重定向(社区话题)</div> -->
            <h4 @click="redirectCtrl_center" class="button_active">各个code跳转(跳转页面到--)</h4>
        </div>
        <div class="button_list">
            <h4>3.1心潮的网页重定向</h4>
            <!-- <div @click="redirectCtrl" class="button_active">重定向(发现中心)</div>
            <div @click="redirectCtrl2" class="button_active">重定向(社区话题)</div> -->
            <h4 @click="redirectCtrl_center_xc" class="button_active">各个code跳转(跳转页面到--)</h4>
        </div>
        <div class="button_list">
            <h4>4.支付</h4>
            <div>暂时没写</div>
        </div>
        <div class="button_list">
            <h4>5.保存图片</h4>
            <div @click="savePicCtrl" class="button_active">保存图片</div>
        </div>
        <div class="button_list">
            <h4>6.关闭webview</h4>
            <div @click="closeWindow" class="button_active">关闭webview</div>
        </div>
        <div class="button_list">
            <h4>7.升级新版</h4>
            <div @click="updateApp" class="button_active">升级新版</div>
        </div>
        <div class="button_list">
            <h4>8.用户是否登录</h4>
            <div @click="isLogin" class="button_active">用户是否登录</div>
        </div>
        <div class="button_list">
            <h4>9.获取app环境</h4>
            <div @click="getEnv" class="button_active">获取app环境</div>
        </div>
        <div class="button_list">
            <h4>10.获取app所有可用接口</h4>
            <div @click="getApiList" class="button_active">获取app所有</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg2: '345'
    }
  },
  methods: {

    login: function(){
      callAppRouter('Login','',function(err, result){})
      // if(XinchaoApp){
      //   callAppRouter('Login','',function(err, result){})
      // }else{
      //   callAppRouter('Login','',function(err, result){})
      // }
    },
    // 分享接口
    shareCtrl: function(){
      callAppRouter('Share', {
          "imgUrl": "https://webres.psy-1.com/images/common/minibreath.png",
          "shareType": 3
      },function(err, result){})

    },
    // 3.网页重定向
    // redirectCtrl: function(){
    //   callAppRouter('Redirect',{
    //       "code":2000,
    //       "close":1
    //   },function(err, result){})
    // },
    // redirectCtrl2: function(){

    //     callAppRouter('Redirect',{
    //         "code":1051,
    //         "topic_id":1
    //     },function(err, result){})

    // },
    redirectCtrl_center: function(){
      this.$router.push('/center')
    },
    redirectCtrl_center_xc: function(){
      this.$router.push('/centerxc')
    },
    // 5.保存图片
    savePicCtrl: function(){

        callAppRouter('savePic',{
            "imgUrl":"https://webres.psy-1.com/images/common/minibreath.png"
        }, function(err, result){})

    },
    // 6.关闭webview
    closeWindow: function(){

        callAppRouter('closeWindow','',function(err, result){
            console.log('关闭webview')
        })

    },
     // 7.升级app
    updateApp: function(){

        callAppRouter('updateApp','',function(err, result){})

    },
     // 8.判断用户是否登录
    isLogin: function(){

        callAppRouter('isLogin','',function(err, result){
            console.log(result)
        })

    },
    // 9.获取app环境--有问题
    getEnv: function(){

        callAppRouter('getEnv','',function(err, result){
            console.log(result)
        })

    },

    // 10.获取app所有可用接口
    getApiList: function(){

        callAppRouter('getApiList','',function(err, result){
            console.log(result)
        })

    },
  },
  created () {
  }
}
</script>

<style>
@import "../assets/public.css";

</style>
