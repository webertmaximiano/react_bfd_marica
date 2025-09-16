console.log("Arquivo script.js da Aula 12 carregado! Foco em Funções e Box Model.");

/*
=======================================
  AULA 12 - FUNÇÕES EM JAVASCRIPT
=======================================

Funções são blocos de código reutilizáveis que realizam uma tarefa específica.
Elas ajudam a organizar o código, torná-lo mais legível e evitar repetições (DRY - Don't Repeat Yourself).

*/

// --- 1. Declaração de Função (Function Declaration) ---
// A forma mais comum de definir uma função. Ela é "içada" (hoisted), o que significa
// que você pode chamá-la antes de sua declaração no código.

function saudar(nome) {
    console.log(`Olá, ${nome}! Bem-vindo(a) à Aula 12.`);
    return `Saudação para ${nome} concluída.`;
}

// Exibindo no HTML
document.getElementById('funcoes-output').innerHTML += `<p>${saudar("Maria")}</p>`;

/*
// --- 2. Expressão de Função (Function Expression) ---
// Uma função definida como parte de uma expressão, geralmente atribuída a uma variável.
// Não é "içada" como a declaração de função, então precisa ser definida antes de ser chamada.

const somar = function(a, b) {
    return a + b;
};

console.log("Resultado da soma (Function Expression):", somar(5, 3));


// --- 3. Arrow Functions (ES6+) ---
// Uma sintaxe mais concisa para escrever expressões de função, especialmente útil para funções curtas.
// Não possuem seu próprio `this` (herdam do escopo pai) e não são "içadas".

const multiplicar = (a, b) => a * b;

console.log("Resultado da multiplicação (Arrow Function):", multiplicar(4, 2));


// --- 4. Parâmetros e Argumentos ---
// Parâmetros são os nomes listados na definição da função.
// Argumentos são os valores reais passados para a função quando ela é chamada.

function exibirInfo(nome, idade, cidade = "Não informada") { // 'cidade' tem um valor padrão
    console.log(`Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`);
}

exibirInfo("Pedro", 25);
exibirInfo("Ana", 30, "Rio de Janeiro");


// --- 5. Retorno de Valores (return) ---
// A palavra-chave `return` encerra a execução da função e especifica um valor a ser retornado
// para o local onde a função foi chamada.

function calcularMedia(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    return media;
}

let resultadoMedia = calcularMedia(7, 9);
console.log("Média calculada:", resultadoMedia);


// --- 6. Escopo de Variáveis em Funções ---
// Variáveis declaradas dentro de uma função (com `let` ou `const`) têm escopo local,
// ou seja, só são acessíveis dentro daquela função.

function exemploEscopo() {
    let variavelLocal = "Eu sou local";
    console.log(variavelLocal);
}

ejemploEscopo();
// console.log(variavelLocal); // Erro: variavelLocal is not defined


// --- BOAS PRÁTICAS COM FUNÇÕES ---
// - **Nomes Descritivos:** Use nomes que indiquem claramente o que a função faz (ex: `calcularTotal`, `validarEmail`).
// - **Funções Pequenas e Focadas:** Cada função deve fazer uma única coisa bem feita.
// - **Evitar Efeitos Colaterais:** Funções devem, idealmente, não modificar variáveis fora de seu escopo (a menos que seja intencional e bem controlado).
// - **Comentários:** Explique a lógica complexa ou o propósito de funções não óbvias.


=======================================
  BOX MODEL (Revisão)
=======================================

O Box Model do CSS descreve como os elementos HTML são renderizados como caixas retangulares.
Ele é composto por quatro partes principais, de dentro para fora:

1.  **Content (Conteúdo):** A área onde o conteúdo real do elemento (texto, imagens) é exibido.
2.  **Padding (Preenchimento):** O espaço entre o conteúdo e o borda do elemento. É transparente e adiciona espaço interno.
3.  **Border (Borda):** A linha que envolve o padding e o conteúdo. Pode ter estilo, largura e cor.
4.  **Margin (Margem):** O espaço fora da borda do elemento, usado para separar um elemento de outros elementos. É transparente e adiciona espaço externo.

Você pode inspecionar o elemento de exemplo no `index.html` usando as ferramentas de desenvolvedor do navegador (F12) para visualizar cada uma dessas partes.
*/

