import { defineStore } from "pinia";

export const useLoading = defineStore("loading", {
  state: () => {
    return {
      isLoading: false,
    };
  },
  actions: {
    loading(isLoading) {
      this.isLoading = isLoading;
    },
  },
});
