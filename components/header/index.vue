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
          <Button icon="pi pi-search" @click="openPosition('bottom')" />
        </div>
      </nav>
    </header>
    <HeaderMenu />
    <Dialog
      v-model:visible="visible"
      header="Search Music"
      class="w-full sm:w-96 m-0 rounded-none"
      :position="position"
      :modal="true"
      :draggable="false"
      :pt="{
        root: {
          class: 'h-full'
        },
      }"
    >
      <span class="p-text-secondary block mb-5">Update your information.</span>
      <div class="flex align-items-center gap-3 mb-3">
        <label for="username" class="font-semibold w-6rem">Username</label>
        <InputText id="username" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex align-items-center gap-3 mb-5">
        <label for="email" class="font-semibold w-6rem">Email</label>
        <InputText id="email" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex justify-content-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
        <Button type="button" label="Save" @click="visible = false"></Button>
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  const store = useGlobalStore()
  const position = ref('center');
  const visible = ref(false);

  const openPosition = (pos: string) => {
    position.value = pos;
    visible.value = true;
  }

  const showSidebar = () => {
    store.isShowModalLogin(true)
  }
</script>

<style scoped></style>
