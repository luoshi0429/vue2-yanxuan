<template>
  <div class="step-container">
    <i class="minus" v-on:click="handleMinus">-</i>
    <div class="input-container">
      <input type="number" v-model="count" />      
    </div>
    <i class="add" v-on:click="handleAdd">+</i>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: this.current
      }
    },
    props: {
      current: { type: Number, default: 1 },
      max: { type: Number, default: 9 },
      min: { type: Number, default: 1 },
      handleChange: { type: Function, default: () => {} }
    },
    watch: {
      current: function (val, oldVal) {
        if (val === oldVal) return
        this.count = val
      }
    },
    methods: {
      handleAdd () {
        if (this.count === this.max) {
          console.log('max...')
          return
        }
        this.count += 1
        this.handleChange(this.count)
      },
      handleMinus () {
        if (this.count === this.min) {
          console.log('min...')
          return
        }
        this.count -= 1
        this.handleChange(this.count)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .step-container {
    display: inline-block;
    height: px2rem(35);
    width: px2rem(155);
    // background-image: url('http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/selnum-s2aa5e4fbe0-14d469f19a.png');
    // background-repeat: no-repeat;
    // background-size: cover;
    border: 1px solid #e7e7e7; // #b1b1b1
    border-radius: px2rem(4);
  }

  .step-container i {
    // width: px2rem(45);
    width: 30%;
    height: 100%;
    float: left;
    color: #e7e7e7;
    text-align: center;
    font-style: normal;
    font-size: px2rem(18);
  }

  .step-container .input-container {
    background: none;
    height: 100%;
    // width: px2rem(64);
    width: 40%;
    float: left;
  }
  
  .step-container .input-container input {
    width: 100%;
    height: 100%;
    display: inline-block;
    border: none;
    background: none;
    text-align: center;
    font-size: px2rem($size_small);
  }

  .minus {
    border-right: 1px solid #e7e7e7;    
  }

  .add {
    border-left: 1px solid #e7e7e7;    
  }
</style>
