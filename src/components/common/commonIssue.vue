<template>
  <div class="common-issue-container">
    <div class="header">
      <span>常见问题</span>
    </div>
    <div class="content">
      <div class="content-item" v-for="(issue, index) in issues" v-bind:key="index">
        <p class="item-header"><i />{{ issue.name }}</p>
        <p class="item-content" v-html="issue.content.join('<br >')"></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        issues: [
          {
            name: '购买运费如何收取？',
            content: ['单笔订单金额（不含运费）满88元免邮费；不满88元，每单收取10元运费。', '(港澳台地区需满500元免邮费；不满500元，每单收取30元运费)']
          },
          {
            name: '使用什么快递发货？',
            content: ['严选默认使用顺丰快递发货（个别商品使用其他快递），配送范围覆盖全国大部分地区（港澳台地区除外）。']
          },
          {
            name: '如何申请退换货？',
            content: ['1.自收到商品之日起30日内，顾客可申请无忧退货；如果是退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账；', '2.内裤和食品等特殊商品无质量问题不支持退换货；', '2.内裤和食品等特殊商品无质量问题不支持退换货；', '确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成；', '4.换货流程：', '确认收货-申请换货-客服审核通过-用户寄回商品-仓库签收验货-客服确认-换货完成；', '5.因网易严选产生的退换货，如质量问题，退回货邮费由网易严选承担，退款或换货完成后会以现金券的形式报销。因客户个人原因产生的退换货，购买和退回运费由客户个人承担。']
          },
          {
            name: '如何开具发票？',
            content: ['1.如需开具普通发票，请在下单时选择“我要开发票”并填写相关信息（APP仅限2.4.0及以上版本）；', '2.如需开具增值税专用发票，请在购买后联系客服办理；', '3.可选开票内容：', '订单中含有办公用品（箱包、文具、口罩）--办公用品等、耗材等、日用品、家居用品、食品、酒/饮料、服饰、化妆品；', '不含有办公用品--日用品、家居用品、食品、酒/饮料、服饰、化妆品；', '订单商品为礼品卡--预付卡。']
          }
        ]

      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  .common-issue-container {
    background-color: #fff;
    padding: 0 px2rem(15) px2rem(15);
  }

  .header {
    padding: px2rem(27) 0;
    text-align: center;
  }

  .header span {
    font-size: px2rem($size_default);
    line-height: px2rem($size_default);
    position: relative;
    &:before, &:after {
      content: '';
      position: absolute;
      height: 1px;
      width: px2rem(30);
      background-color: #d9d9d9;
      transform-origin: 50% 100% 0;
      top: 0;
      bottom: 0;
      margin: auto;
    };
    &:before {
      left: px2rem(-40);
    };
    &:after {
      right: px2rem(-40);
    }
  }

  .content-item {
    padding-bottom: px2rem(13);
  }

  .content-item .item-header {
    font-size: px2rem(13);
    padding-bottom: px2rem(7.5);
    padding-left: px2rem(1);
    line-height: 1;
    color: #303030;
  }
  
  .content-item .item-header i{
    display: inline-block;
    background-color: #b4282d;
    width: px2rem(8);
    height: px2rem(8);
    border-radius: 50%;
  }

  .content-item .item-content {
    padding-left: px2rem(8);
    font-size: px2rem(13);
    color: #787878;
    line-height: px2rem(18);
  }
</style>

