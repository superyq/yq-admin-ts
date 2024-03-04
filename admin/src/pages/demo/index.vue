<script setup lang="ts">
import { login } from "@/api/login.ts";
import YCard from "@/components/naive-ui/YCard.vue";
import { useThemeStore } from "@/store/theme.ts";
import { ref } from "vue";

const themeStore = useThemeStore();

const params = {
  username: "admin",
  password: "admin123",
};
const handleLogin = () => {
  window.$dialog.warning({
    title: "系统提示",
    content: "登录状态已过期，您可以继续留在该页面，或者重新登录",
    positiveText: "重新登录",
    negativeText: "取消",
    onPositiveClick: () => {
      window.$msg.error("asd");
    },
    onNegativeClick: () => {},
  });
  login(params)
    .then((res) => {
      console.log(1, res);
    })
    .catch((err) => {
      console.log(2, err);
    });
};

let text = ref("123");
</script>

<template>
  <div class="p-demo">
    <div class="demo" @click="handleLogin()">demo</div>
    <NButton size="small" type="primary" @click="themeStore.changeTheme"
      >changeTheme</NButton
    >
    <NInput />
    <NDatePicker></NDatePicker>
    <YButton icon="add" type="primary">asdf</YButton>
    <YInput v-model="text"> </YInput>
    {{ text }}
    <SvgIcon name="user" size="100px"></SvgIcon>
    <YCard title="asfd" @close="handleLogin"> </YCard>
  </div>
</template>

<style lang="scss" scoped></style>
