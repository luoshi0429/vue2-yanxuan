<template>
  <div class="search-btn" v-on:click="handleClick">
    <i /><span>商品搜索，共5542款好物</span>
  </div>
</template>

<script>
export default {
  props: ['handleClick']
}
</script>


<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .search-btn {
    background-color: #ededed;
    border-radius: px2rem(4);
    text-align: center;
    flex: 1;
    height: px2rem(28);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search-btn i {
    display: inline-block;
    width: px2rem(14);
    height: px2rem(14);
    margin-right: px2rem(5);
    background: url('../../assets/images/searchIcon.png') no-repeat 0 0;
    background-size: cover;
  }
  .search-btn span {
    color: $text_color;
    font-size: px2rem($size_middle);
  }
</style>

