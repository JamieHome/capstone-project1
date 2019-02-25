// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill";
import Vue from 'vue'
import App from './App'
import router from './router'
import "./styles/reset.css";
import 'element-ui/lib/theme-chalk/index.css';
import "./styles/global.css";
import ElementUI from 'element-ui';
import plugin from "./utils/plugin.js";
Vue.use(plugin);
Vue.use(ElementUI);

Vue.config.productionTip = false;
/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
