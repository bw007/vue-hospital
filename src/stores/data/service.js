import { defineStore } from 'pinia'
import { ref } from 'vue'
import { apiStore } from '../utils/api'

export const serviceStore = defineStore('serviceStore', () => {
  const api = apiStore()
  const service = ref({})
  const services = ref([])

  const addService = async (payload) => {
    let res = await api.post({ url: 'service', data: payload })

    if (res.status == 201) {
      services.value = [{ ...res.data }, ...services.value]
    } else {
      console.log('Error')
    }
  }

  const getAllService = async () => {
    let res = await api.get({ url: 'service' })

    if (res.status == 200) {
      services.value = [...res.data]
      console.log('Success')
    } else {
      console.log('Error')
    }
  }

  const getService = async (id) => {
    return await api.get({
      url: 'service/' + id
    })
  }

  const deleteService = async (id) => {
    await api.del({
      url: 'service/' + id
    })
    services.value = [...services.value.filter((product) => product._id != id)]
  }

  return {
    service,
    services,

    getAllService,
    addService,
    deleteService,
    getService
  }
})
