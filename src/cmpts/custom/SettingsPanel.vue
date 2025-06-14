<!-- 设置面板组件 -->
<template>
    <!-- 桌面端使用抽屉 -->
    <n-drawer
        v-if="!isMobile"
        class="m-6 rounded-lg"
        show-mask="transparent"
        v-model:show="drawerVisible"
        placement="left"
        width="300"
    >
        <n-drawer-content title="调韵">
            <settings-content />
        </n-drawer-content>
    </n-drawer>

    <!-- 移动端使用半屏模态框 -->
    <n-modal
        v-else
        v-model:show="drawerVisible"
        preset="card"
        style="
            width: 100vw;
            height: 50vh;
            margin: 0;
            border-radius: 12px 12px 0 0;
            position: fixed;
            bottom: 0;
        "
        :bordered="false"
        :mask-closable="true"
        :trap-focus="false"
        title="调韵"
    >
        <div class="overflow-y-auto h-[calc(50vh-60px)]">
            <settings-content />
        </div>
    </n-modal>
</template>

<script lang="ts" setup>
// MARK: import
import { computed, ref, onMounted, onUnmounted } from 'vue';
import SettingsContent from './SettingsContent.vue';

// MARK: props
const props = defineProps({
    isVisible: {
        type: Boolean,
        default: false,
    },
});

// MARK: emit
const emit = defineEmits(['update:isVisible']);

// MARK: computed
const drawerVisible = computed({
    get: () => props.isVisible,
    set: val => emit('update:isVisible', val),
});

// 判断是否为移动端
const width = ref(window.innerWidth);
const isMobile = computed(() => width.value < 768);

const updateWidth = () => {
    width.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
});
</script>

<style lang="scss">
// 移除原有的样式，使用 UnoCSS 的工具类替代
</style>
