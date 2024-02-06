import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: 'NotFound',
      component: () => import("@/pages/404/index.vue"),
    },
    {
      path: "/home",
      component: () => import("@/pages/home/index.vue"),
    },
    {
      path: "/demo-:name(.*)",
      component: () => import("@/pages/demo/index.vue"),
    },
  ],
});

export default router;
