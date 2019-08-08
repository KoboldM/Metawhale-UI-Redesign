import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify';
import VueResizeText from 'vue-resize-text';
import moment from 'moment';
import Vuex from 'vuex';
 
Vue.use(moment)
Vue.use(Vuetify)
Vue.use(VueResizeText)
Vue.use(Vuex) /* I've yet to use Vuex in the program tbh */

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  moment,
  render: h => h(App)
}).$mount('#app')
