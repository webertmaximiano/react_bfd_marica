// InputNome.jsx
// Input controlado que chama uma função recebida via props sempre que o valor muda

import React from 'react';

export default function InputNome({ valor, onNomeChange }) {
  return (
    <div>
      <label>
        Nome:
        <input
          type="text"
          value={valor}
          onChange={(e) => onNomeChange(e.target.value)}
        />
      </label>
    </div>
  );
}
