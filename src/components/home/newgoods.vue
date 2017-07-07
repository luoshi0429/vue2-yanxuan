<template>
  <router-link class="ng-item" v-bind:to="toPath">
    <div class="ng-item-specification" v-if="good.specification">{{ good.specification }}</div>
    <img class="ng-item-pic" v-bind:src="good.pic" />
    <div class="ng-item-tag" v-if="good.activity">
      <p v-for="ac in good.activity" v-bind:class="ac.type ? 'hot' : 'forsale' ">{{ ac.tag }}</p>
    </div>
    <h6 class="ng-item-name">{{ good.title }}</h6>
    <p class="ng-item-description">{{ good.description }}</p>
    <p class="ng-item-price">¥{{ good.price }}</p>
  </router-link>
</template>

<script>
  export default {
    // activity type: 0 爆款  type: 1 优惠
    props: ['good'],
    computed: {
      toPath () {
        return '/productDetail/' + this.good.pId
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .ng-item {
    width: px2rem(140);
    margin-left: px2rem(15);
    position: relative;
  }

  .ng-item-specification {
    position: absolute;
    top: 0;
    margin: px2rem(8) 0 0 px2rem(10);
    color: #b4a078;
    border: 1px solid #b4a078;
    border-radius: px2rem(2);
    writing-mode: vertical-lr;
    font-size: px2rem($size_small);
    padding: px2rem(3) 0;
  }

  .ng-item-pic {
    width: 100%;
    height: px2rem(140);
  }

  .ng-item-tag {
    display: flex;
    overflow: hidden;
  }

  .ng-item-tag p {
    margin-left: px2rem(5);
    height: px2rem(15);
    line-height: px2rem(15);
    border-radius: 4px;
    font-size: px2rem($size_small);
    padding: 0 px2rem(8);
    color: #fff;
  }

  .ng-item-tag p.hot {
    background-color: #e5686d;
  }

  .ng-item-tag p.forsale {
    background-color: #f48f18;
  }
  .ng-item-name {
    @include ellipsis;
    font-size: px2rem(14);
    color: $dark_text_color;
    font-weight: normal;
    line-height: px2rem(17);
    padding: 0 px2rem(5);
    margin: px2rem(10) 0 px2rem(5);
  }

  .ng-item-description {
    @include ellipsis;
    color: #7f7f7f;
    font-size: px2rem(12);
    line-height: px2rem(15);
    margin-bottom: px2rem(7);
    padding: 0 px2rem(5);
  }

  .ng-item-price {
    color: #b4282d;
    font-size: px2rem(14);
    line-height: px2rem(14);
    padding: 0 px2rem(5);
  }
</style>
