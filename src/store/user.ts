import { defineStore } from "pinia";

export default defineStore('user', {
  state: () => {
    return {
      name: 'Ocean'
    }
  },

  getters: {
    get(state) {
      return state.name
    }
  },

  actions:{
    
  }
})
