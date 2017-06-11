import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'
import store from './store/'
import axios from 'axios'
import Loading from './components/loading/'
import filuters from './filuters'
console.log(filuters)

Object.keys(filuters).forEach((key)=>Vue.filter(key,filuters[key]));
Vue.use(VueRouter);
Vue.use(Loading);

//关于axios的一些配置
//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  store.dispatch('showLoading')  
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('hideLoading')
  return response;
}, function (error) {

  return Promise.reject(error);
});

//axios对象挂到vue原型上了
Vue.prototype.$http = axios;

const router = new VueRouter({
	mode:'history',
	scrollBehavior:()=>({
		y:0
	}),
	routes
});

require('./assets/css/base.css');
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
