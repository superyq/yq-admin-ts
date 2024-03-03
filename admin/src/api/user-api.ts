import request from "@/utils/request.ts";

export const getUserInfo = () => {
  return request({
    url: "/users/userinfo",
    method: "get",
  });
};
