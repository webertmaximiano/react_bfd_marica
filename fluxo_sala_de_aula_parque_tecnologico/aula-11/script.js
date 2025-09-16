console.log("Arquivo script.js da Aula 11 carregado! Foco em Funções e Revisão de Lógica.");

/*
=======================================
  AULA 11 - FUNÇÕES E REVISÃO DE LÓGICA
=======================================

Esta aula aborda a introdução a funções em JavaScript e revisa conceitos
de lógica de programação como condicionais e loops, com base na apresentação.

*/

// --- 1. REVISÃO: CONDICIONAIS E LOOPS ---
console.log("### 1. Revisão: Condicionais e Loops ###");

/*
  Relembrando: 
  - Condicionais (`if`, `else if`, `else`, `switch`): Para tomar decisões no código.
  - Loops (`for`, `while`): Para repetir blocos de código.
*/

// --- Exercício: Avaliação de Nota (Tarefa 1 do PDF) ---
const notaInput = document.getElementById('notaInput');
const btnAvaliarNota = document.getElementById('btnAvaliarNota');
const notaOutput = document.getElementById('nota-output');

btnAvaliarNota.addEventListener('click', () => {
    const nota = parseFloat(notaInput.value);
    let resultado = '';

    if (isNaN(nota) || nota < 0 || nota > 10) {
        resultado = 'Nota inválida. Por favor, insira um valor entre 0 e 10.';
        notaOutput.style.color = 'red';
    } else if (nota < 5) {
        resultado = 'Reprovado.';
        notaOutput.style.color = 'orange';
    } else if (nota >= 5 && nota < 7) {
        resultado = 'Recuperação.';
        notaOutput.style.color = 'blue';
    } else { // nota >= 7
        resultado = 'Aprovado!';
        notaOutput.style.color = 'green';
    }
    console.log(`Avaliação da Nota ${nota}: ${resultado}`);
    notaOutput.innerHTML = `<p>Nota: <strong>${nota}</strong><br>Resultado: <strong>${resultado}</strong></p>`;
});

// --- Exercício: Estação do Ano (Tarefa 2 do PDF) ---
const mesInput = document.getElementById('mesInput');
const btnVerificarEstacao = document.getElementById('btnVerificarEstacao');
const estacaoOutput = document.getElementById('estacao-output');

btnVerificarEstacao.addEventListener('click', () => {
    const mes = parseInt(mesInput.value);
    let estacao = '';

    if (isNaN(mes) || mes < 1 || mes > 12) {
        estacao = 'Opção inválida. Por favor, insira um número de 1 a 12.';
        estacaoOutput.style.color = 'red';
    } else {
        switch (mes) {
            case 12:
            case 1:
            case 2:
                estacao = 'Verão';
                break;
            case 3:
            case 4:
            case 5:
                estacao = 'Outono';
                break;
            case 6:
            case 7:
            case 8:
                estacao = 'Inverno';
                break;
            case 9:
            case 10:
            case 11:
                estacao = 'Primavera';
                break;
            default:
                estacao = 'Opção inválida.'; // Não deve chegar aqui se a validação inicial funcionar
        }
        estacaoOutput.style.color = 'black'; // Reset color
    }
    console.log(`Mês ${mes}: Estação ${estacao}`);
    estacaoOutput.innerHTML = `<p>Mês: <strong>${mes}</strong><br>Estação: <strong>${estacao}</strong></p>`;
});

// --- Exercício: Soma e Média com Loop For (Tarefa 3 do PDF) ---
const nInput = document.getElementById('nInput');
const btnSomarMedia = document.getElementById('btnSomarMedia');
const somaMediaOutput = document.getElementById('soma-media-output');

btnSomarMedia.addEventListener('click', () => {
    const N = parseInt(nInput.value);
    let soma = 0;
    let media = 0;

    if (isNaN(N) || N <= 0) {
        somaMediaOutput.innerHTML = '<p style="color: red;">Por favor, insira um número inteiro positivo para N.</p>';
        console.error("Entrada inválida para a soma e média.");
        return;
    }

    for (let i = 1; i <= N; i++) {
        soma += i;
    }
    media = soma / N;

    console.log(`Soma de 1 a ${N}: ${soma}, Média: ${media.toFixed(2)}`);
    somaMediaOutput.innerHTML = `<p>Soma de 1 a ${N}: <strong>${soma}</strong><br>Média: <strong>${media.toFixed(2)}</strong></p>`;
});

