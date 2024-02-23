import { createRouter, createWebHistory } from "vue-router";
import { baseRouter } from "./baseRouter.ts";

// const whiteList = ["/", "/login"];
const routes = baseRouter;

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior() {
    return { el: "#app", top: 0, behavior: "smooth" };
  },
});

// router.beforeEach((to, from) => {});

export default router;
