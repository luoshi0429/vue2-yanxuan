<template>
  <div class="topic-item">
    <header class="item-header">
      <img v-bind:src="topic.avatar" />
      <span>{{ topic.author }}</span>
    </header>
    <div class="item-content">
      <div v-if="topic.pics.length === 1" class="fullImg" v-bind:style="{ backgroundImage: 'url(' + topic.pics[0] + ')' }" />
      <div v-if="topic.pics.length > 2" class="imgs-container">
        <div class="bigImg" v-bind:style="{ backgroundImage: 'url(' + topic.pics[0] + ')' }" />
        <div class="smallImg-container">
          <div class="smallImg-first" v-bind:style="{ backgroundImage: 'url(' + topic.pics[1] + ')' }" />
          <div v-bind:style="{ backgroundImage: 'url(' + topic.pics[2] + ')' }" />
        </div>
      </div>
      <div class="viewcount"><i />{{ topic.viewcount }}</div>
    </div>
    <footer class="item-footer">
      <div class="title-container">
        <h3>{{ topic.title }}</h3>
        <span v-if="topic.lowest">{{ topic.lowest }}元起</span>
      </div>
      <p class="descritpion">{{ topic.description }}</p>
    </footer>
  </div>
</template>


<script>
  export default {
    props: ['topic']
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .topic-item {
    background-color: #fff;
  }

  .item-header {
    height: px2rem(52);
    padding: px2rem(15) px2rem(10);
    display: flex;
    align-items: center;
  }

  .item-header img {
    width: px2rem(31);
    height: px2rem(31);
    border-radius: px2rem(15.5);
    margin-right: px2rem(8);
  }

  .item-header span {
    font-size: px2rem($size_middle);
  }

  @mixin centerImage {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .imgs-container {
    display: flex;
  }

  .item-content {
    position: relative;
  }

  .viewcount {
    position: absolute;
    bottom: 0;
    right: 0;
    text-align: center;
    width: px2rem(58.5);
    height: px2rem(18);
    line-height: px2rem(18);
    font-size: px2rem($size_small);
    color: #fff;
  }

  .viewcount i {
    display: inline-block;
    width: px2rem(10.5);
    height: px2rem(7);
    background: url('../../assets/images/eye.png') no-repeat;
    background-size: cover;
    margin-right: px2rem(2);
  }

  .item-content .fullImg {
    @include centerImage;
    width: 100%;
    height: px2rem(210);
  }

  .item-content .bigImg {
    @include centerImage;
    width: px2rem(270);
    height: px2rem(210);
    margin-right: px2rem(2);
  }

  .item-content .smallImg-container {
    flex: 1;
    height: 100%;
  }

  .item-content .smallImg-container div{
    @include centerImage;
    width: 100%;
    height: px2rem(104);
  }

  .smallImg-first {
    margin-bottom: px2rem(2);          
  }

  .item-footer {
    padding: px2rem(10) px2rem(15) px2rem(18);
  }

  .title-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: px2rem(6);
    align-items: center;
  }

  .title-container h3 {
    font-weight: normal;
    font-size: px2rem(18);
    line-height: 1.2;
    @include ellipsis;
  }

  .title-container span {
    color: #b4282d;
    font-size: px2rem(18);
  }

  .item-footer .descritpion {
    font-size: px2rem($size_middle);
    color: #7f7f7f;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

</style>
