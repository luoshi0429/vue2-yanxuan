<template>
  <div class="comment-item">
    <div class="header">
      <div class="profile">
        <img v-bind:src="avatar" />
        <span>{{ name }}</span>
        <i />
      </div>
      <span class="time">{{ time }}</span>
    </div>
    <div class="content">{{ content }}</div>
    <div class="img-container">
        <div class="comment-img" v-for="(pic, index) in pics">
          <img v-bind:src="pic" v-bind:key="index" />
        </div>
      </div>
    <div class="bottom">{{ norm }}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        avatar: 'http://yanxuan.nosdn.127.net/f68aa22ba166d841cb9123a06992f501',
        name: '苏以',
        vip: 1,
        time: '2017-06-18 16:51:43',
        content: '防蓝光的效果非常不错，值得推荐。',
        pics: ['https://yanxuan.nosdn.127.net/1a4058853ed6927344dec73e1ef03d8c.jpg', 'https://yanxuan.nosdn.127.net/76e25b48d7573f154258fc367ed0791e.jpg', 'https://yanxuan.nosdn.127.net/a4b711e203bdb327d2c3b0743b67acff.jpg', 'https://yanxuan.nosdn.127.net/11a15fc6d4cb175690a563fca3128b8a.jpg'],
        norm: '茶香粉（床笠款）; 1.8M（床尺寸）'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .comment-item {
    padding: 0 px2rem(15) px2rem(15) 0;
    margin-left: px2rem(15);
    border-bottom: 1px solid $border_color;
  }

 .header {
    padding: px2rem(15) 0 px2rem(10);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header .profile {
    display: flex;
    align-items: center;
  }

  .profile img {
    width: px2rem(32);
    height: px2rem(32);
    border-radius: 100%;
    margin-right: px2rem(8);
  }

  .profile span {
    margin-right: px2rem(6);
  }

  .profile i {
    display: inline-block;
    vertical-align: middle;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/membership-sc86699d936-cc4229a2e5.png);
    background-repeat: no-repeat;
    background-position: 0 px2rem(-2636);
    background-size: px2rem(60) px2rem(2671);
    width: px2rem(15);
    height: px2rem(15);
  }

  .header .time {
    color: #999;
    font-size: px2rem(12);
  }

  .content {
    line-height: px2rem(20);
    margin-bottom: px2rem(4.5);
  }

  .img-container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: px2rem(12);
  }

  .comment-img {
    width: px2rem(72);
    height: px2rem(72);
    margin-right: px2rem(13.5);
  }

  .comment-img img {
    width: 100%;
    height: 100%;
  }

  .bottom {
    color: #999;
    font-size: px2rem($size_small);
    line-height: 1;
  }
</style>

