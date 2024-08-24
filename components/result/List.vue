<template>
  <div>
    <div class="p-3">
      <div class="text-center mt-5 my-8">
        <h2 class="text-[#4f5a6d]">
          Search result for: <span class="font-bold text-ngmusic tracking-wider">{{ route.params.slug }}</span>
        </h2>
      </div>
      <Skeleton v-if="loading" />
      <div v-for="(data, index) in listMusic" :key="index" class="relative border border-surface-200 bg-white p-3 mb-4 rounded-xl">
        <div class="w-28">
          <img class="rounded-xl w-full" :src="data.artworkUrl100" />
        </div>
        <div class="absolute inset-x-0 top-0 ml-32 pl-2 py-3 h-full">
          <div class="relative h-full">
            <div class="w-4/5">
              <div class="text-xs text-[#4f5a6d] mb-2 max-h-11 overflow-hidden text-ellipsis truncate-content truncate-label">
                {{ data.artistName }}
              </div>
              <p class="font-bold leading-[14px] text-[#4f5a6d] text-[13px] max-h-11 overflow-hidden text-ellipsis truncate-content">{{ data.trackCensoredName }}</p>
            </div>
            <div class="absolute left-0 right-3 bottom-0">
              <div class="flex justify-between items-center">
                <Tag severity="success" :value="data.primaryGenreName" class="text-xs rounded-xl px-3.5 py-0.5 text-white bg-green-primary font-normal"></Tag>
                <span class="flex items-center gap-1 font-medium text-sm text-yellow-primary">
                  <div v-if="data.trackPrice" class="border-2 rounded-full border-yellow-primary border-solid w-6 h-6 text-center">
                    <i class="pi pi-dollar text-xs relative top-px"></i>
                  </div>
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

  await store.getListMusic(route.params.slug)
  loading.value = false
  console.log('Data Music', listMusic.value.length)
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
