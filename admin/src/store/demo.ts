import { defineStore } from "pinia";

export const useDemoStore = defineStore("demo", {
  state: () => {
    return {
      name: "yq",
    };
  },
  actions: {
    changeName() {
      this.name = "yqcoder";
    },
  },
});
