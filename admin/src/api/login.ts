import { ILoginPramas } from "@/model/login.ts";
import { result } from "@/mock/result.ts";

export const login = (params: ILoginPramas) => {
  return Promise.resolve(result({ ...params, token: "token-yqcoder" }));
};

export const logout = () => {
  return Promise.resolve(result("成功"));
};

export const getCodeImg = () => {
  return Promise.resolve(result("1234"));
};
