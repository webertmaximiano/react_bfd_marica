// Formulario.jsx
// Formulário controlado simples usando useState

import React, { useState } from 'react';

export default function Formulario() {
  const [valor, setValor] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Valor digitado:', valor);
    // opcional: limpar o input
    // setValor('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Digite algo:
        <input
          type="text"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}
