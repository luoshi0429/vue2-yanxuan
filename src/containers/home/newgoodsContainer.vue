<template>
  <div class="ng-container">
    <div class="ng-header">
      <h3 v-on:click="handleClickTitle">周一周四 · 新品首发</h3>
      <button v-on:click="handleClickTitle">查看全部 <i /></button>
    </div>
    <div class="ng-content">
      <newgoods v-for="good in newGoods" v-bind:good="good" v-bind:key="good.pId" />
    </div>
  </div>
</template>

<script>
  import newgoods from '@/components/home/newgoods'
  export default {
    props: ['newGoods', 'handleClickTitle'],
    components: {
      newgoods
    }
  }  
</script>

<style lang="scss" scoped>
  @import "../../styles/mixin.scss";
  
  .ng-container {
    background-color: #fff;
    margin-bottom: px2rem(10);
  }
  .ng-header {
    width: 100%;
    height: px2rem(130);
    background: url('../../assets/images/new_bg.png') no-repeat 0 0;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: px2rem(16);
  }

  .ng-header h3 {
    color: #8BA0B6;
    font-size: px2rem(18);
    font-weight: normal;
    line-height: px2rem(27);
    text-align: center;
  }

  .ng-header button {
    background-color: #D8E5F1;
    display: inline-block;
    width: px2rem(120);
    height: px2rem(28);
    color: #8BA0B6;
    outline: none;
  }

  .ng-header button i {
    display: inline-block;
    width: px2rem(5);
    height: px2rem(10);
    background: url('../../assets/images/showmore.png') no-repeat 0 0;
    background-size: cover;
  }

  .ng-content {
    display: flex;
    width: 100%;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    height: px2rem(240);
  }

  .ng-content::-webkit-scrollbar {
    display: none;
  }

</style>
