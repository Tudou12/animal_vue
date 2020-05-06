// /* jshint esversion: 6 */
import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引用
import store from './store';

var axios = require('axios');
axios.defaults.baseURL = 'http://localhost:8443/api';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

Vue.use(ElementUI, {
  size: 'small'
});
// //首先判断访问的路径是否需要登录，如果需要，判断 store 里有没有存储 user 的信息，
// //如果存在，则放行，否则跳转到登录页面，并存储访问的页面路径（以便在登录后跳转到访问页）
// router.beforeEach((to, from, next) => {
//     if (to.meta.requireAuth) {
//       if (store.state.user.username) {
//         next();
//       } else {
//         next({
//           path: 'login',
//           query: {redirect: to.fullPath}
//         });
//       }
//     } else {
//       next();
//     }
//   }
// );
//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403');
    } else {
        // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        } else {
            next();
        }
    }
});

new Vue({
    router,
    el: '#app',
    render: h => h(App),
    router,
    store,
    components: {App},
    template: '<App/>'
}).$mount('#app');
