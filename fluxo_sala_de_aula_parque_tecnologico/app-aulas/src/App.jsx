import './App.css'
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {

  return (
    <>
      <Header />
        <main className="main">
          <Menu />
          <Card />
          <Card />
          <Card />

        </main>
      <Footer />
    </>
  )
}

export default App
