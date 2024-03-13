import { result } from "@/mock/result.ts";
import { tableData } from "@/mock/menu.ts";
import { userInfo } from "@/mock/user.ts";

export const getUserInfo = () => {
  return Promise.resolve(result(userInfo));
};

export const getRouters = () => {
  return Promise.resolve(result(tableData));
};
