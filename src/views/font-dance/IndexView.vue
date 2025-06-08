<!-- 背景动画 -->
<template>
    <div ref="main_div_ref" id="main-div"></div>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { fonts } from './fonts';

/** @description 动画结束 */
const animationEnd = (event: Event) => {
    (event.target as Element).removeEventListener('animationend', animationEnd);
    (event.target as Element).remove();
};

/** @description 随机文字 */
const rndContent = () => {
    return fonts[Math.floor(Math.random() * fonts.length)];
};

/** @description 随机文字大小 */
const rndSize = () => {
    const min_size = 30;
    const max_size = 100;
    return Math.floor(Math.random() * (max_size - min_size) + min_size);
};

/** @description 随机文字大小 */
const rndSpeed = () => {
    const min_speed = 1;
    const max_speed = 4;
    return Math.random() * (max_speed - min_speed) + min_speed;
};

/** @description 随机位置 */
function rndPosition(): { x: number; y: number } {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    return { x, y };
}

const main_div_ref = ref();
/** @description 随机动画 */
const rndAnimation = () => {
    if (!main_div_ref.value) {
        return;
    }
    // 创建一个新的div
    const div = document.createElement('div');
    div.className = 'animation-text';
    div.innerText = rndContent();
    const { x, y } = rndPosition();
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    div.style.fontSize = rndSize() + 'px';
    div.style.setProperty('--animation-duration', rndSpeed() + 's');
    // 绑定事件 animationEnd
    div.addEventListener('animationend', animationEnd);
    main_div_ref.value.appendChild(div);
};

let _t: number | null = null;
/** @description 计时器 */
const timer = () => {
    if (_t) clearInterval(_t);
    _t = setInterval(() => {
        rndAnimation();
    }, 50);
};

onMounted(() => {
    timer();
});

onUnmounted(() => {
    if (_t) clearInterval(_t);
});
// #endregion
</script>

<style lang="scss" scoped>
#main-div {
    position: relative;
    width: 100vw;
    height: 100vh;
    // 超出隐藏
    overflow: hidden;
}

::v-deep(.animation-text) {
    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    //
    font-family: 'ShuiYunZhuan';
    background: linear-gradient(30deg, rgb(0, 0, 0), rgb(8, 102, 53), rgb(11, 195, 100));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    //
    animation: text-animation var(--animation-duration) forwards;
    animation-timing-function: linear;
}

@keyframes text-animation {
    0% {
        opacity: 0.2;
        transform: scale(0.2);
    }

    20% {
        opacity: 0.4;
        transform: scale(0.3);
    }

    40% {
        opacity: 0.6;
        transform: scale(0.6);
    }

    60% {
        opacity: 0.8;
        transform: scale(0.8);
    }

    80% {
        opacity: 1;
        transform: scale(1);
    }

    90% {
        opacity: 0.6;
        transform: scale(1.6);
    }

    100% {
        opacity: 0;
        transform: scale(2);
    }
}
</style>
