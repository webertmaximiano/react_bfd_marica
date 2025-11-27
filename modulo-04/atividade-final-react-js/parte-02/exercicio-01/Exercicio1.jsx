// Exercicio1.jsx
// Componente funcional React simples que exibe um título e um parágrafo
// Instruções: importe este componente em um projeto React (Vite/CRA) e renderize-o.

import React from 'react';

export default function Exercicio1() {
  // Substitua o nome e a experiência conforme desejado
  const nome = 'Webert Maximiano';
  const experiencia = 'Tenho alguma experiência com React: já criei componentes funcionais, usei hooks como useState e useEffect, e já trabalhei em pequenos projetos com Vite.';

  return (
    <div>
      <h1>{nome}</h1>
      <p>{experiencia}</p>
    </div>
  );
}
