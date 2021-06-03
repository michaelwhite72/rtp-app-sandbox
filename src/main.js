import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'

Vue.config.productionTip = false
Vue.component('calendar', Calendar)
Vue.component('date-picker', DatePicker)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
