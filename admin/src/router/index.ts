import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { baseRouter } from "./baseRouter.ts";

const whiteList = ["/", "/login", "/demo"];
const routes: RouteRecordRaw[] = baseRouter;

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior() {
    return { el: "#app", top: 0, behavior: "smooth" };
  },
});

// router.beforeEach((to) => {
//   // 白名单直接跳转
//   if (whiteList.includes(to.path)) {
//     return true;
//   }

//   return { path: "/" };
// });

export default router;
