// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//路由
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//viewer组件实现图片放大 npm install --save v-viewer
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
//velocity组件实现动画效果 npm install --save velocity-animate
import  Velocity from 'velocity-animate'
import axios from 'axios'
//引入ueditor编辑器
import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'

Vue.use(ElementUI)//全局使用该组件
Vue.use(Viewer)
Vue.config.productionTip = false
Vue.prototype.$http=axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
