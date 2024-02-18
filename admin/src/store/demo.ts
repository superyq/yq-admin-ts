import { defineStore } from "pinia";

export const useDemoStore = defineStore("demo", {
  state: () => {
    return {
      name: "yq",
      age: 18,
      loves: ["book"],
    };
  },
  actions: {
    changeName() {
      this.name = "yqcoder";
    },
  },
  getters: {
    lovesL(): number {
      return this.nameL;
    },
    nameL: (state) => state.name.length,
    yearAfter: (state) => {
      return (yearNumber: number): number => state.age + yearNumber;
    },
  },
});
