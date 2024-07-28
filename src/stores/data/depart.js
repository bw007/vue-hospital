import { defineStore } from 'pinia'
import { ref } from 'vue'
import { apiStore } from '../utils/api'

export const departStore = defineStore('departStore', () => {
  const api = apiStore()
  const depart = ref({})
  const departs = ref([])

  const addDepart = async (payload) => {
    let res = await api.post({ url: 'department', data: payload })

    if (res.status == 201) {
      departs.value = [{ ...res.data }, ...departs.value]
    } else {
      console.log('Error')
    }
  }

  const getAllDepart = async () => {
    let res = await api.get({ url: 'department' })

    if (res.status == 200) {
      departs.value = [...res.data]
      console.log('Success')
    } else {
      console.log('Error')
    }
  }

  const getDepart = async (id) => {
    return await api.get({
      url: 'department/' + id
    })
  }

  const deleteDepart = async (id) => {
    await api.del({
      url: 'department/' + id
    })
    departs.value = [...departs.value.filter((product) => product._id != id)]
  }

  return {
    depart,
    departs,

    getAllDepart,
    addDepart,
    deleteDepart,
    getDepart
  }
})
