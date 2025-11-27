// Exercicio2.jsx
// Usa o componente Mensagem duas vezes com textos diferentes

import React from 'react';
import Mensagem from './Mensagem';

export default function Exercicio2() {
  return (
    <div>
      <h2>Exercício 2 — Uso de Props</h2>
      <Mensagem texto="Olá! Esta é a primeira mensagem." />
      <Mensagem texto="Esta é a segunda mensagem, diferente da primeira." />
    </div>
  );
}
