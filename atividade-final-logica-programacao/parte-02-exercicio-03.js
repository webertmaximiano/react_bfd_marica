// Exercício 3 — Verificador de Idade
// Este exercício verifica se o usuário é maior ou menor de idade com base na idade fornecida.

// Usa prompt para solicitar ao usuário que digite sua idade.
// O prompt exibe uma caixa de diálogo no navegador pedindo entrada do usuário.
// A entrada é convertida para número usando Number() para permitir comparações numéricas.
let idade = Number(prompt("Digite sua idade:"));

// Verifica se a idade é menor que 18.
// Se for, exibe "Menor de idade" no console.
// Caso contrário, exibe "Maior de idade".
if (idade < 18) {
    console.log("Menor de idade");
} else {
    console.log("Maior de idade");
}
