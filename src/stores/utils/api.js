import { defineStore } from 'pinia'
import axiosClient from './axiosClient'

export const apiStore = defineStore('apiStore', () => {
  // GET
  const get = async (payload) => {
    try {
      console.log(payload.url);
      return await axiosClient.get(`/${payload.url}`, {
        params: payload.params
      })
    } catch (err) {
      console.log(err)
    }
  }

  // POST
  const post = async (payload) => {
    try {
      return await axiosClient.post(`/${payload.url}`, payload.data)
    } catch (err) {
      console.log(err)
    }
  }

  // PUT
  const put = async (payload) => {
    try {
      return await axiosClient.put(`/${payload.url}`, payload.data)
    } catch (err) {
      console.log(err)
    }
  }

  // DELETE
  const del = async (payload) => {
    try {
      return await axiosClient.delete(`/${payload.url}`)
    } catch (err) {
      console.log(err)
    }
  }

  return {
    get,
    post,
    put,
    del
  }
})
