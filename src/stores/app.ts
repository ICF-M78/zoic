import { defineStore } from "pinia";
import { safeLocalStorage } from "@/utils/safe-storage";
import { ref } from "vue";

export const useAppStore = defineStore(
  "app",
  () => {
    const settings = ref({
      text: "静影沉璧",
      textColor: "#00916A",
      fontSize: 98,
      fontFamily: "ShuiYunZhuan",
      backgroundColor: "#1A1A1A",
      letterSpacing: 0,
      textPosition: {
        x: 50,
        y: 38,
      },
    } as Settings);

    return { settings };
  },
  {
    persist: {
      storage: safeLocalStorage,
    },
  }
);
