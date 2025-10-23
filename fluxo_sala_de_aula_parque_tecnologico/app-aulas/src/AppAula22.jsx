import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

function AppAula22() {
    return (
        <>
            <header>
                <h1>Meu Site em React</h1>
                <nav>
                    <Link to="/">Home</Link> |{" "}
                    <Link to="/sobre">Sobre</Link> |{" "}
                    <Link to="/contato">Contato</Link>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/contato" element={<Contato />} />
                </Routes>
            </main>

            <footer>
                <p>© 2025 HRIC Software - Todos os direitos reservados</p>
            </footer>
        </>
    );
}

export default AppAula22;