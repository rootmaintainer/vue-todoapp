<template>
  <div class="app">
    <header>
      <h1>TODOアプリ</h1>
    </header>
    <main>
      <!-- これらのコンポーネントはこれから作成します -->
      <TodoForm />
      <TodoList />
    </main>
  </div>
</template>

<script setup>
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'
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
</style>