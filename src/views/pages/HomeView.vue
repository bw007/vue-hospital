<script setup>
import { LineChart } from '@/components/ui/chart-line'
import { statisticStore } from '@/stores/data/statistic';
import { onMounted, ref } from 'vue';

const statistics_store = statisticStore()

const data = ref([])

onMounted(() => {
  statistics_store.getAllStatistic()
})
</script>

<template>
  <LineChart
    :data="data"
    index="year"
    :categories="['Export Growth Rate', 'Import Growth Rate']"
    :y-formatter="(tick, i) => {
      return typeof tick === 'number'
        ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
        : ''
    }"
  />
</template>