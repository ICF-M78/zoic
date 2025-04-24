<!-- 展示面板组件 -->
<template>
  <div class="display-panel" :style="panelStyle">
    <div class="display-panel__text" :style="textStyle">
      {{ settings.text }}
    </div>
    <div class="display-panel__edge-trigger" @mouseenter="toggleSettings"></div>
  </div>
</template>

<script lang="ts" setup>
// MARK: import
import { computed } from "vue";
import { useSettingsStore } from "@/stores/settings";

// MARK: emit
const emit = defineEmits(["toggle-settings"]);

// MARK: store
const settingsStore = useSettingsStore();
const settings = computed(() => settingsStore.settings);

// MARK: computed
const panelStyle = computed(() => ({
  backgroundColor: settings.value.backgroundColor,
}));

const textStyle = computed(() => ({
  color: settings.value.textColor,
  fontSize: `${settings.value.fontSize}px`,
  fontFamily: settings.value.fontFamily,
  letterSpacing: `${settings.value.letterSpacing}px`,
  position: "absolute" as const,
  left: `${settings.value.textPosition.x}%`,
  top: `${settings.value.textPosition.y}%`,
  transform: "translate(-50%, -50%)",
}));

// MARK: func
const toggleSettings = () => {
  emit("toggle-settings");
};
</script>

<style lang="scss" scoped>
.display-panel {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  position: relative;

  &__text {
    max-width: 80%;
    text-align: center;
    word-break: break-word;
    position: absolute;
  }

  &__edge-trigger {
    position: fixed;
    left: 0;
    top: 0;
    width: 40px;
    height: 100vh;
    z-index: 1000;
    cursor: pointer;
  }
}
</style>
