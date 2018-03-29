const state = {
  url: 'https://www.baidu.com/'
}

const getters = {
  getUrl (state) {
    return state.url
  }
}

const mutations = {
  setUrl (state, url) {
    state.url = url
  }
}

export default {
  state,
  getters,
  mutations
}
