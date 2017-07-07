<template>
  <div class="pin-item-container">
    <img class="pin-item-pic" v-bind:src="commodity.pic" />
    <div class="pin-item-content">
      <h4 class="title">{{ commodity.title }}</h4>
      <div class="bottom">
        <div class="left">
          <span class="pinCount">{{ commodity.pinCount }}人团</span>
          <span class="pinPrice">¥{{ commodity.pinPrice }}</span>
          <span class="price">单买价{{ commodity.price }}</span>
        </div>
        <div class="right">
          <span v-bind:class="['openBtn', commodity.left === 0 ? 'disabledOpenBtn' : '']">去开团</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['commodity']
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .pin-item-container {
    background: #fff;
    margin-bottom: px2rem(10);
  }

  .pin-item-pic {
    width: 100%;
    height: px2rem(210);
  }

  .pin-item-content {
    padding: px2rem(11) px2rem(15) px2rem(16);
  }

  .pin-item-content .title {
    margin-top: px2rem(9);
    margin-bottom: px2rem(6.5);
    font-size: px2rem(17);
  }

  .pin-item-content .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .pin-item-content .pinCount {
    margin-right: px2rem(10);
    font-size: px2rem($size_middle);
    color: $text_color;
  }

  .pin-item-content .pinPrice {
    color: #b4282d;
    font-size: px2rem(18);
    font-weight: bold;
    margin-right: px2rem(10);
  }

  .pin-item-content .price {
    color: $text_color;
    text-decoration: line-through;
  }

  .pin-item-content .openBtn {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    width: px2rem(96);
    line-height: px2rem(32);
    height: px2rem(32);
    border: none;
    border-radius: 4px;
    color: #fff;
    background: #b4282d;
  }

  .pin-item-content .disabledOpenBtn {
    background: #ccc;
  }
</style>
