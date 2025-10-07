class Pessoa {
  nome: string = "Desconhecido";
  idade: number = 0;
}

const pessoal = new Pessoa("Ana"); // criação de um objeto
console.log(pessoal.nome); // saída: Ana

// --- Conteúdo da classe Carro ---
class Carro {
  marca: string = "Desconhecido";
  ano: number = 0;
}



// --- Conteúdo da classe Animal ---
class Animal {
  tipo: string;
  constructor(tipo: string) {
    this.tipo = tipo;
  }
}

const a1 = new Animal("Cachorro");
const a2 = new Animal("Gato");

console.log(a1.tipo); // "Cachorro"
console.log(a2.tipo); // "Gato"

// --- Exemplo de como Acessar e Alterar Atributos (p1) ---
const p1 = new Pessoa();
p1.nome = "Maria";
p1.idade = 25;

console.log(`${p1.nome} tem ${p1.idade} anos.`); // Saída: Maria tem 25 anos.

// --- Gabarito - Exercício 1 (c1) ---
const c1 = new Carro();
c1.marca = "Fiat";
c1.ano = 2013;

console.log(`Marca: ${c1.marca} - Ano: ${c1.ano}`);