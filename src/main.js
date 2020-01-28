import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Form from './components/Form/Form'
import Landing from './components/Dashboard/Landing'
import PageNotFound from './components/PageNotFound'
import getlist from './components/getList'
import Taskdescription from './components/Taskdescription.vue'
import Not from './components/401.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(Antd);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/', name: 'Landing', component: Landing, props: true
    },
    {
      path: '/raise-a-ticket', component: Form
    },
    {
      path: '/task', component: getlist
    },
    {
      path: '/task?tech_id=:tech_id', component: getlist
    },
    {
      path: '/task/:task_id', component: Taskdescription
    },
    {
      path: '/401', component: Not
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
