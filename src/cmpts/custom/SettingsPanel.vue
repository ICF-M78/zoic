<!-- 设置面板组件 -->
<template>
    <n-drawer
        class="m-6 rounded-lg"
        show-mask="transparent"
        v-model:show="drawerVisible"
        placement="left"
        width="300"
    >
        <n-drawer-content title="调韵">
            <n-form>
                <!-- 最常用的设置放在最上面 -->
                <n-form-item>
                    <template #label>
                        <span>文素</span>
                        <n-button class="ml-2" size="tiny" text @click="setRandomText">
                            漫选
                        </n-button>
                    </template>
                    <n-input
                        v-model:value="settings.quote"
                        type="textarea"
                        placeholder="请输入"
                        rows="2"
                    />
                </n-form-item>
                <n-form-item label="修短">
                    <n-slider v-model:value="settings.fontSize" :min="12" :max="168">
                        <template #thumb>
                            <n-icon-wrapper :size="0" :border-radius="6">
                                <n-icon size="18" color="white">
                                    <Asterisk />
                                </n-icon>
                            </n-icon-wrapper>
                        </template>
                    </n-slider>
                </n-form-item>
                <n-form-item label="墨色">
                    <n-color-picker v-model:value="settings.quoteColor" />
                </n-form-item>
                <n-form-item label="衬色">
                    <n-color-picker v-model:value="settings.backgroundColor" />
                </n-form-item>
                <n-form-item label="字形">
                    <n-select v-model:value="settings.fontFamily" :options="fontOptions" />
                </n-form-item>
                <n-form-item label="疏密">
                    <n-slider v-model:value="settings.letterSpacing" :min="-10" :max="50">
                        <template #thumb>
                            <n-icon-wrapper :size="0" :border-radius="6">
                                <n-icon size="18" color="white">
                                    <Asterisk />
                                </n-icon>
                            </n-icon-wrapper>
                        </template>
                    </n-slider>
                </n-form-item>
                <n-form-item>
                    <template #label>
                        <span>水平</span>
                        <n-button
                            class="ml-2"
                            size="tiny"
                            text
                            @click="settings.textPosition.x = 50"
                        >
                            中正
                        </n-button>
                    </template>
                    <n-slider v-model:value="settings.textPosition.x" :min="0" :max="100">
                        <template #thumb>
                            <n-icon-wrapper :size="0" :border-radius="6">
                                <n-icon size="18" color="white">
                                    <Asterisk />
                                </n-icon>
                            </n-icon-wrapper>
                        </template>
                    </n-slider>
                </n-form-item>
                <n-form-item label="垂直">
                    <n-slider v-model:value="settings.textPosition.y" :min="0" :max="100">
                        <template #thumb>
                            <n-icon-wrapper :size="0" :border-radius="6">
                                <n-icon size="18" color="white">
                                    <Asterisk />
                                </n-icon>
                            </n-icon-wrapper>
                        </template>
                    </n-slider>
                </n-form-item>
                <n-flex justify="end" v-show="false">
                    <n-button text @click="saveQuote" class="hover:text-teal-600">保存</n-button>
                </n-flex>
                <n-flex justify="end" class="mt-2">
                    <n-button text @click="toFontDance" class="hover:text-teal-600">字舞</n-button>
                </n-flex>
            </n-form>
        </n-drawer-content>
    </n-drawer>
</template>

<script lang="ts" setup>
// MARK: import
// router
import { useRouter } from 'vue-router';
const router = useRouter();
// dao
import { zoic_getQuotes_NoToken } from '@/api/index';
// pinia
import { fontOptions } from '@/assets/load-font';
import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';
const store = useAppStore();
const { settings } = storeToRefs(store);
import { computed, onMounted, ref } from 'vue';
import { Asterisk } from '@vicons/carbon';
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

// MARK: params
const curQuote = ref<Quote>({
    quote: '',
    createdAt: '',
    isActive: true,
});
const quoteList = ref<Quote[]>([]);

// MARK: func
/** @description 跳转字舞 */
const toFontDance = () => {
    router.push('/font-dance');
};

/** @description 保存句子 */
const saveQuote = () => {
    curQuote.value.quote = settings.value.quote;
    console.log(curQuote.value);
};

/** @description 随机选择文素 */
function setRandomText() {
    const randomIndex = crypto.getRandomValues(new Uint32Array(1))[0] % quoteList.value.length;
    curQuote.value = quoteList.value[randomIndex];
    settings.value.quote = curQuote.value.quote;
    window.$message.success(`${curQuote.value.createdBy}`);
}

/** @description  */
const initPage = async () => {
    quoteList.value = await zoic_getQuotes_NoToken();
};

// MARK: hooks
onMounted(() => {
    initPage();
});
</script>

<style lang="scss">
// 移除原有的样式，使用 UnoCSS 的工具类替代
</style>
