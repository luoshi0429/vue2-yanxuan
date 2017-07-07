<template>
  <div class="profile-page">
    <div class="header">
      <img class="avatar" v-bind:src="user.avatar" />
      <div class="userInfo">
        <p class="userName">{{ user.name }}</p>
        <p class="userMembership">{{ user.membership === 0 ? '普通用户' : 'VIP' + user.membership + '级'}}</p>
      </div>
    </div>
    <div class="profile-content">
      <div class="content-item" v-for="(item, index) in items" v-bind:key="index">
        <router-link v-bind:to="item.to" class="item-link">
          <i v-bind:style="{ backgroundPositionY: item.positionY }" />
          <p>{{ item.title }}</p>
        </router-link>
      </div>
    </div>
    <div class="footer">退出登录</div>
  </div>
</template>

<script>
  import { fetchUserInfo } from '@/utils/fetchData'
  export default {
    data () {
      return {
        user: {},
        items: [
          { title: '我的订单', to: '/myOrder', positionY: `${-240 / 37.5}rem`},
          { title: '周六一起拼', to: '/pin', positionY: `${-296 / 37.5}rem`},
          { title: '售后服务', to: '/postsales', positionY: `${-30 / 37.5}rem`},
          { title: '优惠券', to: '/coupon', positionY: `${-60 / 37.5}rem`},
          { title: '优先购', to: '/prior', positionY: `${-326 / 37.5}rem`},
          { title: '礼品卡', to: '/giftcard', positionY: `${-120 / 37.5}rem`},
          { title: '会员福利', to: '/vipwelfare', positionY: `${-270 / 37.5}rem`},
          { title: '地址管理', to: '/address', positionY: '0'},
          { title: '账号安全', to: '/accountsecurity', positionY: `${-356 / 37.5}rem`},
          { title: '联系客服', to: '/customerservice', positionY: `${-180 / 37.5}rem`},
          { title: '帮助中心', to: '/help', positionY: `${-150 / 37.5}`},
          { title: '意见反馈', to: '/suggestion', positionY: `${-90 / 37.5}`}
        ]
      }
    },
    mounted () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        fetchUserInfo()
          .then(r => {
            console.log(r)
            this.user = r
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .profile-page {
    width: 100%;
    height: 100%;
    font-size: 0;
  }

  .header {
    height: px2rem(135);
    width: 100%;
    background: url('../../assets/images/profile_header.jpg') no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    padding: 0 px2rem(15);
  }

  .header .avatar {
    width: px2rem(71);
    height: px2rem(71);
    margin-right: px2rem(15);
    border-radius: 50%;
  }

  .userName {
    color: #fff;
    font-size: px2rem(18);
    line-height: 1.2;
    margin-bottom: px2rem(5);
    @include ellipsis;
  }

  .userMembership {
    color: #7f7f7f;
  }

  .profile-content {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: px2rem(20);
    background-color: #fff;
  }

  .content-item {
    width: calc( 100%/3);
    padding-top: px2rem(22.5);
    height: px2rem(90);
    border-bottom: 1px solid $border_color;
    border-right: 1px solid $border_color;
    &:nth-child(3n) { // &:nth-of-type(3n)
      border-right: none;
    };
    &:nth-last-child(-n+3) { // 从最后一个子元素开始计数
      border-bottom: none;
    }
  }

  .item-link {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .item-link i {
    display: inline-block;
    width: px2rem(25);
    height: px2rem(25);
    background-image: url('http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-s75fa4432cf-c67f6f862a.png');
    background-repeat: no-repeat;
    background-size: px2rem(25) px2rem(381);
    margin-bottom: px2rem(8);
  }

  .item-link p {
    font-size: px2rem($size_small);
    line-height: 1;
  }


  .footer {
    width: 100%;
    height: px2rem(48);
    background-color: #fff;
    text-align: center;
    line-height: px2rem(48);
  }
</style>
