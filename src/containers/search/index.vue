<template>
  <div class="search-page">
    <header class="search-header">
      <div class="input-container">
        <i />
        <input placeholder="买多功能椅送79元腰靠再返券" />
      </div>
      <span class="cancel-btn" v-on:click="handleCancel">取消</span>
    </header>
    <div class="search-hot">
      <p class="title">热门搜索</p>
      <div class="search-hot-content">
        <div v-for="hot in hotSearchs" v-bind:key="hot.title" v-bind:class="['hot-item', hot.highlight ? 'highlight' : '']">{{ hot.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        hotSearchs: [
          { title: '特卖会场1折疯抢', highlight: true }, 
          { title: '618超值包邮团', highlight: true }, 
          { title: '牙刷', highlight: false },
          { title: '墨镜', highlight: false }, 
          { title: '618大促主会场', highlight: true }, 
          { title: '全场8折卡', highlight: true }, 
          { title: '乳胶枕', highlight: false }, 
          { title: '凉拖', highlight: false }
        ]
      }
    },
    methods: {
      handleCancel () {
        this.$router.back();
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .search-page {
    background-color: #fff;
    width: 100%;
  }

  .search-header {
    height: px2rem(44);
    border-bottom: 1px solid $border_color;
    display: flex;
    padding: 0 px2rem(15);
    align-items: center;
  }

  .input-container {
    flex: 1;
    display: flex;
    align-items: center;
    background-color: #f4f4f4;
    height: px2rem(28);
    border-radius: px2rem(2);
    padding: 0 px2rem(10);
  }

  .input-container i {
    width: px2rem(14);
    height: px2rem(14);
    margin-right: px2rem(5);
    background: url('../../assets/images/searchIcon.png') no-repeat 0 0;
    background-size: cover;
  }

  .input-container input {
    width: 100%;
    background-color: transparent;
  }

  .cancel-btn {
    padding-left: px2rem(15);
    font-size: px2rem($size_middle);
  }

  .search-hot {
    padding: 0 0 px2rem(15) px2rem(15);
    margin-bottom: px2rem(10);
  }

  .search-hot .title {
    height: px2rem(45);
    line-height: px2rem(45);
    color: #999;
    font-size: px2rem($size_middle);
    font-weight: normal;
  }

  .search-hot-content {
    display: flex;
    flex-wrap: wrap;
  }

  .hot-item {
    color: #333;
    border: 1px solid #999;
    border-radius: 2px;
    padding: 0 px2rem(7.5);
    line-height: px2rem(23);
    font-size: px2rem($size_small);
    margin: 0 px2rem(16) px2rem(16) 0;
  }

  .highlight {
    color: #b4282d;
    border-color: #b4282d;
  }
</style>
