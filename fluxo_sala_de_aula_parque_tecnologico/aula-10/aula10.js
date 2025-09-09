console.log("Arquivo aula10.js carregado! Foco em Estruturas de Repetição.");

/*
=======================================
  AULA 10 - ESTRUTURAS DE REPETIÇÃO
=======================================

Estruturas de repetição (ou loops) são comandos que nos permitem executar um bloco de código
várias vezes. São fundamentais para tarefas como percorrer uma lista de itens, fazer cálculos
repetidos ou gerar conteúdo dinamicamente.

*/

// --- 1. O LOOP `for` ---
// O loop `for` é a estrutura de repetição mais comum. É ideal para quando você sabe
// exatamente quantas vezes quer que o loop seja executado.

// Sintaxe: for (inicialização; condição; incremento) { ... }
// - inicialização: Executa uma vez, antes do loop começar. Geralmente, cria uma variável contadora.
// - condição: Verificada antes de cada iteração. Se for `true`, o loop continua. Se for `false`, o loop para.
// - incremento: Executa no final de cada iteração. Geralmente, aumenta o contador.

console.log("### 1. Exemplo com `for` ###");

// Exemplo 1: Contar de 1 a 5
for (let i = 1; i <= 5; i++) {
    console.log(`Contagem do 'for': ${i}`);
}

// Exemplo 2: Percorrer um array para exibir uma lista de frutas
const frutas = ["Maçã", "Banana", "Laranja", "Morango"];
console.log(`
Lista de Frutas (usando 'for'):`);

let listaHtmlFrutas = '<ul>';
for (let i = 0; i < frutas.length; i++) {
    console.log(`- ${frutas[i]}`);
    listaHtmlFrutas += `<li>${frutas[i]}</li>`; // Adiciona cada fruta como um item de lista HTML
}
listaHtmlFrutas += '</ul>';

// Inserindo a lista de frutas no HTML
document.getElementById('for-output').innerHTML = listaHtmlFrutas;


console.log("--------------------------------------------------");


// --- 2. O LOOP `while` ---
// O loop `while` (enquanto) executa um bloco de código ENQUANTO uma condição específica for verdadeira.
// É ideal para quando você não sabe quantas vezes o loop precisa rodar, mas sabe a condição de parada.

// Sintaxe: while (condição) { ... }

console.log("### 2. Exemplo com `while` ###");

let contador = 1;
let contagemWhile = '';

while (contador <= 5) {
    console.log(`Contagem do 'while': ${contador}`);
    contagemWhile += `Contagem: ${contador}<br>`;
    contador++; // IMPORTANTE: Não se esqueça de incrementar o contador, ou você criará um loop infinito!
}

document.getElementById('while-output').innerHTML = contagemWhile;


// --- CURIOSIDADE: O LOOP `do...while` ---
// É uma variação do `while`. A principal diferença é que o `do...while` garante que o bloco de código
// seja executado PELO MENOS UMA VEZ, pois a condição é verificada no final.

console.log(`
Exemplo com 'do...while':`);
let j = 6; // Mesmo que a condição (j <= 5) seja falsa, ele vai rodar uma vez.
do {
    console.log(`Contagem do 'do...while': ${j}`);
    j++;
} while (j <= 5);


console.log("--------------------------------------------------");


// --- 3. O LOOP `for...of` ---
// Introduzido no ES6, o `for...of` é a maneira moderna e mais legível de iterar sobre
// "iteráveis", como Arrays, Strings, etc. Ele acessa diretamente o VALOR de cada item.

console.log("### 3. Exemplo com `for...of` ###");

const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse sem fio", preco: 85 },
    { nome: "Teclado Mecânico", preco: 250 }
];

console.log("Lista de Produtos (usando `for...of`):");

let cardsProdutosHtml = '';
for (const produto of produtos) {
    // Para cada 'produto' na lista de 'produtos', faça:
    console.log(`Produto: ${produto.nome}, Preço: R$ ${produto.preco}`);
    
    // Criando um "card" de produto para injetar no HTML
    cardsProdutosHtml += `
        <div class="product-card">
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
        </div>
    `;
}

document.getElementById('for-of-output').innerHTML = cardsProdutosHtml;


console.log("--------------------------------------------------");


// --- 4. O LOOP `for...in` ---
// O loop `for...in` é usado para iterar sobre as PROPRIEDADES (ou "chaves") de um objeto.
// Não é recomendado para arrays, use `for` ou `for...of` para eles.

console.log("### 4. Exemplo com `for...in` ###");

const carro = {
    marca: "Ford",
    modelo: "Mustang",
    ano: 1969,
    cor: "Vermelho"
};

console.log("Propriedades do Carro (usando `for...in`):");

