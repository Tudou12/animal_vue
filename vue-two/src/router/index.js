/* jshint esversion: 6 */

import Vue from 'vue';
import Router from 'vue-router';
import SearchBar from '@/components/common/SearchBar';
import Home from '@/components/home/Home';
// import Voluntary from '@/components/voluntary/Voluntary';
// import DonateHome from '@/components/donations/DonateHome';

// import Adopt from '@/components/adopt/Adopt';
// import AdoptManage from '@/components/adopt/AdoptManage';
// import ApplyList from '@/components/adopt/ApplyList';
import Cat from '@/components/adopt/Cat';

import Taobao from '@/components/Taobao';

// import Login from '@/components/logReg/Login';
// import Register from '@/components/logReg/Register';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Default',
      redirect: '/home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'Home',
          component: () => import('../components/home/Home')
        }
        // {
        //   path: '/voluntary',
        //   name: 'Voluntary',
        //   component: Voluntary,
        //   meta: {
        //     requireAuth: true
        //   }//ture=需要登录才可以进入
        // }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/logReg/Login')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../components/logReg/Register')
    },
    {
      path: '/Voluntary',
      name: 'Voluntary',
      component:() => import('../components/voluntary/Voluntary')
    },
    {
      path: '/Adopt',
      name: 'Adopt',
      component: () => import('../components/adopt/Adopt'),
    },
    {
      path: '/AdoptManage',
      name: 'AdoptManage',
      component: () => import('../components/my/manage/AdoptManage'),
     },
    {
      path: '/ActivityManage',
      name: 'ActivityManage',
      component: () => import('../components/my/manage/ActivityManage'),
    },
    {
      path: '/Cat',
      name: 'Cat',
      component: () => import('../components/adopt/Cat'),
    },
    {
      path: '/Taobao',
      name: 'Taobao',
      component: () => import('../components/Taobao'),
    },

    {
      path: '/DonateHome',
      name: 'DonateHome',
      component: () => import('../components/donations/DonateHome'),
    },
  ]
});
