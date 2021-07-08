import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// store 폴더에서 기본 값으로 index.js를 실행함.

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
