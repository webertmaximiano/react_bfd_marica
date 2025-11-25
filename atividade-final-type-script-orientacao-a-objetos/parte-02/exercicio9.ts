// Exercício 9 — Teste Unitário Simples
// Este arquivo simula um teste unitário simples em TypeScript,
// verificando se a função somar funciona corretamente.

// Função a ser testada
function somar(a: number, b: number): number {
    return a + b;
}

// Função que simula um teste unitário
function testeSomar(): void {
    // Caso de teste 1: soma de números positivos
    const resultado1 = somar(2, 3);
    if (resultado1 === 5) {
        console.log("Teste 1 passou: 2 + 3 = 5");
    } else {
        console.log(`Teste 1 falhou: esperado 5, obtido ${resultado1}`);
    }

    // Caso de teste 2: soma com zero
    const resultado2 = somar(0, 5);
    if (resultado2 === 5) {
        console.log("Teste 2 passou: 0 + 5 = 5");
    } else {
        console.log(`Teste 2 falhou: esperado 5, obtido ${resultado2}`);
    }

    // Caso de teste 3: soma de números negativos
    const resultado3 = somar(-2, -3);
    if (resultado3 === -5) {
        console.log("Teste 3 passou: -2 + -3 = -5");
    } else {
        console.log(`Teste 3 falhou: esperado -5, obtido ${resultado3}`);
    }
}

// Executando os testes
testeSomar();