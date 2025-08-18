# Aula 2: Pensamento Computacional e Algoritmo

## Introdução

Antes de escrevermos nossa primeira linha de código, é fundamental aprender a "pensar" de uma forma que o computador entenda. Isso é o que chamamos de Pensamento Computacional. É a base para resolver problemas de forma eficaz no mundo da programação.

---

## O que é Pensamento Computacional?

Não é pensar como um computador, mas sim usar um conjunto de técnicas para formular problemas e suas soluções de uma maneira que um computador possa executar. O Pensamento Computacional é baseado em quatro pilares principais:

### 1. Decomposição

É a arte de quebrar um problema grande e complexo em partes menores e mais fáceis de gerenciar.

*   **Exemplo Prático:** Imagine que você precisa criar um site de perfil de usuário. Em vez de pensar no todo, você decompõe o problema:
    *   Criar a seção do cabeçalho com a foto e o nome.
    *   Criar a seção "Sobre mim" com uma biografia.
    *   Criar uma lista de "Projetos" em que a pessoa trabalhou.
    *   Criar o rodapé com links para redes sociais.

### 2. Reconhecimento de Padrões

Depois de decompor o problema, você começa a procurar por semelhanças ou padrões entre as partes menores.

*   **Exemplo Prático:** No nosso site de perfil, você percebe que tanto a seção "Sobre mim" quanto a de "Projetos" têm um padrão: ambas possuem um título e um parágrafo de texto. Esse padrão pode ser reutilizado, economizando trabalho.

### 3. Abstração

É o processo de focar nos detalhes importantes e ignorar o que é irrelevante para o problema em questão. É como criar um "mapa" simplificado.

*   **Exemplo Prático:** Para o perfil do usuário, os detalhes essenciais (abstração) podem ser `nome`, `foto_url` e `biografia`. Detalhes como o time de futebol do usuário ou sua cor favorita são, neste momento, irrelevantes e podem ser ignorados.

### 4. Algoritmos

É o desenvolvimento de uma solução passo a passo para resolver cada uma das partes menores do problema. É aqui que juntamos tudo.

---

## O que é um Algoritmo?

Um algoritmo é simplesmente uma **sequência de instruções claras e finitas** para realizar uma tarefa ou resolver um problema. Pense nele como uma receita de bolo.

### Exemplo do Mundo Real: Fazer um Café Coado

1.  **INÍCIO**
2.  Ferver a água.
3.  Colocar o filtro de papel no coador.
4.  Adicionar o pó de café no filtro.
5.  Despejar a água quente sobre o pó de café lentamente.
6.  Esperar o café coar completamente.
7.  Servir o café na xícara.
8.  **FIM**

Se você pular ou trocar a ordem dos passos, o resultado não será o esperado. Com um computador, a precisão é ainda mais crítica.

### Exemplo Prático de Programação: Encontrar o Maior Número em uma Lista

**Problema:** Dada uma lista de números `[10, 50, 23, 78, 15]`, qual é o maior?

**Algoritmo (em "Português Estruturado" ou Pseudocódigo):**

1.  **INÍCIO**
2.  Pegue a lista de números: `[10, 50, 23, 78, 15]`.
3.  Crie uma variável chamada `maior_numero_ate_agora` e guarde o **primeiro** número da lista nela. (`maior_numero_ate_agora` agora vale `10`).
4.  Para cada um dos **outros** números da lista, faça o seguinte:
    *   Compare o número atual com o `maior_numero_ate_agora`.
    *   Se o número atual for maior, atualize o valor de `maior_numero_ate_agora` para o número atual.
5.  Depois de verificar todos os números, o valor final em `maior_numero_ate_agora` é a resposta.
6.  **FIM**

**Executando o algoritmo:**
*   `maior_numero_ate_agora` começa como `10`.
*   Olha o `50`. É maior que `10`? Sim. `maior_numero_ate_agora` agora é `50`.
*   Olha o `23`. É maior que `50`? Não.
*   Olha o `78`. É maior que `50`? Sim. `maior_numero_ate_agora` agora é `78`.
*   Olha o `15`. É maior que `78`? Não.
*   A lista acabou. O maior número é `78`.

## Conclusão

Dominar o Pensamento Computacional e a criação de algoritmos é o que diferencia um "digitador de código" de um(a) verdadeiro(a) desenvolvedor(a) de software. Pratique decompor problemas do seu dia a dia e descrever as soluções em passos lógicos!
