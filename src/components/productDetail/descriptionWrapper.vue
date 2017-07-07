<template>
  <div class="pd-description-container">
    <div class="pd-description-item" v-for="characteristic in characteristics" >
      <img v-bind:src="characteristic.pic" />
      <div class="pd-item-content">
        <p>{{ characteristic.items[0] }}</p>
        <p>{{ characteristic.items[1] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['characteristics']
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .pd-description-container {
    padding: px2rem(12) px2rem(15);
    display: flex;
    background-color: #F9F9F9;
  }

  .pd-description-item {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .pd-description-item img {
    width: px2rem(36);
    height: px2rem(36);
    margin-right: px2rem(6);
    border-radius: px2rem(18);
  }

  .pd-item-content p {
    @include ellipsis;
    width: px2rem(57);
    margin-bottom: px2rem(8);
    &:last-child {
      margin-bottom: 0;
    }
  }

</style>
