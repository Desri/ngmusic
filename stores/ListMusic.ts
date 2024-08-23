import { defineStore } from 'pinia'

export const useListMusicStore = defineStore('list-music', {
  state: () => ({
    runtimeConfig: useRuntimeConfig(),
    listMusic: []
  }),
  actions: {
    async getListMusic () {
      const response = await useFetch(`${this.runtimeConfig.public.API_ENDPOINT}/search?term=json+mraz`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
      })
      this.listMusic = JSON.parse(response.data.value as string).results
    }
  },
})

