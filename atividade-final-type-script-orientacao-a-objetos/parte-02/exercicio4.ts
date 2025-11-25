// Exercício 4 — Classe Abstrata
// Este arquivo demonstra o uso de classes abstratas em TypeScript,
// onde a classe base define um contrato que subclasses devem implementar.

// Classe abstrata Veiculo
abstract class Veiculo {
    // Método abstrato que deve ser implementado pelas subclasses
    abstract mover(): string;
}

// Classe concreta Carro que herda de Veiculo
class Carro extends Veiculo {
    // Implementando o método abstrato
    mover(): string {
        return "O carro está se movendo...";
    }
}

// Classe concreta Bicicleta que herda de Veiculo
class Bicicleta extends Veiculo {
    // Implementando o método abstrato
    mover(): string {
        return "A bicicleta está se movendo...";
    }
}

// Criando objetos das classes concretas
const carro = new Carro();
const bicicleta = new Bicicleta();

// Chamando o método mover para cada veículo
console.log(carro.mover());
console.log(bicicleta.mover());