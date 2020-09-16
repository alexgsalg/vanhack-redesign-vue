import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Embed from "v-video-embed";

import "./assets/sass/app.scss";

createApp(App)
  .use(store)
  .use(router)
  .use(Embed)
  .mount("#app");
