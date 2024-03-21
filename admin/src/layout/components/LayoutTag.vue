<script setup>
import { computed, watchEffect } from "vue";
import { useTagStore } from "@/store/tag.ts";
import { usePermissionStore } from "@/store/permission.ts";
import { useRouter, useRoute } from "vue-router";
import { watch } from "vue";

const router = useRouter();
const route = useRoute();
const tagStore = useTagStore();
const permissionStore = usePermissionStore();

let tags = computed(() => {
  return tagStore.tags;
});

watch(
  () => route.path,
  (value) => {
    const obj = { title: route.meta.title, key: value };
    tagStore.addTag(obj);
  },
  {
    immediate: true,
  }
);

const handleClose = (key) => {
  tagStore.removeTag(key);

  if (permissionStore.activeMenuValue == key) {
    router.push(tagStore.activeTag);
  }
};
const handleCheck = (item) => {
  let { key } = item;
  router.push(key);
};
</script>

<template>
  <div class="layout-header__tag">
    <NTag
      v-for="item in tags"
      :key="item.key"
      class="tag-item"
      :closable="item.key !== '/home'"
      :type="item.key == permissionStore.activeMenuValue ? 'success' : ''"
      size="small"
      @close="handleClose(item.key)"
      @click="handleCheck(item)"
      >{{ item.title }}</NTag
    >
  </div>
</template>

<style lang="scss" scoped>
.layout-header__tag {
  padding-left: 10px;
  display: flex;
  align-items: center;
  height: 30px;
}
.tag-item {
  margin-right: 5px;
  cursor: pointer;
}
</style>
