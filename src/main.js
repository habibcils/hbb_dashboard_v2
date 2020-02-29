import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import {} from './plugins/progressbar';
import {} from './plugins/ripple';
import {} from './plugins/toasted';
import {} from './plugins/transition';
import {} from './plugins/vue2_transition';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // vuetify,
  render: h => h(App)
}).$mount('#app')
