import { defineStore } from 'pinia'

export const useListMusicStore = defineStore('list-music', {
  state: () => ({
    runtimeConfig: useRuntimeConfig(),
    listMusic: []
  }),
  actions: {

    getListMusic (val: any) {
      return new Promise((resolve, reject) => {
        $fetch(`${this.runtimeConfig.public.API_ENDPOINT}/search?term=${val.replace(/ /g, '+')}`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json"
          },
        })
          .then((res: any) => {
            this.listMusic = JSON.parse(res as string).results
            resolve(this.listMusic)
          }).catch((err: string) => {
            reject(err)
          })
      })
    }

  },
})

