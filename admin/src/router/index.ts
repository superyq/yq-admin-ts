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
      component: ip("home"),
    },
    {
      path: "/demo/:id?",
      component: ip("demo"),
      children: [
        {
          path: "demo1",
          component: ip("home"),
        },
        {
          path: "demo2",
          component: ip("demo"),
        },
        {
          path: "",
          component: ip("home"),
        },
      ],
    },
    {
      path: "/:id(\\d+)+",
      component: ip("home"),
    },
  ],
});

export default router;
