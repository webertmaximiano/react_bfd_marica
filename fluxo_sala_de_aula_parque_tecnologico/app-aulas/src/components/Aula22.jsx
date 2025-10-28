// src/components/Aula22.jsx

// --- Exercício 1 (o que já tínhamos) ---
import OlaAluno from './OlaAluno'; 
import Saudacao from './Saudacao';
import SaudacaoLonga from './SaudacaoLonga';

// --- NOVO: Importações para o Exercício 2 ---
import Cabecalho from './Cabecalho'; 
import Rodape from './Rodape';
import CardProduto from './CardProduto';
import Mensagem from './Mensagem';
import AppAula22 from '../AppAula22';
import Nota from './Nota';
import Botao from './Botao';
import Aluno from './Aluno';

// --- FIM DO NOVO ---

function Aula22() {
  // Exemplo de função para demonstrar passagem de comportamento via props
  const salvar = () => {
    alert('Dados salvos com sucesso!');
  };

  return (
    <section className="aula-container">
      <h2>Exercícios da Aula 22</h2>
      
      {/* --- Exercício 1 (OlaAluno) --- */}
      <h3>Exercício 1: Props</h3>
      <OlaAluno nome="Maria" />
      <OlaAluno nome="João" />
      <OlaAluno nome="Ana" />
      
  {/* --- Demonstração: forma longa vs desestruturação --- */}
      <h4>Comparação: sem desestruturação (forma longa) x com desestruturação (forma limpa)</h4>
      <div className="example-row">
        <div className="example-box">
          <div className="example-title">Forma longa</div>
          <SaudacaoLonga nome="Carlos" idade={35} />
        </div>
        <div className="example-box">
          <div className="example-title">Forma com desestruturação</div>
          <Saudacao nome="Carlos" idade={35} />
        </div>
      </div>
      {/* --- Fim do Exercício 1 --- */}

  {/* --- Exemplo extra: expressões JS dentro de {} (conforme slide) --- */}
  <h4>Props com expressões JavaScript</h4>
  <p>Tudo dentro de {'{}'} é avaliado como JavaScript — você pode chamar métodos como <code>toUpperCase()</code>:</p>
  <div className="mensagem-box" style={{ marginBottom: 12 }}>
    <Mensagem nome="hygor" />
  </div>

      <hr />

      {/* --- Exemplo: Props com cálculos e condições (operador ternário) --- */}
      <h4>Props com cálculos e condições</h4>
      <p>Podemos até passar expressões matemáticas ou condições (ex.: operador ternário):</p>
      <div className="example-row">
        <div className="example-box">
          <div className="example-title">Exemplo 1</div>
          <Nota aluno="Marcio" valor={10} />
        </div>
        <div className="example-box">
          <div className="example-title">Exemplo 2</div>
          <Nota aluno="Juliana" valor={6} />
        </div>
      </div>

      <hr /> {/* Uma linha para separar os exercícios */}

      {/* --- Componentes reutilizáveis (exemplo Botao) --- */}
      <h3>Componentes Reutilizáveis e Personalizáveis com Props</h3>
      <p>Exemplo: criando um botão genérico:</p>
      <div className="example-row" style={{ marginBottom: 10 }}>
        <div className="example-box">
          <div className="example-title">Botões</div>
          <div style={{ marginTop: 8 }}>
            <Botao texto="Salvar" className="btn-green" />
            <Botao texto="Cancelar" className="btn-red" />
            <Botao texto="Ajuda" className="btn-gray" />
          </div>
        </div>
      </div>

      {/* Exemplo: adicionando comportamento (funções como props) */}
      <div className="example-row">
        <div className="example-box">
          <div className="example-title">Botão com comportamento</div>
          <div style={{ marginTop: 8 }}>
            {/* Definimos a função salvar dentro do componente para demonstração */}
            {/* Ao clicar, será executado o alert */}
            {/**/}
            <Botao texto="Salvar (aoClicar)" className="btn-green" aoClicar={salvar} />
          </div>
        </div>
      </div>

      {/* --- NOVO (Exercício 2) --- */}
      <h3>Exercício 2: Novos Componentes</h3>
      
      {/* 1. Importou e exibiu o Cabecalho */}
      <Cabecalho />
      
      {/* 2. Adicionou a div com o texto */}
      <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f0f0f4' }}>
        <p>Bem Vindo a Aula 22</p>
        <OlaAluno nome="João" />
      </div>
      
      {/* 3. Importou e exibiu o Rodape */}
      <Rodape />
      {/* --- FIM DO NOVO --- */}
     <hr /> {/* Uma linha para separar as aulas */}

      {/* --- NOVO (Exercício 2) --- */}
      <h3>Exercício 3: Passagem de Props</h3>
      <CardProduto nome="Produto 1" preco="R$ 10,00" />
      <CardProduto nome="Produto 2" preco="R$ 20,00" />
      <CardProduto nome="Produto 3" preco="R$ 30,00" />

      {/* --- Exercício 3 (Gabarito): componente Aluno --- */}
      <h4>Exercício 3 - Gabarito (Aluno)</h4>
      <p>Exemplo de uso do componente <code>Aluno</code> com diferentes props:</p>
      <div className="example-row">
        <div className="example-box">
          <Aluno nome="Webert" curso="React" nota={10} />
        </div>
        <div className="example-box">
          <Aluno nome="Ana" curso="JavaScript" nota={10} />
        </div>
        <div className="example-box">
          <Aluno nome="João" curso="CSS" nota={10} />
        </div>
      </div>

       <hr /> {/* Uma linha para separar as aulas */}

      {/* --- NOVO (Exercício 2) --- */}
      <h3>Exercício 4: Links</h3>
        <AppAula22 />
    </section>
  );
}

export default Aula22;