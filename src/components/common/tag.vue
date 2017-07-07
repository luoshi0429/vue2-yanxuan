<template>
  <div class="tag" v-if="activities">
    <p v-for="ac in activities" v-bind:class="ac.type ? 'hot' : 'forsale' ">{{ ac.tag }}</p>
  </div>
</template>

<script>
  export default {
    props: ['activities']
  }
</script>

<style lang="scss" scoped>
    @import '../../styles/mixin.scss';
   .tag {
      display: flex;
      overflow: hidden;
    }

    .tag p {
      margin-right: px2rem(5);
      height: px2rem(15);
      line-height: px2rem(15);
      border-radius: 4px;
      font-size: px2rem(10);
      padding: 0 px2rem(8);
      color: #fff;
    }

    .tag p.hot {
      background-color: #e5686d;
    }

    .tag p.forsale {
      background-color: #f48f18;
    }
</style>
