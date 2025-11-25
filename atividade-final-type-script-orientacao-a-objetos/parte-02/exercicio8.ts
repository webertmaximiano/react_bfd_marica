// Exercício 8 — Tratamento de Erros
// Este arquivo demonstra tratamento de erros em TypeScript,
// usando throw para lançar exceções e try/catch para capturá-las.

// Função que divide dois números, lançando erro se divisor for zero
function dividir(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Erro: Divisão por zero não é permitida.");
    }
    return a / b;
}

// Função para testar a divisão com try/catch
function testarDivisao(): void {
    try {
        console.log("Tentando dividir 10 por 2:");
        const resultado1 = dividir(10, 2);
        console.log(`Resultado: ${resultado1}`);
    } catch (error) {
        console.log(`Erro capturado: ${(error as Error).message}`);
    }

    try {
        console.log("Tentando dividir 10 por 0:");
        const resultado2 = dividir(10, 0);
        console.log(`Resultado: ${resultado2}`);
    } catch (error) {
        console.log(`Erro capturado: ${(error as Error).message}`);
    }
}

// Chamando a função de teste
testarDivisao();