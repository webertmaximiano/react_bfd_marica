// src/components/Aula22.jsx

// --- Exercício 1 (o que já tínhamos) ---
import OlaAluno from './OlaAluno'; 
import Saudacao from './Saudacao';
import SaudacaoLonga from './SaudacaoLonga';

// --- NOVO: Importações para o Exercício 2 ---
import Cabecalho from './Cabecalho'; 
import Rodape from './Rodape';
import CardProduto from './CardProduto';
import AppAula22 from '../AppAula22';

// --- FIM DO NOVO ---

function Aula22() {
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
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', marginBottom: '16px' }}>
        <div style={{ flex: 1 }}>
          <strong>Forma longa</strong>
          <SaudacaoLonga nome="Carlos" idade={35} />
        </div>
        <div style={{ flex: 1 }}>
          <strong>Forma com desestruturação</strong>
          <Saudacao nome="Carlos" idade={35} />
        </div>
      </div>
      {/* --- Fim do Exercício 1 --- */}

      <hr /> {/* Uma linha para separar os exercícios */}

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

       <hr /> {/* Uma linha para separar as aulas */}

      {/* --- NOVO (Exercício 2) --- */}
      <h3>Exercício 4: Links</h3>
        <AppAula22 />
    </section>
  );
}

export default Aula22;