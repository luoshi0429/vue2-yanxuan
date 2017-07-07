<template>
  <div class="pin-commodity-container">
    <img src="../../assets/images/pin_bg.jpg" />
    <div class="pin-commodity-content">
      <h3>最新推荐</h3>
      <div class="pin-commodity-list">
        <pin-item v-for="commodity in pinCommodities" v-bind:commodity="commodity" v-bind:key="commodity.pinId" />
      </div>
    </div>
  </div>
</template>

<script>
  import { fetchPinCommodity } from '@/utils/fetchData'
  import pinItem from '@/components/profile/pinItem'
  export default {
    components: { pinItem },
    data () {
      return {
        pinCommodities: []
      }
    },
    methods: {
      fetchData () {
        fetchPinCommodity()
          .then(r => {
            console.log(r)
            this.pinCommodities = r
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
  // .pin-commodity-container {
  //   width: 100%;
  //   height: 100%;
  // }

  .pin-commodity-container img {
    width: 100%;
    height: px2rem(165);
  }

  .pin-commodity-content {
    margin-top: px2rem(10);
  }

  .pin-commodity-content h3 {
    height: px2rem(55);
    line-height: px2rem(55);
    text-align: center;
    background: #fff;    
  }

  .pin-commodity-list {

  }
</style>
