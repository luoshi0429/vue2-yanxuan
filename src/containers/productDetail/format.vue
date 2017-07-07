<template>
  <div class="format-page">
    <navbar />
    <format-detail
      v-bind:commodity="commodity"
      v-bind:selectString="selectString"
      v-bind:handleCountChange="handleCountChange"
      v-bind:handleSelectFormat="handleSelectFormat"
      v-bind:count="count"
    />
    <div class="format-btns">
      <button class="back" v-on:click="handleBack">返回</button>
      <button class="buyNow" v-on:click="handleBuyNow">立即购买</button>
      <button class="addToCart" v-on:click="handleAddToCart">加入购物车</button>
    </div>
  </div>
</template>

<script>
  import navbar from '@/components/common/navbar'
  import step from '@/components/common/step'
  import { mapState, mapActions } from 'vuex'
  import formatDetail from '@/components/common/formatDetail'
  export default {
    components: { navbar, step, formatDetail },
    data () {
      return {
        count: this.$store.state.selectFormat.count || 1
      }
    },
    computed: {
      ...mapState({
        commodity: 'showCommodityDetail',
        selects: function (state) {
          const selectFormat = state.selectFormat[this.$route.params.pId] || {}
          console.log('+++++++', selectFormat.format)
          return selectFormat.format || []
        }
      }),
      selectString () {
        return this.selects.join(' ')
      }
    },
    beforeRouteLeave (to, from, next) {
      if (this.selects.length !== this.commodity.formats.length) {
        this.changeSelectFormat({
          pId: this.$route.params.pId, 
          format: [],
          count: 1
        })
      }
      next()
    },
    methods: {
      ...mapActions([
        'changeSelectFormat',
        'addToCart'
      ]),
      handleBack () {
        this.$router.back()
      },
      handleAddToCart () {
        console.log('add to cart...')
        if (this.selects.length === this.commodity.formats.length) {
          this.addToCart({
            pId: this.commodity.pId,
            title: this.commodity.title,
            price: this.commodity.price,
            pic: this.commodity.pic,
            selectd: true,
            count: this.count,
            formats: this.commodity.formats,
            selectString: this.selects.join(';')
          })
        }
      },
      handleBuyNow () {
        console.log('buy now')
      },
      handleSelectFormat (option, index) {
        console.log(index, option)
        if (this.selects[index] === option) {
          this.selects.splice(index, 1)
          return
        }
        this.selects[index] = option
        // this.selects = Object.assign([], this.selects)
        // this.$set(this.selects, index, option)
        this.changeSelectFormat({
          pId: this.$route.params.pId,
          format: this.selects,
          count: this.count
        })
      },
      handleCountChange (currentVal) {
        this.changeSelectFormat({
          pId: this.$route.params.pId,
          format: this.selects,
          count: currentVal
        })
        this.count = currentVal        
      }
    },
    mounted () {
      const pId = this.$route.params.pId
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .format-page {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
  }

  .format-container {
    flex: 1;
    overflow-y: auto;
    padding: px2rem(15);
    padding-bottom: px2rem(65);
  }

  .commodity-info {
    padding-bottom: px2rem(20);
    display: flex;
    align-items: center;
  }

  .commodity-info .img-wrapper {
    background-color: #f4f4f4;
    width: px2rem(85);
    height: px2rem(85);
    margin-right: px2rem(12);
  }

  .commodity-info img {
    width: 100%;
    height: 100%;
  }

  .commodity-info-content {
    margin-bottom: px2rem(15);
  }

  .format-content-item {
    margin-bottom: px2rem(15);
  }

  .format-content-item h4 {
    font-weight: normal;
    padding-bottom: px2rem(12);
  }

  .format-item-container {
    display: flex;
    flex-wrap: wrap;
  }

  .format-item {
    border: 1px solid #333;
    border-radius: 3px;
    padding: 0 px2rem(17);
    margin-bottom: px2rem(8);
    margin-right: px2rem(12);
    line-height: px2rem(32);
  }

  .select-format-item {
    color: #b4282d;
    border-color: #b4282d;
  }

  .commodity-info-content .price {
    font-size: px2rem($size_default);
  }

  .commodity-info-content .select {
    font-size: px2rem($size_middle);

  }

  .format-btns {
    height: px2rem(50);
    border-top: 1px solid $border_color;
    background-color: #fff;
    display: flex;
  }

  .format-btns button {
    outline: none;
    background: none;
    height: 100%;
  }

  .format-btns .back {
    width: px2rem(50);
    border-right: 1px solid $border_color;
  }

  .format-btns .buyNow, .format-btns .addToCart {
    flex: 1;
  }

  .format-btns .addToCart {
    background-color: #b4282d;
    color: #fff;
  }
</style>
