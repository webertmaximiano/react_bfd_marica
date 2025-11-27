// Exercício 3 — Herança
// Classe Funcionario com método trabalhar(), e Professor estendendo Funcionario

class Funcionario {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  // Método base — pode ser sobrescrito pelas subclasses
  trabalhar(): string {
    return `${this.nome} está trabalhando.`;
  }
}

// Professor herda de Funcionario e sobrescreve trabalhar()
class Professor extends Funcionario {
  constructor(nome: string) {
    super(nome);
  }

  trabalhar(): string {
    return `${this.nome} está lecionando na sala de aula.`;
  }
}

// Demonstração
const f1 = new Funcionario('Carlos');
const p1 = new Professor('Mariana');

console.log(f1.trabalhar()); // Carlos está trabalhando.
console.log(p1.trabalhar()); // Mariana está lecionando na sala de aula.
