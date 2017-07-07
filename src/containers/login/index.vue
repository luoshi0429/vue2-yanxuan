<template>
  <div class="login-page">
    <navbar />
    <div class="login-content">
      <div class="input-container">
        <input placeholder="邮箱账号" />
        <i class="close-btn" />
        <div class="input-msg"></div>
      </div>
      <div class="input-container">
        <input placeholder="密码" />
        <i class="close-btn" />
        <div class="input-msg"></div>
      </div>
      <div class="login-btn">登录</div>
      <div class="other-choice">
        <span class="register">注册账号</span>
        <span class="forgetpwd">忘记密码</span>
      </div>
    </div>
    <div class="thirdlogin">
      <span class="qq"><i />QQ</span>
      <span class="weibo"><i />微博</span>
    </div>
  </div>
</template>

<script>
  import navbar from '@/components/common/navbar'
  export default {
    components: {
      navbar
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .login-page {
    background-color: #fff;
    width: 100%;
    min-height: 100%;
    // position: relative;
    display: flex;
    flex-direction: column;

  }

  .login-content {
    margin-top: px2rem(46);
    padding: 0 px2rem(20);
    flex: 1;
    // position: absolute;
    // top: px2rem(44);
    // left: 0;
    // width: 100%;
  }
  .input-container {
    position: relative;
  }

  .input-container input {
    height: px2rem(22.5);
    margin: px2rem(15) 0;
    width: 100%;
    font-size: px2rem(15);
    &:focus {
      outline: none;
      border: none;
    }
  }

  .input-container .close-btn {
    position: absolute;
    width: px2rem(33);
    height: px2rem(52.5);
    background: url('../../assets/images/close.png') no-repeat 50% 50%;
    background-size: px2rem(22.5) px2rem(22.5);
    top: 0;
    right: 0;
  }

  .input-container .input-msg {
    border-bottom: 1px solid $border_color;
  }

  .login-btn {
    text-align: center;
    background-color: #b4282d;
    color: #fff;
    height: px2rem(48);
    line-height: px2rem(48);
    font-size: px2rem(15);
    border-radius: px2rem(3);
    margin-top: px2rem(30);
    margin-bottom: px2rem(20);
  }

  .other-choice {
    display: flex;
    justify-content: space-between;
  }

  .thirdlogin {
    // position: absolute;
    // bottom: px2rem(50);
    text-align: center;
    width: 100%;
    margin: px2rem(50) 0;
  }
  .thirdlogin span {
    // display: inline-block;
    display: inline-flex;
    align-items: center;
    padding: 0 px2rem(24);
    font-size: px2rem($size_small);
    line-height: px2rem(14);
  }
  .thirdlogin .qq {
    border-right: 1px solid #7f7f7f;
  }

  .thirdlogin i {
    display: inline-block;
    width: px2rem(14);
    height: px2rem(14);
    margin-right: px2rem(5);
  }

  .thirdlogin .qq i {
    background: url('../../assets/images/qq.png') no-repeat;
    background-size: cover;
  }

  .thirdlogin .weibo i{
    background: url('../../assets/images/weibo.png') no-repeat;
    background-size: cover;
  }
</style>
