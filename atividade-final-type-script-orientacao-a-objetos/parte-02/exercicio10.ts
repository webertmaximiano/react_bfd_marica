// Exercício 10 — Teste de método com objeto
// Este arquivo simula um teste unitário simples para um método de classe,
// verificando se a multiplicação funciona corretamente.

// Classe Calculadora com método a ser testado
class Calculadora {
    multiplicar(a: number, b: number): number {
        return a * b;
    }
}

// Função que simula um teste unitário para o método multiplicar
function testeMultiplicar(): void {
    const calc = new Calculadora();

    // Caso de teste 1: multiplicação de números positivos
    const resultado1 = calc.multiplicar(3, 4);
    if (resultado1 === 12) {
        console.log("Teste 1 passou: 3 * 4 = 12");
    } else {
        console.log(`Teste 1 falhou: esperado 12, obtido ${resultado1}`);
    }

    // Caso de teste 2: multiplicação com zero
    const resultado2 = calc.multiplicar(5, 0);
    if (resultado2 === 0) {
        console.log("Teste 2 passou: 5 * 0 = 0");
    } else {
        console.log(`Teste 2 falhou: esperado 0, obtido ${resultado2}`);
    }

    // Caso de teste 3: multiplicação de números negativos
    const resultado3 = calc.multiplicar(-2, 3);
    if (resultado3 === -6) {
        console.log("Teste 3 passou: -2 * 3 = -6");
    } else {
        console.log(`Teste 3 falhou: esperado -6, obtido ${resultado3}`);
    }

    // Caso de teste 4: multiplicação de dois negativos
    const resultado4 = calc.multiplicar(-2, -3);
    if (resultado4 === 6) {
        console.log("Teste 4 passou: -2 * -3 = 6");
    } else {
        console.log(`Teste 4 falhou: esperado 6, obtido ${resultado4}`);
    }
}

// Executando os testes
testeMultiplicar();