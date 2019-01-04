<template>
  <div class="ali">
    <div class="template">
      <p>1.打开 App Store，滑到【App】页面底部</p>
      <img src="../assets/绑定支付宝_slices/cosleep_guidance_img_subscribe1_cn@3x.png">
    </div>
    <div class="template">
      <p>2. 选择【绑定支付宝、微信支付宝或银联卡】</p>
      <img src="../assets/绑定微信_slices/cosleep_guidance_img_pay-1@3x.png">
    </div>
    <div class="template">
      <p>3. 勾选【微信支付 WeChat Pay】，然后点击 【前往微信验证】</p>
      <img src="../assets/绑定微信_slices/cosleep_guidance_img_wechatpay-1@3x.png">
    </div>
    <div class="template">
      <p>4. 确认开通微信免密支付并点击【下一步】</p>
      <img src="../assets/绑定微信_slices/cosleep_guidance_img_wechatpay-2@3x.png">
    </div>
    <div class="template">
      <p>5. 输入你的支付密码即可完成验证。认证完成后， 返回【App Store】，系统将自动完成绑定</p>
      <img src="../assets/绑定微信_slices/cosleep_guidance_img_wechatpay-3@3x.png">
    </div>
    <div class="template">
      <p>6. 绑定完成后，回到【小睡眠】App-【充值中心】， 点击你想要充值的金额充值即可</p>
      <img src="../assets/绑定微信_slices/cosleep_guidance_img_pay-2@3x.png">
    </div>
    <div class="template">
      <p >注意事项: </p>

      <p class="remove-p">1.充值前请确保你的App内购买项目访问限制为【开启】状态(在【设置】-【通用】-【访问限制】中进行设置)； </p>
      <p class="remove-p">2.请确认你的苹果设备未越狱； </p>
      <p class="remove-p">3.若绑定不成功，请确认你的信息填写无误，确认后再次进行绑定，若支付密码错误，则无法成功验证； </p>
      <p class="remove-p">4.海外用户如遇充值问题，可以到【小睡眠】微信公众号或者到QQ群【小睡眠官方交流群】向我们反馈你的问题，我们会为你解决。</p>
    </div>
    <div class="button">
      <a href="https://finance-app.itunes.apple.com/account/edit?mt=8">
        <div class="inner">前往 App Store 设置</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ali',
  methods: {
    toAppStore () {
      // window.open('itms-apps://finance-app.itunes.apple.com/account/edit?countryCode=CHN')
      window.open('itms-apps://finance-app.itunes.apple.com/account/edit')
    }
  }
}
</script>

<style scoped lang="scss">
.ali {
  padding-top: px2html(20px);
  .template {
    margin-left: px2html(25px);
    margin-bottom: px2html(30px);
    text-align: left;
    p {
      margin-bottom: px2html(15px);
      font-size: px2html(14px);
      max-width: px2html(310px);
      color: rgba(0, 0, 0, 0.6);
    }
    p:first-letter {
      color: rgba(63, 168, 244, 1);
      font-weight: 900;
    }
    img {
      margin-left: px2html(10px);
    }
  }
  .template:nth-child(1){
    img {
      height: px2html(60px);
    }
  }
  .template:nth-child(2), .template:nth-child(3), .template:nth-child(4), .template:nth-child(5), .template:nth-child(6){
    img {
      height: px2html(231px);
    }
  }
  .template:nth-child(7) {
    p:nth-child(1){
      color: rgba(63, 168, 244, 1);
    }
  }
  .remove-p:first-letter{
    color: rgba(0, 0, 0, 0.6) !important;
    font-weight: 400 !important;
  }
  .button {
    width: 100%;
    height: px2html(75px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(251, 250, 245, 1);
    .inner {
      display: flex;
      align-items: center;
      justify-content: center;

      width: px2html(255px);
      height: px2html(35px);
      background: rgba(74, 144, 226, 1);
      color: rgba(255, 255, 255, 1);
      font-size: px2html(15px);
      border-radius: px2html(20px);
      font-weight: 600;
    }
  }
}
</style>
