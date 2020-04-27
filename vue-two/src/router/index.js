/* jshint esversion: 6 */

import Vue from 'vue';
import Router from 'vue-router';
import SearchBar from '@/components/common/SearchBar';
import Home from '@/components/home/Home';
import Voluntary from '@/components/voluntary/Voluntary';
import Donation from '@/components/donation/Donation';

import Adopt from '@/components/adopt/Adopt';
import AdoptManage from '@/components/adopt/AdoptManage';
import ApplyList from '@/components/adopt/ApplyList';
import Cat from '@/components/adopt/Cat';

import Taobao from '@/components/Taobao';

import Login from '@/components/logReg/Login';
import Register from '@/components/logReg/Register';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'SearchBar',
          component: SearchBar,
          meta: {
            requireAuth: true
          },
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
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Voluntary',
      name: 'Voluntary',
      component: Voluntary,
    },
    {
      path: '/Adopt',
      name: 'Adopt',
      component: Adopt,
    },
    {
      path: '/AdoptManage',
      name: 'AdoptManage',
      component: AdoptManage,
    }, {
      path: '/ApplyList',
      name: 'ApplyList',
      component: ApplyList,
    },
    {
      path: '/Cat',
      name: 'Cat',
      component: Cat,
    },
    {
      path: '/Taobao',
      name: 'Taobao',
      component: Taobao,
    },
    {
      path: '/Donation',
      name: 'Donation',
      component: Donation,
    },
  ]
});
