// Exercício 5 — Soma com While
// Este exercício demonstra o uso de um loop while para somar números de 1 a 10.

// Inicializa a variável soma com 0 para acumular os valores.
// Inicializa a variável i com 1 para começar a contagem.
let soma = 0;
let i = 1;

// Usa um loop while que continua enquanto i for menor ou igual a 10.
// Dentro do loop, adiciona o valor atual de i à soma e incrementa i.
while (i <= 10) {
    soma += i;
    i++;
}

// Após o loop, exibe o resultado da soma no console.
console.log(`A soma dos números de 1 a 10 é: ${soma}`);