let listaPropriedadesHtml = '<ul class="property-list">';
for (const chave in carro) {
    // Para cada 'chave' no objeto 'carro', faça:
    // 'chave' terá o valor "marca", depois "modelo", "ano", etc.
    // para acessar o valor, usamos a notação de colchetes: carro[chave]
    
    console.log(`${chave}: ${carro[chave]}`);

    listaPropriedadesHtml += `
        <li>
            <span class="key">${chave}:</span> 
            <span>${carro[chave]}</span>
        </li>
    `;
}
listaPropriedadesHtml += '</ul>';

document.getElementById('for-in-output').innerHTML = listaPropriedadesHtml;

console.log("--------------------------------------------------");

// --- 5. EXERCÍCIO PRÁTICO DE CONDICIONAIS ---
console.log("### 5. Exercício Prático: Condicionais de Temperatura ###");

let temperatura = 30;
let resultadoExercicio = '';

console.log(`A temperatura atual é: ${temperatura}°C`);

if (temperatura < 10) {
    resultadoExercicio = "Está muito frio.";
} else if (temperatura >= 10 && temperatura <= 25) {
    resultadoExercicio = "O clima está agradável.";
} else { // Se não for menor que 10 e nem estiver entre 10 e 25, só pode ser maior que 25.
    resultadoExercicio = "Está calor.";
}

console.log(resultadoExercicio);

// Exibindo o resultado no HTML
document.getElementById('exercicio-output').innerHTML = `
    <p>A temperatura é de <strong>${temperatura}°C</strong>.</p>
    <p><strong>Resultado:</strong> ${resultadoExercicio}</p>
`;

console.log("--------------------------------------------------\n");

// --- 6. BOAS PRÁTICAS: let, const, var e Strings ---
console.log("### 6. Boas Práticas: Declaração de Variáveis e Strings ###");

/*
  Em JavaScript, existem três palavras-chave para declarar variáveis: `var`, `let` e `const`.
  Cada uma tem suas particularidades de escopo e mutabilidade.

  `var` (Antigo - ES5 e anteriores):
  - Escopo de função: Variáveis declaradas com `var` são acessíveis em toda a função onde foram declaradas,
    ignorando blocos como `if` ou `for`.
  - Hoisting: São "içadas" para o topo do seu escopo, o que significa que você pode usá-las antes de declará-las,
    mas seu valor será `undefined` até a linha da declaração.
  - Pode ser redeclarada e reatribuída no mesmo escopo, o que pode levar a bugs.
  - Exemplo:
*/
var nomeAntigo = "João";
var nomeAntigo = "Maria"; // Redeclaração permitida (pode causar confusão)
console.log("var nomeAntigo:", nomeAntigo); // Saída: Maria

if (true) {
    var escopoVar = "Acessível fora do bloco";
}
console.log("var escopoVar (fora do if):", escopoVar); // Saída: Acessível fora do bloco

/*
  `let` (Moderno - ES6+):
  - Escopo de bloco: Variáveis declaradas com `let` são acessíveis apenas dentro do bloco (`{}`) onde foram declaradas.
  - Não é içada (Temporal Dead Zone): Não pode ser usada antes de ser declarada.
  - Pode ser reatribuída, mas não pode ser redeclarada no mesmo escopo.
  - É a escolha padrão para variáveis que precisam ter seu valor alterado.
  - Exemplo:
*/
let idade = 30;
// let idade = 31; // Erro: 'idade' já foi declarada
idade = 31; // Reatribuição permitida
console.log("let idade:", idade); // Saída: 31

if (true) {
    let escopoLet = "Acessível apenas dentro do bloco";
    console.log("let escopoLet (dentro do if):", escopoLet);
}
// console.log("let escopoLet (fora do if):", escopoLet); // Erro: escopoLet is not defined

/*
  `const` (Moderno - ES6+):
  - Escopo de bloco: Assim como `let`, é acessível apenas dentro do bloco onde foi declarada.
  - Não é içada (Temporal Dead Zone).
  - Não pode ser reatribuída nem redeclarada após sua inicialização.
  - **IMPORTANTE:** Para objetos e arrays, `const` garante que a *referência* ao objeto/array não mude.
    O *conteúdo* do objeto/array ainda pode ser modificado.
  - É a escolha padrão para variáveis cujo valor não deve mudar.
  - Exemplo:
*/
const PI = 3.14159;
// PI = 3.0; // Erro: Assignment to constant variable.
console.log("const PI:", PI); // Saída: 3.14159

const usuario = { nome: "Carlos", idade: 28 };
usuario.idade = 29; // Conteúdo do objeto pode ser modificado
// usuario = { nome: "Ana" }; // Erro: Assignment to constant variable.
console.log("const usuario (idade modificada):", usuario);

