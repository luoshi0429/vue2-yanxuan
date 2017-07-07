<template>
  <div class="section-container">
    <div v-for="(section, index) in sections" v-on:click="handleSelect(index)" >
      <section-item v-bind:section="section" v-bind:key="section.categoryId + section.name" v-bind:isSelected="selectedIndex === index" />      
    </div>
  </div>
</template>

<script>
  import sectionItem from '@/components/category/sectionItem'
  export default {
    props: ['sections', 'onChange'],
    data () {
      return {
        selectedIndex: 0
      }
    },
    components: {
      sectionItem
    },
    methods: {
      handleSelect (index) {
        this.selectedIndex = index
        this.onChange(this.sections[index])
      }
    },
    mounted () {
      this.handleSelect(0)
    }
  }
</script>

<style lang="scss" scoped>

</style>
