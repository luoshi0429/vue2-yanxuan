<template>
  <div class="cart-commodity" v-on:click="_handlePush">
    <i v-if="isEdit" class="edit-select" v-bind:class="[selected ? 'cart-select' : '']" v-on:click="handleRemoveSelect" />
    <i v-else class="select-icon" v-bind:class="[commodity.selected ? 'cart-select' : '']" v-on:click.stop="_handleSelect" />
    <img class="commodity-pic" v-bind:src="commodity.pic" />
    <div class="cart-commodity-content">
      <div v-if="isEdit">
        <div class="cart-commodity-edit-select" v-on:click="handleToFormat(commodity)">
          <span>已选择：{{ commodity.selectString }}</span><i />
        </div>
        <div class="cart-commodity-edit-number">
          <p class="price">¥{{ commodity.price }} {{ commodity.count }}</p>
          <step class="step" v-bind:current="commodity.count" v-bind:handleChange="handleChangeCount"/>
        </div>
      </div>
      <div v-else>
        <p class="title-container">
          <span class="title">{{ commodity.title }}</span>
          <span class="count">x{{ commodity.count }}</span>
        </p>
        <p class="description">{{ commodity.selectString }}</p>
        <p class="price">¥{{ commodity.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import step from '@/components/common/step'
  export default {
    computed: {
      selected () {
        return this.removeCartList.indexOf(this.commodity) >= 0
      }
    },
    components: {
      step
    },
    // props: ['commodity', 'handleSelect', 'handlePush', 'isEdit', 'handleRemove', 'handleChange', 'removeCartList', 'handleToFormat'],
    props: {
      commodity: Object,
      handleSelect: {
        type: Function,
        default: () => {}
      },
      isEdit: Boolean,
      removeCartList: Array,
      handlePush: {
        type: Function,
        default: () => {}
      },
      handleRemove: {
        type: Function,
        default: () => {}
      },
      handleChange: {
        type: Function,
        default: () => {}
      },
      handleToFormat: {
        type: Function,
        default: () => {}
      }
    },
    watch: {
      commodity: function (val, oldVal) {
        console.log('+++++++++')
        console.log(val, oldVal)
      }
    },
    methods: {
      _handleSelect () {
        this.handleSelect(this.commodity)
      },
      _handlePush () {
        if (this.isEdit) return
        this.handlePush(this.commodity.pId)
      },
      handleRemoveSelect () {
        this.handleRemove(this.commodity)
      },
      handleChangeCount (currentVal) {
        this.handleChange(this.commodity, currentVal)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .cart-commodity {
    background-color: #fff;
    height: px2rem(92);
    display: flex;
    align-items: center;
  }

  .cart-commodity .select-icon, .cart-commodity .edit-select {
    width: px2rem(19);
    height:  px2rem(19);
    background: url('../../assets/images/unselect.png') no-repeat;
    background-size: cover;
    margin: 0 px2rem(15);
  }

  .cart-commodity .cart-select {
    background-image: url('../../assets/images/select.png');
  }

  .commodity-pic {
    width: px2rem(70);
    height: px2rem(70);
    margin-right: px2rem(10);
  }

  .cart-commodity-content {
    flex: 1;
    padding-right: px2rem(15);
  }

  .title-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: px2rem(5);
  }

  .title-container .title, .title-container .count, .price {
    font-size: px2rem($size_middle);
  }

  .description {
    font-size: px2rem($size_small);
    line-height: px2rem($size_middle);
    margin-bottom: px2rem(5);
    @include ellipsis;
  }

  .cart-commodity-edit-select {
    margin-bottom: px2rem(20);
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .cart-commodity-edit-select span {
    width: px2rem(220);    
    color: $text_color;
    font-size: px2rem(12);
    @include ellipsis;
    text-align: right;
    padding-right: px2rem(8);
    padding-left: px2rem(10);
  }

  .cart-commodity .cart-commodity-edit-select i {
    display: inline-block;
    width: px2rem(6);
    height: px2rem(10);
    background: url('../../assets/images/to.png') no-repeat;
    background-size: cover;
  }

  .cart-commodity-edit-number {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .cart-commodity-edit-number .step {
    height: px2rem(27);
    width: px2rem(130);
  }
</style>