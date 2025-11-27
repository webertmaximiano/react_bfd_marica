// Exercício 5 — Interface
// Interface Autenticavel e classe Usuario que a implementa

interface Autenticavel {
  autenticar(): boolean;
}

class Usuario implements Autenticavel {
  username: string;
  senha: string;

  constructor(username: string, senha: string) {
    this.username = username;
    this.senha = senha;
  }

  // Exemplo simples de autenticação (não usar em produção)
  autenticar(): boolean {
    // para fins didáticos, validamos contra uma senha fixa
    return this.senha === 'senha123';
  }
}

// Demonstração
const user1 = new Usuario('joao', 'senha123');
const user2 = new Usuario('maria', 'errada');

console.log(`Usuário ${user1.username} autenticado?`, user1.autenticar());
console.log(`Usuário ${user2.username} autenticado?`, user2.autenticar());
