import { createStore } from 'vuex'
import persistedstate from 'vuex-persistedstate'

const store = createStore({
  // data랑 비슷
  state() {
    return {
      user: {}
    }
  },
  mutations: {
    user(state, data) {
      state.user = data
    }
  },
  plugins: [
    persistedstate({
      paths: ['cart']
    })
  ]
})

export default store
