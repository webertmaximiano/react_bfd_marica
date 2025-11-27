// Exercício 1 — Classe simples
// Classe Aluno com atributos nome e idade, e método apresentar()

class Aluno {
  // Atributos públicos (podem ser acessados externamente)
  nome: string;
  idade: number;

  // Construtor para inicializar os atributos
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  // Método que retorna a apresentação do aluno
  apresentar(): string {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

// Exemplo de uso: criando dois alunos e chamando apresentar()
const aluno1 = new Aluno('Ana', 20);
const aluno2 = new Aluno('Bruno', 22);

console.log(aluno1.apresentar()); // Olá, meu nome é Ana e tenho 20 anos.
console.log(aluno2.apresentar()); // Olá, meu nome é Bruno e tenho 22 anos.
