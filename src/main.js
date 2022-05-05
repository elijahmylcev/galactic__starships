import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/dist/darkly/bootstrap.min.css';

// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount('#app');

createApp(App).use(router).mount('#app');
