import { createApp } from "vue";
import App from "./App.vue";

import "@/assets/css/index.scss";
// import router from "./router/index.ts";
import router from "@/router/index.ts";

const app = createApp(App);

app.provide("g-name", "yqcoder");
app.use(router);

app.mount("#app");
