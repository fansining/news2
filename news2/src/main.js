// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './store/index.js'
import axios from 'axios'
import Loading from './components/loading'


import $ from 'jquery';
window.jQuery = $;
window.$ = $;


import filters from './filters'

console.log(filters);

Vue.config.productionTip = false


Vue.filter("normalTime",function(time){
  if(time){
    var oDate=new Date();
    oDate.setTime(time);

    var y=oDate.getFullYear();
    var m=oDate.getMonth()+1;
    var d=oDate.getDate();

    var h=oDate.getHours();
    var mm=oDate.getMinutes();
    var s=oDate.getSeconds();

    return y+'-'+m+'-'+d+' '+h+':'+mm+':'+s;
  }
});

Vue.use(Loading);



//axios配置
//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的

// axios.interceptors.request.use(function (config) {  //配置发送请求的信息
//   store.dispatch('showLoading')  
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });


// axios.interceptors.response.use(function (response) { //配置请求回来的信息
//   store.dispatch('hideLoading')
//   return response;
// }, function (error) {

//   return Promise.reject(error);
// });


Vue.prototype.$http=axios;//把AXIOS对象挂到vue原型上


//配置请求根路径
//axios.defaults.baseURL='http://localhost:8082/';


//设置默认头部信息
/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*/
//axios.defaults.baseURL='http://localhost:8082/';

/* eslint-disable no-new */
require('./assets/css/base.css');

new Vue({
  el: '#app',
  router,
   render: h => h(App)
})
