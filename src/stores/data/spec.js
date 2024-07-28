import { defineStore } from 'pinia'
import { ref } from 'vue'
import { apiStore } from '../utils/api'

export const specStore = defineStore('specStore', () => {
  const api = apiStore()
  const spec = ref({})
  const specs = ref([])

  const addSpec = async (payload) => {
    let res = await api.post({ url: 'spec', data: payload })

    if (res.status == 201) {
      specs.value = [{ ...res.data }, ...specs.value]
    } else {
      console.log('Error')
    }
  }

  const getAllSpec = async () => {
    let res = await api.get({ url: 'spec' })

    if (res.status == 200) {
      specs.value = [...res.data]
      console.log('Success')
    } else {
      console.log('Error')
    }
  }

  const getSpec = async (id) => {
    return await api.get({
      url: 'spec/' + id
    })
  }

  const deleteSpec = async (id) => {
    await api.del({
      url: 'spec/' + id
    })
    specs.value = [...specs.value.filter((product) => product._id != id)]
  }

  return {
    spec,
    specs,

    getAllSpec,
    addSpec,
    deleteSpec,
    getSpec
  }
})
