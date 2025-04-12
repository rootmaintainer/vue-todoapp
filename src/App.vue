<template>
  <div class="app">
    <header>
      <h1>TODOアプリ</h1>
      <div v-if="userStore.isAuthenticated" class="user-info">
        <span>{{ userStore.user.username }}</span>
        <button @click="handleLogout" class="logout-btn">ログアウト</button>
      </div>
    </header>
    <main>
      <LoginForm v-if="!userStore.isAuthenticated" />
      <template v-else>
        <TodoForm />
        <TodoList />
      </template>
    </main>
  </div>
</template>

<script setup>
import { useUserStore } from './stores/user'
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'
import LoginForm from './components/LoginForm.vue'

const userStore = useUserStore()

const handleLogout = () => {
  userStore.logout()
}
</script>

<style>
/* リセットとベースのスタイル */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

/* アプリケーションのスタイル */
#app {
  width: 100%;
  display: flex;
  justify-content: center;
}

.app {
  width: 100%;
  max-width: 600px;
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

header {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  color: #2c3e50;
  font-size: 2rem;
  margin: 20px 0;
}

main {
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.logout-btn {
  padding: 5px 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.logout-btn:hover {
  background-color: #d32f2f;
}
</style>