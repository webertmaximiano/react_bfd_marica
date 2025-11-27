import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Counter from './components/Counter'
import styles from './styles/App.module.css'

export default function App() {
  // estado principal com a lista de tarefas (lifting state up)
  const [todos, setTodos] = useState(() => {
    // carrega do localStorage se existir
    try {
      const raw = localStorage.getItem('ex09_todos')
      return raw ? JSON.parse(raw) : []
    } catch (e) {
      return []
    }
  })

  // persiste sempre que `todos` muda
  useEffect(() => {
    localStorage.setItem('ex09_todos', JSON.stringify(todos))
  }, [todos])

  function addTodo(text) {
    setTodos(prev => [...prev, { id: Date.now(), text, done: false }])
  }

  function toggleTodo(id) {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  function removeTodo(id) {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        <div className={styles.left}>
          <TodoForm onAdd={addTodo} />
          <TodoList todos={todos} onToggle={toggleTodo} onRemove={removeTodo} />
        </div>

        <aside className={styles.right}>
          <Counter todos={todos} />
        </aside>
      </main>
    </div>
  )
}
