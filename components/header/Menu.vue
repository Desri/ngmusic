<template>
  <div>
    <Sidebar
      v-model:visible="showSidebar"
      position="left"
      class="w-72 bg-[#efefef]"
      :pt="{
        header: {
          class: 'bg-white mb-2 py-[15px]'
        },
        content: {
          class: 'px-0 bg-white'
        }
      }"
    >
      <template #header>
        <h2 class="font-medium text-lg tracking-wider">ngmusic</h2>
      </template>
      <div class="card flex justify-content-center">
        <Menu :model="items" class="w-full md:w-15rem p-0 rounded-none">
          <template #submenuheader="{ item }">
            <span class="text-primary font-bold">{{ item.label }}</span>
          </template>
          <template #item="{ item, props }">
            <a v-ripple class="flex align-items-center" v-bind="props.action">
              <span :class="item.icon" />
              <span class="ml-2">{{ item.label }}</span>
              <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
              <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
            </a>
          </template>
        </Menu>
      </div>
      <div class="bg-ngmusic absolute bottom-0 left-0 right-0 w-full py-3 cursor-pointer">
        <h2 class="text-sm text-center text-white">ngmusic © 2024. All Rights Reserved.</h2>
      </div>
    </Sidebar>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  const store = useGlobalStore()
  const { showSidebar } = storeToRefs(store)

  const items = ref([
    {
      separator: true
    },
    {
      label: 'Documents',
      items: [
        {
          label: 'New',
          icon: 'pi pi-plus'
        },
        {
          label: 'Search',
          icon: 'pi pi-search'
        }
      ]
    },
    {
      label: 'Profile',
      items: [
        {
          label: 'Settings',
          icon: 'pi pi-cog'
        },
        {
          label: 'Messages',
          icon: 'pi pi-inbox',
          badge: 2
        },
        {
          label: 'Logout',
          icon: 'pi pi-sign-out'
        }
      ]
    },
    {
      separator: true
    }
  ]);
</script>

<style scoped></style>