// --- Exercício: Adivinhe o Número (Tarefa 4 do PDF) ---
const palpiteInput = document.getElementById('palpiteInput');
const btnAdivinhar = document.getElementById('btnAdivinhar');
const adivinharOutput = document.getElementById('adivinhar-output');

let numeroSecreto = Math.floor(Math.random() * 10) + 1; // Número secreto entre 1 e 10
let tentativas = [];

console.log(`(DEBUG) Número Secreto: ${numeroSecreto}`); // Apenas para debug

btnAdivinhar.addEventListener('click', () => {
    const palpite = parseInt(palpiteInput.value);

    if (isNaN(palpite) || palpite < 1 || palpite > 10) {
        adivinharOutput.innerHTML = '<p style="color: red;">Por favor, insira um palpite entre 1 e 10.</p>';
        console.error("Palpite inválido.");
        return;
    }

    tentativas.push(palpite);

    let mensagem = '';
    if (palpite === numeroSecreto) {
        mensagem = `Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas.length} tentativa(s).`;
        adivinharOutput.style.color = 'green';
        // Desabilita o input e o botão após acertar
        palpiteInput.disabled = true;
        btnAdivinhar.disabled = true;
    } else if (palpite < numeroSecreto) {
        mensagem = `Seu palpite (${palpite}) é muito baixo. Tente novamente!`;
        adivinharOutput.style.color = 'orange';
    } else {
        mensagem = `Seu palpite (${palpite}) é muito alto. Tente novamente!`;
        adivinharOutput.style.color = 'orange';
    }

    adivinharOutput.innerHTML = `<p>${mensagem}<br>Tentativas: ${tentativas.join(', ')}</p>`;
    console.log(`Palpite: ${palpite}, Tentativas: ${tentativas.join(', ')}`);
});

console.log("--------------------------------------------------\n");

// --- 2. INTRODUÇÃO A FUNÇÕES ---
console.log("### 2. Introdução a Funções JavaScript ###");

/*
  Funções são blocos de código reutilizáveis que realizam uma tarefa específica.
  Elas ajudam a organizar o código, torná-lo mais legível e evitar repetições (DRY).

  - **Declaração:** `function nomeDaFuncao(parametro1, parametro2) { // código }`
  - **Parâmetros:** Valores que a função recebe para trabalhar.
  - **Retorno (`return`):** Valor que a função devolve após sua execução.
  - **Escopo:** Variáveis dentro da função são locais a ela.
*/

// Exemplo de função sem parâmetros e sem retorno (do PDF)
function dizerOla() {
    console.log("Olá, mundo!");
}
dizerOla(); // Chamando a função

// Exemplo de função com parâmetro (do PDF)
function saudarPessoa(nome) {
    console.log(`Olá, ${nome}!`);
}
saudarPessoa("Maria");
saudarPessoa("João");

// Exemplo de função com múltiplos parâmetros (do PDF)
function somarNumeros(a, b) {
    console.log(`Resultado da soma: ${a + b}`);
    return a + b; // Adicionado retorno para flexibilidade
}
somarNumeros(2, 3);

// Exemplo de função com retorno (do PDF)
function subtrairNumeros(a, b) {
    return a - b;
}
let resultadoSubtracao = subtrairNumeros(10, 5);
console.log(`Resultado da subtração: ${resultadoSubtracao}`);

// --- Exercício: Calcular Média de 3 Notas (do PDF) ---
const nota1Input = document.getElementById('nota1Input');
const nota2Input = document.getElementById('nota2Input');
const nota3Input = document.getElementById('nota3Input');
const btnCalcularMedia = document.getElementById('btnCalcularMedia');
const mediaOutput = document.getElementById('media-output');

function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

btnCalcularMedia.addEventListener('click', () => {
    const nota1 = parseFloat(nota1Input.value);
    const nota2 = parseFloat(nota2Input.value);
    const nota3 = parseFloat(nota3Input.value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        mediaOutput.innerHTML = '<p style="color: red;">Por favor, insira notas válidas.</p>';
        console.error("Entrada inválida para o cálculo da média.");
        return;
    }

    const media = calcularMedia(nota1, nota2, nota3);
    console.log(`Média das notas ${nota1}, ${nota2}, ${nota3}: ${media.toFixed(2)}`);
    mediaOutput.innerHTML = `<p>Média: <strong>${media.toFixed(2)}</strong></p>`;
});
