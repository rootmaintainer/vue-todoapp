<template>
  <div class="todo-list">
    <div v-if="todoStore.todos.length === 0" class="empty-message">
      タスクがありません。新しいタスクを追加してください。
    </div>
    <div v-else class="todos">
      <TodoItem 
        v-for="todo in todoStore.todos" 
        :key="todo.id" 
        :todo="todo"
      />
    </div>
  </div>
</template>

<script setup>
import { useTodoStore } from '../stores/todo'
import TodoItem from './TodoItem.vue'

const todoStore = useTodoStore()
</script>

<style scoped>
.todo-list {
  margin-top: 20px;
}

.empty-message {
  text-align: center;
  color: #666;
  padding: 20px;
  font-style: italic;
  background: #f9f9f9;
  border-radius: 4px;
}

.todos {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
