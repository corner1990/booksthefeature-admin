import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import './assets/css/custom-theme/theme/index.css'
import './assets/css/element-#00B4FC/index.css'
import router from './router'
import store from "./store"


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
