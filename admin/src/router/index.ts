import { createRouter, createWebHistory } from "vue-router";
import { ip } from "@/router/utils.ts";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: ip("404"),
    },
    {
      path: "/home",
      name: "Home",
      alias: "/",
      component: ip("home"),
    },
    {
      path: "/demo/:id?",
      name: "Demo",
      component: ip("demo"),
      meta: {
        requiresAuth: true,
        transition: "demo",
      },
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});
export default router;
