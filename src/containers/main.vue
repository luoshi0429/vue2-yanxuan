<template>
  <div id="main">
    <router-view class="content"></router-view>
    <tabbar :items="items" />
  </div>
</template>

<script>
  import tabbar from '@/components/tabbar'
  export default {
    components: {
      tabbar
    },
    computed: {
      items () {
        const barItems = [
          { title: '首页', icon:`-${125/37.5}rem`, selectedIcon: `-${100/37.5}rem`, to: '/home' },
          { title: '专题', icon: `-${175/37.5}rem`, selectedIcon: `-${150/37.5}rem`, to: '/topic' },
          { title: '分类', icon: `-${75/37.5}rem`, selectedIcon: `-${50/37.5}rem`, to: '/category' },
          { title: '购物车', icon: `-${25/37.5}rem`, selectedIcon: '0px', to: '/cart', badge: this.$store.getters.cartCommodityCount },
          { title: '个人', icon: `-${225/37.5}rem`, selectedIcon: `-${200/37.5}rem`, to: '/profile' }
        ]
        return barItems
      }
    }
  }
</script>

<style lang="scss" scoped>
  #main {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .content {
    flex: 1;
  }
</style>
