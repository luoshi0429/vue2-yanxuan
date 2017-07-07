<template>
  <div class="headerselect-container">
    <div class="select-item" v-for="select in selects" v-on:click="handleClick(select)">
      <span>{{ select }}</span>
      <div class="indicator" v-if="select === current"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['selects', 'current', 'handleClick']
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .headerselect-container {
    display: flex;
    height: px2rem(41);
    background-color: #fff;
    border-bottom: 1px solid $border_color;
    align-items: center;
  }

  .select-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .select-item span {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .select-item .indicator {
    display: inline-block;
    background-color: #b4282d;
    width: px2rem(64);
    height: px2rem(2);
  }

</style>
