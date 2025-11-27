import React from 'react'
import styles from '../styles/App.module.css'

export default function TodoList({ todos, onToggle, onRemove }) {
  if (!todos.length) return <p className={styles.empty}>Nenhuma tarefa</p>

  return (
    <ul className={styles.list}>
      {todos.map(t => (
        <li key={t.id} className={styles.item}>
          <label className={t.done ? styles.done : ''}>
            <input type="checkbox" checked={t.done} onChange={() => onToggle(t.id)} />
            <span className={styles.text}>{t.text}</span>
          </label>
          <button className={styles.remove} onClick={() => onRemove(t.id)}>Remover</button>
        </li>
      ))}
    </ul>
  )
}
