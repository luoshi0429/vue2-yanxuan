<template>
  <div class="topic-list">
     <router-link class="topic-list-item dl" to="/cateList/0">
      <p>丁磊私物推荐</p>
    </router-link>
    <router-link class="topic-list-item yx" to="/cateList/1">
      <p>严选推荐</p>
    </router-link>
    <router-link class="topic-list-item txs" to="/cateList/2">
      <p>挑选师推荐</p>
    </router-link>
    <router-link class="topic-list-item mx" to="/cateList/3">
      <p>明星商品</p>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .topic-list {
    height: px2rem(96);
    // width: 100%;
    margin-bottom: px2rem(10);
    background-color: #fff;
    white-space: nowrap;
    overflow-x: auto;
    padding: px2rem(10) px2rem(15);
    display: relative;
  }

  .dl {
    background: url('../../assets/images/dinglei.jpg');
  }

  .yx {
    background: url('../../assets/images/yanxuan.jpg');
  }

  .txs {
    background: url('../../assets/images/tuijianshi.png');
  }

  .mx {
    background: url('../../assets/images/mingxing.png');
  }

  .topic-list-item {
    background-size: cover;
    width: px2rem(136);
    height: px2rem(76);
    margin-right: px2rem(10);
    display: inline-block;
    border-radius: px2rem(4);
  }

  .topic-list-item p {
    color: #fff;
    text-align: center;
    line-height: px2rem(76);
    font-size: px2rem($size_middle);
  }
</style>
