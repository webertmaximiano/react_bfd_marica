import React, { useState } from 'react';

// Componente simples de Lista de Tarefas
// - input controlado
// - botão "Adicionar"
// - array de tarefas no estado
// - renderização dinâmica usando .map()
export default function ListaTarefas() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {
    const texto = tarefa.trim();
    if (!texto) return;
    setTarefas(prev => [...prev, { id: Date.now(), texto }]);
    setTarefa('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    adicionarTarefa();
  }

  return (
    <div>
      <h3>Lista de Tarefas</h3>
      <form onSubmit={handleSubmit} style={{ marginBottom: 12 }}>
        <input
          type="text"
          value={tarefa}
          onChange={e => setTarefa(e.target.value)}
          placeholder="Digite uma tarefa"
          aria-label="Nova tarefa"
          style={{ marginRight: 8 }}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tarefas.map(item => (
          <li key={item.id}>{item.texto}</li>
        ))}
      </ul>
    </div>
  );
}
