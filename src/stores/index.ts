import { createPinia } from "pinia";
import type { App } from "vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export function setupStores(app: App<Element>) {
  app.use(pinia);
}
