<template>
  <div class="attribute-container">
    <div class="title">商品参数</div>
    <div class="attr-content">
      <div class="content-item" v-for="(attr, index) in attrs" v-bind:key="index">
        <span class="name">{{ attr.name }}</span>
        <span class="content">{{ attr.content }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        attrs: [
          { name: '执行标准', content: 'Q/LBD 1-2016' },
          { name: '主体额定电压', content: '3.7V' },
          { name: '主体额定功率', content: '1.8W' },
          { name: '注意事项', content: '牙刷属卫生用品，一旦开封，如无质量问题不予退换。' },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .attribute-container {
    background-color: #fff;
    padding: px2rem(15);
  }

  .title {
    padding: px2rem(20) 0 px2rem(12);
    line-height: px2rem($size_middle);
    font-size: px2rem($size_middle);
  }

  .content-item {
    display: flex;
    justify-content: space-between;
    padding: px2rem(5) 0;
  }

  .content-item .name {
    width: px2rem(74);
    color: #999;
    font-size: px2rem($size_small);
  }

  .content-item .content {
    flex: 1;
    font-size: px2rem($size_small);
    padding-left: px2rem(10);
  }



</style>
