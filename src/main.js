import Vue from 'vue'
import App from './App.vue'
import vueScrollto from 'vue-scrollto'

Vue.config.productionTip = false

Vue.use(vueScrollto)

new Vue({
  render: h => h(App),
}).$mount('#app')
