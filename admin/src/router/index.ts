import { createRouter, createWebHistory } from "vue-router";
// import baseRouter from "./baseRouter.ts";

// const whiteList = ["/", "/login"];

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 所有未知页面都是404
    {
      path: "/:catchAll(.*)",
      component: () => import("@/pages/404/index.vue"),
    },
    {
      path: "",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/pages/login/index.vue"),
    },
    {
      path: "/system",
      component: () => import("@/pages/layout/index.vue"),
      children: [
        {
          path: "/demo",
          name: "demo",
          meta: {
            title: "demo",
          },
          component: () => import("@/pages/demo/index.vue"),
        },
        {
          path: "/editpassword",
          name: "editpassword",
          meta: {
            title: "修改密码",
          },
          component: () => import("@/pages/editpassword/index.vue"),
        },
        {
          path: "/userinfo",
          name: "userinfo",
          meta: {
            title: "个人信息",
          },
          component: () => import("@/pages/userinfo/index.vue"),
        },
        {
          path: "/dict/:id",
          name: "dict",
          meta: {
            title: "字典数据",
          },
          component: () => import("@/pages/dict/index.vue"),
        },
      ],
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

// router.beforeEach((to, from) => {});

export default router;
