<template>
  <div class="flex flex-col justify-between">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl">Mutaxassisliklar</h1>
      <SpecDialog/>
    </div>
    <SpecTable />
  </div>
</template>

<script setup>
import SpecDialog from '@/components/spec/SpecDialog.vue';
import SpecTable from '@/components/spec/SpecTable.vue';
import { specStore } from '@/stores/data/spec';
import { onMounted } from 'vue';

const spec_store = specStore()

onMounted(() => {
  spec_store.getAllSpec();
})
</script>

<style lang="">
  
</style>