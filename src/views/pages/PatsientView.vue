<template>
  <div class="flex flex-col justify-between">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl">Bemorlar</h1>
      <PatsientDialog/>
    </div>
    <PatsientTable />
  </div>
</template>

<script setup>
import PatsientDialog from '@/components/patsient/PatsientDialog.vue';
import PatsientTable from '@/components/patsient/PatsientTable.vue';
import { departStore } from '@/stores/data/depart';
import { doctorStore } from '@/stores/data/doctor';
import { patsientStore } from '@/stores/data/patsient';
import { onMounted } from 'vue';

const doctor_store = doctorStore()
const depart_store = departStore()
const patsient_store = patsientStore()

onMounted(() => {
  doctor_store.getAllDoctor();
  depart_store.getAllDepart();
  patsient_store.getAllPatsient()
})
</script>

<style lang="">
  
</style>