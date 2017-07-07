<template>
  <div class="hr-container">
    <div class="hr-header">
      <h3 v-on:click="handleClickTitle">人气推荐 · 好物精选</h3>
      <button v-on:click="handleClickTitle">查看全部 <i /></button>
    </div>
    <div class="hr-content">
        <newgoods v-for="hot in hots" v-bind:good="hot" v-bind:key="hot.pId" />
    </div>
  </div>
</template>

<script>
  import newgoods from '@/components/home/newgoods'
  export default {
    props: ['hots', 'handleClickTitle'],
    components: {
      newgoods
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/mixin.scss";

  .hr-container {
    background-color: #fff;
    margin-bottom: px2rem(10);
  }
  .hr-header {
    width: 100%;
    height: px2rem(130);
    background: url('../../assets/images/hot_bg.png') no-repeat 0 0;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: px2rem(16);
  }

  .hr-header h3 {
    color: #B4A078;
    font-size: px2rem(18);
    font-weight: normal;
    line-height: px2rem(27);
    text-align: center;
  }

  .hr-header button {
    background-color: rgb(244, 233, 203);
    display: inline-block;
    width: px2rem(120);
    height: px2rem(28);
    color: #B4A078;
    outline: none;
  }

  .hr-header button i {
    display: inline-block;
    width: px2rem(5);
    height: px2rem(10);
    background: url('../../assets/images/showmore.png') no-repeat 0 0;
    background-size: cover;
  }

  .hr-content {
    display: flex;
    width: 100%;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    height: px2rem(240);
  }

  .hr-content::-webkit-scrollbar {
    display: none;
  }
</style>
