// Exercicio6.jsx
// Demonstração de "lifting state up": o estado `nome` fica no componente pai
// e é passado para os filhos como prop + função de atualização.

import React, { useState } from 'react';
import InputNome from './InputNome';
import ExibirNome from './ExibirNome';

export default function Exercicio6() {
  const [nome, setNome] = useState('');

  return (
    <div>
      <h2>Exercício 6 — Lifting State Up</h2>
      {/* InputNome é um componente controlado: o valor vem do pai e onNomeChange chama setNome */}
      <InputNome valor={nome} onNomeChange={setNome} />

      {/* ExibirNome recebe a prop nome e exibe a saudação */}
      <ExibirNome nome={nome} />
    </div>
  );
}
