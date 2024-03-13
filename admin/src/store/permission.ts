import { defineStore } from "pinia";
// 接口获取路由 自己对接口
import { getRouters } from "@/api/user.ts";

export const usePermissionStore = defineStore({
  id: "permissionStore",
  state: () => {
    return {
      siderMenu: [],
      activeMenuValue: "",
    };
  },
  actions: {
    getRouters() {
      return new Promise((resolve, reject) => {
        getRouters()
          .then(({ data }) => {
            console.log(1, data);
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
});
