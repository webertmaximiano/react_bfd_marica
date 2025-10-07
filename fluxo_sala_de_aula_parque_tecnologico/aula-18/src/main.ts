class Pessoa {
  nome: string;

  constructor(nome: string = 'Desconhecido') {
    this.nome = nome;
  }

  falar() {
    console.log(`${this.nome} está falando.`);
  }

  andar() {
    console.log(`${this.nome} está andando.`);
  }
}



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



// --- Gabarito - Exercício 1 (c1) ---
const c1 = new Carro();
c1.marca = "Fiat";
c1.ano = 2013;

console.log(`Marca: ${c1.marca} - Ano: ${c1.ano}`);

// --- Gabarito - Exercício 2 (Filme) ---
class Filme {
  titulo: string;
  ano: number;

  constructor(titulo: string, ano: number) {
    this.titulo = titulo;
    this.ano = ano;
  }

  exibir() {
    console.log(`${this.titulo} - ${this.ano}`);
  }
}

const filmel = new Filme("Titanic", 1997);
filmel.exibir(); // "Titanic" - 1997

// --- Exercício Prático: Métodos (p1) ---
const p1 = new Pessoa("João");
p1.falar(); // João está falando.
p1.andar(); // João está andando.

// --- Exercício Prático: Métodos (Classe Conta) ---
class Conta {
  titular: string;
  saldo: number;

  constructor(titular: string, saldo: number) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor: number) {
    this.saldo += valor;
    console.log(`${this.titular} depositou R$${valor}.`);
  }

  sacar(valor: number) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      console.log(`${this.titular} sacou R$${valor}. Novo saldo: R$${this.saldo}`);
    } else {
      console.log(`Saldo insuficiente para ${this.titular}. Saldo atual: R$${this.saldo}`);
    }
  }

  verSaldo() {
    console.log(`Saldo atual: R$${this.saldo}`);
  }
}

const c1Conta = new Conta("Maria", 100); // Renamed to c1Conta to avoid conflict with existing c1
c1Conta.depositar(50);
c1Conta.sacar(30);
c1Conta.verSaldo();