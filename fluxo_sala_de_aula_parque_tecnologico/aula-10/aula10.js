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
console.log("
Lista de Frutas (usando `for`):");

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

console.log("
Exemplo com `do...while`:");
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

console.log("
Lista de Produtos (usando `for...of`):");

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

console.log("
Propriedades do Carro (usando `for...in`):");

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
