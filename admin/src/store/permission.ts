import { defineStore } from "pinia";
import { getRouters } from "@/api/user.ts";
import { getSiderMenu, getAayncRouter } from "@/utils/permission.ts";
import { toTreeData, deepClone } from "@/utils/index.ts";
import { IMenu } from "@/model/common.ts";

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
          .then(({ data }: any) => {
            const sData = deepClone(data);
            const rData = deepClone(data);

            const treeData = toTreeData(sData, 0);
            this.siderMenu = getSiderMenu(treeData as IMenu[]);

            const routerData = getAayncRouter(rData);
            resolve(routerData);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
});
