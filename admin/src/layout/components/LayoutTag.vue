<script setup>
import { computed } from "vue";
import { useTagStore } from "@/store/tag.ts";
import { usePermissionStore } from "@/store/permission.ts";
import { useRouter } from "vue-router";

const router = useRouter();
const tagStore = useTagStore();
const permissionStore = usePermissionStore();

let tags = computed(() => {
  return tagStore.tags;
});

function handleClose(key) {
  tagStore.removeTag(key);

  if (permissionStore.activeMenuValue == key) {
    permissionStore.activeMenuValue = tags.value[tagStore.activeTagIndex].key;
    router.push(`/${permissionStore.activeMenuValue}`);
  }
}
function handleCheck(item) {
  let { key } = item;
  permissionStore.activeMenuValue = key;
  router.push(key);
}
</script>

<template>
  <div class="layout-header__tag">
    <NTag
      v-for="item in tags"
      :key="item.key"
      class="tag-item"
      :closable="item.key !== 'home'"
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
