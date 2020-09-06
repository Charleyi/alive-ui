import Vue from 'vue'
import App from './App.vue'
import AliveUI from '../packages'

Vue.config.productionTip = false
Vue.use(AliveUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
