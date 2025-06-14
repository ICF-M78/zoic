<!-- 设置内容组件 -->
<template>
    <n-form>
        <!-- 最常用的设置放在最上面 -->
        <n-form-item>
            <template #label>
                <span>文素</span>
                <n-button class="ml-2" size="tiny" text @click="setRandomText"> 漫选 </n-button>
            </template>
            <n-input v-model:value="settings.quote" type="textarea" placeholder="请输入" rows="2" />
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
                <n-button class="ml-2" size="tiny" text @click="settings.textPosition.x = 50">
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
</template>

<script lang="ts" setup>
// MARK: import
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { zoic_getQuotes_NoToken } from '@/api/index';
import { fontOptions } from '@/assets/load-font';
import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';
import { Asterisk } from '@vicons/carbon';

// MARK: router
const router = useRouter();

// MARK: store
const store = useAppStore();
const { settings } = storeToRefs(store);

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
    if (quoteList.value.length === 0) {
        window.$message.warning('暂无文素');
        return;
    }
    const randomIndex = crypto.getRandomValues(new Uint32Array(1))[0] % quoteList.value.length;
    curQuote.value = quoteList.value[randomIndex];
    settings.value.quote = curQuote.value.quote;
    window.$message.success(`${curQuote.value.createdBy}`);
}

/** @description 初始化页面 */
const initPage = async () => {
    try {
        quoteList.value = await zoic_getQuotes_NoToken();
    } catch (error) {
        // 服务未启动时，静默失败
        console.log('获取文素失败，服务可能未启动');
    }
};

// MARK: hooks
onMounted(() => {
    initPage();
});
</script>
