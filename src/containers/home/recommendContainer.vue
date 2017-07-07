<template>
  <div class="home-content">
    <carousel-container  v-bind:imgs="imgs" />
    <div class="productor-container">
    <div class="productor-header">
      <h2 v-on:click="pushToMenufacturerList">品牌制造商直供</h2>
      <i />
    </div>
    <div class="productor-content">
      <productor-item v-for="manufacturer in data.manufacturer" v-bind:key="manufacturer.mId" v-bind:productor="manufacturer" />
    </div>
  </div>
    <newgoods-container v-bind:newGoods="data.newItems" v-bind:handleClickTitle="pushToNewItem" />
    <hotRecommend v-bind:hots="data.hotItems" v-bind:handleClickTitle="pushToItemRecommend" />
    <flash-sale />
    <best-topic v-bind:topic="data.bestTopic" v-bind:handleClickTitle="pushToTopic" />
    <commodity-container v-for="ac in data.categoryCommodity" v-bind:key="ac.category" v-bind:categoryCommodity="ac" />
    <bottom-footer />
  </div>
</template>

<script>
  import { fetchHome } from '@/utils/fetchData'
  import newgoodsContainer from './newgoodsContainer'
  import hotRecommend from './hotRecommend'
  import commodityContainer from './commidityContainer'
  import flashSale from './flashSale'
  import bestTopic from './bestTopic'
  import carouselContainer from './carouselContainer'
  import bottomFooter from '@/components/common/bottomFooter'
  import productorItem from '@/components/home/productorItem'

  export default {
    components: {
      newgoodsContainer,
      hotRecommend,
      commodityContainer,
      bestTopic,
      flashSale,
      carouselContainer,
      bottomFooter,
      productorItem
    },
    data () {
      return {
        imgs: ['http://yanxuan.nosdn.127.net/2a1259567d45f6d56cd377b9f6e8f4fd.jpg', 'http://yanxuan.nosdn.127.net/615e5f7727d1d2831e24a3453eeac4ca.jpg', 'http://yanxuan.nosdn.127.net/0ad986128e62d4f16a385de809f23dca.jpg', 'http://yanxuan.nosdn.127.net/8869a3d10800efca5670432bc0070707.jpg', 'http://yanxuan.nosdn.127.net/dda365946a8d8b09adebbd74e9cfb830.jpg'],
        data: {}
      }
    },
    methods: {
      handleSearch () {
        console.log('handle search...')
        this.$router.push('/search')
      },
      handleChange (title) {
        console.log('click at ', title)
        this.currentTitle = title
        this.$router.push(`/home/other/${this.categoryId[this.titles.indexOf(title)]}`)
      },
      pushToMenufacturerList () {
        this.$router.push('/manufacturerList')
      },
      pushToItemRecommend () {
        this.$router.push('/itemRecommend')
      },
      pushToNewItem () {
        this.$router.push('/newItem')
      },
      pushToTopic () {
        this.$router.push('/topic')
      }
    },
    // 在该方法中进行网络请求等操作
    mounted () {
      fetchHome()
        .then(r => {
          console.log(r)
          this.data = r
        })
    }
  }
</script>

<style lang="scss" scpoed>
  @import '../../styles/mixin.scss';
  .productor-container {
    background-color: #fff;
    width: 100%;
    margin-bottom: px2rem(8);
  }

  .productor-header {
    width: 100%;
    height: px2rem(55);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .productor-header h2 {
    color: $dark_text_color;
    font-size: px2rem(16);
    font-weight: normal;
    margin-right: px2rem(5);
  }

  .productor-header i {
    width: px2rem(15);
    height: px2rem(15);
    background: url('../../assets/images/arrow.png') no-repeat 0 0;
    background-size: cover;
  }

  .productor-content {
    display: flex;
    flex-wrap: wrap;
    padding: 0 px2rem(8);
  }
</style>

