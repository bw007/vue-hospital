import { defineStore } from 'pinia'
import { ref } from 'vue'
import cookies from 'vue-cookies'

import { tokenStore } from './token'
import router from '@/router'
import axiosClient from '../utils/axiosClient'

export const userStore = defineStore('userStore', () => {
  const user = ref({})
  const token_store = tokenStore()

  const findUser = async () => {
    try {
      if (cookies.isKey('token')) {
        token_store.setToken(cookies.get('token'))
        let res = await axiosClient.get('/auth/find')
        
        if (res.status == 401) {
          cookies.remove('token')

          setTimeout(() => {
            router.push('/auth')
          }, 1500)
        } else {
          console.log('Test')
        }
      } else {
        router.push({ name: 'Auth' })
      }
    } catch (error) {
      console.error(error.message)
      if (error.message == 'timeout of 5000ms exceeded') {
        cookies.remove('token')

        setTimeout(() => {
          router.push('/auth')
        }, 1500)
      }
    }
  }

  const login = async (payload) => {
    try {
      let res = await axiosClient.post('/auth/login', payload)

      if (res.status == 200) {
        user.value = { ...res.data?.user }
        cookies.set('token', res.data?.token)
        token_store.setToken(res.data?.token.slice())

        setTimeout(() => {
          router.push('/')
        }, 1500)
      } else {
        console.log('Error')
      }
    } catch (error) {
      console.error(payload)
    }
  }


  const reg = async (payload) => {
    try {
      let res = await axiosClient.post('/auth/reg', payload)

      if (res.status == 201) {
        console.log("Success");
      } else {
        console.log('Error')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return {
    user,

    findUser,
    reg,
    login
  }
})
