<template>
  <div class="bottom-footer">
    <div class="version">
      <span class="app">下载APP</span>
      <span>电脑版</span>
    </div>
    <p class="copyright">网易公司版权所有 © 1997-</p>
    <p>食品经营许可证：JY13301080111719</p>
  </div>
</template>


<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .bottom-footer {
    padding: px2rem(27) px2rem(10) px2rem(14);
    background-color: #414141;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    text-align: center;
  }

  .version span {
    display: inline-block;
    color: #fff;
    border: 1px solid #fff;
    width: px2rem(86);
    line-height: px2rem(32);
  }

  .app {
    margin-right: px2rem(25);
  }

  .bottom-footer p {
    font-size: px2rem($size_small);
    color: #999;
    line-height: px2rem(16);
  }

  .copyright {
    margin-top: px2rem(18);
      
  }
</style>
