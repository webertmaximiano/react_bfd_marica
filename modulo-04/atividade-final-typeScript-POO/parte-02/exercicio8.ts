// Exercício 8 — Tratamento de Exceções
// Função dividir que lança erro personalizado quando b === 0

function dividir(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Erro: divisão por zero não permitida.');
  }
  return a / b;
}

// Uso com try/catch
try {
  console.log('10 / 2 =', dividir(10, 2));
} catch (e) {
  console.error('Erro capturado:', (e as Error).message);
}

try {
  console.log('10 / 0 =', dividir(10, 0));
} catch (e) {
  console.error('Erro capturado:', (e as Error).message);
}
