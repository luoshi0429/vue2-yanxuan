<template>
  <div class="topic-detail-page">
    <navbar />
    <div class="topic-detail-content" v-if="details.title">
      <img class="topic-pic" v-bind:src="details.pic" />
      <h3 class="topic-title">{{ details.title }}</h3>
      <div class="topic-user">
        <img v-bind:src="details.user.avatar" />
        <span>{{ details.user.author }}</span>
      </div>
      <div class="topic-desc">
        <p v-for="desc in details.descs" v-bind:key="desc">{{ desc }}</p>
      </div>
      <div class="topic-items">
        <commodity v-for="commodity in details.commodities" v-bind:commodity="commodity" v-bind:key="commodity.pId" />
      </div>
      <div class="topic-info">
        <span>阅读 {{ details.readCount }}</span>
        <span>转发 {{ details.reward }}</span>
      </div>
      <div class="topic-comment" v-if="details.comments.length">
        <div class="topic-comment-header">
          <span>精选留言</span>
          <i class="write-comment" />
        </div>
        <div class="topci-comment-content">
          <topicComment v-for="(comment, index) in details.comments" v-bind:topicComment="comment" v-bind:key="index" />
        </div>
      </div>
      <div class="recommend-list">
        <div class="recommend-header">
          <span>专题推荐／商品推荐</span>
        </div>
        <div class="recommend-items" v-if="details.recommendTopics.length">
          <recommend-topic v-for="recommend in details.recommendTopics" v-bind:recommend="recommend" v-bind:key="recommend.pic" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import navbar from '@/components/common/navbar'
  import carousel from '@/components/common/carousel'
  import commodity from '@/components/common/commodity'
  import topicComment from '@/components/common/topicComment'
  import recommendTopic from '@/components/topic/recommendTopic'
  import { fetchTopicDetail } from '@/utils/fetchData'
  export default {
    components: {
      navbar,
      carousel,
      commodity,
      topicComment,
      recommendTopic
    },
    data () {
      return {
        details: {}
      }
    },
    methods: {
      fetchData () {
        fetchTopicDetail()
          .then(r => {
            console.log(r)
            this.details = r
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
  .topic-detail-page {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .topic-detail-content {
    flex: 1;
    overflow-y: auto;
    background: #fff;
  }

  .topic-pic {
    width: 100%;
    height: px2rem(414);
  }

  .topic-title {
    font-size: px2rem(20);
    line-height: px2rem(21);
    padding-left: px2rem(16);
    margin-bottom: px2rem(12);
  }

  .topic-user {
    padding-left: px2rem(16);
    display: flex;
    align-items: center;
  }

  .topic-user img {
    width: px2rem(26);
    height: px2rem(26);
    margin-right: px2rem(14);
    border-radius: 50%;
  }

  .topic-user span {
    font-size: px2rem(15);
    line-height: px2rem(17);
  }

  .topic-desc {
    padding: px2rem(16);    
    padding-bottom: px2rem(24);
    border-bottom: 1px solid $border_color;
  }

  .topic-desc p {
    font-size: px2rem(15);
    line-height: px2rem(24);
    margin-bottom: px2rem(24);
  }

  .topic-items {
    display: flex;
    flex-wrap: wrap;
  }

  .topic-info {
    border-bottom: 10px solid #f4f4f4;
    padding-left: px2rem(20);
    height: px2rem(48);
    padding-top: px2rem(10);
  }

  .topic-info span {
    color: #666;
    font-size: px2rem(15);
    line-height: px2rem(16);
    margin-right: px2rem(6);
  }

  .topic-comment {
    padding-left: px2rem(16);
  }

  .topic-comment-header {
    display: flex;
    justify-content: space-between;
    height: px2rem(48);
    align-items: center;
    padding-right: px2rem(16);
  }

  .write-comment {
    width: px2rem(17.5);
    height: px2rem(17);
    background: url('../../assets/images/write.png') no-repeat;
    background-size: cover;
  }

  .recommend-list {
    background: #f4f4f4;
    padding: 0 px2rem(16);
  }
  
  .recommend-header {
    height: px2rem(44);
    line-height: px2rem(44);
    text-align: center;
  }

  .recommend-header span {
    font-size: px2rem($size_default);
    color: #999;
  }

</style>