/*
 * @Description: 用户相关接口
 * @Author: ZY
 * @Date: 2020-12-28 14:40:50
 * @LastEditors: scy😊
 * @LastEditTime: 2021-01-20 10:17:09
 */
import https from "@/utils/https";
import { RootObject } from "@/model/rootObject";
import { RequestParams, ContentType, Method } from "axios-mapper";
import { UserInfoModel, Users } from "@/model/userModel";
import { LoginModel } from "@/views/user-manager/login/model/loginModel";

export const loginRequest = (userInfo: RequestParams) => {
  return https(false).request<RootObject<LoginModel>>(
    "user/login",
    Method.POST,
    userInfo,
    ContentType.json
  );
};

export const userInfoRequest = () => {
  return https().request<RootObject<UserInfoModel>>(
    "user/userInfo",
    Method.GET,
    undefined,
    ContentType.form
  );
};

export const getUsers = (user: any) => {
  return https().request<RootObject<Users>>(
    "user/getUsers",
    Method.GET,
    user,
    ContentType.form
  );
};
