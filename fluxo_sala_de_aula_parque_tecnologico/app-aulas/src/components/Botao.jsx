import React from 'react';

// Componente Botao: reutilizável e personalizável via props
function Botao({ texto = 'Botão', cor_fundo, cor_texto, onClick, aoClicar, className = '' }) {
  // aceita tanto `onClick` quanto `aoClicar` (nome usado no material)
  const handler = aoClicar || onClick;
  const classes = `botao ${className}`.trim();
  const style = {};
  if (cor_fundo) style.backgroundColor = cor_fundo;
  if (cor_texto) style.color = cor_texto;

  return (
    <button onClick={handler} className={classes} style={style}>
      {texto}
    </button>
  );
}

export default Botao;
