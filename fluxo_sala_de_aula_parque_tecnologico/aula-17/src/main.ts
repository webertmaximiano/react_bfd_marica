let mensagem: string = "Boas vindas à Aula 17 - Webert!";
console.log(mensagem);

// Função tipado
function dobro(valor: number): number {
  return valor * 2;
}

console.log("Dobro de 5 é ", dobro(5));

// Desafio prático
// ● Crie uma variável chamada aluno que guarde o nome de um aluno (string).
// ● Crie uma função chamada apresentarAluno que recebe esse nome e imprima no console:
// ○ "Olá, eu sou [nome] e estou aprendendo TypeScript!".
// ● Teste chamando a função com uma string.
// ● Agora tente chamar passando um número (sem aspas), veja o erro do TypeScript.
// ATENÇÃO! Quando uma função não retorna nada, usamos “void” no lugar do tipo.
let aluno: string = "Webert";

function apresentarAluno(nome: string): void {
  console.log(`Olá, eu sou ${nome} e estou aprendendo TypeScript!`);
}

// apresentarAluno(aluno);
 //apresentarAluno(123) // Descomente para ver o erro do TypeScript
apresentarAluno(true) // Descomente para ver o erro do TypeScript
// apresentarAluno([]) // Descomente para ver o erro do TypeScript
// apresentarAluno({}) // Descomente para ver o erro do TypeScript
// apresentarAluno() // Descomente para ver o erro do TypeScript
// apresentarAluno(null) // Descomente para ver o erro do TypeScript
// apresentarAluno(undefined) // Descomente para ver o erro do TypeScript
// apresentarAluno(function(){}) // Descomente para ver o erro do TypeScript
// apresentarAluno(Symbol()) // Descomente para ver o erro do TypeScript
// apresentarAluno(BigInt(123)) // Descomente para ver o erro do TypeScript
// apresentarAluno(NaN) // Descomente para ver o erro do TypeScript
// apresentarAluno(Infinity) // Descomente para ver o erro do TypeScript
// apresentarAluno(-Infinity) // Descomente para ver o erro do TypeScript
// apresentarAluno(0) // Descomente para ver o erro do TypeScript
// apresentarAluno(-0) // Descomente para ver o erro do TypeScript
// apresentarAluno(1.5) // Descomente para ver o erro do TypeScript