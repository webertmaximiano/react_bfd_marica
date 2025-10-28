import React from 'react';

// Componente Botao: reutilizável e personalizável via props
function Botao({ texto = 'Botão', cor_fundo = '#007bff', cor_texto = '#ffffff', onClick, aoClicar }) {
  // aceita tanto `onClick` quanto `aoClicar` (nome usado no material)
  const handler = aoClicar || onClick;
  return (
    <button
      onClick={handler}
      style={{
        backgroundColor: cor_fundo,
        color: cor_texto,
        border: 'none',
        padding: '8px 14px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: 600,
        marginRight: '8px'
      }}
    >
      {texto}
    </button>
  );
}

export default Botao;
