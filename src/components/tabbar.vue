<template>
  <div class="tabbar">
    <div v-bind:class="['tabbar-item', $route.path.indexOf(item.to) >= 0 ? 'selected-item' : '']" v-for="item in items">
      <router-link v-bind:to="item.to">
        <div class="tabbar-item-icon" v-bind:style="{backgroundPositionY: $route.path.indexOf(item.to) >= 0 ? item.selectedIcon : item.icon}">
          <i v-if="item.badge > 0" class="tabbar-item-badge">{{ item.badge }}</i>
        </div>
      </router-link>
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabbar',
    props: ['items']
  }
</script>

<style lang="scss">

  @import '../styles/mixin.scss';

  .tabbar {
    width: 100%;
    height: px2rem(49);
    background-color: #fafafa;
    border-top: 1px solid $border_color;
    display: flex;
    flex-direction: row;
    z-index: 99;
  }

  .tabbar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
  }

  .selected-item span {
    color: #b4282d;
  }

  .tabbar-item-icon {
    width: px2rem(20);
    height: px2rem(20);
    background: url('../assets/images/tabbar.png') no-repeat 0 0;
    background-size: cover;
    position: relative;
  }

  .tabbar-item-badge {
    position: absolute;
    top: px2rem(-3);
    right: px2rem(-6);
    text-align: center;
    color: #fff;
    font-size: px2rem($size_small);
    line-height: px2rem($size_middle);
    width: px2rem($size_middle);
    height: px2rem($size_middle);
    background: #b4282d;
    border-radius: 50%;
    font-style: normal;
  }
  // .tabbar-item img {
  //   width: px2rem(22);
  //   height: px2rem(22);
  // }

  .tabbar-item span {
    margin-top: px2rem(3.5);
    color: $text_color;
    font-size: px2rem($size_small);
  }
</style>
