import { createApp } from "vue";
import Modal from "./components/Modal.vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import { createPinia } from "pinia";
import "./styles/global.scss";

createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(router)
  .use(createPinia())
  .component("modal", Modal)
  .mount("#app");
