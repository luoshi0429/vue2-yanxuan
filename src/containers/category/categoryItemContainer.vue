<template>
  <div class="category-item-container">
    <div class="cic-header-pic" v-bind:style="{backgroundImage: 'url(' + section.section.pic + ')'}"></div>
    <div class="cic-separator">
      <span>{{ section.section.name }}分类</span>
    </div>
    <div class="category-items">
      <category-item v-for="category in section.categories" v-bind:key="category.subCategoryId" v-bind:category="category" class="category-item" v-on:click.native="handleItemClick(category)" />
    </div>
  </div>
</template>

<script>
  import categoryItem from '@/components/category/categoryItem'
  export default {
    props: ['section', 'handleClick'],
    components: {
      categoryItem
    },
    methods: {
      handleItemClick (commodity) {
        this.handleClick(this.section.section, commodity)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .category-item-container {
    flex: 1;
    height: 100%;
    overflow-y: auto;
    padding: px2rem(15);
  }

  .cic-header-pic {
    width: 100%;
    height: px2rem(96);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .cic-separator {
    height: px2rem(54);
    line-height: px2rem(54);
    text-align: center;
  }

  .cic-separator span {
    font-size: px2rem($size_small);
    position: relative;
    &::before {
      left: - px2rem(28);
    }
    &::after {
      right: - px2rem(28);
    }
    &::before, &::after {
      position: absolute;
      content: '';
      top: 0;
      bottom: 0;
      margin: auto;
      height: 1px;
      width: px2rem(20);
      background-color: #d9d9d9;
      // 更改一个元素的变形原点
      transform-origin: 50% 100% 0;
    }
  }

  .category-items {
    display: flex;
    flex-wrap: wrap;
  }

  .category-item:nth-child(3n) {
    margin-right: 0;
  }

</style>
