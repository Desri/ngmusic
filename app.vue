<template>
  <div>
    <NuxtLayout>
      <div class="card flex justify-content-center">
        <Toast
          position="top-center"
          group="headless"
          :pt="{
            message: {
              class: 'mx-auto w-max text-sm text-center bg-[#ffffa2] px-2.5 rounded-lg toast-custome'
            }
          }"
        >
          <template #container>
            Anda sedang Offline, Cek koneksi internet Anda
          </template>
        </Toast>
      </div>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import { useOnline } from '@vueuse/core'
  import { useToast } from "primevue/usetoast";

  const toast = useToast();
  const online = useOnline()

  const show = () => {
    if(!online.value) {
      toast.add({ severity: 'custom', summary: 'Uploading your files.', group: 'headless' });
    } else {
      toast.removeAllGroups();
    }
  };
  watch(online, (newVal) => {
    show()
  }, { immediate: true });
</script>

<style>
  .toast-custome .p-toast-message {
    margin: 0px;
    box-shadow: none;
    padding-top: 3px;
    padding-bottom: 3px;
    backdrop-filter: none;
  }
</style>
