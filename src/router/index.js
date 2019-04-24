import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Allorder from '@/components/Allorder'
import ConfirmOrder from '@/components/ConfirmOrder'
import Success from '@/components/Success'
// import Header from '@/components/common/Header'
import OrderDetail from '@/components/OrderDetail'
// vueX 页面
import Parent from '@/components/vuexTest/Parent'
// vueX 联系
import Tparent from '@/components/vuexTest2/Tparent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/allorder',
      name: 'Allorder',
      component: Allorder
    },
    {
      path: '/confirmOrder',
      name: 'ConfirmOrder',
      component: ConfirmOrder
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    },
    // 已经作为一个组件
    // {    
    //   path: '/header',
    //   name: 'Header',
    //   component: Header
    // },
    {
      path: '/orderDetail',
      name: 'OrderDetail',
      component: OrderDetail
    },
    // vueX 入口
    {
      path: '/parent',
      name: 'Parent',
      component: Parent
    },
    {
      path: '/tparent',
      name: 'Tparent',
      component: Tparent
    }
  ]
})
