<!-- 展示面板组件 -->
<template>
    <div class="display-panel" :style="panelStyle">
        <div
            id="font-div"
            class="display-panel__text"
            :class="{ animating: isAnimating }"
            :style="textStyle"
        >
            {{ settings.quote }}
        </div>
        <div class="display-panel__edge-trigger" @mouseenter="toggleSettings"></div>
    </div>
</template>

<script lang="ts" setup>
// MARK: import
// pinia
import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';
const store = useAppStore();
const { settings } = storeToRefs(store);
import { computed, onMounted, ref, watch } from 'vue';
import { loadFont } from '@/assets/load-font';

// MARK: emit
const emit = defineEmits(['toggle-settings']);

// MARK: store
// MARK: computed
const panelStyle = computed(() => ({
    backgroundColor: settings.value.backgroundColor,
}));

const _fontFamily = ref(settings.value.fontFamily);
const textOpacity = ref(1);
const isAnimating = ref(false);

const textStyle = computed(() => ({
    color: settings.value.quoteColor,
    fontSize: `${settings.value.fontSize}px`,
    fontFamily: _fontFamily.value,
    letterSpacing: `${settings.value.letterSpacing}px`,
    position: 'absolute' as const,
    left: `${settings.value.textPosition.x}%`,
    top: `${settings.value.textPosition.y}%`,
    transform: 'translate(-50%, -50%)',
    opacity: textOpacity.value,
    transition: 'opacity 0.3s ease',
}));

// MARK: func
const toggleSettings = () => {
    emit('toggle-settings');
};

// MARK: watch
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

// 监听文本变化
watch(
    () => settings.value.quote,
    () => {
        isAnimating.value = true;
        setTimeout(() => {
            isAnimating.value = false;
        }, 1000); // 动画持续时间
    }
);

// MARK: hooks
onMounted(() => {});
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

#font-div {
    &.animating {
        animation: letterspacing 1s ease-in-out;
    }
}

@keyframes letterspacing {
    0% {
        letter-spacing: -2rem;
        filter: blur(1rem);
        color: white;
    }
    50% {
        filter: blur(0.5rem);
    }
    80% {
        letter-spacing: 0.5rem;
        filter: blur(0.1rem);
    }
    100% {
        filter: blur(0rem);
        letter-spacing: v-bind('`${settings.letterSpacing}px`');
        color: v-bind('settings.quoteColor');
    }
}
</style>
