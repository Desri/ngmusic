<template>
  <div>
    <div class="p-3">
      <Skeleton v-if="loading" />
      <div v-for="(data, index) in listMusic" :key="index" class="relative border border-surface-200 bg-white p-3 mb-4 rounded-xl">
        <div class="w-28">
          <img class="rounded-xl w-full" :src="data.artworkUrl100" />
        </div>
        <div class="absolute inset-x-0 top-0 ml-32 pl-2 py-3 h-full">
          <div class="relative h-full">
            <div class="w-4/5">
              <label class="text-xs text-[#4f5a6d]">
                {{ data.artistName }}
              </label><br />
              <p class="font-bold leading-[14px] text-[#4f5a6d] text-[13px]">{{ data.trackCensoredName }}</p>
            </div>
            <div class="absolute left-0 right-3 bottom-0">
              <div class="flex justify-between items-center">
                <Tag severity="success" :value="data.primaryGenreName" class="text-xs rounded-xl px-3.5 py-0.5 text-white bg-green-primary font-normal"></Tag>
                <span class="flex items-center gap-1 font-medium text-sm text-yellow-primary">
                  <div class="border-2 rounded-full border-yellow-primary border-solid w-6 h-6 text-center">
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

      <!-- <div class="h-[100px] rounded-t-[100px] bg-blue-500">
        <div class="p-5 text-center text-2xl text-white">Footer</div>
      </div> -->

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
  console.log('Data Music ssss', listMusic.value.length)
</script>

<style scoped></style>
