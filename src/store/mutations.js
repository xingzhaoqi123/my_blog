// // 实际操作数据方法
// export const setStory = (state, payload) => {
//   state.story.name = payload.payload.name
//   state.story.page = payload.payload.page
// }

// // 改变nav
// export const setNav = (state, payload) => {
//   state.NavLeft = payload.payload.left
//   state.NavTop = payload.payload.top
// }
const mutations = {
  setStory :(state, payload) => {
    state.story.name = payload.payload.name
    state.story.page = payload.payload.page
  },
  setNav : (state, payload) => {
    state.NavLeft = payload.payload.left
    state.NavTop = payload.payload.top
  },
  SET_BGC:(state,payload)=>{
    state.gloablColor = payload
  }
}
export default mutations