<template>
  <div>
    <div class="p-3">
      <div class="text-center mt-5 my-8">
        <h2 class="text-[#4f5a6d]">
          Search result for: <span class="font-bold text-ngmusic tracking-wider">{{ route.params.slug }}</span>
        </h2>
      </div>
      <LazySkeleton v-if="loading" />
      <div v-for="(data, index) in listMusic" :key="index" class="relative border border-surface-200 bg-white p-3 mb-4 rounded-xl">
        <div class="w-28">
          <img class="rounded-xl w-full" :src="data.artworkUrl100" />
        </div>
        <div class="absolute inset-x-0 top-0 ml-32 pl-2 py-3 h-full">
          <div class="relative h-full">
            <div class="w-4/5">
              <div class="text-xs text-[#334155] mb-2 max-h-11 overflow-hidden text-ellipsis truncate-content truncate-label">
                {{ data.artistName }}
              </div>
              <p class="font-bold leading-[14px] text-[#334155] text-[13px] max-h-11 overflow-hidden text-ellipsis truncate-content">{{ data.trackCensoredName }}</p>
            </div>
            <div class="absolute left-0 right-3 bottom-0">
              <div class="flex justify-between items-center">
                <div class="bg-green-primary rounded-xl text-center px-2 py-1 w-auto">
                  <p class="text-xs text-white font-normal mx-auto max-w-[55px] truncate ...">
                    {{ data.primaryGenreName }}
                  </p>
                </div>
                <span v-if="data.trackPrice" class="flex items-center gap-1 font-medium text-sm text-yellow-primary">
                  <img class="rounded-xl w-full" src="/currency-dollar.png" />
                  {{ data.trackPrice }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NoMusic v-if="listMusic.length === 0" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { storeToRefs } from 'pinia'
  import { useListMusicStore } from '~/stores/ListMusic'

  const route = useRoute()
  const loading = ref(true)
  const store = useListMusicStore()
  const { listMusic } = storeToRefs(store)

  onMounted(async () => {
    await store.getListMusic(route.params.slug).then((res: any) => {
      if(res) {
        loading.value = false
      }
    }).catch((err: string) => {
      console.log('error', err)
    })
  });
</script>

<style scoped>
  .truncate-content {
    display: -webkit-box !important;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .truncate-label {
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>
