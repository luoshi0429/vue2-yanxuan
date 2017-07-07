<template>
  <div class="item-recommend-page">
    <navbar />
    <div class="item-recommend-container">
      <div class="item-recommend-header">
        <img v-bind:src="recommend.pic" />
        <h3 class="title">大家都在买的严选好物</h3>        
      </div>
      <div class="item-recommend-condition">
        <condition v-bind:conditions="conditions" v-bind:handleChangeCondition="changeCondition" />
      </div>
      <div class="item-recommend-content">
        <commodity v-for="commodity in recommend.commodities" v-bind:commodity="commodity" v-bind:key="commodity.pId" />
      </div>
    </div>
  </div>
</template>

<script>
  import condition from '@/components/common/condition'
  import commodity from '@/components/common/commodity'
  import navbar from '@/components/common/navbar'
  import { fetchRecommendItems } from '@/utils/fetchData'
  export default {
    components: { condition, commodity, navbar },
    data () {
      return {
        recommend: {},
        conditions: [
          { condition: '综合', sequence: 0},
          { condition: '上新', sequence: 1},
          { condition: '分类', sequence: 0}
        ]
      }
    },
    methods: {
      fetchData () {
        fetchRecommendItems()
          .then(r => {
            console.log(r)
            this.recommend = r
          })
      },
      changeCondition (condition) {
        console.log(condition)
      }
    },
    mounted () {
      this.fetchData()
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .item-recommend-page {
    display: flex;
    background-color: #fff;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
  }

  .item-recommend-container {
    flex: 1;
    overflow-y: auto;    
  }

  .item-recommend-header {
    height: px2rem(140);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item-recommend-header img {
    width: 100%;
    height: 100%;
    z-index: 0;
    position: absolute;
    left: 0;
    top: 0;
  }

  .item-recommend-header .title {
    z-index: 1;
    color: #fff;
    font-size: px2rem(18);
    font-weight: bold;
    line-height: 1;
    position: relative;
    &::after {
      content: '';
      width: px2rem(74);
      height: px2rem(1);
      background-color: #fff;
      display: inline-block;
      position: absolute;
      bottom: px2rem(-5);
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .item-recommend-content {
    display: flex;
    flex-wrap: wrap;
    padding-top: px2rem(10);
  }

</style>

