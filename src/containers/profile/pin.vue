<template>
  <div class="pin-page">
    <navbar />
    <header-select v-bind:selects="selects" v-bind:myStyle="{ border: 'none' }" v-bind:indicatorStyle="{ height: 4/37.5 + 'rem' }" v-bind:handleClick="handleChange" />
    <router-view class="pin-container"></router-view>
  </div>
</template>

<script>
  import navbar from '@/components/common/navbar'
  import headerSelect from '@/components/common/headerSelect'
  export default {
    components: {
      navbar,
      headerSelect
    },
    data () {
      return {
        selects: ['拼团商品', '我的拼团']
      }
    },
    methods: {
      handleChange (select) {
        if (select === this.selects[0]) {
          this.$router.push('/pin/commodity')
        } else {
          this.$router.push('/pin/my')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pin-page {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
  }

  .pin-container {
    flex: 1;
    overflow-y: auto;
  }
</style>
