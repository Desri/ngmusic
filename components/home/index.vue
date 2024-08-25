<template>
  <div>
    <div class="w-full sm:w-96 absolute h-full sm:w-96 mx-auto p-7 text-center bg-gradient">
      <div class="absolute inset-x-0 top-1/3">
        <img class="mb-3 mx-auto w-20" src="@/assets/img/musical-note.png" alt="Logo" data-not-lazy />
        <h1 class="text-white text-md tracking-wider">
          ngmusic
        </h1>
      </div>
      <div class="absolute inset-x-0 bottom-8 mx-auto w-10/12 mt-5">
        <FormSearch />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
