import { defineStore } from 'pinia'
import { ref } from 'vue'
import { apiStore } from '../utils/api'

export const roomStore = defineStore('roomStore', () => {
  const api = apiStore()
  const room = ref({})
  const rooms = ref([])

  const addRoom = async (payload) => {
    let res = await api.post({ url: 'room', data: payload })

    if (res.status == 201) {
      rooms.value = [{ ...res.data }, ...rooms.value]
    } else {
      console.log('Error')
    }
  }

  const getAllRoom = async () => {
    let res = await api.get({ url: 'room' })

    if (res.status == 200) {
      rooms.value = [...res.data]
      console.log('Success')
    } else {
      console.log('Error')
    }
  }

  const getRoom = async (id) => {
    return await api.get({
      url: 'room/' + id
    })
  }

  const deleteRoom = async (id) => {
    await api.del({
      url: 'room/' + id
    })
    rooms.value = [...rooms.value.filter((product) => product._id != id)]
  }

  return {
    room,
    rooms,

    getAllRoom,
    addRoom,
    deleteRoom,
    getRoom
  }
})
