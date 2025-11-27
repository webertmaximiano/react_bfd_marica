// Exercício 10 — Teste de método em classe
// Classe Calculadora com método multiplicar e teste simples

class Calculadora {
  multiplicar(a: number, b: number): number {
    return a * b;
  }
}

function testeMultiplicar(): void {
  const calc = new Calculadora();
  const resultado = calc.multiplicar(3, 5);
  if (resultado === 15) {
    console.log('Teste passou: 3 * 5 = 15');
  } else {
    console.log(`Teste falhou: esperado 15, obtido ${resultado}`);
  }
}

// Executa o teste
testeMultiplicar();
