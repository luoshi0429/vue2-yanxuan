<template>
  <div class="newItem-page">
    <navbar />
    <div class="newItem-container">
      <div class="banner-container">
        <carousel v-bind:pics="pics" v-bind:hideIndicator="true" />
      </div>
      <div class="suggest">
        <h3 class="title">推荐关注</h3>
        <div class="suggest-item">
          <div class="suggest-item-img">
            <i v-bind:style="{ backgroundImage: `url(${suggest.pic})` }" />            
          </div>
          <div class="suggest-item-content">
            <i />
            <div class="desc">{{ suggest.description }}</div>
            <div class="name">{{ suggest.title }}</div>
            <div class="price">¥{{ suggest.price }}</div>
          </div>
        </div>
      </div>
      <div class="item-container">
        <commodity v-for="commodity in commodities"  v-bind:commodity="commodity" v-bind:key="commodity.pId" />
      </div>
    </div>
  </div>
</template>

<script>
  import navbar from '@/components/common/navbar'
  import carousel from '@/components/common/carousel'
  import commodity from '@/components/common/commodity'
  import { fetchAllNewItems } from '@/utils/fetchData'
  export default {
    components: {
      navbar,
      carousel,
      commodity
    },
    data () {
      return {
        suggest: {},
        pics: [],
        commodities: []
      }
    },
    methods: {
      fetchData () {
        fetchAllNewItems()
          .then(r => {
            console.log(r)
            this.suggest = r.suggest
            this.pics = r.pics
            this.commodities = r.commodities
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
  .newItem-page {
    display: flex;
    flex-direction: column;
  }

  .newItem-container {
    flex: 1;
    overflow-y: auto;
  }

  .suggest {
    background-color: #fff;
  }

  .suggest .title {
    line-height: px2rem(55);
    text-align: center;
    font-size: px2rem($size_default);
  }

  .suggest-item {
    margin: 0 px2rem(10);
    background-color: #fff;
    border: 1px solid $border_color;
    display: flex;
    height: px2rem(140);
    display: flex;
    overflow: hidden;
  }

  .suggest-item-img {
    background-color: #f4f4f4;    
  }

  .suggest-item-img i {
    display: inline-block;
    width: px2rem(140);
    height: px2rem(140);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .suggest-item-content {
    flex: 1;
    display: flex;
    padding-left: px2rem(8.5);
    flex-direction: column;
    justify-content: center;
  }

  .suggest-item-content i {
    display: inline-block;
    background: url('../../assets/images/comma.png') no-repeat;
    width: px2rem(12);
    height: px2rem(11.5);
    background-size: cover;
    margin-bottom: px2rem(2);
  } 

  .suggest-item-content .desc {
    margin-bottom: px2rem(8.5);
    color: #7f7f7f;
    font-size: px2rem($size_small);
    line-height: px2rem(17);
  }

  .suggest-item-content .name {
    margin-bottom: px2rem(3);
    @include ellipsis;
    width: px2rem(196.5);
    font-size: px2rem($size_default);
    line-height: px2rem(20);
  }

  .suggest-item-content .price {
    color: #b4282d;
    font-size: px2rem($size_default);
    line-height: px2rem(20);
  }

  .banner-container {
    height: px2rem(208);
    margin-bottom: px2rem(10);
  }

  .item-container {
    padding-top: px2rem(15);
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
  }
</style>
