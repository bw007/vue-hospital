import { defineStore } from 'pinia'
import { ref } from 'vue'
import { apiStore } from '../utils/api'

export const patsientStore = defineStore('patsientStore', () => {
  const api = apiStore()
  const patsient = ref({})
  const patsients = ref([])

  const addPatsient = async (payload) => {
    let res = await api.post({ url: 'patsient', data: payload })

    if (res.status == 201) {
      patsients.value = [{ ...res.data }, ...patsients.value]
    } else {
      console.log('Error')
    }
  }

  const getAllPatsient = async () => {
    let res = await api.get({ url: 'patsient' })

    if (res.status == 200) {
      patsients.value = [...res.data]
      console.log('Success')
    } else {
      console.log('Error')
    }
  }

  const getPatsient = async (id) => {
    return await api.get({
      url: 'patsient/' + id
    })
  }

  const deletePatsient = async (id) => {
    await api.del({
      url: 'patsient/' + id
    })
    patsients.value = [...patsients.value.filter((product) => product._id != id)]
  }

  return {
    patsient,
    patsients,

    getAllPatsient,
    addPatsient,
    deletePatsient,
    getPatsient
  }
})
