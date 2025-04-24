import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: (): { settings: Settings } => ({
    settings: {
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
    },
  }),

  actions: {
    updateSettings(newSettings: Partial<Settings>) {
      this.settings = { ...this.settings, ...newSettings };
    },
  },

  persist: true,
});
