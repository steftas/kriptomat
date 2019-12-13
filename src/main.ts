import Vue from 'vue';
import VueResource from 'vue-resource';

import App from './App.vue';
import router from './router';
import store from './store/store';
Vue.use(require('vue-moment'));
Vue.use(VueResource);

Vue.config.productionTip = false;

Vue.filter('currency', (value: any) => {
  const numer = Number.parseFloat(value).toFixed(2)
  return '$' + numer.toLocaleString();
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
