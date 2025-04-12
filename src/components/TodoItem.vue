<template>
  <div class="todo-item" :class="{ completed: todo.completed }">
    <div class="todo-content">
      <input 
        type="checkbox" 
        :checked="todo.completed"
        @change="todoStore.toggleTodo(todo.id)"
      >
      <span v-if="!editing" @dblclick="startEditing" class="todo-text">
        {{ todo.text }}
      </span>
      <input 
        v-else
        v-model="editText"
        @blur="finishEditing"
        @keyup.enter="finishEditing"
        @keyup.esc="cancelEditing"
        ref="editInput"
        type="text"
        class="edit-input"
      >
    </div>
    <div class="todo-actions">
      <button @click="startEditing" class="edit-btn">編集</button>
      <button @click="todoStore.deleteTodo(todo.id)" class="delete-btn">削除</button>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useTodoStore } from '../stores/todo'

const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
})

const todoStore = useTodoStore()
const editing = ref(false)
const editText = ref(props.todo.text)

function startEditing() {
  editing.value = true
  editText.value = props.todo.text
  nextTick(() => {
    document.querySelector('.edit-input')?.focus()
  })
}

function finishEditing() {
  if (editing.value) {
    const text = editText.value.trim()
    if (text) {
      todoStore.updateTodo(props.todo.id, text)
    }
    editing.value = false
  }
}

function cancelEditing() {
  editing.value = false
  editText.value = props.todo.text
}
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.todo-item:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.todo-content {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.todo-text {
  flex: 1;
}

.completed .todo-text {
  text-decoration: line-through;
  color: #888;
}

.todo-actions {
  display: flex;
  gap: 8px;
}

button {
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.edit-btn {
  background-color: #2196F3;
  color: white;
}

.edit-btn:hover {
  background-color: #1976D2;
}

.delete-btn {
  background-color: #f44336;
  color: white;
}

.delete-btn:hover {
  background-color: #d32f2f;
}

input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.edit-input {
  flex: 1;
  padding: 4px 8px;
  border: 2px solid #2196F3;
  border-radius: 4px;
  font-size: 14px;
}

.edit-input:focus {
  outline: none;
}
</style>
