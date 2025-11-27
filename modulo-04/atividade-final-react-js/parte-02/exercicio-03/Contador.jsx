// Contador.jsx
// Componente simples que demonstra estado com useState

import React, { useState } from 'react';

export default function Contador() {
  const [numero, setNumero] = useState(0);

  return (
    <div>
      <h2>Contador</h2>
      <p>Valor: {numero}</p>
      <button onClick={() => setNumero(prev => prev + 1)}>+1</button>
      <button onClick={() => setNumero(prev => prev - 1)}>-1</button>
    </div>
  );
}
