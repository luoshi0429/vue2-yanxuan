<template>
  <div class="com-container">
    <header>{{ categoryCommodity.category }}</header>
    <div class="com-content">
      <commodity v-for="c in categoryCommodity.commodities" v-bind:commodity="c" v-bind:key="c.pId" v-on:click.native="handleClick(c.pId)"/>
      <div class="more-container">
        <div class="more">
          <p>更多{{ categoryCommodity.category }}</p>
          <i />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import commodity from '@/components/common/commodity'
  export default {
    props: ['categoryCommodity'],
    components: {
      commodity
    },
    methods: {
      handleClick (cId) {
        this.$router.push(`/productDetail/${cId}`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';

  .com-container {
    width: 100%;
    background-color: #fff;
    margin-bottom: px2rem(10);
  }

  .com-container header {
    height: px2rem(60);
    font-size: px2rem($size_middle);
    color: $dark_text_color;
    line-height: px2rem(60);
    text-align: center;
  }

  .com-content {
    display: flex;
    flex-wrap: wrap;
  }

  .more-container {
    width: 50%;
    height: px2rem(203.5);    
    padding: 0 px2rem(5) 0 px2rem(10);
  }

  .more {
    background-color: #f4f4f4;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .more p {
    margin-bottom: px2rem(30);
    font-size: px2rem($size_default);
    line-height: 1;
  }

  .more i {
    background: url('../../assets/images/homemore.png') no-repeat;
    width: px2rem(33.5);
    height: px2rem(33.5);
    background-size: cover;
  }
</style>
