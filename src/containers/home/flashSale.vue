<template>
  <div class="flashSale">
    <div class="fs-left">
      <h3>严选限时购</h3>
      <div class="fs-countdown">
        <span class="time">01</span><span class="colon">:</span><span class="time">43</span><span class="colon">:</span><span class="time">40</span>
      </div>
      <p class="fs-next">下一场 18:00 开始</p>
    </div>
    <div class="fs-right">
      <img src="http://yanxuan.nosdn.127.net/cfb2c1b12cbd752424709480e48ede1a.png?imageView&quality=85&thumbnail=330x330" />
      <div class="fs-price">
        <p class="saleprice">¥15</p>
        <p class="preprice">¥19</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .flashSale {
    padding: px2rem(15) px2rem(20) px2rem(15) px2rem(28);
    margin-bottom: px2rem(10);
    background-color: #fff;
    height: px2rem(190);
    display: flex;
  }
  .fs-left {
    padding-top: px2rem(40);
    flex: 1;
  }

  .fs-left h3 {
    font-size: px2rem(18);
    line-height: px2rem(18);
    color: $dark_text_color;
    letter-spacing: px2rem(6);
    margin-bottom: px2rem(12);
  }

  .fs-countdown .time {
    display: inline-block;
    background-color: #444;
    color: #fff;
    font-size: px2rem($size_default);
    width: px2rem(31);
    height: px2rem(28);
    line-height: px2rem(28);
    text-align: center;
  }

  .fs-countdown .colon {
    display: inline-block;
    color: $dark_text_color;
    font-size: px2rem(15);
    line-height: px2rem(22.5);
    font-weight: 700;
    width: px2rem(10);
  }

  .fs-next {
    margin-top: px2rem(20);
    font-size: px2rem($size_small);
    color: $dark_text_color;
    line-height: px2rem(12);
  }

  .fs-right {
    height: px2rem(160);
    width: px2rem(160);
    position: relative;
  }

  .fs-right img {
    width: 100%;
    height: 100%;
  }

  .fs-price {
    position: absolute;
    width: px2rem(48);
    height: px2rem(48);
    right: px2rem(10);
    bottom: px2rem(18);
    background-color: rgba(244,143,24,.95);
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: px2rem(24);
  }

  .fs-price p {
    color: #fff;
    font-size: px2rem($size_middle);
    line-height: px2rem($size_middle);
    text-align: center;
  }

  .fs-price .preprice {
    text-decoration: line-through;
  }
</style>
