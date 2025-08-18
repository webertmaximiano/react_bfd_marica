# Atividade Prática (Aula 04): Lógica de Programação com JavaScript

## Objetivo

Praticar o uso de variáveis, operadores de comparação (`>`, `<`, `===`), operadores lógicos (`&&`, `||`, `!`) e, principalmente, as estruturas condicionais (`if`, `else if`, `else`) para criar um programa com um fluxo de decisão.

---

## Tarefa

Crie um novo arquivo chamado `minha-solucao-aula-04.html` dentro da pasta `modulo-01`.

Dentro deste arquivo, você deve criar uma estrutura HTML básica e adicionar seu código JavaScript dentro de uma tag `<script>`.

Dentro deste arquivo, você vai escrever um programa que determina se uma pessoa pode ou não iniciar o processo para tirar a carteira de motorista (CNH) no Brasil.

---

## Requisitos do Código

1.  **Crie as seguintes variáveis** e atribua valores a elas:
    *   `nome` (tipo `string`)
    *   `idade` (tipo `number`)
    *   `possuiHabilitacao` (tipo `boolean`)

2.  **Use estruturas condicionais** para verificar a situação da pessoa e exibir **uma** das seguintes mensagens no console:

    *   Se a pessoa tiver 18 anos ou mais e **não** possuir habilitação, exiba a mensagem:
        ```
        [Nome], você pode iniciar o processo para tirar sua CNH.
        ```

    *   Se a pessoa tiver 18 anos ou mais e **já** possuir habilitação, exiba a mensagem:
        ```
        [Nome], você já possui CNH.
        ```

    *   Se a pessoa tiver menos de 18 anos, exiba a mensagem:
        ```
        [Nome], você ainda não tem idade suficiente para tirar a CNH.
        ```

### Desafio (Opcional)

Um dos requisitos para tirar a CNH no Brasil é saber ler e escrever. Modifique seu código para incluir essa verificação.

*   Crie uma nova variável chamada `sabeLerEscrever` (tipo `boolean`).
*   Ajuste a lógica para que a mensagem `"[Nome], você pode iniciar o processo para tirar sua CNH."` só apareça se a pessoa atender a **todos** os critérios: ter 18 anos ou mais, não possuir CNH, **e** saber ler e escrever.

---

## Como Executar e Verificar

Para ver o resultado do seu código, salve o arquivo `minha-solucao-aula-04.html` e abra-o no seu navegador.

Depois, abra o **Console do Desenvolvedor** (pressione a tecla F12) para ver as mensagens que seu código está gerando.

Altere os valores das suas variáveis dentro da tag `<script>` para testar todos os caminhos possíveis do seu programa (todas as mensagens de resultado).