console.log("--------------------------------------------------\n");

// --- EXERCÍCIO: FUNÇÃO DOBRAR ---
console.log("### EXERCÍCIO: Função 'dobrar' ###");

/*
  Crie uma função chamada `dobrar` que recebe um número como parâmetro
  e exibe o dobro desse número no console.log.
*/

function dobrar(numero) {
    const resultado = numero * 2;
    console.log(`O dobro de ${numero} é ${resultado}.`);
    return resultado; // Retorna o valor para que possa ser usado ou exibido no HTML
}

// Chamando a função com um exemplo
const numeroOriginal = 7;
const dobroDoNumero = dobrar(numeroOriginal);

// Exibindo o resultado no HTML
document.getElementById('funcoes-output').innerHTML += `
    <p>Exercício "dobrar": O dobro de ${numeroOriginal} é <strong>${dobroDoNumero}</strong>.</p>
`;

console.log("--------------------------------------------------\n");

// --- EXERCÍCIO: FUNÇÃO DOBRAR INTERATIVA ---
console.log("### EXERCÍCIO: Função 'dobrar' Interativa ###");

// Referências aos elementos HTML
const inputNumeroDobrar = document.getElementById('numeroDobrar');
const btnDobrar = document.getElementById('btnDobrar');
const dobrarInterativoOutput = document.getElementById('dobrar-interativo-output');

// Função para dobrar e exibir o resultado interativamente
function dobrarInterativo() {
    const numero = parseFloat(inputNumeroDobrar.value); // Converte o valor do input para número
    if (isNaN(numero)) {
        dobrarInterativoOutput.innerHTML = '<p style="color: red;">Por favor, digite um número válido.</p>';
        console.error("Entrada inválida para a função dobrar.");
        return;
    }
    const resultado = numero * 2;
    dobrarInterativoOutput.innerHTML = `<p>O dobro de ${numero} é <strong>${resultado}</strong>.</p>`;
    console.log(`Interativo: O dobro de ${numero} é ${resultado}.`);
}

// Adiciona um "ouvinte de evento" (event listener) ao botão
btnDobrar.addEventListener('click', dobrarInterativo);

console.log("--------------------------------------------------\n");

// --- EXERCÍCIO: FUNÇÃO SAUDAR INTERATIVA ---
console.log("### EXERCÍCIO: Função 'saudar' Interativa ###");

// Referências aos elementos HTML
const inputNomeSaudacao = document.getElementById('nomeSaudacao');
const btnSaudar = document.getElementById('btnSaudar');
const saudacaoInterativaOutput = document.getElementById('saudacao-interativa-output');

// Função para saudar e exibir o resultado interativamente
function saudarInterativo() {
    const nome = inputNomeSaudacao.value.trim(); // Pega o valor do input e remove espaços em branco
    if (nome === "") {
        saudacaoInterativaOutput.innerHTML = '<p style="color: red;">Por favor, digite um nome válido.</p>';
        console.error("Entrada inválida para a função saudar.");
        return;
    }
    const mensagem = `Olá, ${nome}! Bem-vindo(a) à Aula 12.`;
    saudacaoInterativaOutput.innerHTML = `<p><strong>${mensagem}</strong></p>`;
    console.log(`Interativo: ${mensagem}`);
}

// Adiciona um "ouvinte de evento" (event listener) ao botão
btnSaudar.addEventListener('click', saudarInterativo);

console.log("--------------------------------------------------\n");

// --- EXERCÍCIO: FUNÇÃO EH PAR? INTERATIVA ---
console.log("### EXERCÍCIO: Função 'ehPar' Interativa ###");

// Referências aos elementos HTML
const inputNumeroEhPar = document.getElementById('numeroEhPar');
const btnEhPar = document.getElementById('btnEhPar');
const ehParInterativoOutput = document.getElementById('ehpar-interativo-output');

