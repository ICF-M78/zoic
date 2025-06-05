import { createApp } from "vue";
import { setupStores } from "@/stores/index";

import "./styles/fonts.scss";
import App from "./App.vue";
import router from "./router";
import naive from "naive-ui";
import { preLoadAllFonts } from "@/assets/load-font";

// MARK: preload fonts
preLoadAllFonts().catch(console.error);

const app = createApp(App);
setupStores(app);
app.use(router);
app.use(naive);

app.mount("#app");
