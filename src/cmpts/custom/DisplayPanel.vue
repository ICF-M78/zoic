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
// pinia
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";
const store = useAppStore();
const { settings } = storeToRefs(store);
import { computed, ref, watch } from "vue";
import { loadFont } from "@/assets/load-font";

// MARK: emit
const emit = defineEmits(["toggle-settings"]);

// MARK: store
// MARK: computed
const panelStyle = computed(() => ({
  backgroundColor: settings.value.backgroundColor,
}));

const _fontFamily = ref(settings.value.fontFamily);
const textOpacity = ref(1);

const textStyle = computed(() => ({
  color: settings.value.textColor,
  fontSize: `${settings.value.fontSize}px`,
  fontFamily: _fontFamily.value,
  letterSpacing: `${settings.value.letterSpacing}px`,
  position: "absolute" as const,
  left: `${settings.value.textPosition.x}%`,
  top: `${settings.value.textPosition.y}%`,
  transform: "translate(-50%, -50%)",
  opacity: textOpacity.value,
  transition: "opacity 0.3s ease",
}));

// MARK: func
const toggleSettings = () => {
  emit("toggle-settings");
};

// 监听字体变化
watch(
  () => settings.value.fontFamily,
  async () => {
    textOpacity.value = 0;
    // 主动加载字体
    await loadFont(settings.value.fontFamily);
    setTimeout(() => {
      textOpacity.value = 1;
      _fontFamily.value = settings.value.fontFamily;
    }, 286);
  }
);
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
