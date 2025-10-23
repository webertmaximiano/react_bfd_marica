// src/App.jsx

// Importamos os estilos globais
import './App.css'; 

// Importamos nossos novos componentes de "Aula"
import Aula21 from './components/Aula21';
import Aula22 from './components/Aula22';


function App() {
  return (
    <>
      <h1>Meu Curso de React - Exercícios</h1>
      
      {/* Exibindo a Aula 21 */}
      <Aula21 />
      
      <hr /> {/* Uma linha para separar as aulas */}
      
      {/* Exibindo a Aula 22 */}
      <Aula22 />
    </>
  );
}

export default App;