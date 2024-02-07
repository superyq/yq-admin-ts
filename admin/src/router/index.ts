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
      path: "/",
      name: '/',
      component: ip("home"),
    },
    {
      path: "/home",
      name: "home",
      redirect: { name: '/' },
    },
    {
      path: "/demo/:name",
      redirect: (to) => {
        return { path: 'demo', query: { q: to.params.name } }
      }
    },
    {
      path: '/demo',
      name: 'demo',
      component: ip('demo')
    }
  ],
});

export default router;
