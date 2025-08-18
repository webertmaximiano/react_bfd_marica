# Atividade Prática (Aula 05): Estilizando com CSS e Seletores

## Objetivo

Praticar a criação e utilização de uma folha de estilos externa (`.css`) e aplicar diferentes tipos de seletores CSS para estilizar uma página HTML, incluindo seletores de tag, classe, ID e combinadores.

---

## Tarefa

Nesta atividade, você vai estilizar uma página simples de blog.

1.  Crie uma nova pasta chamada `atividade-blog` dentro da sua pasta `modulo-01`.
2.  Dentro de `atividade-blog`, crie um arquivo chamado `index.html`.
3.  Copie e cole o **Código HTML** fornecido abaixo para dentro do seu `index.html`.
4.  Ainda dentro de `atividade-blog`, crie um segundo arquivo chamado `style.css`.
5.  No arquivo `index.html`, adicione a tag `<link>` para conectar sua folha de estilos `style.css`.
6.  No arquivo `style.css`, escreva as regras CSS para cumprir todos os **Requisitos de Estilo** listados abaixo.

---

## Código HTML (para o `index.html`)

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog de Tecnologia</title>
    <!-- Adicione o link para seu CSS aqui -->
</head>
<body>

    <header id="cabecalho-principal">
        <h1>Meu Blog de Tecnologia</h1>
    </header>

    <main>
        <article class="post">
            <h2>O que é HTML e por que é importante?</h2>
            <p>HTML (HyperText Markup Language) é a espinha dorsal da web. <a href="#">Leia mais</a>.</p>
        </article>

        <article class="post">
            <h2>Introdução ao CSS</h2>
            <p>CSS é o que dá vida e estilo às nossas páginas. <a href="#">Leia mais</a>.</p>
            <div>
                <h3>Tópicos abordados:</h3>
                <ul>
                    <li>Seletores</li>
                    <li>Cores e fontes</li>
                </ul>
            </div>
        </article>
    </main>

    <footer>
        <p>&copy; 2025 - Todos os direitos reservados.</p>
    </footer>

</body>
</html>
```

---

## Requisitos de Estilo (para o `style.css`)

Use os seletores apropriados para aplicar os seguintes estilos:

1.  **Seletor de Tag:**
    *   Para o `body`, defina a `font-family` como `Arial, sans-serif`.
    *   Para todos os links (`a`), remova o sublinhado (`text-decoration: none;`) e defina a `color` como `teal`.

2.  **Seletor de ID:**
    *   Para o elemento com `id="cabecalho-principal"`, defina um `background-color` como `#f0f8ff` (AliceBlue) e um `padding` de `20px`.

3.  **Seletor de Classe:**
    *   Para todos os elementos com a `class="post"`, adicione uma `border` de `1px solid #ccc`, uma `margin` de `15px` e um `padding` de `10px`.

4.  **Seletor de Descendente (espaço):**
    *   Para o `h1` que está dentro do `#cabecalho-principal`, centralize o texto (`text-align: center;`).

5.  **Seletor de Filho Direto (`>`):**
    *   Para os `h2` que são filhos diretos de um `article`, defina a `color` como `#4682B4` (SteelBlue).

6.  **Seletor de Irmão Adjacente (`+`):**
    *   Para o parágrafo (`p`) que vem imediatamente depois de um `h2`, defina o `font-style` como `italic`.

## Como Verificar

Abra o seu arquivo `index.html` no navegador. A página deve refletir todos os estilos que você aplicou. Use a aba "Elements" do DevTools (F12) para inspecionar os elementos e ver quais regras de CSS estão sendo aplicadas a eles.
