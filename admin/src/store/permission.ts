import { defineStore } from "pinia";
import { getRouters } from "@/api/user.ts";
import { getSiderMenu } from "@/utils/permission.ts";
import { toTreeData, deepClone } from "@/utils/index.ts";

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
            console.log("data", data);
            const sData = deepClone(data);
            const treeData = toTreeData(sData, 0);

            this.siderMenu = getSiderMenu(treeData);
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
});
