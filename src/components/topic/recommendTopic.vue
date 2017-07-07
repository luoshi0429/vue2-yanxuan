<template>
  <div class="recommend-topic-container">
    <img v-bind:src="recommend.pic" />
    <p>{{ recommend.title }}</p>
  </div>
</template>

<script>
  export default {
    props: ['recommend']
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .recommend-topic-container {
    background: #fff;
    margin-top: px2rem(16);
    padding: px2rem(12);
  }

  .recommend-topic-container img {
    width: 100%;
    height: px2rem(196);
    margin-bottom: px2rem(15);
  }

  .recommend-topic-container p {
    font-size: px2rem(15);
  }
</style>