import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

Vue.use(VueRouter)
Vue.config.productionTip = false

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
  ],
  mode:"history"
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
