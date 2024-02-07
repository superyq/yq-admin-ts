import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import { ip } from "@/router/utils.ts";
import { inject } from "vue";

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
      strict: true,
    },
    {
      path: "/demo/:id?",
      name: "Demo",
      component: ip("demo"),
      props: (route) => {
        return {
          id: +route.params.id,
        };
      },
    },
  ],
});

router.beforeEach((to, from) => {
  const name = inject("g-name");
  console.log(1, name);
  if (to.path == "/home") {
    return false;
  }
});

router.beforeResolve(() => {
  console.log(2);
});

router.afterEach(() => {
  console.log(3);
});

export default router;
