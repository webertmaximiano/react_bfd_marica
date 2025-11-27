// Exercício 9 — Teste Simples
// Função somar e teste simples sem framework

function somar(a: number, b: number): number {
  return a + b;
}

function testeSomar(): void {
  const resultado = somar(2, 2);
  if (resultado === 4) {
    console.log('Teste passou');
  } else {
    console.log('Teste falhou');
  }
}

// Executa o teste
testeSomar();
