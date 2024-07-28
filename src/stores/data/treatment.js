import { defineStore } from 'pinia'
import { ref } from 'vue'
import { apiStore } from '../utils/api'

export const treatmentStore = defineStore('treatmentStore', () => {
  const api = apiStore()
  const treatment = ref({})
  const treatments = ref([])

  const addTreatment = async (payload) => {
    let res = await api.post({ url: 'treatment', data: payload })

    if (res.status == 201) {
      treatments.value = [{ ...res.data }, ...treatments.value]
    } else {
      console.log('Error')
    }
  }

  const getAllTreatment = async () => {
    let res = await api.get({ url: 'treatment' })

    if (res.status == 200) {
      treatments.value = [...res.data]
      console.log('Success')
    } else {
      console.log('Error')
    }
  }

  const getTreatment = async (id) => {
    return await api.get({
      url: 'treatment/' + id
    })
  }

  const deleteTreatment = async (id) => {
    await api.del({
      url: 'treatment/' + id
    })
    treatments.value = [...treatments.value.filter((product) => product._id != id)]
  }

  return {
    treatment,
    treatments,

    getAllTreatment,
    addTreatment,
    deleteTreatment,
    getTreatment
  }
})
