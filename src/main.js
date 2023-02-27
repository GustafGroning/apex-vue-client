import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
// import { createRouter, createWebHistory } from "vue-router";
import router from "./router";

axios.defaults.baseURL = "http://localhost:3000";

const app = createApp(App);
app.use(router);
app.config.globalProperties.$http = axios;
app.mount("#app");
