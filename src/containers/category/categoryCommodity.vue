<template>
  <div class="categoryCommodity-page">
    <navbar />
    <segment v-bind:titles="titles" />
    <div class="categoryCommodity">
      <h4>{{ categoryCommodity.description }}</h4>
      <div class="categoryCommodity-content">
        <commodity v-for="commodity in categoryCommodity.commodities" v-bind:key="commodity.pId" v-bind:commodity="commodity" />
      </div>
      <no-more />
    </div>
  </div>
</template>

<script>
  import navbar from '@/components/common/navbar'
  import segment from '@/components/common/segment'
  import commodity from '@/components/common/commodity'
  import noMore from './noMore'
  import { fetchCategoryCommodity } from '@/utils/fetchData'
  export default {
    components: { navbar, segment, commodity, noMore },
    data () {
      return {
        titles: ['夏凉', '被枕', '床品件套', '布艺软装', '家具', '灯具', '家饰', '生活电器'],
        categoryCommodity: {}
      }
    },
    methods: {
      fetchData () {
        fetchCategoryCommodity()
          .then(r => {
            console.log(r)
            this.categoryCommodity = r
          })
      }
    },
    mounted () {
      this.fetchData()
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .categoryCommodity-page {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
  }

  .categoryCommodity {
    flex: 1;
    overflow-y: auto;
    background: #fff;
    margin-top: px2rem(10);
  }

  .categoryCommodity  h4 {
    height: px2rem(55);
    line-height: px2rem(55);
    text-align: center;
  }

  .categoryCommodity-content {
    display: flex;
    flex-wrap: wrap;
  }
</style>
