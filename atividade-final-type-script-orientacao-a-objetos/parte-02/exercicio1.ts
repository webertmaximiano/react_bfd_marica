// Exercício 1 — Criação básica de classe
// Este arquivo demonstra a criação de uma classe simples em TypeScript,
// com atributos privados, um método público e instanciação de objetos.

// Definindo a classe Pessoa
class Pessoa {
    // Atributos privados para encapsulamento
    private nome: string;
    private idade: number;

    // Construtor para inicializar os atributos
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método público para apresentar a pessoa
    apresentar(): string {
        return `Olá! Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    }
}

// Criando dois objetos da classe Pessoa
const pessoa1 = new Pessoa("João", 25);
const pessoa2 = new Pessoa("Maria", 30);

// Chamando o método apresentar() para cada objeto
console.log(pessoa1.apresentar());
console.log(pessoa2.apresentar());