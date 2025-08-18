# Aula 5: Introdução ao CSS e Seletores

## Introdução

Até agora, nossos arquivos HTML possuem apenas estrutura e conteúdo, mas não têm estilo. O **CSS (Cascading Style Sheets)** é a linguagem que usamos para "vestir" nosso HTML, ou seja, para adicionar cores, fontes, espaçamentos, layouts e tudo que compõe o design de uma página.

---

## 1. Sintaxe e Inserção de CSS

### Sintaxe Básica

Uma regra CSS é composta por três partes:

*   **Seletor:** O padrão que "escolhe" o(s) elemento(s) HTML que você quer estilizar.
*   **Propriedade:** O aspecto do elemento que você quer alterar (ex: `color`, `font-size`, `background-color`).
*   **Valor:** A configuração que você quer aplicar à propriedade (ex: `blue`, `16px`, `#ffffff`).

```css
/* Isto é um comentário em CSS */

seletor {
  propriedade: valor;
  outra-propriedade: outro-valor;
}

h1 {
  color: blue;
  font-size: 24px;
}
```

### 3 Formas de Inserir CSS no HTML

Existem três maneiras de adicionar CSS a um documento HTML. A ordem de prioridade delas é: Inline > Interno > Externo.

**1. Arquivo Externo (External CSS) - A MELHOR PRÁTICA**

Criamos um arquivo separado com a extensão `.css` (ex: `styles.css`) e o vinculamos ao nosso HTML.

*   **Vantagens:** Separação total entre estrutura (HTML) e apresentação (CSS), reutilização do mesmo estilo em várias páginas, manutenção muito mais fácil.

No arquivo `styles.css`:
```css
h1 { color: navy; }
p { font-family: sans-serif; }
```

No arquivo `index.html`, dentro da tag `<head>`:
```html
<link rel="stylesheet" href="styles.css">
```

**2. CSS Interno (Internal CSS)**

Colocamos o código CSS diretamente no documento HTML, dentro da tag `<style>`, que geralmente fica no `<head>`.

*   **Uso:** Útil para estilos que se aplicam **apenas a uma única página**.

No arquivo `index.html`:
```html
<head>
  <style>
    body {
      background-color: #f0f0f0;
    }
    h1 {
      color: green;
    }
  </style>
</head>
```

**3. CSS Inline - EVITAR QUANDO POSSÍVEL**

Aplicamos o estilo diretamente em uma tag HTML específica usando o atributo `style`.

*   **Desvantagens:** Dificulta a manutenção, mistura estrutura com apresentação, não pode ser reutilizado. Use apenas em último caso para uma alteração muito específica.

No arquivo `index.html`:
```html
<p style="color: red; font-weight: bold;">Este parágrafo será vermelho e em negrito.</p>
```

---

## 2. Seletores CSS

Seletores são a parte mais poderosa do CSS. Eles nos permitem ser extremamente específicos sobre quais elementos queremos estilizar.

### Seletores Básicos

*   **Seletor de Tipo (Tag):** Seleciona todos os elementos de um determinado tipo.
    *   `p { ... }` /* Estiliza todos os parágrafos */

*   **Seletor de Classe:** Seleciona todos os elementos que possuem um determinado atributo `class`. É o seletor mais comum e versátil. O nome da classe é precedido por um ponto (`.`).
    *   `.alerta { color: orange; }` /* Estiliza qualquer elemento com class="alerta" */

*   **Seletor de ID:** Seleciona **um único elemento** que possui um atributo `id` específico. O ID deve ser único na página. É precedido por uma cerquilha (`#`).
    *   `#menu-principal { ... }` /* Estiliza o elemento com id="menu-principal" */

### Seletores Combinadores

Permitem combinar outros seletores para criar regras mais específicas.

*   **Seletor Descendente (espaço):** Seleciona elementos que estão dentro de outro elemento.
    *   `article p { ... }` /* Estiliza todos os `p` que estão dentro de um `article` */

*   **Seletor de Filho Direto (`>`):** Seleciona elementos que são filhos diretos de outro elemento.
    *   `ul > li { ... }` /* Estiliza apenas os `li` que são filhos diretos de uma `ul` */

*   **Seletor de Irmão Adjacente (`+`):** Seleciona o elemento que vem **imediatamente depois** de outro elemento, no mesmo nível.
    *   `h2 + p { ... }` /* Estiliza o primeiro `p` que vem logo após um `h2` */

*   **Seletor de Irmão Geral (`~`):** Seleciona **todos** os elementos irmãos que vêm depois de um certo elemento, no mesmo nível.
    *   `h2 ~ p { ... }` /* Estiliza todos os `p` que vêm depois de um `h2` */

## Conclusão

Entender como adicionar CSS e, principalmente, como usar seletores de forma eficaz, é a chave para transformar um documento HTML simples em uma página web bonita e funcional. A prática constante com diferentes seletores solidificará seu conhecimento.
