<template>
  <div class="topic-page">
    <topic-list />
    <topicItem v-for="topic in topics" v-bind:topic="topic" v-bind:key="topic.topicId" v-on:click.native="handlePush(topic)" />
  </div>
</template>

<script>
  import topicList from './topicList'
  import topicItem from '@/components/topic/topicItem'
  import { fetchCateList } from '@/utils/fetchData'
  export default {
    components: {
      topicList,
      topicItem
    },
    data () {
      return {
        topics: []
      }
    },
    methods: {
      fetchData () {
        fetchCateList()
          .then(r => {
            let topics = []
            r.forEach((topic) => {
              topics = topics.concat(topic)
            })
            this.topics = topics.sort()
          })
      },
      handlePush (topic) {
        console.log(topic)
        this.$router.push('/topicDetail')
      }
    },
    mounted () {
      this.fetchData()
    }
  }
</script>

<style lang="scss" scoped>
  .topic-page {
    overflow-y: auto;
  }
</style>
