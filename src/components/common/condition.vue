<template>
  <div class="condition-container">
      <div v-for="condition in conditions" v-bind:class="['condition-item', select === condition.condition ? 'condition-select-item' : '']" v-on:click="handleCondition(condition)">
        <span>{{ condition.condition }}<i v-if="condition.sequence !== 0" v-bind:class="[ select === condition.condition ? (condition.sequence > 0 ? 'up-arrow' : 'down-arrow') : '' ]" /></span>
      </div>
  </div>
</template>

<script>
  export default {
    props: ['conditions', 'handleChangeCondition'],
    data () {
      return {
        select: this.conditions[0].condition
      }
    },   
    methods: {
      handleCondition (condition) {
        if (this.select === condition.condition && condition.sequence !== 0) {
          condition.sequence = - (condition.sequence)
        }
        this.select = condition.condition
        this.handleChangeCondition(condition)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .condition-container {
    height: px2rem(40);
    border-bottom: 1px solid $border_color;
    display: flex;
    align-items: center;
  }

  .condition-container .condition-item {
    flex: 1;
    text-align: center;
  }

  .condition-container .condition-item i {
    display: inline-block;
    margin-left: px2rem(4);
    width: px2rem(8);
    height: px2rem(10);
    background: url('http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/no-648460126c.png') no-repeat;
    background-size: cover;
  }

  .condition-container .condition-item i.up-arrow {
    background-image: url('http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/up-f22085ade1.png');
  }

  .condition-container .condition-item i.down-arrow {
    background-image: url('http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/down-a40f8bd193.png');
  }

  .condition-select-item span {
    color: #b4282d;
  }
</style>
