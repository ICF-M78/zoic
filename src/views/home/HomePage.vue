<!-- 主页面组件 -->
<template>
    <div class="home">
        <display-panel @toggle-settings="toggleSettings" @dblclick="isSettingsVisible = true" />
        <settings-panel v-model:isVisible="isSettingsVisible" />
    </div>
</template>

<script lang="ts" setup>
// MARK: import
import { ref } from 'vue';
import DisplayPanel from '@/cmpts/custom/DisplayPanel.vue';
import SettingsPanel from '@/cmpts/custom/SettingsPanel.vue';

// MARK: params
const isSettingsVisible = ref(false);

// MARK: func
const toggleSettings = () => {
    isSettingsVisible.value = !isSettingsVisible.value;
};
</script>

<style lang="scss" scoped>
.home {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
</style>
