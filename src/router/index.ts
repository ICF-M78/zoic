import { createRouter, createWebHistory } from 'vue-router';
import config from '@/config';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/home/HomePage.vue'),
            meta: {
                title: '字觉',
            },
        },
        {
            path: '/dance',
            redirect: '/font-dance',
        },
        {
            path: '/font-dance',
            name: 'fontDance',
            component: () => import('@/views/font-dance/IndexView.vue'),
            meta: {
                title: '字舞',
            },
        },
        {
            path: '/naruto',
            name: 'naruto',
            component: () => import('@/views/naruto/IndexView.vue'),
            meta: {
                title: '结印',
            },
        },
    ],
});

// 前置路由守卫
router.beforeEach((to, from, next) => {
    // 设置页面标题
    document.title = to.meta.title
        ? `${to.meta.title} - ${config.sysNameCN}（${config.versionId}）`
        : `${config.sysNameCN}（${config.versionId}）`;
    next();
});

export default router;
