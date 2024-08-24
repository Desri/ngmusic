<template>
  <div>
    <div class="bg-ngmusic absolute h-full sm:w-96 mx-auto p-7 text-center">
      <div class="absolute inset-x-0 top-1/3">
        <img class="mb-3 mx-auto w-20" src="@/assets/img/musical-note.png" />
        <h1 class="text-white tracking-wider">
          ngmusic
        </h1>
      </div>
      <div class="absolute inset-x-0 bottom-8 mx-auto w-10/12 mt-5">
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
        <div class="block">
          <Button
            label="Search"
            class="bg-[#b077ed] rounded-3xl py-2 px-4 w-full text-center text-white"
            @click="submitSearch"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const isShow = ref(false);
  const searchMusic = ref('');

  const submitSearch = () => {
    if(searchMusic.value === '') {
      isShow.value = true
    } else {
      router.push({ path: `/result/${searchMusic.value}` })
      isShow.value = false
    }
    console.log('Check', searchMusic.value)
    // const payload = {
    //   themeReference: searchMusic.value
    // }
    // userStore.updateUser(payload).then((res: any) => {
    //   if(res.success) {
    //     userStore.getUser()
    //     loading.value = false
    //     showModalTheme.value = false
    //   }
    // }).catch((err: string) => {
    //   loading.value = false
    //   console.log('error', err)
    // })
  }
</script>

<style scoped></style>
