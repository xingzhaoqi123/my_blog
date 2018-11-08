const actions = {
  // 用户操作数据触发方式
  setStory: ({ commit, state }, payload) => {
    commit("setStory", payload);
  },
  // 改变nav
  setNav: ({ commit, state }, payload) => {
    commit("setNav", payload);
  },
  setBGC: ({ commit, state }, payload) => {
    commit("SET_BGC", payload);
  }
};
export default actions;
