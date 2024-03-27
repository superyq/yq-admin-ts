<script setup lang="ts">
import Search from "@/pages/user/components/Search.vue";
import Table from "@/pages/user/components/Table.vue";
</script>

<template>
  <View>
    <template #search>
      <Search />
    </template>
    <template #table>
      <Table />
    </template>
  </View>
</template>

<style lang="scss" scoped></style>
