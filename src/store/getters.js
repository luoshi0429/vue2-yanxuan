export default {
  // 购物车的商品数量
  cartCommodityCount: state => {
    const totalCount = state.cartList.reduce((total, commodity) => {
      return total + Number(commodity.count)
    }, 0)
    return totalCount
  },
  removeCommodityCount: state => {
    const totalCount = state.removeCartList.reduce((total, commodity) => {
      return total + Number(commodity.count)
    }, 0)
    return totalCount
  }
}
