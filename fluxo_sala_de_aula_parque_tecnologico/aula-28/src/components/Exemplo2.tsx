import { useEffect } from "react";

export default function Exemplo2() {
   
useEffect(() => {
        console.log("Executa apenas uma vez (montagem).");
    },
[]);

    return (
        <>
            <h2>Quando usar (somente na
montagem):</h2>
            <ul>
                <li>Para buscar dados iniciais
API</li>
                <li>Para configurar algo ao iniciar (ex: título da aba)</li>
 
              <li>Para registrar eventos (scroll, resize etc.)</li>
           
</ul>
            <hr />
        </>
    )
}
