<template>
  <router-link  class="productor-item" v-bind:to="toPath">
    <div class="content">
      <h4 class="manufacturer">{{ productor.title }}</h4>
      <p class="price">{{ productor.lowestPrice }}元起</p>
      <i class="new" v-if="productor.hasNew" />
    </div>
    <img v-bind:src="productor.pic" />
  </router-link>
</template>

<script>
  export default {
    props: ['productor'],
    computed: {
      toPath () {
        return `/manufacturer/${this.productor.mId}`
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/mixin.scss';
  .productor-item {
    width: px2rem(175.5);
    height: px2rem(118);
    margin: 0 px2rem(4) px2rem(4) 0;
    position: relative;
  }
  .productor-item .content {
    position: absolute;
    top: 0;
    left: 0;
    padding: px2rem(10) 0 0 px2rem(10);
    font-size: px2rem($size_middle);
    color: $dark_text_color;
  }

  .productor-item .manufacturer{
    margin-bottom: px2rem(3);
    // 超出显示...
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: normal;
  }

  .productor-item .new {
    display: inline-block;
    background: url('../../assets/images/new.png') no-repeat 0 0;
    background-size: cover;
    width: px2rem(32);
    height: px2rem(16);
    margin-top: px2rem(5);
  }

  .productor-item img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
</style>
