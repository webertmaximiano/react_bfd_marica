import React from 'react';

// Versão longa (sem desestruturação) para comparação didática
function SaudacaoLonga(props) {
  const { nome = 'Aluno', idade = 0 } = props;
  return (
    <h1>Olá, {nome}! Você tem {idade} anos.</h1>
  );
}

export default SaudacaoLonga;
