<template>
  <div class="segment" ref="segment">
    <div class="segment-inner" ref="itemContainer" v-bind:style="dragStyle" v-on:touchmove="onTouchMove" v-on:touchstart="onTouchStart" v-on:touchend="onTouchEnd">
      <div v-bind:class="['segment-item', (currentTitle || select) === title ? 'current-item' : '']" v-for="title in titles" v-on:click="handleItemClick(title)">
        <span>{{ title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'segment',
    props: {
      titles: Array,
      currentTitle: String,
      handleClick: {
        type: Function,
        default: () => {}
      }
    },
    data () {
      return {
        // 上一次的位置
        lastInnerLeft: 0,
        // 起始点
        dragFrom: 0,
        // 拖动的距离
        dragDelta: 0,
        dragStyle: {},
        // select
        select: this.titles[0]
      }
    },
    methods: {
      handleItemClick (title) {
        this.select = title
        this.handleClick(title)
      },
      onTouchMove (e) {
        // console.log('on touch move: ', e)
        // console.log(e.touches[0].clientX)
        // console.log('+++++++++++++++++++')
        const current = e.touches[0].clientX
        this.dragDelta = current - this.dragFrom
        // console.log(this.dragDelta)
        this.dragAnimate(this.dragDelta)
      },
      onTouchStart (e) {
        this.dragFrom = e.targetTouches[0].clientX
        // console.log('on touch start: ', e)
        // console.log(this.dragFrom)
        // console.log('--------------------')
      },
      onTouchEnd (e) {
        this.lastInnerLeft = this.dragDelta
        // console.log('on touch end: ', e)
        // console.log(this.lastInnerLeft)
        // console.log('=======================')
        const segmentWidth = this.$refs.segment.clientWidth
        const innerWidth = this.$refs.itemContainer.clientWidth
        // console.log(segmentWidth, innerWidth, innerWidth - segmentWidth)
        const right = segmentWidth - innerWidth
        if (this.dragDelta > 0) {
          this.lastInnerLeft = 0
          this.dragAnimate(0, 600)
        } else if (this.dragDelta < right) {
          console.log('到最右了')
          this.lastInnerLeft = right
          this.dragAnimate(0, 600)
        }
      },
      dragAnimate (delta, duration = 0) { 
        this.dragStyle = {
          transitionTimingFunction: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
          transitionDuration: `${duration}ms`,
          transform: `translate(${delta + this.lastInnerLeft}px, 0px) translateZ(0px)`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';

  .segment {
    height: px2rem(30);
    background-color: #fff;
    border-bottom: 1px solid $border_color;
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow-x: hidden;
  }
  .segment-item {
    margin-left: px2rem(12);
    display: inline-block;
    &:not:first {
      margin-left: px2rem(24);
    }
  }
   .segment-item span {
     color: #333;
     font-size: px2rem($size_middle);
     padding: 0 px2rem(8);    
     display: inline-block; 
   }

  .current-item span {
     color: #b4282d;
     position: relative;
     line-height: px2rem(30);
   }

   .current-item span:after {
    content: '';
    position: absolute;
    background-color: #b4282d;
    left: 0;
    bottom: 0;
    width: 100%;
    height: px2rem(2);
   }
</style>