/*
  ### Boas Práticas para Declaração de Variáveis:
  1.  **Sempre use `const` por padrão.** Se você sabe que o valor de uma variável não vai mudar, use `const`. Isso torna seu código mais previsível e seguro.
  2.  **Use `let` apenas quando precisar reatribuir um valor.** Se a variável precisa ser atualizada (ex: um contador em um loop), `let` é a escolha correta.
  3.  **Evite `var`.** Em código moderno, `var` é raramente usada devido aos seus problemas de escopo e redeclaração.

*/

console.log("--------------------------------------------------\n");

/*
  ### Boas Práticas para Strings em JavaScript:
  As strings podem ser definidas com aspas simples (`''`), aspas duplas (`""`) ou template literals (`` ` ``).
  A escolha entre aspas simples e duplas é geralmente uma questão de preferência pessoal ou padrão do projeto.
  No entanto, os template literals oferecem funcionalidades poderosas e são a escolha preferencial em muitos casos.

  1.  **Consistência:** Escolha um estilo (aspas simples ou duplas) e mantenha-o em todo o seu projeto.
      Ferramentas de linting (como ESLint) podem ajudar a impor isso.

  2.  **Template Literals (`` ` ``): A Escolha Moderna:**
      -   **Interpolação de Variáveis:** Permitem incorporar expressões e variáveis diretamente na string usando `${}`.
      -   **Strings Multi-linha:** Facilitam a criação de strings que ocupam várias linhas sem a necessidade de `\n`.
      -   **Evita Escapes Complexos:** Se sua string contém muitas aspas simples ou duplas, o template literal pode evitar a necessidade de escapar.

      Exemplos:
*/
const nome = "Alice";
const saudacao = `Olá, ${nome}! Bem-vinda.`; // Interpolação
console.log("Template Literal (interpolação):", saudacao);

const mensagemMultiLinha = `
  Esta é uma mensagem
  que ocupa várias linhas
  sem precisar de \n.
`;
console.log("Template Literal (multi-linha):", mensagemMultiLinha);

const fraseComAspas = `Ele disse: "Isso é ótimo!" e depois 'concordou'.`; // Não precisa escapar aspas
console.log("Template Literal (com aspas):", fraseComAspas);

/*
  3.  **Evitando o Erro "Invalid or unexpected token":**
      O erro que você encontrou (e que corrigimos) geralmente ocorre quando há uma confusão
      entre o tipo de aspas que delimita a string e o conteúdo interno.

      -   Se você usa aspas duplas (`""`) para delimitar a string, e precisa de aspas duplas dentro,
          você deve escapá-las (`\"`). Ex: `"Ele disse: \\\"Olá\\\""`.
      -   Se você usa aspas simples (`''`) para delimitar a string, e precisa de aspas simples dentro,
          você deve escapá-las (`\'`). Ex: `'It\'s a beautiful day'`.
      -   **A melhor prática para evitar isso é usar Template Literals (`` ` ``)**, pois eles permitem
          o uso de aspas simples e duplas livremente dentro da string sem a necessidade de escapar,
          a menos que você precise de um backtick literal (`` ` ``) dentro de um template literal,
          aí sim precisaria escapá-lo (`` \` ``).

      Exemplo do que causou o erro e a solução:
      // Problema: console.log("Lista de Frutas (usando `for`):");
      // Solução:  console.log(`Lista de Frutas (usando 'for'):`); // Usando template literal e aspas simples internas
*/

console.log("--------------------------------------------------\n");

// --- 7. ESTRUTURA CONDICIONAL `switch` ---
console.log("### 7. Estrutura Condicional `switch` ###");

/*
  A estrutura `switch` é uma alternativa ao `if...else if...else` quando você tem
  múltiplas condições baseadas no valor de uma única variável. Ela torna o código
  mais legível em cenários onde há muitos `else if` encadeados.
*/

let mes = 2; // Vamos usar um número para representar o mês (ex: 1=Jan, 2=Fev, etc.)
let estacaoDoAno = "";
let outputSwitch = "";

console.log(`Verificando a estação para o mês: ${mes}`);

switch (mes) {
    case 12:
    case 1:
    case 2:
        estacaoDoAno = "Verão";
        break;
    case 3:
    case 4:
    case 5:
        estacaoDoAno = "Outono";
        break;
    case 6:
    case 7:
    case 8:
        estacaoDoAno = "Inverno";
        break;
    case 9:
    case 10:
    case 11:
        estacaoDoAno = "Primavera";
        break;
    default:
        estacaoDoAno = "Opção inválida. Por favor, insira um número de 1 a 12.";
}

outputSwitch = `Mês: ${mes} -> Estação: ${estacaoDoAno}`;
console.log(outputSwitch);

// Exibindo o resultado no HTML
document.getElementById('switch-output').innerHTML = `
    <p>Mês escolhido: <strong>${mes}</strong></p>
    <p>Estação do Ano: <strong>${estacaoDoAno}</strong></p>
`;