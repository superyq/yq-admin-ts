import { createRouter, createWebHistory } from "vue-router";
import baseRouter from "./baseRouter.ts";

const whiteList = ["/", "/login"];

const router = createRouter({
  history: createWebHistory(),
  routes: baseRouter,
  scrollBehavior() {
    return { top: 0 };
  },
});

// router.beforeEach((to, from) => {});

export default router;
