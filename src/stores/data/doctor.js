import { defineStore } from 'pinia'
import { ref } from 'vue'
import { apiStore } from '../utils/api'

export const doctorStore = defineStore('doctorStore', () => {
  const api = apiStore()
  const doctor = ref({})
  const doctors = ref([])

  const addDoctor = async (payload) => {
    let res = await api.post({ url: 'doctor', data: payload })

    if (res.status == 201) {
      doctors.value = [{ ...res.data }, ...doctors.value]
    } else {
      console.log('Error')
    }
  }

  const getAllDoctor = async () => {
    let res = await api.get({ url: 'doctor' })

    if (res.status == 200) {
      doctors.value = [...res.data]
      console.log('Success')
    } else {
      console.log('Error')
    }
  }

  const getDoctor = async (id) => {
    return await api.get({
      url: 'doctor/' + id
    })
  }

  const deleteDoctor = async (id) => {
    await api.del({
      url: 'doctor/' + id
    })
    doctors.value = [...doctors.value.filter((product) => product._id != id)]
  }

  return {
    doctor,
    doctors,

    getAllDoctor,
    addDoctor,
    deleteDoctor,
    getDoctor
  }
})
