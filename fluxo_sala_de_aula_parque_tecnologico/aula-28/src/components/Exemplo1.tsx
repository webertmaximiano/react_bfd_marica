import { useState, useEffect } from "react";

export default function Exemplo1()
{
    const [contador, setContador] = useState(0);

    useEffect(() => {
     
  console.log("Componente renderizado!");
    });

    return (
        <>
    
       <h1>Contador: {contador}</h1>
            <button onClick={() =>
setContador(contador + 1)}>Aumentar</button>
            <h2>Quando usar (toda
renderização):</h2>
            <ul>
                <li>Toda vez que o botão é clicado
... o estado muda ... o componente re-renderiza ... o useEffect roda
novamente.</li>
            </ul>
            <hr />
        </>
    )
}
