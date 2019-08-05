import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify';
import VueResizeText from 'vue-resize-text';
import VueMoment from 'moment';
 
Vue.use(Vuetify)
Vue.use(VueResizeText)
Vue.use(VueMoment)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