// Função para verificar se um número é par e exibir o resultado interativamente
function ehParInterativo() {
    const numero = parseFloat(inputNumeroEhPar.value); // Converte o valor do input para número
    if (isNaN(numero)) {
        ehParInterativoOutput.innerHTML = '<p style="color: red;">Por favor, digite um número válido.</p>';
        console.error("Entrada inválida para a função ehPar.");
        return;
    }

    let mensagem = '';
    if (numero % 2 === 0) {
        mensagem = `O número ${numero} é PAR.`;
    } else {
        mensagem = `O número ${numero} é ÍMPAR.`;
    }

    ehParInterativoOutput.innerHTML = `<p><strong>${mensagem}</strong></p>`;
    console.log(`Interativo: ${mensagem}`);
}

// Adiciona um "ouvinte de evento" (event listener) ao botão
btnEhPar.addEventListener('click', ehParInterativo);

console.log("--------------------------------------------------\n");

// --- EXERCÍCIO: FUNÇÃO MAIOR NÚMERO? INTERATIVA ---
console.log("### EXERCÍCIO: Função 'maiorNumero' Interativa ###");

// Referências aos elementos HTML
const inputNum1Maior = document.getElementById('num1Maior');
const inputNum2Maior = document.getElementById('num2Maior');
const btnMaiorNumero = document.getElementById('btnMaiorNumero');
const maiorNumeroInterativoOutput = document.getElementById('maior-numero-interativo-output');

// Função para verificar qual é o maior número e exibir o resultado interativamente
function maiorNumeroInterativo() {
    const num1 = parseFloat(inputNum1Maior.value);
    const num2 = parseFloat(inputNum2Maior.value);

    if (isNaN(num1) || isNaN(num2)) {
        maiorNumeroInterativoOutput.innerHTML = '<p style="color: red;">Por favor, digite dois números válidos.</p>';
        console.error("Entrada inválida para a função maiorNumero.");
        return;
    }

    let mensagem = '';
    if (num1 > num2) {
        mensagem = `O maior número é ${num1}.`;
    } else if (num2 > num1) {
        mensagem = `O maior número é ${num2}.`;
    } else {
        mensagem = `Os números são iguais: ${num1}.`;
    }

    maiorNumeroInterativoOutput.innerHTML = `<p><strong>${mensagem}</strong></p>`;
    console.log(`Interativo: ${mensagem}`);
}

// Adiciona um "ouvinte de evento" (event listener) ao botão
btnMaiorNumero.addEventListener('click', maiorNumeroInterativo);

console.log("--------------------------------------------------\n");

// --- EXERCÍCIO: FUNÇÃO CONTAR CARACTERES? INTERATIVA ---
console.log("### EXERCÍCIO: Função 'contarCaracteres' Interativa ###");

// Referências aos elementos HTML
const inputTextoContar = document.getElementById('textoContar');
const btnContarCaracteres = document.getElementById('btnContarCaracteres');
const contarCaracteresInterativoOutput = document.getElementById('contar-caracteres-interativo-output');

// Função para contar caracteres e exibir o resultado interativamente
function contarCaracteresInterativo() {
    const texto = inputTextoContar.value;
    const contagem = texto.length;

    const mensagem = `O texto "${texto}" tem ${contagem} caracteres.`;

    contarCaracteresInterativoOutput.innerHTML = `<p><strong>${mensagem}</strong></p>`;
    console.log(`Interativo: ${mensagem}`);
}

// Adiciona um "ouvinte de evento" (event listener) ao botão
btnContarCaracteres.addEventListener('click', contarCaracteresInterativo);


// --- EXERCÍCIO: PERSONALIZAR BORDA --- 
console.log("### EXERCÍCIO: Personalizar Borda ###");

// Referências aos elementos HTML
const borderWidth = document.getElementById('borderWidth');
const borderStyle = document.getElementById('borderStyle');
const borderColor = document.getElementById('borderColor');
const bordaPersonalizadaOutput = document.getElementById('borda-personalizada-output');

// Função para atualizar a borda
function atualizarBorda() {
    const width = borderWidth.value + 'px';
    const style = borderStyle.value;
    const color = borderColor.value;

    bordaPersonalizadaOutput.style.border = `${width} ${style} ${color}`;
    console.log(`Borda atualizada para: ${width} ${style} ${color}`);
}

// Adiciona event listeners para os inputs
borderWidth.addEventListener('input', atualizarBorda);
borderStyle.addEventListener('input', atualizarBorda);
borderColor.addEventListener('input', atualizarBorda);

// Chama a função uma vez para iniciar com os valores padrão
atualizarBorda();
