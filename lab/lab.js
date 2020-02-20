import Vue from 'vue';
import App from './lab.vue'
import lgView from '../src/index'
import VueRouter from 'vue-router'
Vue.use(lgView, {
    capture: true
});
Vue.use(VueRouter);
//1.定义路由组件

// 2. 定义路由
const routes = [
  { path: '/component1', component: (resolve) => require(['./routers/component1.vue'], resolve) },
  { path: '/component2', component: (resolve) => require(['./routers/component2.vue'], resolve) }
]
// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

const lab = new Vue({
    router,
    render: h => h(App)
}).$mount('#lab')
