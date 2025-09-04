console.log("Arquivo aula09.js carregado com sucesso! Começando a aula sobre Tipos de Dados.");

/*
===================================
  AULA 09 - TIPOS DE DADOS EM JS
===================================

Em JavaScript, existem diferentes tipos de dados que podemos usar para armazenar informações.
Eles se dividem em duas categorias principais: Tipos Primitivos e Tipos Complexos (ou de Referência).

*/

// --- 1. TIPOS PRIMITIVOS ---
// São dados imutáveis, ou seja, seu valor não pode ser alterado, apenas substituído.

// STRING: Sequência de caracteres, usada para texto. Deve estar entre aspas (simples ou duplas).
let nome = "Webert Maximiano";
let profissao = 'Desenvolvedor Frontend';
console.log("Exemplo de String:", nome);

// NUMBER: Usado para qualquer tipo de número, seja inteiro ou de ponto flutuante (decimal).
let idade = 45;
let preco = 19.99;
console.log("Exemplo de Number:", idade);

// BOOLEAN: Representa um valor lógico, que pode ser verdadeiro (true) ou falso (false).
let temCNH = true;
let estaChovendo = false;
console.log("Exemplo de Boolean:", temCNH);

// UNDEFINED: Uma variável que foi declarada, mas ainda não teve um valor atribuído.
let endereco;
console.log("Exemplo de Undefined:", endereco);

// NULL: Representa a ausência intencional de um valor. É um valor "nulo" ou "vazio".
let carro = null;
console.log("Exemplo de Null:", carro);


console.log("--------------------------------------------------");

/*
===================================
  OPERADOR typeof
===================================

O operador `typeof` é usado para verificar qual é o tipo de dado de uma variável ou valor.
É muito útil para depurar o código e garantir que estamos lidando com o tipo de dado esperado.

*/
console.log("### OPERADOR typeof ###");

console.log('O tipo de "Webert Maximiano" é:', typeof "Webert Maximiano"); // Saída: string
console.log('O tipo de 45 é:', typeof 45);                     // Saída: number
console.log('O tipo de true é:', typeof true);                   // Saída: boolean
console.log('O tipo de endereco (vazio) é:', typeof endereco);       // Saída: undefined

// --- Pegadinhas do typeof ---

// 1. typeof de null
console.log('O tipo de null é:', typeof null); // Saída: object
// Isso é um bug histórico do JavaScript! Embora `null` seja um tipo primitivo,
// o `typeof` erroneamente o reporta como um objeto. Lembre-se disso!

// 2. typeof de um Array
let minhaLista = [1, 2, 3];
console.log('O tipo de um array é:', typeof minhaLista); // Saída: object
// Arrays são, na verdade, um tipo especial de objeto em JavaScript.
// Para verificar se um valor é realmente um array, usamos `Array.isArray()`.
console.log("O valor é um array?", Array.isArray(minhaLista)); // Saída: true

// 3. typeof de um Objeto
let meuObjeto = { chave: 'valor' };
console.log('O tipo de um objeto é:', typeof meuObjeto); // Saída: object


console.log("--------------------------------------------------");

// --- 2. TIPOS COMPLEXOS (DE REFERÊNCIA) ---
// São dados mutáveis e podem conter múltiplos valores e tipos de dados.

/*
===================================
  ARRAYS (Vetores)
===================================

Um Array é uma lista ordenada de valores. Pense nele como um armário com várias gavetas numeradas,
onde cada gaveta pode guardar um item. Os itens são acessados por um "índice", que começa em 0.

*/

console.log("### ARRAYS ###");

// Exemplo 1: Criando um array de strings (lista de compras)
let listaDeCompras = ["Arroz", "Feijão", "Macarrão", "Leite"];
console.log("Array completo:", listaDeCompras);

// Acessando elementos pelo índice
// O primeiro elemento está no índice 0
console.log("Primeiro item da lista:", listaDeCompras[0]); // Saída: Arroz
console.log("Terceiro item da lista:", listaDeCompras[2]); // Saída: Macarrão

// Exemplo 2: Um array pode conter diferentes tipos de dados
let dadosVariados = ["João", 30, true, null, [1, 2, 3]];
console.log("Array com dados variados:", dadosVariados);
console.log("Acessando o array dentro do array:", dadosVariados[4]);

// Modificando um valor no array
console.log("Item antes da mudança:", listaDeCompras[1]); // Saída: Feijão
listaDeCompras[1] = "Feijão Carioca";
console.log("Item depois da mudança:", listaDeCompras[1]); // Saída: Feijão Carioca

// Principais propriedades e métodos de Array
// .length: Retorna a quantidade de itens no array
console.log("A lista de compras tem", listaDeCompras.length, "itens.");

// .push(): Adiciona um novo item no FINAL do array
listaDeCompras.push("Café");
console.log("Lista após adicionar 'Café':", listaDeCompras);


console.log("--------------------------------------------------");

/*
===================================
  OBJECTS (Objetos)
===================================

Um Objeto é uma coleção não ordenada de pares "chave-valor". Pense nele como um dicionário
ou uma ficha de cadastro, onde cada informação (valor) é identificada por um rótulo (chave).
As chaves são strings e os valores podem ser de qualquer tipo de dado (string, number, array, outro objeto, etc.).

*/

console.log("### OBJETOS ###");

// Exemplo 1: Criando um objeto para representar um aluno
let aluno = {
    nome: "Maria Silva", // chave: 'nome', valor: 'Maria Silva'
    idade: 25,
    curso: "Análise e Desenvolvimento de Sistemas",
    matriculaAtiva: true,
    materias: ["Algoritmos", "Banco de Dados", "Engenharia de Software"]
};

console.log("Objeto completo:", aluno);

// Acessando propriedades do objeto
// Notação de Ponto (dot notation) - a mais comum
console.log("Nome do aluno:", aluno.nome);
console.log("Curso:", aluno.curso);

// Notação de Colchetes (bracket notation) - útil para chaves dinâmicas
console.log("Idade do aluno:", aluno['idade']);

// Acessando um item do array dentro do objeto
console.log("Segunda matéria do aluno:", aluno.materias[1]); // Saída: Banco de Dados

// Modificando uma propriedade
console.log("Status da matrícula antes:", aluno.matriculaAtiva);
aluno.matriculaAtiva = false;
console.log("Status da matrícula depois:", aluno.matriculaAtiva);

// Adicionando uma nova propriedade ao objeto
aluno.semestre = 3;
console.log("Objeto após adicionar 'semestre':", aluno);

// Adicionando um método (uma função) ao objeto
aluno.apresentar = function() {
    // 'this' se refere ao próprio objeto 'aluno'
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
};

// Chamando o método do objeto
aluno.apresentar();
