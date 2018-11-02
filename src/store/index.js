import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import  actions from "./actions";
import  getters from "./getters";
Vue.use(Vuex);

const store = new Vuex.Store({
  // state 保存初始数据
  state,
  //  mutations 函数
  mutations,
  // 触发事件函数
  actions,
  // 取值函数
  getters
});

export default store;
