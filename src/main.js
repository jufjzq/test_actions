import Vue from 'vue'
import App from './App.vue'
import GlobalDirectives from './directives/GlobalDirectives.js';

Vue.use(GlobalDirectives);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
