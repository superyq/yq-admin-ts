<script setup lang="ts">
import { login } from "@/api/login.ts";
import { useThemeStore } from "@/store/theme.ts";
import { reactive, ref } from "vue";
import { uiPagePages } from "@/components/naive-ui/config.ts";

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
const pages = reactive(uiPagePages);
interface IPages {
  page: number;
  pageSize: Number;
  pageSizes: Array<Number>;
}
const pageChange = (_pages: IPages) => {
  console.log(1, _pages);
  console.log(2, pages);
};
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
    <YRadio v-model="radio" :options="options"></YRadio>
    <YSelect v-model="radio" :options="options"></YSelect>
    <YCheck v-model="cities" :options="options"></YCheck>
    <YDate v-model="date"></YDate>
    <YTable :columns="columns" :data="data"></YTable>
    <YModal :show="false">123</YModal>
    <YPage :pages="pages" @pageChange="pageChange" :item-count="200"></YPage>
  </div>
</template>

<style lang="scss" scoped></style>
