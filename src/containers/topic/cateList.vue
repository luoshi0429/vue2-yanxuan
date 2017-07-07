<template>
  <div class="cateList-page">
    <navbar />
    <div class="cateList-container">
      <topic-item v-for="topic in topics" v-bind:topic="topic" v-bind:key="topic.topicIds" />
      <div class="noMore">
        <span>没有更多了</span>
      </div>
    </div>
  </div>
</template>

<script>
  import navbar from '@/components/common/navbar'
  import topicItem from '@/components/topic/topicItem'
  import { fetchCateList } from '@/utils/fetchData'
  export default {
    data () {
      return {
        topics: []
      }
    },
    components: {
      navbar,
      topicItem
    },
    methods: {
      fetchData () {
        fetchCateList()
          .then(r => {
            console.log(r)
            this.topics = r[this.$route.params.type]
          })
      }
    },
    mounted () { 
      this.fetchData()
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .cateList-page {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .cateList-container {
    flex: 1;
    overflow-y: auto;
  }

  .noMore {
    height: px2rem(40);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &:before, &:after {
      content: '';
      width: px2rem(36);
      height: 1px;
      background-color: #ccc;
      display: block;
    }
  }

  .noMore span {
    font-size: px2rem($size_small);
    color: #666;
    padding: 0 px2rem(10);
  }
</style>
