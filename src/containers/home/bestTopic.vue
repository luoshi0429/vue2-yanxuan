<template>
  <div class="bt-container" v-if="topic">
    <header><h3 v-on:click="handleClickTitle">专题精选</h3><i /></header>
    <router-link class="bt-item" v-bind:to="toPath">
      <img class="bt-pic" v-bind:src="topic.pic" />
      <div class="bt-title-container">
        <span class="bt-title">{{ topic.title }}</span>
        <span class="bt-price">{{ topic.lowestPrice }}元起</span>
      </div>
      <p class="bt-subtitle">{{ topic.description }}</p>
    </router-link>
    
  </div>
</template>

<script>
  export default {
    props: ['topic', 'handleClickTitle'],
    computed: {
      toPath () {
        console.log(this.topic.topicId)
        return `/topic/${this.topic.topicId}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .bt-container {
    padding-bottom: px2rem(10);
    background-color: #fff;
    margin-bottom: px2rem(10);
  }

  .bt-container header {
    height: px2rem(55);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bt-container header h3 {
    font-size: px2rem($size_default);
    color: $dark_text_color;
    font-weight: normal;
  }
  .bt-container header i {
    display: inline-block;
    height: px2rem(15);
    width: px2rem(15);
    margin-left: px2rem(5);
    background: url('../../assets/images/arrow.png');
    background-size: cover;
  }

  .bt-pic {
    width: 100%;
    height: px2rem(210);
  }

  .bt-title-container {
    display: flex;
    justify-content: space-between;
    padding: 0 px2rem(15);
  }

  .bt-title {
    font-size: px2rem($size_default);
    color: $dark_text_color;
  }

  .bt-price {
    font-size: px2rem($size_default);
    color: #b4282d;
  }

  .bt-subtitle {
    color: $text_color;
    font-size: px2rem($size_small);
    padding: 0 px2rem(15);
  }
</style>

