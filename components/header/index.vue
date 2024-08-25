<template>
  <div class="sticky top-0 z-50">
    <header class="text-white w-full pt-3.5 relative pb-5 bg-gradient">
      <nav class="flex items-center">
        <div class="flex-none w-14 text-center">
          <Button icon="pi pi-bars" @click="showSidebar" />
        </div>
        <div class="grow text-center tracking-wider">
          <NuxtLink to="/">
            ngmusic
          </NuxtLink>
        </div>
        <div class="flex-none w-14 text-center">
          <Button icon="pi pi-search" @click="showModalSearch" />
        </div>
      </nav>
    </header>
    <HeaderMenu />
    <ModalSearch />
  </div>
</template>

<script setup lang="ts">
  const store = useGlobalStore()

  const showModalSearch = () => {
    store.isShowModalSearch(true)
  }

  const showSidebar = () => {
    store.isShowModalLogin(true)
  }
</script>

<style scoped>
  header {
    border-bottom-left-radius: 50% 20%;
    border-bottom-right-radius: 50% 20%;
  }
</style>
