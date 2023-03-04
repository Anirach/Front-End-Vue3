import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";

// Base URL for the API
//const base_url = "https://api.example.com";
const base_url = "http://node41091-noderest.proen.app.ruk-com.cloud";

const app = createApp(App);

app.config.globalProperties.$http = axios;
app.config.globalProperties.$base_url = base_url;

app.use(router);

app.mount("#app");
