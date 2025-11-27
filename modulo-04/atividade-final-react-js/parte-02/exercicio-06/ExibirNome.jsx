// ExibirNome.jsx
// Recebe a prop `nome` e exibe uma saudação simples

import React from 'react';

export default function ExibirNome({ nome }) {
  return (
    <div>
      <p>Olá, {nome ? nome : 'visitante'}!</p>
    </div>
  );
}
