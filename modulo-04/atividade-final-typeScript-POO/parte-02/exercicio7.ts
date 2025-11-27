// Exercício 7 — Polimorfismo
// Classe base Animal e subclasses Cachorro/Gato que sobrescrevem emitirSom()

class Animal {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  emitirSom(): string {
    return `${this.nome} emite um som genérico.`;
  }
}

class Cachorro extends Animal {
  emitirSom(): string {
    return `${this.nome}: Au au!`;
  }
}

class Gato extends Animal {
  emitirSom(): string {
    return `${this.nome}: Miau!`;
  }
}

function fazerSom(animal: Animal): void {
  console.log(animal.emitirSom());
}

// Testes
const dog = new Cachorro('Rex');
const cat = new Gato('Mimi');

fazerSom(dog);
fazerSom(cat);
