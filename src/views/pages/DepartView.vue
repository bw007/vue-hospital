<template>
  <div class="flex flex-col justify-between">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl">Bo'limlar</h1>
      <DepartDialog/>
    </div>
    <DepartTable />
  </div>
</template>

<script setup>
import DepartDialog from '@/components/depart/DepartDialog.vue';
import DepartTable from '@/components/depart/DepartTable.vue';
import { departStore } from '@/stores/data/depart';
import { onMounted } from 'vue';

const depart_store = departStore()

onMounted(() => {
  depart_store.getAllDepart();
})
</script>

<style lang="">
  
</style>