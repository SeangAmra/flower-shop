import { createApp } from 'vue';
import App from './App.vue';
import './style.css'; // Ensure this import is present
import router from './router';
import store from './store';
import 'material-icons/iconfont/material-icons.css';
createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
