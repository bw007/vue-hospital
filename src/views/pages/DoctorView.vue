<template>
  <div class="flex flex-col justify-between">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl">Shifokorlar</h1>
      <DoctorDialog/>
    </div>
    <DoctorTable />
  </div>
</template>

<script setup>
import DoctorDialog from '@/components/doctor/DoctorDialog.vue';
import DoctorTable from '@/components/doctor/DoctorTable.vue';
import { departStore } from '@/stores/data/depart';
import { doctorStore } from '@/stores/data/doctor';
import { specStore } from '@/stores/data/spec';
import { onMounted } from 'vue';

const doctor_store = doctorStore()
const depart_store = departStore()
const spec_store = specStore()

onMounted(() => {
  doctor_store.getAllDoctor();
  depart_store.getAllDepart()
  spec_store.getAllSpec()
})
</script>

<style lang="">
  
</style>