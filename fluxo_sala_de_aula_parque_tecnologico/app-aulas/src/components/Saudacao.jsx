// src/components/Saudacao.jsx
import React from 'react';

// Componente de exemplo usando desestruturação de props (forma limpa)
// Define valores padrão através de parâmetros padrão para facilitar o uso em aula
function Saudacao({ nome = 'Aluno', idade = 0 }) {
  return (
    <h1>Olá, {nome}! Você tem {idade} anos.</h1>
  );
}

// Se quiser adicionar checagem de tipos com PropTypes, rode:
// npm install prop-types
// e descomente as linhas abaixo
// import PropTypes from 'prop-types';
// Saudacao.propTypes = { nome: PropTypes.string, idade: PropTypes.number };

export default Saudacao;
