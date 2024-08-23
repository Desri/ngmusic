<template>
  <div>
    <div class="bg-ngmusic p-7 text-center">
      
      <img class="mb-3 mx-auto w-20" src="@/assets/img/musical-note.png" />
      <h1 class="text-white tracking-wider">
        ngmusic
      </h1>
      <div class="mt-5">
        <div class="block mb-4">
          <InputText type="text" v-model="value" class="rounded-3xl py-2 px-4 w-full text-center" placeholder="Artist / Album / Title" />
        </div>
        <div class="block">
          <Button label="Search" class="bg-[#b077ed] rounded-3xl py-2 px-4 w-full text-center text-white" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const value = ref(null);
</script>

<style scoped></style>
