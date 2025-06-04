import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/home/HomePage.vue"),
      meta: {
        title: "壁字",
      },
    },
    {
      path: "/fd",
      redirect: "/font-dance",
    },
    {
      path: "/font-dance",
      name: "fontDance",
      component: () => import("@/views/font-dance/IndexView.vue"),
      meta: {
        title: "字舞",
      },
    },
  ],
});

// 前置路由守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = to.meta.title ? `${to.meta.title} - Zoic` : "Zoic";
  next();
});

export default router;
