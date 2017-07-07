<template>
  <div class="c-container">
    <carousel v-bind:pics="imgs" />
    <ul class="cc-bottom">
      <li><i /><span>网易自营品牌</span></li>
      <li><i /><span>30天无忧退货</span></li>
      <li><i /><span>48小时快速退款</span></li>
    </ul>
  </div>
</template>

<script>
    import carousel from '@/components/common/carousel'
    export default {
      props: ['imgs'],
      components: { carousel }
    }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .c-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: px2rem(236);
    margin-bottom: px2rem(10);
  }
  .cc-bottom {
    height: px2rem(36);
    background-color: #fff;
    display: flex;
    padding: 0 px2rem(15);
  }

  .cc-bottom li {
    flex: 1;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .cc-bottom li i {
    background: url('../../assets/images/checkbox.png');
    background-size: cover;
    width: px2rem(16);
    height: px2rem(16);
  }

  .cc-bottom li span {
    display: inline-block;
    font-size: px2rem($size_small);
    line-height: px2rem(16);
    margin-left: px2rem(4);
  }
</style>
