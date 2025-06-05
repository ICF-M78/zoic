<script lang="ts" setup>
import { NConfigProvider, darkTheme } from "naive-ui";
import { computed } from "vue";
// pinia
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";
const store = useAppStore();
const { settings } = storeToRefs(store);

const themeOverrides = computed(() => ({
  common: {
    primaryColor: settings.value.textColor,
    primaryColorHover: settings.value.textColor,
    primaryColorPressed: settings.value.textColor,
    primaryColorSuppl: settings.value.textColor,
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
