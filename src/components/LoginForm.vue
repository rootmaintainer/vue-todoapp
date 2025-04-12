<template>
  <div class="login-form">
    <h2>ログイン</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <input 
          v-model="username"
          type="text"
          placeholder="ユーザー名"
          required
        >
      </div>
      <div class="form-group">
        <input 
          v-model="password"
          type="password"
          placeholder="パスワード"
          required
        >
      </div>
      <button type="submit">ログイン</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user.js'

const userStore = useUserStore()
const username = ref('')
const password = ref('')
const error = ref('')

const handleSubmit = () => {
  if (userStore.login(username.value, password.value)) {
    error.value = ''
  } else {
    error.value = 'ユーザー名またはパスワードが正しくありません'
  }
}
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>