// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue' 
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import Baidumap from 'vue-baidu-map'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import bus from './eventBus'


Vue.use(Element);
Vue.prototype.Bus = bus;
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.use(Baidumap,{
	ak:'p3gsknx69TAsAB9b71GouzUhIXyfYBBB'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  bus,
  router,
  store,
  axios,
  render:h=>h(App)
})
