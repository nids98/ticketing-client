import Vue from 'vue'
import App from './App.vue'


import VueRouter from 'vue-router'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import getList from './components/getList.vue'


Vue.use(VueRouter)
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//import './custom.scss'

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.config.productionTip=false;


Vue.use(Antd);

const router = new VueRouter ({
  routes:[
    {
      path: '/', component : Navigation
    },
    {
      path: '/home', component : Home
    },
    {
      path: '/about', component : About
    },
    {
      path: '/contact', component : Contact
    },
    {
      path: '/technician/tasklist', component : getList
    },
  ],
  mode:"history"
})
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
