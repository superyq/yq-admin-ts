import { result } from "@/mock/result.ts";
import { tableData } from "@/mock/menu.ts";
import { userInfo } from "@/mock/user.ts";

export const getUserInfo = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result(userInfo));
    }, 300);
  })
};

export const getRouters = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result(tableData));
    }, 300);
  })
};
