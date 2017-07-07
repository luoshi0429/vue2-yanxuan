<template>
  <div class="comment-item">
    <div class="header">
      <div class="profile-container">
        <div class="profile">
          <img v-bind:src="topicComment.avatar" />
          <span>{{ topicComment.name }}</span>
          <i />
        </div>
        <div class="like">
          <span>{{ topicComment.like }}</span>
          <i />
        </div>
      </div>
    </div>
    <div class="content">{{ topicComment.content }}</div>
    <p class="time">{{ topicComment.time }}</p>
    <div class="reply" v-if="topicComment.reply">
      <span class="reply-from">{{ topicComment.reply.from }}回复：</span>
      <span class="reply-content">{{ topicComment.reply.content }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['topicComment']
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .comment-item {
    padding: 0 px2rem(15) px2rem(15) 0;
    border-top: 1px solid $border_color;
  }

 .header {
    padding: px2rem(15) 0 px2rem(10);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .profile-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .profile-container .profile {
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

  .like {
    display: flex;
    align-items: center;
  }

  .like span {
    color: #7f7f7f;
    font-size: px2rem($size_small);
    line-height: px2rem(14);
    margin-right: px2rem(6);
  }

  .like i {
    width: px2rem(22);
    height: px2rem(22);
    background: url('../../assets/images/like.png') no-repeat;
    background-size: cover;
  }

  .content {
    line-height: px2rem(20);
    margin-bottom: px2rem(4.5);
  }

  .time {
    color: #999;
    font-size: px2rem(12);
  }

  .reply {
    padding: px2rem(10);
    background: rgba(0,0,0,.03);
    margin-top: px2rem(12);
    border-radius: px2rem(1);
  }

  .reply-from {
    font-size: px2rem(15);
  }

  .reply-content {
    font-size: px2rem(15);
    color: #7f7f7f;
  }

</style>

