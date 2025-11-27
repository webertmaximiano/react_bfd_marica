// Timer.jsx
// Componente que usa useEffect para incrementar um contador a cada 1 segundo

import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [tempo, setTempo] = useState(0);

  useEffect(() => {
    // cria intervalo que incrementa o tempo a cada 1000ms
    const id = setInterval(() => {
      setTempo(prev => prev + 1);
    }, 1000);

    // função de cleanup: limpa o intervalo quando o componente desmonta
    return () => clearInterval(id);
  }, []); // array de dependências vazio -> executa apenas no mount/unmount

  return (
    <div>
      <p>Tempo: {tempo} segundos</p>
    </div>
  );
}
