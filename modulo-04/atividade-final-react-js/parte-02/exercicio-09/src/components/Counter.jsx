import React from 'react'

export default function Counter({ todos }) {
  const total = todos.length
  const done = todos.filter(t => t.done).length

  return (
    <div style={{ padding: 12 }}>
      <h3>Estatísticas</h3>
      <p>Total: {total}</p>
      <p>Concluídas: {done}</p>
    </div>
  )
}
