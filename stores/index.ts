import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    showSidebar: false,
    showSearch: false
  }),
  actions: {
    isShowModalLogin (value: boolean) {
      this.showSidebar = value
    },
    isShowModalSearch (value: boolean) {
      this.showSearch = value
    }
  }
})
