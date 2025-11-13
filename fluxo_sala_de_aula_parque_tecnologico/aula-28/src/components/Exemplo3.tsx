import { useState, useEffect } from "react";

export default function Exemplo3()
{
    const [nome, setNome] = useState("");

    useEffect(() => {
       
console.log("O texto mudou para:", nome);
    }, [nome]);

    return (
        <>
 
          <div>
                <input
                    type="text"
        
           placeholder="Digite algo"
                    value={nome}
         
          onChange={(e) => setNome(e.target.value)}
                />
        
   </div>
            <h2>Quando usar (quando algo muda):</h2>
           
<ul>
                <li>Para monitorar variáveis específicas</li>
               
<li>Executar uma ação apenas quando o valor muda</li>
            </ul>
         
  <hr />
        </>
    )
}
