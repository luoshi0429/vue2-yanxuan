<template>
  <div class="my-pin-container">
    <div v-if="myPin.length === 0" class="my-pin-void">
      <div class="voidImg" />
      <p class="noOrder">还没有订单</p>
      <span class="pinBtn" v-on:click="pushToPinCommodity">快选购拼团商品</span>
    </div>
    <div v-if="myPin.length > 0" class="my-pin-content">aaa</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        myPin: []
      }
    },
    methods: {
      pushToPinCommodity () {
        this.$router.push('/pin/commodity')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .my-pin-void {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .my-pin-void .voidImg {
    background: url('../../assets/images/voidpin.png') no-repeat;
    background-size: cover;
    height: px2rem(124);
    width: px2rem(124);
  }

  .my-pin-void .noOrder {
    color: $text_color;
  }

  .my-pin-void .pinBtn {
    border: 1px solid #333;
    font-size: px2rem($size_small);
    border-radius: 4px;
    padding: px2rem(3);
    margin-top: px2rem(10);
  }
</style>

