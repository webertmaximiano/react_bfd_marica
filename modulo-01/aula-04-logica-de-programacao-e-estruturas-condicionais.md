# Aula 4: Lógica de Programação e Estruturas Condicionais

## Introdução

Nas aulas anteriores, aprendemos a guardar informações em variáveis. Agora, vamos aprender a usar a **Lógica de Programação** para criar programas que tomam decisões. É aqui que nosso código começa a ficar "inteligente" e a reagir de formas diferentes a depender das situações.

---

## O que é Lógica de Programação?

É o conjunto de regras e conceitos que usamos para organizar nosso código de uma forma que faça sentido. É a maneira como instruímos o computador a seguir um "fluxo" de execução e a tomar decisões com base nos dados que ele possui.

O pilar da lógica de programação é a **condição**. Precisamos ser capazes de comparar valores para que o programa possa seguir por um caminho ou por outro.

## Tomando Decisões: Operadores de Comparação

Para tomar uma decisão, primeiro precisamos fazer uma comparação. O resultado de toda comparação é sempre um valor booleano: `true` (verdadeiro) ou `false` (falso).

Os principais operadores em JavaScript são:

*   `>`: Maior que
*   `<`: Menor que
*   `>=`: Maior ou igual a
*   `<=`: Menor ou igual a
*   `===`: Estritamente igual a (compara o valor E o tipo de dado)
*   `!==`: Estritamente diferente de

**Exemplo Prático:**

```javascript
const idade = 20;
const nota = 7.5;

console.log(idade > 18);   // true (20 é maior que 18)
console.log(nota < 5.0);   // false (7.5 não é menor que 5.0)
console.log(idade === 20); // true (o valor é exatamente 20)
console.log(nota !== 7.5); // false (o valor é exatamente 7.5)
```

---

## Estruturas Condicionais: `if` e `else`

Agora que sabemos como comparar valores, usamos as estruturas condicionais para executar blocos de código com base no resultado (`true` ou `false`) dessas comparações.

### 1. `if` (Se)

Executa um bloco de código **se, e somente se,** a condição for verdadeira.

**Exemplo:**

```javascript
let idadeParaDirigir = 18;

if (idadeParaDirigir >= 18) {
  console.log("Você tem idade suficiente para tirar a carteira de motorista!");
}
```

### 2. `if...else` (Se... Senão)

Executa o bloco `if` se a condição for verdadeira. Caso contrário (**senão**), executa o bloco `else`.

**Exemplo:**

```javascript
let mediaFinal = 6.0;

if (mediaFinal >= 7.0) {
  console.log("Parabéns, você foi aprovado(a)!");
} else {
  console.log("Infelizmente, você está de recuperação.");
}
```

### 3. `if...else if...else`

Permite encadear várias condições. O programa verifica uma por uma, e no momento em que encontra uma verdadeira, ele executa o bloco correspondente e ignora o resto.

**Exemplo:**

```javascript
let temperatura = 26;

if (temperatura > 30) {
  console.log("Está muito quente! Hora de ir à praia.");
} else if (temperatura > 20) {
  console.log("O tempo está agradável.");
} else {
  console.log("Está frio, melhor pegar um casaco.");
}
```

---

## Combinando Condições: Operadores Lógicos

E se precisarmos verificar mais de uma condição ao mesmo tempo?

*   `&&` (**E Lógico**): Ambas as condições precisam ser `true`.
*   `||` (**OU Lógico**): Pelo menos uma das condições precisa ser `true`.
*   `!` (**NÃO Lógico**): Inverte o valor de uma condição (de `true` para `false` e vice-versa).

**Exemplo Prático Completo:**

```javascript
let idade = 22;
let possuiIngresso = true;

// Para entrar no show, a pessoa precisa ter 18 anos ou mais E precisa ter o ingresso.
if (idade >= 18 && possuiIngresso === true) {
  console.log("Entrada permitida. Bom show!");
} else {
  console.log("Entrada não permitida.");
}

let diaDaSemana = "Domingo";

// A loja abre aos Sábados OU Domingos.
if (diaDaSemana === "Sábado" || diaDaSemana === "Domingo") {
  console.log("A loja está aberta!");
} else {
  console.log("A loja está fechada.");
}

let usuarioLogado = false;

// Verifica se o usuário NÃO está logado.
if (!usuarioLogado) {
  console.log("Por favor, faça o login para continuar.");
}
```

## Conclusão

As estruturas condicionais são os blocos de construção fundamentais para qualquer programa minimamente complexo. Elas permitem que nossos aplicativos reajam e se adaptem a diferentes entradas e situações, tornando-os dinâmicos e úteis.
