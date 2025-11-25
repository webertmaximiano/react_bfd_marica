// Exercício 7 — Polimorfismo
// Este arquivo demonstra polimorfismo em TypeScript,
// onde objetos de diferentes subclasses podem ser tratados como o tipo base.

// Classe base Animal (redefinida para este exercício)
class Animal {
    emitirSom(): string {
        return "Som genérico de animal";
    }
}

// Subclasse Cachorro
class Cachorro extends Animal {
    emitirSom(): string {
        return "Au au!";
    }
}

// Subclasse Gato
class Gato extends Animal {
    emitirSom(): string {
        return "Miau!";
    }
}

// Função que demonstra polimorfismo: aceita qualquer Animal
function emitirSomDoAnimal(animal: Animal): void {
    console.log(animal.emitirSom());
}

// Testando com diferentes subclasses
const cachorro = new Cachorro();
const gato = new Gato();
const animalGenerico = new Animal();

console.log("Som do cachorro:");
emitirSomDoAnimal(cachorro);

console.log("Som do gato:");
emitirSomDoAnimal(gato);

console.log("Som do animal genérico:");
emitirSomDoAnimal(animalGenerico);