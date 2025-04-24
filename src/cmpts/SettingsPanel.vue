<!-- 设置面板组件 -->
<template>
  <n-drawer
    style="margin: 26px; border-radius: 8px"
    show-mask="transparent"
    v-model:show="drawerVisible"
    placement="left"
    width="300"
  >
    <n-drawer-content title="设置">
      <n-form>
        <!-- 最常用的设置放在最上面 -->
        <n-form-item label="文字内容">
          <n-input
            v-model:value="settings.text"
            type="textarea"
            placeholder="请输入文字"
          />
        </n-form-item>
        <n-form-item label="文字大小">
          <n-slider v-model:value="settings.fontSize" :min="12" :max="98" />
        </n-form-item>
        <n-form-item label="文字颜色">
          <n-color-picker v-model:value="settings.textColor" />
        </n-form-item>
        <n-form-item label="背景颜色">
          <n-color-picker v-model:value="settings.backgroundColor" />
        </n-form-item>
        <n-form-item label="字体">
          <n-select
            v-model:value="settings.fontFamily"
            :options="fontOptions"
          />
        </n-form-item>
        <n-form-item label="字间距">
          <n-slider
            v-model:value="settings.letterSpacing"
            :min="-10"
            :max="50"
          />
        </n-form-item>
        <n-form-item>
          <template #label>
            <span>水平位置</span>
            <n-button
              style="margin-left: 10px"
              size="tiny"
              text
              @click="settings.textPosition.x = 50"
            >
              中间
            </n-button>
          </template>
          <n-slider
            v-model:value="settings.textPosition.x"
            :min="0"
            :max="100"
          />
        </n-form-item>
        <n-form-item label="垂直位置">
          <n-slider
            v-model:value="settings.textPosition.y"
            :min="0"
            :max="100"
          />
        </n-form-item>
      </n-form>
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts" setup>
// MARK: import
import { watch, computed, ref } from "vue";
import { useSettingsStore } from "@/stores/settings";
import { debounce } from "lodash-es";

// MARK: props
const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
});

// MARK: emit
const emit = defineEmits(["update:isVisible"]);

// MARK: computed
const drawerVisible = computed({
  get: () => props.isVisible,
  set: (val) => emit("update:isVisible", val),
});

// MARK: store
const settingsStore = useSettingsStore();

// MARK: params
const settings = ref<Settings>(
  JSON.parse(JSON.stringify(settingsStore.settings))
);

const fontOptions = [
  { label: "水云篆", value: "ShuiYunZhuan" },
  { label: "宋刻", value: "DingLieSongKe" },
  { label: "齐伋体", value: "QiJiTi" },
];

// MARK: watch
// 使用防抖处理设置更新
const debouncedUpdateSettings = debounce((newVal: Settings) => {
  settingsStore.updateSettings(newVal);
}, 16); // 约60fps的更新频率

watch(
  settings,
  (newVal) => {
    debouncedUpdateSettings(newVal);
  },
  { deep: true }
);
</script>

<style lang="scss">
#settings-panel {
  margin: 26px;
  border-radius: 8px;
}
</style>
