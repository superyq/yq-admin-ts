import { defineStore } from "pinia";
import { ITag } from "@/model/common.ts";

export const useTagStore = defineStore({
  id: "tag",
  state: () => {
    return {
      tags: [{ title: "首页", key: "/home" }],
      activeTagIndex: 0,
    };
  },
  getters: {
    tagsKey: (state) => {
      return state.tags.map((tag) => tag.key);
    },
  },
  actions: {
    addTag(tag: ITag) {
      console.log("tagsKey", this.tagsKey);
      console.log("tags", this.tags);
      if (!this.tagsKey.includes(tag.key)) {
        this.tags.push(tag);
      }
    },
    removeTag(key: string) {
      let index = this.tagsKey.indexOf(key);
      this.tags.splice(index, 1);
      this.activeTagIndex = index - 1;
    },
  },
});
