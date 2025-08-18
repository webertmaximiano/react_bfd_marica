# Aula 3: Ferramentas de Desenvolvimento, Memória e Variáveis

## Introdução

Agora que já entendemos como "pensar" para resolver problemas, vamos conhecer as ferramentas que usaremos no dia a dia e como os computadores armazenam as informações com as quais vamos trabalhar. Esta é a base para começarmos a programar.

---

## Ferramentas Essenciais do Desenvolvedor

Todo profissional tem seu kit de ferramentas. Para um desenvolvedor front-end, as principais são:

### 1. Navegador (Google Chrome, Firefox)

Não é apenas para navegar na internet. O navegador é nossa principal ferramenta de depuração e teste.

*   **DevTools (Aperte F12):** É um painel de desenvolvimento embutido no navegador. As abas mais importantes para nós no início são:
    *   **Console:** Para ver mensagens de erro e testar pequenos códigos JavaScript.
    *   **Elements:** Para inspecionar o HTML e o CSS da página, e até mesmo alterá-los em tempo real para ver como fica.

### 2. Editor de Código (Ex: Visual Studio Code)

É o programa onde escrevemos nosso código. Pense nele como um editor de texto superpoderoso, com funcionalidades como:

*   **Destaque de Sintaxe:** Colore o código para facilitar a leitura.
*   **Autocompletar:** Sugere código enquanto você digita.
*   **Extensões:** Pequenos "apps" que adicionam novas funcionalidades ao editor (ex: `Prettier` para formatação de código, `Live Server` para ver seu site atualizando ao vivo).

### 3. Terminal (Linha de Comando)

É a forma mais direta de "conversar" com o computador. Usamos para dar comandos como:

*   Navegar entre pastas.
*   Executar comandos do Git (`git add`, `git commit`, `git push`).
*   Iniciar servidores de desenvolvimento.

---

## Como o Computador Guarda Informações?

Imagine a **Memória RAM** do seu computador como um armário gigante cheio de gavetas vazias. Cada gaveta tem um endereço único e pode guardar **uma** informação por vez.

Quando queremos que o computador se lembre de algo (um nome, um número, etc.), ele procura uma gaveta vazia, guarda a informação lá dentro e anota o endereço daquela gaveta.

O problema é que esses endereços são complicados (ex: `0x7fff5fbffc5c`). Seria impossível para nós, humanos, lembrarmos de todos eles.

É aí que entram as **variáveis**.

---

## O que são Variáveis?

Uma **variável** é simplesmente um **rótulo** ou um **nome amigável** que damos para uma "gaveta" da memória. Em vez de usar o endereço complicado, usamos o nome que criamos.

### Declarando Variáveis em JavaScript

Em JavaScript, usamos principalmente duas palavras-chave para criar (declarar) variáveis:

*   `let`: Usada para valores que **podem mudar** ao longo do tempo.
*   `const`: Usada para valores constantes, que **não vão mudar** depois de definidos.

**Regra geral:** Comece usando `const`. Se perceber que o valor precisa ser alterado depois, mude para `let`.

### Exemplo Prático

```javascript
// Usando 'let' porque a idade de uma pessoa muda a cada ano.
let idade = 25;

// O valor pode ser atualizado.
idade = 26;

// Usando 'const' porque o nome de uma pessoa geralmente não muda.
const nome = "Ana";

// Tentar fazer isso geraria um ERRO no programa!
// nome = "Clara";

// Podemos usar as variáveis para exibir informações.
console.log(nome); // Exibiria "Ana" no console
console.log(idade); // Exibiria 26 no console
```

### Tipos de Dados Básicos

As variáveis podem guardar diferentes tipos de "caixas" de informação:

*   **String:** Para guardar texto. O valor deve estar sempre entre aspas (`""` ou `''`).
    *   `const cidade = "Maricá";`

*   **Number:** Para guardar números (inteiros ou com casas decimais).
    *   `let quantidadeDeAlunos = 30;`
    *   `const preco = 19.99;`

*   **Boolean:** Para guardar apenas dois valores possíveis: `true` (verdadeiro) ou `false` (falso).
    *   `const aulaIniciada = true;`
    *   `let usuarioLogado = false;`

## Conclusão

Dominar suas ferramentas e entender como usar variáveis para armazenar e manipular informações são os primeiros passos concretos na programação. Na próxima aula, vamos usar esses conceitos para realizar operações e tomar decisões no nosso código.
