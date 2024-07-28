<template>
  <div class="flex flex-col justify-between">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl">Xizmatlar</h1>
      <ServiceDialog/>
    </div>
    <ServiceTable />
  </div>
</template>

<script setup>
import ServiceDialog from '@/components/service/ServiceDialog.vue';
import ServiceTable from '@/components/service/ServiceTable.vue';
import { serviceStore } from '@/stores/data/service';
import { onMounted } from 'vue';

const service_store = serviceStore()

onMounted(() => {
  service_store.getAllService();
})
</script>

<style lang="">
  
</style>