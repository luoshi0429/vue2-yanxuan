<template>
  <div class="category-page">
    <header class="category-header">
      <search-btn v-bind:handleClick="handleSearch"/>
    </header>
    <div class="category-content">
      <section-container class="content-left" v-bind:sections="sections" v-bind:onChange="handleChangeSection"/>
      <category-item-container class="content-right" v-bind:section="section" v-bind:handleClick="handlePushToCommodity" />
    </div>
  </div>
</template>

<script>
  import searchBtn from '@/components/common/searchButton'
  import categoryItemContainer from './categoryItemContainer'
  import sectionContainer from './sectionContainer'
  import { fecthCategory } from '@/utils/fetchData'
  export default {
    components: {
      searchBtn,
      categoryItemContainer,
      sectionContainer
    },
    methods: {
      handleSearch () {
        console.log('handle search in category page...')
        this.$router.push('/search')
      },
      handleChangeSection (section) {
        console.log(section)
        // 请求分类
        fecthCategory()
          .then(r => {
            console.log(r)
            this.section.section = section
            this.section.categories = r[section.categoryId]
          })
      },
      handlePushToCommodity (section, commodity) {
        console.log(section)
        console.log(commodity)
        this.$router.push('/categoryCommodity')
      }
    },
    data () {
      return {
        sections: [
          { name: '推荐区', categoryId: '1000001', pic: 'http://yanxuan.nosdn.127.net/bd17c985bacb9b9ab1ab6e9d66ee343c.png?imageView&quality=85&thumbnail=144x144' },
          { name: '夏凉区', categoryId: '1000002', pic: 'http://yanxuan.nosdn.127.net/bd17c985bacb9b9ab1ab6e9d66ee343c.png?imageView&quality=85&thumbnail=144x144' },
          { name: '家装区', categoryId: '1000003', pic: 'http://yanxuan.nosdn.127.net/bd17c985bacb9b9ab1ab6e9d66ee343c.png?imageView&quality=85&thumbnail=144x144' },
          { name: '居家', categoryId: '1000004', pic: 'http://yanxuan.nosdn.127.net/bd17c985bacb9b9ab1ab6e9d66ee343c.png?imageView&quality=85&thumbnail=144x144' },
          { name: '餐厨', categoryId: '1000001', pic: 'http://yanxuan.nosdn.127.net/bd17c985bacb9b9ab1ab6e9d66ee343c.png?imageView&quality=85&thumbnail=144x144' },
          { name: '配件', categoryId: '1000002', pic: 'http://yanxuan.nosdn.127.net/bd17c985bacb9b9ab1ab6e9d66ee343c.png?imageView&quality=85&thumbnail=144x144' },
          { name: '服装', categoryId: '1000003', pic: 'http://yanxuan.nosdn.127.net/bd17c985bacb9b9ab1ab6e9d66ee343c.png?imageView&quality=85&thumbnail=144x144' },
          { name: '洗护', categoryId: '1000004', pic: 'http://yanxuan.nosdn.127.net/bd17c985bacb9b9ab1ab6e9d66ee343c.png?imageView&quality=85&thumbnail=144x144' },
          { name: '婴童', categoryId: '1000001', pic: 'http://yanxuan.nosdn.127.net/bd17c985bacb9b9ab1ab6e9d66ee343c.png?imageView&quality=85&thumbnail=144x144' },
          { name: '杂货', categoryId: '1000002', pic: 'http://yanxuan.nosdn.127.net/bd17c985bacb9b9ab1ab6e9d66ee343c.png?imageView&quality=85&thumbnail=144x144' },
          { name: '饮食', categoryId: '1000003', pic: 'http://yanxuan.nosdn.127.net/bd17c985bacb9b9ab1ab6e9d66ee343c.png?imageView&quality=85&thumbnail=144x144' },
          { name: '志趣', categoryId: '1000004', pic: 'http://yanxuan.nosdn.127.net/bd17c985bacb9b9ab1ab6e9d66ee343c.png?imageView&quality=85&thumbnail=144x144' }
        ],
        section: {
          pic: 'http://yanxuan.nosdn.127.net/e8bf0cf08cf7eda21606ab191762e35c.png',
          name: '居家',
          section: {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';

  .category-page {
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .category-header {
    display: flex;
    height: px2rem(44);
    padding: 0 px2rem(15);
    background-color: #fff;
    align-items: center;
    border-bottom: 1px solid $border_color;
  }

  .category-content {
    width: 100%;
    flex: 1;
    overflow: hidden;
    display: flex;
  }

  .content-left {
    width: px2rem(81);
    height: 100%;
    background-color: #fff;
    border-right: 1px solid $border_color;
  }

  .content-right {
    background-color: #fff;
    flex: 1;
  }

</style>
