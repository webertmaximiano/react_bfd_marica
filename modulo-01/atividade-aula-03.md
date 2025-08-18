# Atividade Prática (Aula 03): Variáveis e Tipos de Dados

## Objetivo

O objetivo desta atividade é praticar a declaração de variáveis usando `let` e `const`, e a atribuição de diferentes tipos de dados primitivos em JavaScript: `String`, `Number` e `Boolean`.

---

## Tarefa

Vamos criar um pequeno "banco de dados" de um perfil de usuário usando variáveis. 

Crie um novo arquivo chamado `meu-perfil.html` dentro da pasta `modulo-01`.

Dentro deste arquivo, crie uma estrutura HTML básica e, dentro de uma tag `<script>`, declare as variáveis necessárias para armazenar as informações de um perfil.

---

## Requisitos do Código

1.  **Declare as seguintes variáveis** e atribua valores fictícios a elas:

    *   `nome`: deve guardar um `String` (ex: "Fulano da Silva"). Use `const`.
    *   `idade`: deve guardar um `Number` (ex: 30). Use `let`.
    *   `anoDeNascimento`: deve guardar um `Number` (ex: 1994). Use `const`.
    *   `cidade`: deve guardar um `String` (ex: "Rio de Janeiro"). Use `let`.
    *   `profissao`: deve guardar um `String` (ex: "Desenvolvedor Front-End"). Use `const`.
    *   `email`: deve guardar um `String` (ex: "fulano.silva@email.com"). Use `let`.
    *   `ehEstudante`: deve guardar um `Boolean` (`true` ou `false`). Use `let`.

2.  **Exiba os valores no console**:
    *   Após declarar todas as variáveis, use o comando `console.log()` para exibir o valor de cada uma delas no console do navegador.
    *   Para ficar mais organizado, adicione um texto descritivo. Por exemplo:

    ```javascript
    console.log("Nome:", nome);
    console.log("Idade:", idade);
    // ... e assim por diante para todas as variáveis.
    ```

---

## Como Executar e Verificar

1.  Salve o arquivo `meu-perfil.html`.
2.  Abra este arquivo no seu navegador.
3.  Abra o **Console do Desenvolvedor** (pressione a tecla F12).
4.  Verifique se todas as informações do perfil foram impressas corretamente no console.
