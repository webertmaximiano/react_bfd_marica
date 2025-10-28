// src/components/OlaAluno.jsx Aula 22 - exercicio 1

// Note o { nome } nos parênteses. 
// Isso se chama "desestruturação de props". 
// É um jeito moderno de dizer "eu espero receber uma propriedade chamada 'nome'".
function OlaAluno({ nome = 'Maria' }) {
  // 1. Criando a data atual, como pedido no exercício
  const dataAtual = new Date().toLocaleDateString();

  return (
    <div>
      {/* 2. Usando {} para exibir a saudação com o nome */}
      <h2>Olá, {nome}!</h2>

      {/* 3. Usando {} para exibir a data formatada */}
      <p>Hoje é {dataAtual}.</p>
    </div>
  );
}

export default OlaAluno;