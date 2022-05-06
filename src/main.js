import Vue, { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootswatch/dist/darkly/bootstrap.min.css';

// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount('#app');
Vue.config.productionTip = false;

createApp(App).use(router).mount('#app');
