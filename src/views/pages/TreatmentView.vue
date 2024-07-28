<template>
  <div class="flex flex-col justify-between">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl">Davolanuvchilar</h1>
      <TreatmentDialog/>
    </div>
    <TreatmentTable />
  </div>
</template>

<script setup>
import TreatmentDialog from '@/components/treatment/TreatmentDialog.vue';
import TreatmentTable from '@/components/treatment/TreatmentTable.vue';
import { patsientStore } from '@/stores/data/patsient';
import { serviceStore } from '@/stores/data/service';
import { treatmentStore } from '@/stores/data/treatment';
import { onMounted } from 'vue';

const patsient_store = patsientStore()
const service_store = serviceStore()
const treatment_store = treatmentStore()

onMounted(() => {
  patsient_store.getAllPatsient();
  service_store.getAllService();
  treatment_store.getAllTreatment()
})
</script>

<style lang="">
  
</style>