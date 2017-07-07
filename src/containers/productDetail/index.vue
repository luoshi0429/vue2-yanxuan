<template>
  <div class="pd-page">
    <navbar />
    <div class="pd-content">
      <div class="carousel-wrapper"  v-if="productDetail.pics">
        <carousel v-bind:hideIndicator="true" v-bind:pics="productDetail.pics" v-bind:onPicChange="handleCarouselChange" />
        <p class="indicator">{{ currentPic }}/{{ productDetail.pics.length }}</p>
      </div>
      <descriptionWrapper v-bind:characteristics="productDetail.characteristics" />
      <div class="content">
        <div class="info">
          <h3 class="title">{{ productDetail.title }}</h3>
          <p class="description">{{ productDetail.description }}</p>
          <p class="price">¥{{ productDetail.price }}</p>
          <div class="tag-wrapper">
            <span class="tag" v-for="tag in productDetail.tags">
              {{ tag.name }}<i />
            </span>
          </div>
        </div>
        <div class="comment" v-if="productDetail.commentCount > 0">
          <p class="count">{{ commentCountString }}</p>
          <p class="com">用户评价</p>
          <div class="checkBtn">查看</div>
        </div>
      </div>
      <div class="select-section">
        <div class="select" v-on:click="handlePickFormat">
          <span>{{ selectFormat.format && selectFormat.format.length ? '已选择：' + selectFormat.format.join('') + 'x' + selectFormat.count : '请选择规格数量' }}</span>
          <i class="more" />
        </div>
        <!--<div class="coupon">

        </div>-->
        <div class="promotion">
          <div class="promotion-wrapper">
            <span class="promotion-num">1个促销：</span>
            <div class="promotion-content">
              <div class="tag">限时</div>
              <span class="promotion-detail">家居好物免费领 全场每满199减40</span>
            </div>
          </div>
          <i class="more" />
        </div>
        <div class="service">
          <div class="left">
            <span>服务:</span>            
          </div>
          <div class="service-content">
            <span class="service-item" v-for="service in productDetail.services">
              {{ service }}
            </span>
          </div>
          <i class="more" />
        </div>
      </div>
      <div class="comment-wrapper" v-if="productDetail.commentCount > 0">
        <div class="header" v-on:click="pushToComment">
          <span>评价({{ commentCountString }})</span>
          <div class="comment-more">查看全部<i class="more" /></div>
        </div>
        <comment style="border: none;" />
      </div>
      <attribute-container />
      <div class="product-detail">
        <p v-for="detailPic in productDetail.detailPics">
          <img v-bind:src="detailPic" />
        </p>
      </div>
      <common-issue />
    </div>
    <div class="pd-bottom">
      <button class="kefu"><i /></button>
      <button v-on:click="handleBuyNow" class="buy">立即购买</button>
      <button v-on:click="handleAddCart" class="cart">加入购物车</button>
    </div>
  </div>
</template>

