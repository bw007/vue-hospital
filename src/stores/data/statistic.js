import { defineStore } from 'pinia'
import { ref } from 'vue'
import { apiStore } from '../utils/api'

export const statisticStore = defineStore('statisticStore', () => {
  const api = apiStore()
  const statistic = ref({})
  const statistics = ref({})


  const getAllStatistic = async () => {
    let res = await api.get({ url: 'statistic' })

    if (res.status == 200) {
      statistics.value = { ...res.data }
      console.log(res.data)
    } else {
      console.log('Error')
    }
  }


  return {
    statistic,
    statistics,

    getAllStatistic,
  }
})
