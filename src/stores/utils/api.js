import { defineStore } from "pinia";
import axiosClient from "./axiosClient";

export const apiStore = defineStore("apiStore", () => {
  // GET
  const get = async (payload) => {
    return axiosClient.get(payload.url, {
      params: {...payload.params}
    })
  }

  return {
    get
  }
})