import React, { useState } from 'react'
import styles from '../styles/App.module.css'

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const t = text.trim()
    if (!t) return
    onAdd(t)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Adicione uma nova tarefa"
        aria-label="Nova tarefa"
      />
      <button className={styles.addButton} type="submit">Adicionar</button>
    </form>
  )
}
