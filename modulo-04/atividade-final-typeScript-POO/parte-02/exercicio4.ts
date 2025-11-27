// Exercício 4 — Classe Abstrata
// Define uma classe abstrata FormaGeometrica com método abstrato area()

abstract class FormaGeometrica {
  // Método abstrato que deve ser implementado pelas subclasses
  abstract area(): number;
}

// Quadrado implementa FormaGeometrica
class Quadrado extends FormaGeometrica {
  lado: number;

  constructor(lado: number) {
    super();
    this.lado = lado;
  }

  area(): number {
    return this.lado * this.lado;
  }
}

// Circulo implementa FormaGeometrica
class Circulo extends FormaGeometrica {
  raio: number;

  constructor(raio: number) {
    super();
    this.raio = raio;
  }

  area(): number {
    return Math.PI * this.raio * this.raio;
  }
}

// Demonstração
const q = new Quadrado(4);
const c = new Circulo(3);

console.log(`Área do quadrado: ${q.area()}`); // 16
console.log(`Área do círculo: ${c.area().toFixed(2)}`); // ~28.27
