<!--  -->
<template>
    <div class="image-container">
        <img :src="imgSrc" class="image" />
    </div>
</template>

<script lang="ts" setup>
// MARK: import
import naruto1 from '@/assets/naruto/1.jpg';
import naruto2 from '@/assets/naruto/2.jpg';
import naruto3 from '@/assets/naruto/3.jpg';
import naruto4 from '@/assets/naruto/4.jpg';
import naruto5 from '@/assets/naruto/5.jpg';
import naruto6 from '@/assets/naruto/6.jpg';
import naruto7 from '@/assets/naruto/7.jpg';
import naruto8 from '@/assets/naruto/8.jpg';
import naruto9 from '@/assets/naruto/9.jpg';
import naruto10 from '@/assets/naruto/10.jpg';
import naruto11 from '@/assets/naruto/11.jpg';
import naruto12 from '@/assets/naruto/12.jpg';
import { onMounted, ref, onUnmounted } from 'vue';

// MARK: emit
// const emit = defineEmits([]);

// MARK: props
// const props=defineProps({});

// MARK:interface

// MARK: params
const imgSrc = ref(naruto1);
const images = [
    naruto1,
    naruto2,
    naruto3,
    naruto4,
    naruto5,
    naruto6,
    naruto7,
    naruto8,
    naruto9,
    naruto10,
    naruto11,
    naruto12,
];
let currentIndex = 0;
let timer: number | null = null;

// MARK: watch

// MARK: func
const switchImage = () => {
    currentIndex = (currentIndex + 1) % images.length;
    imgSrc.value = images[currentIndex];
};

const startAutoSwitch = () => {
    const switchWithRandomInterval = () => {
        // 生成10到20之间的随机整数作为切换间隔(单位:秒)
        const randomInterval = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
        switchImage();
        timer = window.setTimeout(switchWithRandomInterval, randomInterval * 10);
    };

    switchWithRandomInterval();
};

const stopAutoSwitch = () => {
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
};

// MARK: expose
defineExpose({});

// MARK: hooks
onMounted(() => {
    startAutoSwitch();
});

onUnmounted(() => {
    stopAutoSwitch();
});
</script>

<style lang="scss" scoped>
.image-container {
    width: 100vw;
    height: 100vh;
    position: relative;
}

.image {
    width: 380px;
    height: 300px;
    left: 50%;
    top: 30%;
    position: absolute;
    transform: translate(-50%, -50%);
}
</style>
