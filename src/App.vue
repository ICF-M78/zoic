<script lang="ts" setup>
import { NConfigProvider, darkTheme } from "naive-ui";
import { computed } from "vue";
import { useSettingsStore } from "@/stores/settings";

const settingsStore = useSettingsStore();

const themeOverrides = computed(() => ({
  common: {
    primaryColor: settingsStore.settings.textColor,
    primaryColorHover: settingsStore.settings.textColor,
    primaryColorPressed: settingsStore.settings.textColor,
    primaryColorSuppl: settingsStore.settings.textColor,
  },
}));
</script>

<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides">
    <router-view />
  </n-config-provider>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
