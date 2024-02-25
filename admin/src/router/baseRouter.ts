export const baseRouter = [
  // 所有未知页面都是404
  {
    path: "/:catchAll(.*)",
    component: () => import("@/pages/404/index.vue"),
  },
  {
    alias: "/",
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
        component: () => import("@/pages/demo/index.vue"),
      },
      {
        path: "/editpassword",
        name: "editpassword",
        component: () => import("@/pages/editpassword/index.vue"),
      },
      {
        path: "/userinfo",
        name: "userinfo",
        component: () => import("@/pages/userinfo/index.vue"),
      },
      {
        path: "/dict/:id",
        name: "dict",
        component: () => import("@/pages/dict/index.vue"),
      },
    ],
  },
];
