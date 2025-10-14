// --- Exemplo: Interação entre Objetos - Composição (Classe Motor) ---
class Motor {
  ligar() {
    console.log("Motor ligado!");
  }
}

// --- Exemplo: Interação entre Objetos - Composição (Classe Carro) ---
class Carro {
  modelo: string;
  motor: Motor;

  constructor(modelo: string, motor: Motor) { // motor recebido como parâmetro
    this.modelo = modelo;
    this.motor = motor;
  }

  dirigir() {
    this.motor.ligar();
    console.log(`${this.modelo} está em movimento!`);
  }
}

// --- Exemplo: Interação entre Objetos - Agregação (Classe Carro) ---
const motorNovo = new Motor();
const carroAgregacao = new Carro("Tesla", motorNovo);
carroAgregacao.dirigir();

// --- Exercício Guiado: Loja e Produto (Classe Produto) ---
class Produto {
  nome: string;
  preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
}

// --- Exercício Guiado: Loja e Produto (Classe Loja) ---
class Loja {
  nome: string;
  produtos: Produto[]; // a loja tem vários produtos

  constructor(nome: string) {
    this.nome = nome;
    this.produtos = []; // começa vazia
  }

  adicionarProduto(produto: Produto) {
    this.produtos.push(produto);
  }

  mostrarProdutos() {
    console.log(`Produtos da loja ${this.nome}:`);
    // Percorrendo os produtos
    for (let i = 0; i < this.produtos.length; i++) {
      const p = this.produtos[i];
      console.log(`- ${p.nome} (R$ ${p.preco})`);
    }
  }
}

// --- Exercício Guiado: Loja e Produto (Instanciação e Uso) ---
// Criando alguns produtos
const p1 = new Produto("Camisa", 59);
const p2 = new Produto("Calça", 89);
const p3 = new Produto("Tênis", 199);

// Criando a loja
const loja = new Loja("Loja do Hygor");

// Adicionando produtos à loja
loja.adicionarProduto(p1);
loja.adicionarProduto(p2);
loja.adicionarProduto(p3);

// Mostrando os produtos cadastrados
loja.mostrarProdutos();

// --- Desafio: Adicionar Boné ---
const bone = new Produto("Boné", 29);
loja.adicionarProduto(bone);
console.log("\n--- Produtos da loja (com Boné) ---");
loja.mostrarProdutos();

// --- Gabarito Exercício 1 (Classe Cachorro) ---
class Cachorro {
  nome: string;
  raca: string;

  constructor(nome: string, raca: string) {
    this.nome = nome;
    this.raca = raca;
  }

  latir() {
    console.log(`O cachorro ${this.nome} (${this.raca}) está latindo!`);
  }
}

const c1Cachorro = new Cachorro("Rex", "Labrador");
const c2Cachorro = new Cachorro("Luna", "Poodle");

c1Cachorro.latir();
c2Cachorro.latir();