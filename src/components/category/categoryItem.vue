<template>
  <div class="category-item">
    <img class="category-pic" v-bind:src="category.pic" />
    <p class="category-title">{{ category.title }}</p>
  </div>
</template>

<script>
  export default {
    props: ['category']
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .category-item {
    width: px2rem(72);
    margin-right: px2rem(17);
  }

  .category-pic {
    width: px2rem(72);
    height: px2rem(72);
  }

  .category-title {
    text-align: center;
    font-size: px2rem($size_small);
    height: px2rem(36);
  }
</style>

