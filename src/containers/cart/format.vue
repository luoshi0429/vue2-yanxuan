<template>
  <div class="cart-format-page">
    <format-detail
      v-bind:commodity="currentCartCommodity"
      v-bind:selectString="selectString"
      v-bind:count="currentCartCommodity.count"
      v-bind:handleCountChange="handleCountChange"
      v-bind:handleSelectFormat="handleSelectFormat"
    />
    <div class="cart-format-bottom">
      <button class="back" v-on:click="handleBack">返回</button>
      <button class="confirm" v-on:click="handleConfirm">确定</button>
    </div>
  </div>
</template>

<script>
  import formatDetail from '@/components/common/formatDetail'
  import { mapState, mapActions } from 'vuex'
  export default {
    components: { formatDetail },
    data () {
      return {
        selects: this.$store.state.currentCartCommodity.selectString.split(';'),
        count: this.$store.state.currentCartCommodity.count
      }
    },
    computed: {
      ...mapState(['currentCartCommodity']),
      selectString () {
        return this.selects.join(' ')
      }
    },
    beforeRouteLeave (to, from, next) {
      this.changeCartEdit(true)
      next()
    },
    methods: {
      ...mapActions(['changeCartEdit', 'changeRemoveCartCommodity']),
      handleCountChange (currentVal) {
        this.count = currentVal
      },
      handleSelectFormat (option, index) {
        this.$set(this.selects, index, option)
      },
      handleBack () {
        this.$router.back()
      },
      handleConfirm () {
        const selectString = this.selects.join(';')
        if (!(this.count === this.currentCartCommodity.count && selectString === this.currentCartCommodity.selectString)) {
          this.changeRemoveCartCommodity({
            count: this.count,
            selectString: selectString
          })
      }
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/mixin.scss';
  .cart-format-page {
    background: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .cart-format-bottom {
    height: px2rem(54);
    border-top: 1px solid $border_color;
    display: flex;
    // align-items: center;
  }

  .cart-format-bottom .back {
    width: px2rem(86);
    height: 100%;
    background: #fff;
    font-size: px2rem($size_default);
    outline: none;
  }

  .cart-format-bottom .confirm {
    flex: 1;
    height: 100%;
    border: 1px solid #b4282d;
    background: #b4282d;
    color: #fff;
    outline: none;
    font-size: px2rem($size_default);
  }
</style>