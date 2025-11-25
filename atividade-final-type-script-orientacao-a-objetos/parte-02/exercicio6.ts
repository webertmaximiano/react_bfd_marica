// Exercício 6 — Composição
// Este arquivo demonstra composição em TypeScript,
// onde uma classe contém uma instância de outra classe como atributo.

// Classe Endereco
class Endereco {
    private rua: string;
    private cidade: string;
    private cep: string;

    constructor(rua: string, cidade: string, cep: string) {
        this.rua = rua;
        this.cidade = cidade;
        this.cep = cep;
    }

    // Método para obter o endereço completo
    getEnderecoCompleto(): string {
        return `${this.rua}, ${this.cidade} - CEP: ${this.cep}`;
    }
}

// Classe Cliente que contém um objeto Endereco (composição)
class Cliente {
    private nome: string;
    private endereco: Endereco; // Composição: Cliente tem um Endereco

    constructor(nome: string, endereco: Endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }

    // Método para exibir informações do cliente e seu endereço
    exibirInformacoes(): void {
        console.log(`Cliente: ${this.nome}`);
        console.log(`Endereço: ${this.endereco.getEnderecoCompleto()}`);
    }
}

// Criando um endereço
const endereco1 = new Endereco("Rua Capitao Guilherme, 123", "Maricá", "24900-175");

// Criando um cliente com o endereço (composição)
const cliente1 = new Cliente("João Silva", endereco1);

// Exibindo as informações no console
cliente1.exibirInformacoes();