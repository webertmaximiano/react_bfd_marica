// Exercício 2 — Construtor e encapsulamento
// Este arquivo demonstra encapsulamento com atributo privado,
// métodos públicos para manipulação segura do saldo,
// e tratamento de erros para impedir saldo negativo.

// Definindo a classe ContaBancaria
class ContaBancaria {
    // Atributo privado para encapsulamento do saldo
    private saldo: number;

    // Construtor inicializa o saldo com 0
    constructor() {
        this.saldo = 0;
    }

    // Método para depositar valor, verificando se é positivo
    depositar(valor: number): string {
        if (valor > 0) {
            this.saldo += valor;
            return `Depósito de R$ ${valor} realizado com sucesso.`;
        } else {
            return "Erro: Valor de depósito deve ser positivo.";
        }
    }

    // Método para sacar valor, verificando se há saldo suficiente
    sacar(valor: number): string {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            return `Saque de R$ ${valor} realizado com sucesso.`;
        } else if (valor > this.saldo) {
            return "Erro: Saldo insuficiente para saque.";
        } else {
            return "Erro: Valor de saque deve ser positivo.";
        }
    }

    // Método para ver o saldo atual
    verSaldo(): string {
        return `Saldo atual: R$ ${this.saldo}`;
    }
}

// Criando uma conta bancária
const conta = new ContaBancaria();

// Fazendo operações: depósito, saque e verificação de saldo
console.log(conta.depositar(100)); // Depósito inicial
console.log(conta.verSaldo());
console.log(conta.sacar(50)); // Saque válido
console.log(conta.verSaldo());
console.log(conta.sacar(100)); // Tentativa de saque com saldo insuficiente
console.log(conta.verSaldo());