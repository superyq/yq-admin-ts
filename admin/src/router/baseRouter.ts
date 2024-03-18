export const baseRouter = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/login/index.vue"),
  },
  {
    path: "/system",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "/demo",
        name: "demo",
        component: () => import("@/pages/demo/index.vue"),
      },
      {
        alias: "/",
        path: "/home",
        name: "home",
        component: () => import("@/pages/home/index.vue"),
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
      // 所有未知页面都是404
      {
        path: "/:pathMatch(.*)*",
        name: 'NotFound',
        component: () => import("@/pages/404/index.vue"),
      },
    ],
  },
];
