import { defineStore } from "pinia";
import { getRouters } from "@/api/user.ts";
import { getUserInfo } from "@/api/user.ts";
import { ILoginPramas } from "@/model/login.ts";
import { removeToken, setToken } from "@/utils/cookie.ts";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      routes: [],
      addRoutes: [],
      defaultRoutes: [],
      topbarRouters: [],
      sidebarRouters: [],
    };
  },
  actions: {
    // 生成路由
    GenerateRoutes() {
      return new Promise((resolve) => {
        // 向后端请求路由数据
        getRouters().then((res) => {
          const sdata = JSON.parse(JSON.stringify(res.data));
          const rdata = JSON.parse(JSON.stringify(res.data));
          const sidebarRoutes = filterAsyncRouter(sdata);
          const rewriteRoutes = filterAsyncRouter(rdata, false, true);
          const asyncRoutes = filterDynamicRoutes(dynamicRoutes);
          rewriteRoutes.push({ path: "*", redirect: "/404", hidden: true });
          router.addRoutes(asyncRoutes);
          commit("SET_ROUTES", rewriteRoutes);
          this.addRoutes = rewriteRoutes;
          commit("SET_SIDEBAR_ROUTERS", constantRoutes.concat(sidebarRoutes));
          commit("SET_DEFAULT_ROUTES", sidebarRoutes);
          commit("SET_TOPBAR_ROUTES", sidebarRoutes);
          resolve(rewriteRoutes);
        });
      });
    },
  },
});
