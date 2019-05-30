import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '../public/css/iconfont.css';
// 数字键盘
import vueNumberKeyboard from './lib/index.js';
Vue.use(vueNumberKeyboard);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
