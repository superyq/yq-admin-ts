<script setup lang="ts">
import { ref, reactive } from "vue";
import { setCookie, removeCookie, getCookie } from "@/utils/cookie.ts";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user.ts";
import { encrypt, decrypt } from "@/utils/jsencrypt.ts";
import { getCodeImg } from "@/api/login.ts";

const userStore = useUserStore();
const router = useRouter();

// 登录
let formRef = ref(null);
let rememberMe = ref(false);
let loginBtnState = ref(false);
const form = reactive({
  userName: "yqcoder",
  password: "888888",
  code: "",
  uuid: "",
});
const rules = {
  userName: {
    required: true,
    trigger: ["input", "blur"],
    message: "请输入用户名",
  },
  password: {
    required: true,
    trigger: ["input", "blur"],
    message: "请输入密码",
  },
  code: {
    required: true,
    trigger: ["input", "blur"],
    message: "请输入验证码",
  },
};
const handleLogin = () => {
  loginBtnState.value = true;
  formRef.value?.validate((errors) => {
    if (!errors) {
      if (rememberMe.value) {
        setCookie("userName", form.userName);
        setCookie("password", encrypt(form.password));
        setCookie("rememberMe", rememberMe.value);
      } else {
        removeCookie("userName");
        removeCookie("password");
        removeCookie("rememberMe");
      }

      userStore
        .login(form)
        .then(() => {
          window.$msg.success("登录成功");
          router.push("/home");
        })
        .catch(() => {
          needCode.value && getCode();
          loginBtnState.value = false;
        });
    } else {
      loginBtnState.value = false;
    }
  });
};

// 获取默认登录账号
const getDefault = () => {
  form.userName = getCookie("userName") || "";
  form.password = decrypt(getCookie("password")) || "";
  rememberMe.value = Boolean(getCookie("rememberMe")) || false;
};
getDefault();

// 是否需要验证码
let needCode = ref(false);
let codeUrl = ref("");
// 获取图形验证码
const getCode = () => {
  getCodeImg().then((res) => {
    needCode.value =
      res.captchaEnabled === undefined ? true : res.captchaEnabled;
    if (needCode.value) {
      codeUrl.value = "data:image/gif;base64," + res.img;
      form.uuid = res.uuid;
    }
  });
};
</script>

<template>
  <div class="login__box">
    <div class="login-logo__box">
      <div class="login__title login-logo">登 录</div>
    </div>
    <n-form
      ref="formRef"
      class="login-form__box"
      :model="form"
      :rules="rules"
      label-placement="left"
    >
      <n-form-item path="userName">
        <n-input
          class="login-input"
          v-model:value="form.userName"
          placeholder="请输入用户名/手机号"
        >
          <template #prefix>
            <svg-icon name="username" color="grey"></svg-icon>
          </template>
        </n-input>
      </n-form-item>
      <n-form-item path="password">
        <n-input
          class="login-input"
          v-model:value="form.password"
          placeholder="请输入密码"
          type="password"
          show-password-on="mousedown"
          @keyup.enter="handleLogin"
        >
          <template #prefix>
            <svg-icon name="password" color="grey"></svg-icon>
          </template>
        </n-input>
      </n-form-item>
      <n-form-item v-if="needCode" class="login-code" path="code">
        <n-input
          v-model:value="form.code"
          class="login-input login-input_code"
          placeholder="验证码"
          @keyup.enter="handleLogin"
        >
          <template #prefix>
            <svg-icon name="code" color="grey"></svg-icon>
          </template>
        </n-input>
        <img class="login-code-img" :src="codeUrl" @click="getCode" />
      </n-form-item>
      <div class="login-checkbox_box">
        <n-checkbox
          class="login-checkbox"
          v-model:checked="rememberMe"
        ></n-checkbox>
        <span>记住密码</span>
      </div>
      <n-button
        class="login-btn_login"
        type="info"
        @click="handleLogin"
        :loading="loginBtnState"
        :disabled="loginBtnState"
        >登录</n-button
      >
    </n-form>
  </div>
</template>

<style lang="scss" scope>
.login__box {
  width: 425px;
  padding: 20px 40px;
  border-radius: 10px;
  background: rgba(2, 57, 104, 0.7);
  box-shadow: 0 0 30px rgba(2, 57, 104, 0.7);
  box-sizing: border-box;
  .login__title {
    font-size: 24px;
    text-align: center;
    color: #fff;
  }
}
.login-title {
  margin-bottom: 15px;
  text-align: center;
  letter-spacing: 10px;
  font-size: 18px;
  color: #fff;
  opacity: 1;
}

.login-logo__box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  text {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    color: #1d69a3;

    &::before {
      content: "";
      display: inline-block;
      margin: 0 5px;
      width: 5px;
      height: 5px;
      background: gray;
      border-radius: 50%;
    }
  }
}

.login-logo {
  width: 55%;

  img {
    width: 100%;
    object-fit: cover;
  }
}

.login-code {
  .login-input_code {
    width: 240px;
  }

  .login-btn_code {
    color: #fff;
    margin-left: 20px;
  }
}

.login-btn_login {
  height: 40px;
  width: 100%;
}

.login-input {
  margin-top: 20px;
}

.login-checkbox_box {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: -16px 0 10px;
  color: #71a1c5;
  font-size: 12px;
}

.login-checkbox {
  margin-right: 5px;
}

.login-btn_forget {
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
  color: #71a1c5;
  cursor: pointer;
}

.login-code-img {
  margin-top: 20px;
  width: 30%;
  height: 35px;
  margin-left: 20px;
  object-fit: contain;
  cursor: pointer;
}
</style>
