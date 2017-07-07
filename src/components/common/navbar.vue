<template>
  <div class="navbar-container">
    <div class="navbar">
      <div v-bind:class="['bar-left-item', showMenu ? 'bar-left-item-toggle' : '']" v-on:click="handleLeftItemClick"></div>
      <div class="bar-title"></div>
      <div class="bar-right-item">
        <router-link to="/search"><i class="search" /></router-link>
        <router-link to="/cart"><i class="cart">
          <span v-if="cartCommodityCount" class="count">{{ cartCommodityCount }}</span>
        </i></router-link>
      </div>
    </div>
    <transition name="slide" class="transition-slide">
      <div v-if="showMenu" class="menu" >
        <tabbar v-bind:items="items" class="menu-tab" />        
      </div>
    </transition>
  </div>
</template>

<script>
  import tabbar from '../tabbar'
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        showMenu: false,
        items: [
          { title: '首页', icon:`-${125/37.5}rem`, selectedIcon: `-${100/37.5}rem`, to: '/home' },
          { title: '专题', icon: `-${175/37.5}rem`, selectedIcon: `-${150/37.5}rem`, to: '/topic' },
          { title: '分类', icon: `-${75/37.5}rem`, selectedIcon: `-${50/37.5}rem`, to: '/category' },
          { title: '个人', icon: `-${225/37.5}rem`, selectedIcon: `-${200/37.5}rem`, to: '/profile' }
        ]
      }
    },
    computed: {
      ...mapGetters(['cartCommodityCount'])
    },
    methods: {
      handleLeftItemClick () {
        console.log('left item clicked...')
        this.showMenu = !this.showMenu
      }
    },
    components: {
      tabbar
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';

  .navbar-container {
    position: relative;
  }

  .navbar {
    background-color: #fafafa;
    height: px2rem(44);
    z-index: 99;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $border_color;
    padding: 0 px2rem(8) 0 px2rem(12);
    position: relative;
  }
  
  .bar-left-item, .bar-right-item i {
    display: inline-block;
    width: px2rem(32);
    height: px2rem(32);
    display: inline-block;
    background-repeat: no-repeat;
    background-size: px2rem(86) px2rem(348);    
  }

  .bar-left-item {
    width: px2rem(25);
    height: px2rem(25);
    background-image: url('http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s73530eadc0-9757196115.png');
    background-position: 0 px2rem(-127);
  }

  .bar-left-item-toggle {
    background-position: 0 px2rem(-157);
  }

  .bar-title {
    width: px2rem(86);
    height: px2rem(27);
    background: url('http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s73530eadc0-9757196115.png') no-repeat;
    background-position: 0 px2rem(-95);
    background-size: cover;
  }

  .bar-right-item .search {
    background-image: url('http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s73530eadc0-9757196115.png');
    background-position: 0 px2rem(-287);
  }

  .bar-right-item .cart {
    background-image: url('http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s73530eadc0-9757196115.png');
    background-position: 0 0;
    position: relative;
    margin-right: px2rem(10);
  }

  .bar-right-item .cart .count {
    position: absolute;
    right: - px2rem(3);
    top: - px2rem(1.5);
    background-color: #b4282d;
    font-size: px2rem($size_small);
    width: px2rem(14);
    height: px2rem(14);
    line-height: px2rem(14);
    color: #fff;
    border-radius: px2rem(7);
    text-align: center;
    font-style: normal;
  }

  // enter: 定义进入过渡开始状态，在元素被插入时生效，在下一帧移除
  // enter-active: 定义进入过渡的结束状态，在元素被插入时生效，在transition/animation完成之后移除
  // leave: 定义离开过渡的开始状态。在离开过渡触发时生效，在下一帧移除
  // leave-active: 定义离开过渡的结束状态。在离开过渡被触发时生效，在transition/animation完成之后移除

  // .slide-enter-active, .slide-leave-active {
  //   transition: opacity 0.5s;
  // }

  // .slide-enter, .slide-leave-active {
  //   opacity: 0;
  // }

  .slide-enter, .slide-leave-active {
    transform: translate(0, -100%);
    transition: transform 0.5s;
  }

  .slide-enter-active, .slide-leave-active {
    transition: transform 0.5s;
  }

  .menu {
    z-index: 98;
    border-bottom: 1px solid $border_color;
    padding: px2rem(9.5) 0;
    background-color: #fafafa;
    position: absolute;
    top: 99%;
    left: 0;
    width: 100%;
  }

  .menu-tab {
    border-top: none;
    height: px2rem(40);
    background-color: transparent;
  }
</style>

