import React from 'react';

// Componente Nota: demonstra uso de expressões e operador ternário em props
function Nota({ aluno = 'Aluno', valor = 0 }) {
  const aprovado = valor >= 7;
  return (
    <div className="nota-box">
      <p style={{ margin: 0 }}>
        {/* Usando operador ternário para condição simples */}
        {aluno} tirou nota {valor} -{' '}
        <span className={aprovado ? 'nota-aprovado' : 'nota-reprovado'}>
          {aprovado ? 'Aprovado' : 'Reprovado'}
        </span>
      </p>
    </div>
  );
}

export default Nota;
