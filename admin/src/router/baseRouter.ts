export const baseRouter = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/login/index.vue"),
  },
  {
    path: "/system",
    component: () => import("@/layout/index.vue"),
    meta: {
      title: '系统管理'
    },
    children: [
      {
        path: "/demo",
        name: "demo",
        component: () => import("@/pages/demo/index.vue"),
        meta: {
          title: 'demo'
        }
      },
      {
        alias: "/",
        path: "/home",
        name: "home",
        component: () => import("@/pages/home/index.vue"),
        meta: {
          title: "首页"
        }
      },
      {
        path: "/editpassword",
        name: "editpassword",
        component: () => import("@/pages/editpassword/index.vue"),
        meta: {
          title: '修改密码'
        }
      },
      {
        path: "/userinfo",
        name: "userinfo",
        component: () => import("@/pages/userinfo/index.vue"),
        meta: {
          title: '用户信息'
        }
      },
      // 所有未知页面都是404
      {
        path: "/:pathMatch(.*)*",
        name: 'NotFound',
        component: () => import("@/pages/404/index.vue"),
        meta: {
          title: '404'
        }
      },
    ],
  },
];
