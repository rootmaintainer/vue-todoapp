import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: false,
    user: null
  }),
  actions: {
    login(username, password) {
      // デモ用の簡単な認証
      if (username === 'demo' && password === 'password') {
        this.isAuthenticated = true
        this.user = { username }
        return true
      }
      return false
    },
    logout() {
      this.isAuthenticated = false
      this.user = null
    }
  }
})