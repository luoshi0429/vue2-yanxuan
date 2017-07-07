<template>
  <div class="listnomore">
    <span>更多内容，敬请期待</span>
  </div>
</template>


<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .listnomore {
    height: px2rem(40);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .listnomore span {
    color: $text_color;
    font-size: px2rem($size_small);
    @include lineThrough(36);
  }
</style>
