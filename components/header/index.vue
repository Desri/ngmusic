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
