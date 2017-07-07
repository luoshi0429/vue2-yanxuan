<template>
  <div class="section-item">
    <p v-bind:class="['section-name', isSelected ? 'selected' : '']">{{ section.name }}</p>
  </div>
</template>

<script>
  export default {
    props: ['section', 'isSelected']
  }
</script>

<style lang="scss">
  @import '../../styles/mixin.scss';
  .section-item {
    width: 100%;
    height: px2rem(25);
    margin-top: px2rem(20);
  }
  .section-item .section-name {
    font-size: px2rem($size_middle);
    text-align: center;
    @include ellipsis;
  }

  .section-item .selected {
    color: #ab2b2b;
    font-size: px2rem(18);
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: px2rem(3);
      background-color: #ab2b2b
    }
  }
</style>
