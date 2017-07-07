<template>
  <div class="carousel-container">
    <div class="carousel-swiper" ref="swiper" v-on:click="onPicClick(currentIndex)" v-on:touchmove="handleMove" v-on:touchend="handleEnd" v-on:touchstart="handleStart">
      <img class="carousel-img" v-bind:src="pics[preIndex]" />
      <img class="carousel-img" v-bind:src="pics[currentIndex]" />
      <img class="carousel-img" v-bind:src="pics[nextIndex]" />
    </div>
    <div v-if="!hideIndicator" class="carousel-indicator-container">
      <span v-bind:class="['carousel-indicator', index === currentIndex && 'indicator-current']" v-for="(item, index) in pics"></span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      pics: Array,
      hideIndicator: {
        default: false,
        type: Boolean
      },
      onPicChange: {
        type: Function,
        default: () => {}
      },
      onPicClick: {
        type: Function,
        default: (index) => {
          console.log('click pic at index: ', index)
        }
      }
    },
    data () {
      return {
        animationDuration: 2500,
        lastPosition: 0,
        timeId: 0,
        preIndex: this.pics.length - 1 < 0 ? 0 : this.pics.length - 1,
        currentIndex: 0,
        nextIndex: this.pics.length <= 1 ? 0 : 1,
        dragFrom: 0,
        dragDelta: 0
      }
    },
    created () {
      this.initAnimate()
    },
    mounted () {
      this.$watch('currentIndex', () => {
        this.onPicChange(this.currentIndex)
      }, {
        immediate: true
      })
      this.backToCenter()
    },
    beforeDestroy () {
      clearTimeout(this.timeId)
    },
    methods: {
      handleEnd (e) {
        const width = this.$el.clientWidth
        // 大于是左
        if (this.dragDelta > width / 3) {
          this.leftAnimate(this.dragDelta)
        } else if (this.dragDelta < (-width / 3)) {
          this.rightAnimate(-this.dragDelta)
        } else {
          this.backAnimate()
        }
        this.initAnimate()
      },
      handleStart (e) {
        clearTimeout(this.timeId)
        this.dragFrom = e.targetTouches[0].clientX
      },
      handleMove (e) {
        const current = e.touches[0].clientX
        const delta = current - this.dragFrom
        this.startAnimate(delta)
      },
      startAnimate (delta) {
        const width = this.$el.clientWidth
        this.dragDelta = delta
        if (Math.abs(delta) >= width) {
          this.dragDelta = width
          return 
        }
        this.$refs.swiper && (this.$refs.swiper.style = `transition-duration: 0ms; transform: translate(${delta - width}px, 0px) translateZ(0px);`)
      },
      initAnimate () {
        var startAnim = () => {
          this.timeId = setTimeout(() => {
            const width = this.$el.clientWidth
            this.rightAnimate(width)
            startAnim.call(this)
          }, this.animationDuration)
        }
        startAnim()
      },
      leftAnimate (delta) {
        const width = this.$el.clientWidth
        const duration = (delta / width) * 300
        this.$refs.swiper && (this.$refs.swiper.style = `transition-duration: 600ms; transform: translate(0px, 0px) translateZ(0px);`)
        setTimeout(() => {
          this.backToCenter()
          // 这里的复制顺序要注意。 preIndex要在currentIndex之后
          this.currentIndex = this.preIndex
          this.nextIndex = this.currentIndex
          this.preIndex = this.preIndex === 0 ? this.pics.length - 1 : this.preIndex - 1          
        }, duration)
      },
      rightAnimate (delta) {
        const width = this.$el.clientWidth
        const duration = (delta / width) * 300
        this.$refs.swiper && (this.$refs.swiper.style = `transition-duration: ${duration}ms; transform: translate(${-width * 2}px, 0px) translateZ(0px);`)
        this.timeId = setTimeout(() => {
          this.backToCenter()
          this.preIndex = this.currentIndex
          this.currentIndex = this.nextIndex
          this.nextIndex = this.nextIndex === this.pics.length - 1 ? 0 : this.nextIndex + 1
        }, duration)
      },
      backToCenter () {
        const width = this.$el.clientWidth
        this.$refs.swiper && (this.$refs.swiper.style = `transition-duration: 0; transform: translate(${-width}px, 0px) translateZ(0px);`)
      },
      backAnimate () {
        const width = this.$el.clientWidth
        this.$refs.swiper && (this.$refs.swiper.style = `transition-duration: 600ms; transform: translate(${-width}px, 0px) translateZ(0px);`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';

  .carousel-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    // height: px2rem(200);
    flex: 1;
  }

  .carousel-swiper {
    height: 100%;
    white-space: nowrap;
    font-size: 0;
  }

  .carousel-img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .carousel-link img {
    width: 100%;
    height: 100%;
  }

  .carousel-indicator-container {
    position: absolute;
    bottom: px2rem(15);
    text-align: center;
    width: 100%;
    z-index: 9;
  }

  .carousel-indicator {
    background-color: #fff;
    display: inline-block;
    width: px2rem(20);
    height: px2rem(2);
    margin-right: px2rem(5);
    opacity: 0.6;
  }

  .indicator-current {
    opacity: 1.0;
  }
</style>
 