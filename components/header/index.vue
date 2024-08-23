<template>
  <div class="sticky top-0 z-50">
    <header class="bg-ngmusic text-white w-full py-3.5">
      <nav class="flex items-center">
        <div class="flex-none w-14 text-center">
          <Button icon="pi pi-bars" @click="visibleLeft = true" />
        </div>
        <div class="grow text-center">
          ngmusic
        </div>
        <div class="flex-none w-14 text-center">
          <Button icon="pi pi-search" @click="openPosition('bottom')" />
        </div>
      </nav>
    </header>
    <Sidebar
      v-model:visible="visibleLeft"
      position="left"
      class="bg-[#efefef]"
      :pt="{
        header: {
          class: 'bg-white mb-3 py-[15px]'
        },
        content: {
          class: 'px-3'
        }
      }"
    >
      <template #header>
        <h2 class="font-medium text-lg">Detail MB Ads</h2>
      </template>
      <div>
        <div class="bg-white text-dark-grey border-[1px] border-solid border-primary-grey px-3 py-2 rounded-md mb-3">
          <h3 class="text-base font-medium mb-1">
            Detail
          </h3>
          <p class="text-sm text-[#737373] leading-[18px] mb-2.5">
            Kirim chat ke calon pengantin tertarget, dengan ini akan membantu Kamu mem folow-up mereka
          </p>
          <p class="text-sm text-[#737373] leading-[18px] mb-2.5">
            Jumlah user yang akan menerima chat tergantung dari jumlah dan penganturan yang Kamu buat nanti
          </p>
          <p class="text-sm text-[#737373] leading-[18px]">
            Semakin banyak jumlah user yang menerima chat Kamu, semakin besar kesempatan mereka menggunakan jasa Kamu
          </p>
        </div>
        <div class="bg-white text-dark-grey border-[1px] border-solid border-primary-grey px-3 py-2 rounded-md mb-3">
          <h3 class="text-base font-medium mb-1">
            Harga
          </h3>
          <p class="text-sm text-[#737373] leading-5">
            100 user = IDR 100,000 <br />
            200 user = IDR 200,000 <br />
            300 user = IDR 270,000 <br />
            400 user = IDR 360,000
          </p>
        </div>
      </div>

      <div class="bg-ngmusic absolute bottom-0 left-0 right-0 w-full py-3 cursor-pointer">
        <h2 class="text-base text-center text-white">Beli MB Ads</h2>
      </div>
    </Sidebar>
    <Dialog
      v-model:visible="visible"
      header="Edit Profile"
      class="sm:w-96 m-0 rounded-none"
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
  const visibleLeft = ref(false);
  const position = ref('center');
  const visible = ref(false);

  const openPosition = (pos) => {
    position.value = pos;
    visible.value = true;
  }

</script>

<style scoped></style>
