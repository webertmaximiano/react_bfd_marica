import { useState } from "react";

export default function Batalha() {
    const [heroi, setHeroi] = useState({ nome: "Herói", vida: 100 });
    const [vilao, setVilao] = useState({ nome: "Vilão", vida: 100 });

    const atacar = () => {
        const dano = 30;
        setVilao((dados) => ({
            ...dados,
            vida: Math.max(0, dados.vida - dano)
        }));
    };

    return (
        <div>
            <h2>Batalha entre {heroi.nome} e {vilao.nome}</h2>
            <p>{heroi.nome}: {heroi.vida}</p>
            <p>{vilao.nome}: {vilao.vida}</p>

            <button onClick={atacar}>Atacar</button>

            {vilao.vida <= 0 && <p>{heroi.nome} venceu!</p>}
        </div>
    );
}
