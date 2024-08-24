<template>
  <div>
    <div class="block mb-4">
      <InputText
        type="text"
        v-model="searchMusic"
        class="rounded-3xl py-2 px-4 w-full text-center"
        :class="isShow ? 'border border-solid border-danger' : ''"
        placeholder="Artist / Album / Title"
      />
      <p v-if="isShow" class="text-danger text-sm mt-1">
        Please input this field
      </p>
    </div>
    <Button
      class="bg-[#b077ed] rounded-3xl py-2 px-4 w-full text-center block text-white"
      :disabled="isShowLoading"
      @click="submitSearch"
    >
      Search <span v-if="isShowLoading" class="dots absolute ml-[1px]"></span>
    </Button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const isShow = ref(false);
  const isShowLoading = ref(false);
  const searchMusic = ref('');

  const submitSearch = () => {
    if(searchMusic.value === '') {
      isShow.value = true
    } else {
      isShowLoading.value = true
      router.push({ path: `/result/${searchMusic.value}` })
      isShow.value = false
    }
  }
</script>

<style scoped>
  .dots::after {
    content: '';
    display: inline-block;
    width: 1em;
    text-align: left;
    animation: dots 1.5s steps(4, end) infinite;
  }

  @keyframes dots {
    0%, 20% {
        content: '';
    }
    40% {
        content: '.';
    }
    60% {
        content: '..';
    }
    80%, 100% {
        content: '...';
    }
  }
</style>
