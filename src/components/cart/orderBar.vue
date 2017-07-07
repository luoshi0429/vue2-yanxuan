<template>
  <div class="order-bar">
    <div class="bar-left" v-on:click="handleClick">
      <i v-bind:class="[(!isEdit && selectedCount === totalCount) || (isEdit && removeCommodityCount === totalCount) ? 'select' : '']" />
      <span class="selectedCount">已选({{ isEdit ? removeCommodityCount : selectedCount }})</span>
    </div>
    <div class="bar-right">
      <span v-if="!isEdit" class="price">¥{{ totalPrice }}</span>
      <span class="order-btn" v-on:click="handleAction">{{ isEdit ? '删除所选' : '下单' }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['selectedCount', 'totalCount', 'totalPrice', 'handleClick', 'isEdit', 'removeCommodityCount', 'handleAction']
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .order-bar {
    width: 100%;
    background-color: #fff;
    border-top: 1px solid $border_color;
    display: flex;
    justify-content: space-between;
  }

  .bar-left, .bar-right {
    display: flex;
    align-items: center;
  }

  .bar-left i {
    display: inline-block;
    width: px2rem(19);
    height:  px2rem(19);
    background: url('../../assets/images/unselect.png') no-repeat;
    background-size: cover;
    margin: 0 px2rem(15);
  }

  .bar-left .select {
    background-image: url('../../assets/images/select.png');
  }
  
  .bar-right .price {
    color: #b4282d;
    margin-right: px2rem(15);
    font-size: px2rem($size_small);
  }

  .order-btn {
    width: px2rem(110);
    height: px2rem(48);
    line-height: px2rem(48);
    background-color: #b4282d;
    color: #fff;
    text-align: center;
  }
</style>