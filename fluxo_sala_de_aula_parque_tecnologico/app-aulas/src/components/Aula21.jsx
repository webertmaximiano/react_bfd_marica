// src/components/Aula21.jsx

// Importamos os componentes que SÓ a Aula 21 usa
import Header from './Header';
import Card from './Card';
import Footer from './Footer';
import Menu from './Menu';

function Aula21() {
  return (
    // Usamos uma <section> para organizar o conteúdo desta aula
    <section className="aula-container">
      <h2>Conteúdo da Aula 21 (Componentes Estáticos)</h2>
      
      <Header />
      <main className="main">
        <Menu />
        <Card />
        <Card />
        <Card />
      </main>
      <Footer />
      
    </section>
  );
}

export default Aula21;