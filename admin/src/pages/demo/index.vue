<script setup lang="ts">
import { login } from "@/api/login.ts";
import { useThemeStore } from "@/store/theme.ts";
import { ref } from "vue";
import { uiPagePages } from "@/components/naive-ui/config.ts";
import { IPages } from "@/model/common.ts";

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
    .then(() => {})
    .catch(() => {});
};

let text = ref("123");
let radio = ref(null);
let options = ref([
  {
    label: "a",
    value: 1,
  },
  {
    label: "b",
    value: 2,
    disabled: true,
  },
]);
let cities = ref([]);
let date = ref(null);

const columns = [
  {
    title: "姓名",
    key: "name",
  },
  {
    title: "年龄",
    key: "age",
  },
];
const data = [
  {
    name: "yq",
    age: 18,
  },
  {
    name: "yy",
    age: 20,
  },
];
const pages = ref(uiPagePages);
const pageChange = (page: IPages) => {};

const formValue = ref({
  name: "",
  age: null,
  sex: "",
  time: null,
});
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
    <YCard title="asfd" @close="handleLogin">
      <YForm :model="formValue" inline>
        <NFormItem label="姓名" path="name">
          <YInput v-model="formValue.name"></YInput>
        </NFormItem>
        <NFormItem label="年龄" path="age">
          <YInput v-model="formValue.age"></YInput>
        </NFormItem>
      </YForm>
    </YCard>
    <YRadio v-model="radio" :options="options"></YRadio>
    <YSelect v-model="radio" :options="options"></YSelect>
    <YCheck v-model="cities" :options="options"></YCheck>
    <YDate v-model="date"></YDate>
    <YTable :columns="columns" :data="data"></YTable>
    <YPage :pages="pages" :item-count="200" @pageChange="pageChange"></YPage>
  </div>
</template>

<style lang="scss" scoped></style>
