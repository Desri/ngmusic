<template>
  <div>
    <Dialog
      v-model:visible="showSearch"
      class="w-full sm:w-96 m-0 rounded-none"
      :modal="true"
      :draggable="false"
      :pt="{
        root: {
          class: 'h-full bg-opacity min-h-full'
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
  const store = useGlobalStore()
  const { showSearch } = storeToRefs(store)
</script>

<style>
  .p-dialog-header-icons {
    float: right;
  }
</style>
