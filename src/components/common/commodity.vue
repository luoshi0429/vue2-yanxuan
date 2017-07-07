<template>
  <router-link v-bind:to="'/productDetail/' + commodity.pId" class="commodity">
    <div class="wrapper">
      <div class="specification" v-if="commodity.specification">{{ commodity.specification }}</div>
      <img v-bind:src="commodity.pic" /><p>{{ commodity.description }}</p>
    </div>
    <div class="content">
      <tag v-bind:activities="commodity.activity" />
      <p class="title">{{ commodity.title }}</p>
      <p class="price">¥{{ commodity.price }}</p>
    </div>
  </router-link>
</template>

<script>
  import tag from '@/components/common/tag'
  export default {
    props: ['commodity'],
    components: {
      tag
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .commodity {
    width: 50%;
    padding: 0 px2rem(5) px2rem(16.5) px2rem(10);
    overflow: hidden;
  }

  .commodity .wrapper {
    width: 100%;
    position: relative;
    background-color: #f4f4f4;
    height: 0;
    // padding-bottom padding-top的百分比是根据父容器的width计算的
    padding-bottom: 118%;
  }

  .commodity .specification {
    position: absolute;
    top: 0;
    margin: px2rem(8) 0 0 px2rem(10);
    color: #b4a078;
    border: 1px solid #b4a078;
    border-radius: px2rem(2);
    writing-mode: vertical-lr;
    font-size: px2rem($size_small);
    padding: px2rem(6) 0;
  }

  .commodity .wrapper img {
    width: px2rem(150);
    height: px2rem(150);
    position: absolute;
    top: px2rem(11);
    left: px2rem(11);
  }

  .commodity .wrapper p {
    @include ellipsis;
    width: 100%;
    line-height: px2rem(15);
    background-color: #F1ECE2;
    color: #9F8A60;
    font-size: px2rem($size_small);
    padding: px2rem(10);
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .commodity .content {
    padding: px2rem(10) 0 0 px2rem(10);
  }

  .commodity .title {
    font-size: px2rem($size_middle);
    color: $dark_text_color;
    line-height: px2rem(17);
    @include ellipsis;
    margin-top: px2rem(10);
  }

  .commodity .price {
    color: #b4282d;
    font-size: px2rem($size_default);
    line-height: 1;
  }
</style>

