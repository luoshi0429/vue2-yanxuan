<template>
  <div class="home-page">
    <header>
      <div class="search-input">
        <router-link class="logo" to="/home">网易严选</router-link>
        <search-btn v-bind:handleClick="handleSearch" />
      </div>
      <segment v-bind:titles="titles" v-bind:handleClick="handleChange" v-bind:currentTitle="current" />
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  import { fetchHome } from '@/utils/fetchData'
  import segment from '@/components/common/segment'
  import searchBtn from '@/components/common/searchButton'
  import bottomFooter from '@/components/common/bottomFooter'

  export default {
    name: 'home',
    components: {
      segment,
      searchBtn,
      bottomFooter
    },
    data () {
      return {
        titles: ['推荐', '居家', '餐厨', '配件', '服装', '洗护', '婴童', '杂货', '饮食', '志趣'],
        categoryId: ['', '1000001', '1000002', '1000003', '1000004', '1000005', '1000006', '1000007', '1000008', '1000009'],
        imgs: ['http://yanxuan.nosdn.127.net/2a1259567d45f6d56cd377b9f6e8f4fd.jpg', 'http://yanxuan.nosdn.127.net/615e5f7727d1d2831e24a3453eeac4ca.jpg', 'http://yanxuan.nosdn.127.net/0ad986128e62d4f16a385de809f23dca.jpg', 'http://yanxuan.nosdn.127.net/8869a3d10800efca5670432bc0070707.jpg', 'http://yanxuan.nosdn.127.net/dda365946a8d8b09adebbd74e9cfb830.jpg'],
        data: {}
      }
    },
    computed : {
      current () {
        const index = this.categoryId.indexOf(this.$route.params.cId)
        return this.titles[index]
      }
    },
    methods: {
      handleSearch () {
        this.$router.push('/search')
      },
      handleChange (title) {
        console.log('click at ', title)
        if (title === this.titles[0]) {
          this.$router.push('/home/recommend')
        } else {
          this.$router.push(`/home/other/${this.categoryId[this.titles.indexOf(title)]}`)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';

  .home-page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .home-page .search-input {
    display: flex;
    align-items: center;
    // height: px2rem(36);
    width: 100%;
    padding: px2rem(8) px2rem(15);
    background-color: #fff;
  }

  .home-page .search-input .logo {
    width: px2rem(69);
    height: px2rem(20);
    background: url('../../assets/images/logo.png') no-repeat 0 0;
    background-size: cover;
    margin-right: px2rem(10);
    text-indent: -999px;
  }

  .home-content {
    flex: 1;
    overflow-y: auto;
  }

</style>
