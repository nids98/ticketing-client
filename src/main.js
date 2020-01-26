import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Form from './components/Form/Form'
import Landing from './components/Dashboard/Landing'
import PageNotFound from './components/PageNotFound'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/', component: Landing
    },
    {
      path: '/raise-a-ticket', component: Form
    },
    {
      path: '*', component: PageNotFound
    }
  ],
  mode: "history"
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
