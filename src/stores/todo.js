import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  // 状態（データ）の定義
  state: () => ({
    todos: []
  }),

  // アクション（データを変更するメソッド）の定義
  actions: {
    // 新しいTODOを追加
    addTodo(text) {
      this.todos.push({
        id: Date.now(),
        text,
        completed: false
      })
    },

    // TODOを削除
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },

    // TODOの完了状態を切り替え
    toggleTodo(id) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) {
        todo.completed = !todo.completed
      }
    },

    // TODOのテキストを更新
    updateTodo(id, text) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) {
        todo.text = text
      }
    }
  }
})