import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import getList from './components/getList.vue'


Vue.use(VueRouter)
Vue.config.productionTip = false

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
