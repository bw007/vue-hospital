import { defineStore } from 'pinia'
import { ref } from 'vue'
import cookies from 'vue-cookies'

export const tokenStore = defineStore('tokenStore', () => {
  const token = ref('')

  const setToken = (value) => {
    token.value = value
    cookies.set("token", value)
  }

  return {
    token,
    
    setToken
  }
})