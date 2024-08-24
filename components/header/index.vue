<template>
  <div class="sticky top-0 z-50">
    <header class="bg-ngmusic text-white w-full py-3.5">
      <nav class="flex items-center">
        <div class="flex-none w-14 text-center">
          <Button icon="pi pi-bars" @click="showSidebar" />
        </div>
        <div class="grow text-center tracking-wider">
          ngmusic
        </div>
        <div class="flex-none w-14 text-center">
          <Button icon="pi pi-search" @click="openPosition" />
        </div>
      </nav>
    </header>
    <HeaderMenu />
    <Dialog
      v-model:visible="visible"
      class="w-full sm:w-96 m-0 rounded-none"
      :modal="true"
      :draggable="false"
      :pt="{
        root: {
          class: 'h-full bg-[#323242c9] min-h-full'
        },
        header: {
          class: 'rounded-none bg-transparent block pt-3 pr-3.5'
        },
        content: {
          class: 'rounded-none bg-transparent top-1/3 absolute w-full'
        },
        closeButton: {
          class: 'text-white'
        }
      }"
    >
      <div>
        <h2 class="text-center text-white mb-4 text-lg">
          Search
        </h2>
        <FormSearch />
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  const store = useGlobalStore()
  const visible = ref(false);

  const openPosition = () => {
    visible.value = true;
  }

  const showSidebar = () => {
    store.isShowModalLogin(true)
  }
</script>

<style>
  .p-dialog-header-icons {
    float: right;
  }
</style>
