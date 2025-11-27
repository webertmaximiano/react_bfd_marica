// Exercício 6 — Composição
// Classe Endereco e classe Pessoa que possui um Endereco

class Endereco {
  rua: string;
  cidade: string;
  cep: string;

  constructor(rua: string, cidade: string, cep: string) {
    this.rua = rua;
    this.cidade = cidade;
    this.cep = cep;
  }

  toString(): string {
    return `${this.rua}, ${this.cidade} - CEP: ${this.cep}`;
  }
}

class Pessoa {
  nome: string;
  endereco: Endereco; // composição: Pessoa tem um Endereco

  constructor(nome: string, endereco: Endereco) {
    this.nome = nome;
    this.endereco = endereco;
  }

  exibir(): void {
    console.log(`Nome: ${this.nome}`);
    console.log(`Endereço: ${this.endereco.toString()}`);
  }
}

// Demonstração
const end = new Endereco('Rua A, 123', 'Rio de Janeiro', '20000-000');
const pessoa = new Pessoa('Luiz', end);

pessoa.exibir();