<script>
  import navbar from '@/components/common/navbar'
  import carousel from '@/components/common/carousel'
  import descriptionWrapper from '@/components/productDetail/descriptionWrapper'
  import comment from '@/components/common/comment'
  import attributeContainer from './attributeContainer.vue'
  import commonIssue from '@/components/common/commonIssue'
  import { fetchProductDetail } from '@/utils/fetchData'
  import { mapState, mapActions } from 'vuex'
  export default {
    computed: {
      // ...mapState(['selectFormat'])
      selectFormat () {
        console.log('------')
        console.log(this.$store.state.selectFormat)
        const selectFormat = this.$store.state.selectFormat
        return selectFormat[this.$route.params.id] || {}
      },
      commentCountString () {
        const count = this.productDetail.commentCount
        return count > 999 ? '999+' : count
      }
    },
    components: {
      navbar,
      carousel,
      descriptionWrapper,
      comment,
      attributeContainer,
      commonIssue
    },
    methods: {
      ...mapActions(['showCommodityDetail', 'addToCart']),
      pushToComment () {
        this.$router.push('/comment')
      },
      fetchData () {
        fetchProductDetail()
          .then(r => {
            console.log(r)
            const pId = this.$route.params.id
            this.productDetail = r[pId]
          })
      },
      handlePickFormat () {
        const pId = this.$route.params.id
        this.showCommodityDetail({
          pId: pId,
          title: this.productDetail.title,
          price: this.productDetail.price,
          pic: this.productDetail.pics[0],
          formats: this.productDetail.format
        })
        this.$router.push(`/format/${pId}`)
      },
      handleCarouselChange (current) {
        this.currentPic = current + 1
      },
      handleBuyNow () {
        console.log('buy now...')
      },
      handleAddCart () {
        const format = this.selectFormat.format
        if (format && format.length) {
          this.addToCart({
            pId: this.productDetail.pId,
            title: this.productDetail.title,
            price: this.productDetail.price,
            pic: this.productDetail.pics[0],
            selectd: true,
            count: this.selectFormat.count,
            formats: this.productDetail.formats,
            selectString: this.selectFormat.format.join(';')
          })
        } else {
          this.handlePickFormat()
        }
      }
    },
    mounted () {
      this.fetchData()
    },
    data () {
      return {
        productDetail: {},
        currentPic: 1
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .pd-page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .pd-content {
    flex: 1;
    overflow-y: auto;    
  }

  .carousel-wrapper {
    width: 100%;
    height: px2rem(375);
    display: flex;
    position: relative;
  }

  .carousel-wrapper .indicator {
    position: absolute;
    right: px2rem(15);
    bottom: px2rem(15);
    width: px2rem(27);
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: px2rem(4);
    font-size: px2rem($size_small);
    text-align: center;
  }

  .content {
    padding: px2rem(20) px2rem(15);
    padding-right: 0;
    background-color: #fff;
    margin-bottom: px2rem(10);
    display: flex;
  }

  .content .info {
    flex: 1;
  }

  .content .info .title {
    font-weight: normal;
    font-size: px2rem(18);
    margin-bottom: px2rem(2.5);
  }

  .content .info .description {
    color: #7f7f7f;
    font-size: px2rem($size_middle);
    line-height: 1;
  }

  .content .info .price {
    color: #B4282D;
    font-weight: bold;
    font-size: px2rem(24);
  }

  .content .comment {
    width: px2rem(78);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // border-left: 1px dashed #919191;
    background-image: linear-gradient(to bottom,#919191 33%,rgba(255,255,255,0) 0);
    background-size: 1px 12px;
    background-repeat: repeat-y;
  }

  .content .comment .count {
    color: #B4282D;
    font-weight: bold;
    line-height: 1;
    margin-bottom: px2rem(5);
    text-align: center;
    font-size: px2rem(18);
  }

  .content .comment .com {
    color: #B4282D;
    line-height: 1;
    margin-bottom: px2rem(5);
    text-align: center;
    font-size: px2rem($size_small);
  }

  .content .comment .checkBtn {
    width: px2rem(57);
    border: 1px solid #7F7F7F;
    border-radius: 2px;
    text-align: center;
    background: none;
    font-size: px2rem($size_small);
    padding: px2rem(2) 0;
    margin: 0 px2rem(8);
  }

  .tag-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .tag {
    display: flex;
    align-items: center;
    color: #f48f18;
    margin: px2rem(10) px2rem(8) 0 0;
    border: 1px solid #f48f18;
    border-radius: 4px;
    font-size: px2rem($size_small);
    line-height: px2rem(18);
    padding: 0 px2rem(5);
  }

  .tag i {
    width: px2rem(5);
    height: px2rem(9);
    background: url('../../assets/images/yellow_arrow.png') no-repeat;
    background-size: cover;
    vertical-align: middle;
    margin-left: px2rem(4);
  }

  .select-section {
    background-color: #fff;
    padding-left: px2rem(15);
    margin-bottom: px2rem(10);
  }

  .more {
    display: inline-block;
    width: px2rem(25);
    height: px2rem(25);
    background: url('../../assets/images/more.png') no-repeat;
    background-size: cover;
    margin-right: pxrem(8);
  }

  .select, .promotion {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: px2rem(52);
    border-bottom: 1px solid $border_color;
  }

  .promotion-wrapper {
    display: flex;
  }

  .promotion-num {
    margin-right: px2rem(5);
    word-wrap: normal;
    line-height: px2rem(18);
  }

  .promotion-content {
    display: flex;
    align-items: center;
  }

  .promotion-content .tag {
    margin-top: 0;
  }

  .promotion-detail {
    @include ellipsis;
    color: #f48f18;
    max-width: px2rem(175);
  }

  .service {
    display: flex;
    padding-top: px2rem(6);
    align-items: center;
  }

  .service .left {
    margin-right: px2rem(10);
    align-self: flex-start;
  }

  .service-content {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
  }
  
  .service-item {
    color: #7f7f7f;
    padding-left: px2rem(8);
    margin: px2rem(0) px2rem(20) px2rem(8) 0;
    position: relative;
  }

  .service-item:before {
    content: '';
    position: absolute;
    top: px2rem(6);
    left: 0;
    width: px2rem(4);
    height: px2rem(4);
    background-color: #b4282d;
    border-radius: 100%;
  }

  .comment-wrapper {
    background-color: #fff;
    margin-bottom: px2rem(10);
  }

  .comment-wrapper .header {
    display: flex;
    justify-content: space-between;
    padding: px2rem(15) 0;
    margin-left: px2rem(15);
    border-bottom: 1px solid $border_color;
    align-items: center;
  }

  .comment-more {
    display: flex;
    align-items: center;
  }

  .product-detail p {
    font-size: 0;
  }

  .product-detail img {
    width: 100%;
  }

  .pd-bottom {
    background-color: #fff;
    height: px2rem(49);
    border-top: 1px solid $border_color;
    display: flex;
  }

  .pd-bottom button {
    background: none;
    outline: none;
  }

  .pd-bottom .kefu {
    width: px2rem(78);
    border-right: 1px solid $border_color;
  }

  .pd-bottom .kefu i {
    display: inline-block;
    width: px2rem(30);
    height: px2rem(30);
    background: url('../../assets/images/kefu.png') no-repeat;
    background-size: cover;
  }

  .pd-bottom .buy, .pd-bottom .cart {
    flex: 1;
  }

  .pd-bottom .cart {
    background-color: #b4282d;
    color: #fff;
  }
</style>
