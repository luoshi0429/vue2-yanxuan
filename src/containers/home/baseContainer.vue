<template>
  <div class="base-container">
    <img class="banner" v-bind:src="bannerPic" />
    <div class="content">
      <div class="content-item" v-for="item in allItems">
        <div class="item-header">
          <p class="type">{{ item.type }}</p>
          <p class="desc">{{ item.desc }}</p>
        </div>
        <div class="content-products">
          <commodity v-for="commodity in item.commodities" v-bind:commodity="commodity" v-bind:key="commodity.pId" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import commodity from '@/components/common/commodity'
  export default {
    components: {
      commodity
    },
    data () {
      return {
        bannerPic: 'http://yanxuan.nosdn.127.net/a7115426117678372c9c51f03068d132.jpg?quality=85&thumbnail=750x0&imageView',
        allItems: [
          {
            type: '夏凉',
            desc: '夏凉床品，舒适一夏',
            commodities: [
              {
                pic: 'http://yanxuan.nosdn.127.net/a0affc69c097af33926118db4eb79a82.png?imageView&quality=85&thumbnail=330x330',
                title: '日式针织羽丝绒夏凉被',
                description: '亲肤透气，裸睡空调房好搭档',
                price: '168',
                activity: [{ "type": 0, "tag": "爆品"}],
                specification: "4色可选",
                pId: "10000023"
              },
              {
                title: "全棉针织条纹四件套 新款",
                description: "裸睡享受，柔软透气有弹性",
                price: "219",
                pic: "http://yanxuan.nosdn.127.net/376086180e5c3c7641669036217e7f95.png?imageView&quality=85&thumbnail=330x330",
                activity: [{ "type": 0, "tag": "爆品"}],
                pId: "10000024"
              },
               {
                pic: 'http://yanxuan.nosdn.127.net/a0affc69c097af33926118db4eb79a82.png?imageView&quality=85&thumbnail=330x330',
                title: '日式针织羽丝绒夏凉被',
                description: '亲肤透气，裸睡空调房好搭档',
                price: '168',
                activity: [{ "type": 0, "tag": "爆品"}],
                specification: "4色可选",
                pId: "10000023"
              },
              {
                title: "全棉针织条纹四件套 新款",
                description: "裸睡享受，柔软透气有弹性",
                price: "219",
                pic: "http://yanxuan.nosdn.127.net/376086180e5c3c7641669036217e7f95.png?imageView&quality=85&thumbnail=330x330",
                activity: [{ "type": 0, "tag": "爆品"}],
                pId: "10000024"
              },
              {
                title: "全棉针织条纹四件套 新款",
                description: "裸睡享受，柔软透气有弹性",
                price: "219",
                pic: "http://yanxuan.nosdn.127.net/376086180e5c3c7641669036217e7f95.png?imageView&quality=85&thumbnail=330x330",
                activity: [{ "type": 0, "tag": "爆品"}],
                pId: "10000024"
              },
               {
                pic: 'http://yanxuan.nosdn.127.net/a0affc69c097af33926118db4eb79a82.png?imageView&quality=85&thumbnail=330x330',
                title: '日式针织羽丝绒夏凉被',
                description: '亲肤透气，裸睡空调房好搭档',
                price: '168',
                activity: [{ "type": 0, "tag": "爆品"}],
                specification: "4色可选",
                pId: "10000023"
              },
              {
                title: "全棉针织条纹四件套 新款",
                description: "裸睡享受，柔软透气有弹性",
                price: "219",
                pic: "http://yanxuan.nosdn.127.net/376086180e5c3c7641669036217e7f95.png?imageView&quality=85&thumbnail=330x330",
                activity: [{ "type": 0, "tag": "爆品"}],
                pId: "10000024"
              }
            ]
          },
          {
            type: '被枕',
            desc: '守护你的睡眠时光',
            commodities: [
              {
                pic: 'http://yanxuan.nosdn.127.net/a0affc69c097af33926118db4eb79a82.png?imageView&quality=85&thumbnail=330x330',
                title: '日式针织羽丝绒夏凉被',
                description: '亲肤透气，裸睡空调房好搭档',
                price: '168',
                activity: [{ "type": 0, "tag": "爆品"}],
                specification: "4色可选",
                pId: "10000023"
              },
              {
                title: "全棉针织条纹四件套 新款",
                description: "裸睡享受，柔软透气有弹性",
                price: "219",
                pic: "http://yanxuan.nosdn.127.net/376086180e5c3c7641669036217e7f95.png?imageView&quality=85&thumbnail=330x330",
                activity: [{ "type": 0, "tag": "爆品"}],
                pId: "10000024"
              },
               {
                pic: 'http://yanxuan.nosdn.127.net/a0affc69c097af33926118db4eb79a82.png?imageView&quality=85&thumbnail=330x330',
                title: '日式针织羽丝绒夏凉被',
                description: '亲肤透气，裸睡空调房好搭档',
                price: '168',
                activity: [{ "type": 0, "tag": "爆品"}],
                specification: "4色可选",
                pId: "10000023"
              },
              {
                title: "全棉针织条纹四件套 新款",
                description: "裸睡享受，柔软透气有弹性",
                price: "219",
                pic: "http://yanxuan.nosdn.127.net/376086180e5c3c7641669036217e7f95.png?imageView&quality=85&thumbnail=330x330",
                activity: [{ "type": 0, "tag": "爆品"}],
                pId: "10000024"
              },
              {
                title: "全棉针织条纹四件套 新款",
                description: "裸睡享受，柔软透气有弹性",
                price: "219",
                pic: "http://yanxuan.nosdn.127.net/376086180e5c3c7641669036217e7f95.png?imageView&quality=85&thumbnail=330x330",
                activity: [{ "type": 0, "tag": "爆品"}],
                pId: "10000024"
              },
               {
                pic: 'http://yanxuan.nosdn.127.net/a0affc69c097af33926118db4eb79a82.png?imageView&quality=85&thumbnail=330x330',
                title: '日式针织羽丝绒夏凉被',
                description: '亲肤透气，裸睡空调房好搭档',
                price: '168',
                activity: [{ "type": 0, "tag": "爆品"}],
                specification: "4色可选",
                pId: "10000023"
              },
              {
                title: "全棉针织条纹四件套 新款",
                description: "裸睡享受，柔软透气有弹性",
                price: "219",
                pic: "http://yanxuan.nosdn.127.net/376086180e5c3c7641669036217e7f95.png?imageView&quality=85&thumbnail=330x330",
                activity: [{ "type": 0, "tag": "爆品"}],
                pId: "10000024"
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .base-container {
    flex: 1;
    overflow-y: auto;
  }

  .banner {
    width: 100%;
    height: px2rem(210);
  }
  .content-item {
    background-color: #fff;
    margin-bottom: px2rem(10);
  }
  .item-header {
    height: px2rem(60);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .item-header .type {
    margin-bottom: px2rem(8);
    font-size: px2rem($size_default);
    line-height: 1;
    text-align: center;
  }
  .item-header .desc {
    text-align: center;  
    line-height: 1;
    font-size: px2rem($size_small);
    color: #999;
  }
  .content-products {
    display: flex;
    flex-wrap: wrap;
  }
</style>
