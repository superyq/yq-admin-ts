<script setup lang="ts">
import { reactive, h } from "vue";
import type { DataTableColumns } from "naive-ui";
import YButton from "@/components/naive-ui/YButton.vue";

type Song = {
  no: number;
  title: string;
  length: string;
};
const creatColumns = ({
  play,
}: {
  play: (row: Song) => void;
}): DataTableColumns<Song> => {
  return [
    {
      title: "No",
      key: "no",
    },
    {
      title: "Action",
      key: "action",
      render(row: Song) {
        return h(
          YButton,
          {
            onClick: () => play(row),
          },
          {
            default: () => "新增",
          }
        );
      },
    },
  ];
};
const columns = reactive(
  creatColumns({
    play(row) {
      console.log(row);
    },
  })
);
let tableData = reactive([]);
</script>

<template>
  <YTable :columns="columns" :data="tableData"></YTable>
</template>

<style lang="scss" scoped></style>
