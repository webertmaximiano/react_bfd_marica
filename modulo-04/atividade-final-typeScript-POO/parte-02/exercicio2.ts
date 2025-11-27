// Exercício 2 — Encapsulamento
// Classe Conta com atributo privado `saldo` e métodos para manipulação segura.

class Conta {
  // atributo privado impede acesso direto externo
  private saldo: number;

  constructor(saldoInicial = 0) {
    this.saldo = saldoInicial;
  }

  // Deposita um valor positivo na conta
  depositar(valor: number): string {
    if (valor <= 0) return 'Erro: valor de depósito deve ser maior que zero.';
    this.saldo += valor;
    return `Depósito de R$ ${valor.toFixed(2)} realizado.`;
  }

  // Saca um valor se houver saldo suficiente
  sacar(valor: number): string {
    if (valor <= 0) return 'Erro: valor de saque deve ser maior que zero.';
    if (valor > this.saldo) return 'Erro: saldo insuficiente.';
    this.saldo -= valor;
    return `Saque de R$ ${valor.toFixed(2)} realizado.`;
  }

  // Retorna o saldo atual (forma segura de acessar o atributo privado)
  verSaldo(): string {
    return `Saldo atual: R$ ${this.saldo.toFixed(2)}`;
  }
}

// Exemplo de uso
const minhaConta = new Conta(100); // saldo inicial 100
console.log(minhaConta.verSaldo());
console.log(minhaConta.depositar(50));
console.log(minhaConta.verSaldo());
console.log(minhaConta.sacar(30));
console.log(minhaConta.verSaldo());
console.log(minhaConta.sacar(500)); // tentativa de saque maior que saldo (deve falhar)
console.log(minhaConta.verSaldo());
