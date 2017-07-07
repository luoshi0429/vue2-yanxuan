<template>
  <div class="manufacturer-page">
    <navbar />
    <div class="manufacture-content">
      <manufacturer-item v-for="(manufacturer, index) in manufacturers" v-bind:manufacturer="manufacturer" v-bind:key="index" v-on:click.native="handlePush(manufacturer)" />
    </div>
  </div>
</template>

<script>
  import navbar from '@/components/common/navbar'
  import manufacturerItem from '@/components/manufacturer/manufacturerItem'
  import { fetchManufacturers } from '@/utils/fetchData'
  export default {
    data () {
      return {
        manufacturers: {}
      }
    },
    components: {
      navbar,
      manufacturerItem
    },
    methods: {
      fetchData () {
        fetchManufacturers() 
          .then(r => {
            console.log(r)
            this.manufacturers = r
          })
      },
      handlePush (manufacturer) {
        this.$router.push(`/manufacturer/${manufacturer.mId}`)
      }
    },
    mounted () {
      this.fetchData()
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .manufacturer-page {
    display: flex;
    flex-direction: column;
  }
  .manufacture-content {
    flex: 1;
    background-color: 1;
  }
</style>

