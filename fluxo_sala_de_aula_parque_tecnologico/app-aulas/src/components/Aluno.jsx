import React from 'react';

// Componente Aluno: exibe nome, curso e nota (exercício 3 - gabarito)
function Aluno({ nome = 'Aluno', curso = 'Curso', nota = 0 }) {
  return (
    <p>O aluno {nome} do curso {curso} tirou nota {nota}.</p>
  );
}

export default Aluno;
