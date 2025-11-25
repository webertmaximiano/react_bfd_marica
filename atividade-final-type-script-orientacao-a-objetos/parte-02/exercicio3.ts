// Exercício 3 — Herança
// Este arquivo demonstra herança em TypeScript,
// com uma classe base e subclasses que sobrescrevem métodos.

// Classe base Animal
class Animal {
    // Método que será sobrescrito pelas subclasses
    emitirSom(): string {
        return "Som genérico de animal";
    }
}

// Subclasse Cachorro que herda de Animal
class Cachorro extends Animal {
    // Sobrescrevendo o método emitirSom
    emitirSom(): string {
        return "Au au!";
    }
}

// Subclasse Gato que herda de Animal
class Gato extends Animal {
    // Sobrescrevendo o método emitirSom
    emitirSom(): string {
        return "Miau!";
    }
}

// Criando objetos das subclasses
const cachorro = new Cachorro();
const gato = new Gato();

// Chamando o método emitirSom para cada objeto
console.log("Cachorro:", cachorro.emitirSom());
console.log("Gato:", gato.emitirSom());