<script setup lang="ts">
import { watch, ref } from "vue";
import { NBreadcrumb, NBreadcrumbItem } from "naive-ui";
import { useRoute, useRouter } from "vue-router";

interface DropItem {
  label: string;
  key: string;
  children?: DropItem[];
}

const route = useRoute();
const router = useRouter();

const breadcrumbs = reactive([] as Array<DropItem>);

const handleSelect = (key: string) => {
  router.push(key);
};
</script>

<template>
  <NBreadcrumb>
    <NBreadcrumbItem
      class="layout-crumbs-item"
      v-for="item in breadcrumbs"
      :key="index.key"
    >
      <NDropdown
        v-if="item.children && item.children.length > 0"
        :options="item.children"
        @select="handleSelect"
      >
        <span>
          {{ item.label }}
          <SvgIcon name="down"></SvgIcon>
        </span>
      </NDropdown>
      <span v-else>{{ item.label }}</span>
    </NBreadcrumbItem>
  </NBreadcrumb>
</template>

<style lang="scss" scoped>
.layout-crumbs-item {
  font-size: 16px;
}
</style>
