// Crie um novo arquivo, por exemplo, Usuario.jsx
import React from 'react';

// Desestruturamos as props. Definimos o valor padrão de 'cidade'
// diretamente no argumento da função: 'cidade = "Maricá"'
const Usuario = ({ nome, idade, cidade = "Maricá" }) => {
  return (
    <div>
      <p>
        <strong>{nome}</strong>, {idade} anos, mora em <em>{cidade}</em>.
      </p>
    </div>
  );
};

export default Usuario;