import Vue from 'vue'
// mint-ui 库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// mint-ui 库
import App from './App'
import router from './router'
// VueResource
import VueResource from 'vue-resource'
// 引入公共js
import common from './assets/common/js/common.js'
Vue.prototype.common = common

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
