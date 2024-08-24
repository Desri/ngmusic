import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    showSidebar: false
  }),
  actions: {
    isShowModalLogin (value: boolean) {
      this.showSidebar = value
    }
  }
})
