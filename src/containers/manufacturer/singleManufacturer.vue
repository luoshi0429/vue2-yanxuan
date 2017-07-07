<template>
  <div class="single-manufacturer-page">
    <div class="single-manufacturer-info">
      <img v-bind:src="manufacturer.pic" />
      <div class="title-container">
        <span class="title">{{ manufacturer.title }}</span>
        <div class="notificationBtn">上新提醒</div>
      </div>
      <div class="description">
        <p v-for="(desc, index) in manufacturer.description" v-bind:key="index + desc">{{ desc }}</p>
      </div>
    </div>
    <div class="single-manufacturer-content">
      <div class="condition-container">
        <div v-for="condition in conditions" v-bind:class="['condition-item', select === condition.condition ? 'condition-select-item' : '']" v-on:click="handleCondition(condition)">
          <span>{{ condition.condition }}<i v-if="condition.sequence !== 0" v-bind:class="[  ]" /></span>
        </div>
      </div>
      <div class="commodity-container">
        <commodity v-for="commodity in manufacturer.products" v-bind:key="commodity.pId" v-bind:commodity="commodity" />
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
    methods: {
      handleCondition (condition) {
        this.select = condition.condition
      },
      pushToCommodityDetail (commodity) {
        this.$router.push(`/productDetail/${commodity.pId}`)
      }
    },
    data () {
      const conditions = [
          // 0 没有 1 升序 -1 降序
          { condition: '综合', sequence: 0},
          { condition: '上新', sequence: 1},
          { condition: '价格', sequence: 1},
          { condition: '分类', sequence: 0},
        ]
      return {
        select: conditions[0].condition,
        conditions: conditions,
        manufacturer: {
          title: 'MUJI制造商',
          description: ['严选精选了MUJI制造商和生产原料，', '用几乎零利润的价格，剔除品牌溢价，', '让用户享受原品牌的品质生活。'],
          pic: 'http://yanxuan.nosdn.127.net/f13a5e85a83e10153fd31560adec254c.png',
          products: [
             {
              "title": "奢华植鞣头层水牛皮席三件套",
              "description": "三峡水牛头层皮，高端夏凉必备",
              "price": "2499",
              "pic": "http://yanxuan.nosdn.127.net/56e72b84a9bb66687c003ecdaba73816.png?imageView&quality=85&thumbnail=330x330",
              "specification": "4色可选",
              "activity": [{ "type": 0, "tag": "618人气款"}, { "type": 1, "tag": "满赠" }],
              "pId": "p1000001"
            },
            {
              "title": "黑凤梨 20寸PC膜拉链登机箱",
              "description": "热卖9万只，网易人手1只",
              "price": "228",
              "pic": "http://yanxuan.nosdn.127.net/3108aaae80416b1cf27c3d7cc5661cea.png?imageView&quality=85&thumbnail=330x330",
              "specification": "黑凤梨",
              "pId": "p1000002"
            },
            {
              "title": "日式蝴蝶结通勤女鞋",
              "description": "细腻羊反绒，清甜制造",
              "price": "169",
              "pic": "http://yanxuan.nosdn.127.net/c70ef66f7c2251a47f0a2cdf8ebd83b7.png?imageView&quality=85&thumbnail=330x330",
              "specification": "3色可选",
              "activity": [{ "type": 1, "tag": "限时购" }],
              "pId": "p1000001"
            },
            {
              "title": "Walking Juice破壁料理机套装",
              "description": "会榨汁的杯子，15秒带走",
              "price": "239",
              "pic": "http://yanxuan.nosdn.127.net/569539637653da2c635212847f322e7a.png?imageView&quality=85&thumbnail=330x330",
              "activity": [{ "type": 0, "tag": "爆品"}],
              "pId": "p1000001"
            },
            {
              "title": "日式和风声波式电动牙刷",
              "description": "进口刷毛，专利技术",
              "price": "129",
              "pic": "http://yanxuan.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=85&thumbnail=330x330",
              "pId": "p1000002"
            },
            {
              "title": "小龙虾 4-6钱/只 净虾850克",
              "description": "好水好虾，鲜香弹润",
              "price": "75",
              "pic": "http://yanxuan.nosdn.127.net/a2cf3b86ecfd35b2d270cd17ff264cbd.png?imageView&quality=85&thumbnail=330x330",
              "activity": [{ "type": 0, "tag": "爆品"}],
              "pId": "p1000001"
            },
            {
              "title": "两带式男/女款拖鞋",
              "description": "鞋杯随脚型而变，舒适呵护",
              "price": "69.9",
              "pic": "http://yanxuan.nosdn.127.net/7d1c130c7d80edf824e4218c6829b7c8.png?imageView&quality=85&thumbnail=330x330",
              "specification": "2色可选",
              "activity": [{ "type": 0, "tag": "爆品" }],
              "pId": "p1000001"
            },
            {
              "title": "暗格简约钢笔",
              "description": "铱金暗尖，300超长书写",
              "price": "39",
              "pic": "http://yanxuan.nosdn.127.net/97ad483a94ed88216a989df83e39cbf0.png?imageView&quality=85&thumbnail=330x330",
              "specification": "4色可选",
              "pId": "p1000002"
            }
          ]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .single-manufacturer-info {
    background-color: #fff;
    margin-bottom: px2rem(10);
  }

  .single-manufacturer-info img {
    height: px2rem(200);
    width: 100%;
  }

  .single-manufacturer-info .title-container {
    margin: px2rem(10) px2rem(15) 0;
    height: px2rem(29);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .single-manufacturer-info .title-container .title {
    font-size: px2rem(18);
    font-weight: bold;
  }

  .single-manufacturer-info .title-container .notificationBtn {
    border: 1px solid #979797;
    width: px2rem(72);
    text-align: center;
    height: px2rem(28);
    line-height: px2rem(28);
  }

  .single-manufacturer-info .description {
    padding: px2rem(6) px2rem(15) px2rem(10);
  }

  .single-manufacturer-info .description p {
    color: #666;
  }

  .single-manufacturer-content {
    background-color: #fff;
  }

  .single-manufacturer-content .condition-container {
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

  .condition-select-item span {
    color: #b4282d;
  }

  .single-manufacturer-content .commodity-container {
    display: flex;
    flex-wrap: wrap;
  }
</style>

