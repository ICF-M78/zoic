import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: (): { settings: Settings } => ({
    settings: {
      text: '静影沉璧',
      textColor: '#ffffff',
      fontSize: 72,
      fontFamily: 'Arial',
      backgroundColor: '#232323',
      textPosition: {
        x: 50,
        y: 50,
      },
    },
  }),

  actions: {
    updateSettings(newSettings: Partial<Settings>) {
      this.settings = { ...this.settings, ...newSettings }
    },
  },
})
