import { result } from "@/mock/result.ts";

export const getUserInfo = () => {
  return Promise.resolve(result({ roles: ["admin"] }));
};

export const getRouters = () => {
  return Promise.resolve(result({ roles: ["admin"] }));
};
