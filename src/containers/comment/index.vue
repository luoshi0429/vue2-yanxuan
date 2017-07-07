<template>
  <div class="comment-page">
    <navbar />
    <header-select v-bind:selects="selects" v-bind:handleClick="handleChange" v-bind:current="currentSelect" />
    <div class="comment-container">
      <comment />
      <comment />
      <comment />
      <comment />
      <comment />
      <comment />
    </div>
  </div>
</template>

<script>
  import navbar from '@/components/common/navbar'
  import headerSelect from './headerSelect'
  import comment from '@/components/common/comment'
  export default {
    data () {
      return {
        selects: ['全部', '有图'],
        currentSelect: '全部'
      }
    },
    components: {
      navbar,
      headerSelect,
      comment
    },
    methods: {
      handleChange (select) {
        console.log('click...', select)
        this.currentSelect = select
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .comment-page {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .comment-container {
    flex: 1;
    overflow-y: auto;
    background-color: #fff;
  }
</style>
