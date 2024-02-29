import request from "@/utils/request.ts";

export const login = (params) => {
  return request({
    url: "/login",
    method: "post",
    data: params,
  });
};
