<script lang="ts" setup>
// naive-ui
import { NConfigProvider, darkTheme, zhCN, dateZhCN } from 'naive-ui';
import { computed, onMounted } from 'vue';
// pinia
import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';
// components
import AppProvider from '@/cmpts/common/AppProvider.vue';

// store
const store = useAppStore();
const { settings } = storeToRefs(store);

// theme
const themeOverrides = computed(() => ({
    common: {
        primaryColor: settings.value.quoteColor,
        primaryColorHover: settings.value.quoteColor,
        primaryColorPressed: settings.value.quoteColor,
        primaryColorSuppl: settings.value.quoteColor,
    },
}));

// init
async function initPage() {}

onMounted(() => {
    initPage();
});
</script>

<template>
    <n-config-provider
        :theme="darkTheme"
        :theme-overrides="themeOverrides"
        :locale="zhCN"
        :date-locale="dateZhCN"
    >
        <AppProvider>
            <router-view />
        </AppProvider>
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
