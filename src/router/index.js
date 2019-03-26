import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Allorder from '@/components/Allorder'
import ConfirmOrder from '@/components/ConfirmOrder'
import Success from '@/components/Success'
import Header from '@/components/common/Header'

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
    {
      path: '/header',
      name: 'Header',
      component: Header
    }
  ]
})
