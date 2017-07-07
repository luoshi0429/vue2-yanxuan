import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/main'
        },
        {
          path: '/main',
          component: resolve => require(['@/containers/main'], resolve),
          children: [
            {
              path: '',
              redirect: '/home'
            },
            {
              path: '/home',
              component: resolve => require(['@/containers/home/index'], resolve),
              children: [
                {
                  path: '',
                  redirect: '/home/recommend'
                },
                {
                  path: '/home/recommend',
                  component: resolve => require(['@/containers/home/recommendContainer'], resolve)
                },
                {
                  path: '/home/other/:cId',
                  component: resolve => require(['@/containers/home/baseContainer'], resolve)
                }
              ]
            },
            {
              path: '/topic',
              component: resolve => require(['@/containers/topic/index'], resolve)
            },
            {
              path: '/category',
              component: resolve => require(['@/containers/category/index'], resolve)
            },
            {
              path: '/cart',
              component: resolve => require(['@/containers/cart/index'], resolve)
            },
            {
              path: '/profile',
              component: resolve => require(['@/containers/profile/index'], resolve),
              beforeEnter: (to, from, next) => {
                const isLogined = true
                if (!isLogined) {
                  next('/login')
                } else {
                  next()
                }
              }
            }
          ]
        },
        {
          path: '/login',
          component: resolve => require(['@/containers/login/index'], resolve)
        },
        {
          path: '/search',
          component: resolve => require(['@/containers/search/index'], resolve)
        },
        {
          path: '/productDetail/:id',
          component: resolve => require(['@/containers/productDetail/index'], resolve)
        },
        {
          path: '/comment',
          component: resolve => require(['@/containers/comment/index'], resolve)
        },
        {
          path: '/cartFormat',
          component: resolve => require(['@/containers/cart/format'], resolve)
        },
        {
          path: '/topicDetail',
          component: resolve => require(['@/containers/topic/topicDetail'], resolve)
        },
        {
          path: '/myOrder',
          component: resolve => require(['@/containers/myOrder/index'], resolve)
        },
        {
          path: '/manufacturerList',
          component: resolve => require(['@/containers/manufacturer/index'], resolve)
        },
        {
          path: '/manufacturer/:mId',
          component: resolve => require(['@/containers/manufacturer/singleManufacturer'], resolve)
        },
        {
          path: '/itemRecommend',
          component: resolve => require(['@/containers/itemRecommend/index'], resolve)
        },
        {
          path: '/newItem',
          component: resolve => require(['@/containers/newItem/index'], resolve)
        },
        {
          path: '/cateList/:type',
          component: resolve => require(['@/containers/topic/cateList'], resolve)
        },
        {
          path: '/format/:pId',
          component: resolve => require(['@/containers/productDetail/format'], resolve)
        },
        {
          path: '/categoryCommodity',
          component: resolve => require(['@/containers/category/categoryCommodity'], resolve)
        },
        {
          path: '/pin',
          component: resolve => require(['@/containers/profile/pin'], resolve),
          children: [
            {
              path: '',
              redirect: '/pin/commodity'
            },
            {
              path: '/pin/commodity',
              component: resolve => require(['@/containers/profile/pinCommodity'], resolve)
            },
            {
              path: '/pin/my',
              component: resolve => require(['@/containers/profile/pinMy'], resolve)
            }
          ]
        }
      ]
    }
  ]
})
