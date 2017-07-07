<template>
  <div class="cart-page">
    <div class="cart-content">
      <header class='cart-header'>
        <h3>购物车</h3>
        <span v-on:click="handleEdit" class="cart-edit">{{ isEdit ? '完成' : '编辑' }}</span>
      </header>
      <ul class="nothing-policy">
          <li><i /><span>30天无忧退货</span></li>
          <li><i /><span>48小时快速退款</span></li>
          <li><i /><span>满88免邮费</span></li>
        </ul>
      <div v-if="cartCommodities.length === 0" class="cart-nothing">
        <div class="nothing-login">
          <div class="nothing-cart-img"></div>
          <button class="login">登录</button>
        </div>
      </div>
      <div v-if="cartCommodities.length > 0" class="cart-commodity">
        <cart-commodity
          v-for="commodity in cartCommodities"
          v-bind:key="commodity.pId"
          v-bind:commodity="commodity"
          v-bind:handlePush="pushToProductDetail"
          v-bind:handleSelect="handleSelect"
          v-bind:isEdit="isEdit"
          v-bind:handleRemove="handleRemove"
          v-bind:handleChange="handleChangeCount"
          v-bind:removeCartList="removeCartList"
          v-bind:handleToFormat="handleToFormat"
        />
      </div>
    </div>
    <order-bar
      v-if="cartCommodities.length > 0"
      v-bind:totalPrice="totalPrice"
      v-bind:selectedCount="selectedCount"
      v-bind:totalCount="cartCommodityCount"
      v-bind:handleClick="handleSelectAll"
      v-bind:isEdit="isEdit"
      v-bind:removeCommodityCount="removeCommodityCount"
      v-bind:handleAction="handleAction"
    />
  </div>
</template>

<script>
  import cartCommodity from '@/components/cart/cartCommodity'
  import orderBar from '@/components/cart/orderBar'
  import { mapState, mapActions, mapGetters } from 'vuex'
  export default {
    data () {
      return {
        selectRemoveAll: false
      }
    },
    components: {
      cartCommodity,
      orderBar
    },
    beforeRouteLeave (to, from, next) {
      this.changeCartEdit(false)
      this.resetCartCommodity()
      next()
    },
    computed: {
      ...mapState({
        cartCommodities: 'cartList',
        // removeCartList: 'removeCartList',
        removeCartList: state => {
          console.log('========')
          console.log(state.removeCartList)
          return state.removeCartList
        },
        isEdit: 'cartIsEdit',
        totalPrice: state => {
          const total = state.cartList.filter(c => c.selected).reduce((total, commodity, index) => {
            return total + Number(commodity.price) * Number(commodity.count)
          }, 0)
          return total
        },
        selectedCount: state => {
          const total = state.cartList.reduce((total, c) => {
            total += c.selected ? Number(c.count) : 0
            return total
          }, 0)
          return total
        }
      }),
      ...mapGetters(['cartCommodityCount', 'removeCommodityCount'])
    },
    methods: {
      ...mapActions([
        'selectCartCommodity', 'selectAllCartCommodity', 'getRemoveCartCommodity',
        'selectRemoveAllCartCommodity', 'removeCartCommodity', 'pushToCartFormat',
        'changeCartEdit', 'changeRemoveCartCommodity', 'finishEditCartCommodity',
        'resetCartCommodity'
      ]),
      pushToProductDetail (pId) {
        this.$router.push(`/productDetail/${pId}`)
      },
      handleSelect (commodity) {
        this.selectCartCommodity(commodity)
      },
      handleSelectAll () {
        if (!this.isEdit) {
          this.selectAllCartCommodity()
        } else {
          const selectCount = this.removeCartList.length
          let selected = false
          if (selectCount !== this.cartCommodities.length) {
            selected = true
          }
          this.selectRemoveAllCartCommodity(selected)
        }
      },
      handleEdit () {
        if (this.isEdit) {
          this.finishEditCartCommodity()
        } else {
          this.selectRemoveAllCartCommodity(false)
        }
        this.changeCartEdit(!this.isEdit)
      },
      handleRemove (commodity) {
        this.getRemoveCartCommodity(commodity)
      },
      handleAction () {
        console.log('delete')
        console.log(this.removeCartList)
        if (!this.isEdit) {
          // order
          console.log('下单')
        } else {
          // remove
          this.selectRemoveAll = false
          this.removeCartCommodity(this.removeCartList)
        }
      },
      handleChangeCount (commodity, currentValue) {
        console.log(commodity, currentValue)
        this.pushToCartFormat(commodity)
        this.changeRemoveCartCommodity({ count: currentValue })
      },
      handleToFormat (commodity) {
        this.pushToCartFormat(commodity)
        this.$router.push('/cartFormat')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .cart-page {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  
  .cart-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  .cart-header {
    height: px2rem(44);
    line-height: px2rem(44);
    background-color: #fff;
    position: relative;
    border-bottom: 1px solid $border_color;
  }

  .cart-header h3 {
    font-weight: normal;
    font-size: px2rem(18);
    text-align: center;
  }

  .cart-edit {
    position: absolute;
    font-size: px2rem(15);
    height: px2rem(44);
    right: px2rem(15);
    bottom: 0;
  }

  .cart-nothing {
    width: 100%;
    flex: 1;
    position: relative;
  }

  .nothing-policy {
    height: px2rem(35);
    padding: 0 px2rem(15);
    width: 100%;
    display: flex;
  }

  .nothing-policy li {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nothing-policy li i { 
    display: inline-block;
    width: px2rem(5);
    height: px2rem(5);
    background: url('../../assets/images/dot.png') no-repeat;
    background-size: cover;
    margin-right: px2rem(3);
  }

  .nothing-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 100%;
    left: 0;
    top: px2rem(250);
  }

  .nothing-cart-img {
    width: px2rem(124);
    height: px2rem(124);
    background: url('../../assets/images/cart_nothing.png') no-repeat;
    background-size: cover;
  }

  .nothing-login .login {
    width: px2rem(240);
    height: px2rem(46);
    background-color: #b4282d;
    color: #fff;
    margin-top: px2rem(15);
    border-radius: px2rem(3);
  }
</style>


