// Exercício 5 — Interface
// Este arquivo demonstra o uso de interfaces em TypeScript,
// definindo um contrato que classes devem implementar.

// Definindo a interface FormaGeometrica
interface FormaGeometrica {
    calcularArea(): number;
}

// Classe Quadrado implementando a interface
class Quadrado implements FormaGeometrica {
    private lado: number;

    constructor(lado: number) {
        this.lado = lado;
    }

    // Implementando o método da interface
    calcularArea(): number {
        return this.lado * this.lado;
    }
}

// Classe Circulo implementando a interface
class Circulo implements FormaGeometrica {
    private raio: number;

    constructor(raio: number) {
        this.raio = raio;
    }

    // Implementando o método da interface
    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }
}

// Criando objetos das classes
const quadrado = new Quadrado(5); // Lado 5
const circulo = new Circulo(3); // Raio 3

// Exibindo as áreas calculadas
console.log(`Área do quadrado: ${quadrado.calcularArea()}`);
console.log(`Área do círculo: ${circulo.calcularArea().toFixed(2)}`);