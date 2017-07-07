<template>
  <div class="manufacturer-item">
    <div class="manufacturer-header" v-bind:style="{ backgroundImage: `url(${manufacturer.img})`}">
      <div class="triangle" />
    </div>
    <div class="manufacture-content">
      <div class="title-container">
        <div class="left">
          <span class="title">{{ manufacturer.title }}</span>
          <span class="new" v-if="manufacturer.hasNew">上新</span>
        </div>
        <span class="price">{{ manufacturer.lowestPrice }}元起</span>
      </div>
      <p class="desc">{{ manufacturer.description }}</p>  
    </div>      
    <div class="img-container">
      <img v-for="pic in manufacturer.pics" v-bind:src="pic" />
    </div>    
  </div>
</template>

<script>
  export default {
    props: {
      manufacturer: {
        default () {
          return {}
        },
        type: Object
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .manufacturer-item {
    background-color: #fff;
    margin-bottom: px2rem(10);
  }

  .manufacturer-header {
    width: 100%;
    height: px2rem(160);
    background-size: cover;
    background-position: center; 
    position: relative;
  }

  .triangle {
    position: absolute;
    bottom: -1px;
    left: px2rem(30);
    height: 0;
    width: 0;
    border-bottom: px2rem(8.5) solid #fff;
    border-left: px2rem(8.5) solid transparent; 
    border-right: px2rem(8.5) solid transparent;
  }

  .manufacture-content {
    padding: px2rem(17) px2rem(15) 0;
  }

  .manufacture-content .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: px2rem(20);
    margin-bottom: px2rem(10);
  }
  .manufacture-content .title-container .title {
    color: #000;
    font-size: px2rem($size_default);
    font-weight: bold;
    line-height: px2rem($size_default)
  }

  .manufacture-content .title-container .new {
    display: inline-block;
    margin-left: px2rem(15);
    border: 1px solid #B4A078;
    color: #B4A078;
    font-size: px2rem(11);
    width: px2rem(32);
    height: px2rem(19);
    line-height: px2rem(19);
    border-radius: 2px;
    text-align: center;
  }

  .manufacture-content .title-container .price {
    height: px2rem(20);
    line-height: px2rem(20);
    color: #B4282D;
  }

  .manufacture-content .desc {
    @include ellipsis;
    font-size: px2rem($size_small);
    padding-bottom: px2rem(10);
    line-height: 1;
  }

  .manufacture-content .img-container {
    display: flex;
    padding-bottom: px2rem(16);
  }

  .manufacture-content .img-container img {
    width: px2rem(125);
    height: px2rem(125);
  }

</style>
