/* jshint esversion: 6 */
//拦截器
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
//记录用户信息的变量
export default new Vuex.Store({
  state: {
    user: {
      username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
    }
//localStorage，本地存储，判断本地存储中是否有 user 这个对象存在，if存在就取出来并获得 username 的值，else把 username 设置为空。只要不清除缓存，登录的状态就会一直保存。
  },
  mutations: {
    login(state, user) {
      state.user = user;
      window.localStorage.setItem('user', JSON.stringify(user));
    }
  }
});
