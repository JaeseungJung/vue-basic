import { createStore } from "vuex";
import persistedstate from "vuex-persistedstate";

const store = createStore({
  // data랑 비슷
  state() {
    return {
      user: {},
    };
  },
  //함수를 통해서만 데이터를 바꿀수 있다.
  mutations: {
    user(state, data) {
      state.user = data;
    },
  },
  //스토어를 사용할건데 플러그인안에 사용하기 위해 기입
  plugins: [
    persistedstate({
      paths: ["cart"], //위에 카트 이름 -> 얘만 영구보존
    }),
  ],
});

export default store;
