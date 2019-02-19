import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store';
import './registerServiceWorker';

import AppConfig from '@/config';

Vue.config.productionTip = false;
Vue.config.silent = !AppConfig.isDebugAvailable();
Vue.config.devtools = AppConfig.isDebugAvailable();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
