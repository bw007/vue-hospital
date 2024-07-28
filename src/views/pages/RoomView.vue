<template>
  <div class="flex flex-col justify-between">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl">Palatalar</h1>
      <roomDialog/>
    </div>
    <roomTable />
  </div>
</template>

<script setup>
import RoomDialog from '@/components/room/RoomDialog.vue';
import RoomTable from '@/components/room/RoomTable.vue';
import { departStore } from '@/stores/data/depart';
import { roomStore } from '@/stores/data/room';
import { onMounted } from 'vue';

const room_store = roomStore()
const depart_store = departStore()

onMounted(() => {
  room_store.getAllRoom();
  depart_store.getAllDepart()
})
</script>

<style lang="">
  
</style>