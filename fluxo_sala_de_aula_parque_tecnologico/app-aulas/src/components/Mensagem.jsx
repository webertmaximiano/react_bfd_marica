import React from 'react';

// Componente exemplo que demonstra uso de expressões JavaScript dentro de {}
// Mostra o nome em maiúsculas usando toUpperCase()
function Mensagem({ nome = '' }) {
  return (
    <p>Bem-vindo, {(String(nome)).toUpperCase()}!</p>
  );
}

export default Mensagem;
