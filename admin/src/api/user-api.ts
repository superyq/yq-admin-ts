import request from "@/utils/request.ts";

export const getUserInfo = () => {
  return request({
    url: "/users/userinfo",
    method: "get",
  });
};

export const getRouters = () => {
  return request({
    url: "/getRouters",
    method: "get",
  });
};
