# Atividade Prática (Aula 01 a 04)

Esta é a primeira atividade prática do curso. O objetivo é colocar a mão na massa e aplicar os conceitos que vimos até agora, desde a configuração do ambiente até a criação da sua primeira página web.

---

## Tarefas

### 1. Configure seu Ambiente

*   **Conta no GitHub:** Crie uma conta gratuita no site [https://github.com/](https://github.com/). Esta será sua principal ferramenta para guardar e compartilhar seus projetos.
*   **Visual Studio Code:** Baixe e instale o editor de código [Visual Studio Code](https://code.visualstudio.com/). Ele é leve, poderoso e o mais usado no mercado.
    *   **Sugestão:** Embora não seja obrigatório, considere usar um sistema operacional baseado em Linux (como o Ubuntu), pois é o ambiente mais comum para desenvolvimento web profissional.

### 2. Crie seu Currículo com HTML

O seu primeiro projeto será criar um arquivo `index.html` para o seu currículo. A ideia é focar na estrutura e no significado do conteúdo, usando HTML Semântico.

*   Crie uma pasta no seu computador chamada `meu-curriculo`.
*   Dentro dela, crie um arquivo chamado `index.html`.
*   Use o código base abaixo como referência para criar o **seu próprio** currículo.

---

## Código Base para o Currículo

Este é o código de exemplo. Estude-o e adapte-o com suas informações.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>John Doe - CV</title>
    <meta name="description" content="A semantic HTML CV for John Doe, a Full Stack Developer.">
</head>
<body>

    <header>
        <h1>JOHN DOE</h1>
        <p>Full Stack Developer</p>
        <address>
            <p><a href="mailto:john.doe@example.com">john.doe@example.com</a></p>
            <p><a href="tel:+123456789">+1 (234) 567-89</a></p>
        </address>
    </header>

    <nav>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
        </ul>
    </nav>

    <main>
        <section id="about">
            <h2>ABOUT ME</h2>
            <p>Hello! I'm John, a HTML and JS enthusiast.</p>
            <p>Fluent in multiple languages including JavaScript, Python, and Ruby. I love using semantic HTML and clean code practices.</p>
            <blockquote cite="http://example.com/source">
                <p>"Code is like humor. When you have to explain it, it’s bad."</p>
            </blockquote>
        </section>

        <section id="skills">
            <h2>SKILLS</h2>
            <h3>Technical Skills</h3>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>AngularJS React</li>
                <li>Ruby on Rails</li>
            </ul>
            <p>Typing speed: <meter value="85" min="0" max="100">85%</meter></p>
            <p>Project completion: <progress value="90" max="100">90%</progress></p>
        </section>

        <section id="experience">
            <h2>EXPERIENCE</h2>
            <article>
                <h3>SOFTWARE ENGINEER AT TECH INC</h3>
                <p><time datetime="2018-01">Jan 2018</time> - <time datetime="2023-12">Dec 2023</time></p>
                <p>Worked with Node.js, Express, and MongoDB to build scalable apps.</p>
            </article>
            <article>
                <h3>FREELANCE DEVELOPER</h3>
                <p>Maintained a portfolio site using Next.js and Jamstack architecture.</p>
            </article>
        </section>

        <section id="education">
            <h2>EDUCATION</h2>
            <table>
                <thead>
                    <tr>
                        <th>Degree</th>
                        <th>Institution</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>B.Sc. Computer Science</td>
                        <td>XYZ University</td>
                        <td><time datetime="2017">2017</time></td>
                    </tr>
                </tbody>
            </table>
        </section>
    </main>

    <footer>
        <p>This CV uses various HTML5 semantic and multimedia tags. It’s also ARIA-friendly and accessible.</p>
        <p>&copy; 2025 John Doe. All rights reserved.</p>
        <p>Made with raw HTML5</p>
    </footer>

</body>
</html>
```

---

## Pontos de Melhoria (Desafios)

O código base é ótimo, mas sempre podemos melhorar. Tente aplicar as seguintes melhorias no seu arquivo `index.html`:

1.  **Idioma da Página:** O atributo `lang` na tag `<html>` está como `"en"` (inglês). Altere para `"pt-br"` para indicar que sua página está em português do Brasil.

2.  **Adicione sua Foto:** Um currículo geralmente tem uma foto. Adicione uma imagem sua. Lembre-se da tag `<img>` e, mais importante, do atributo `alt` para acessibilidade.
    ```html
    <img src="caminho/para/sua/foto.jpg" alt="Foto de [Seu Nome]">
    ```

3.  **Adicione um CSS:** O HTML puro é apenas a estrutura. Crie um arquivo chamado `style.css` na mesma pasta e adicione um pouco de estilo ao seu currículo. Para linkar os dois, adicione a seguinte linha dentro da tag `<head>` do seu HTML:
    ```html
    <link rel="stylesheet" href="style.css">
    ```

4.  **Links para Redes Sociais:** No rodapé (`<footer>`) ou no cabeçalho (`<header>`), adicione links para seu GitHub e LinkedIn. Use a tag `<a>`.

5.  **Correção na Lista de Skills:** No código original, há um item `<li>AngularJS React</li>`. Essas são duas tecnologias diferentes. Corrija a lista para que elas apareçam separadamente.

**Bons estudos e mão na massa!**
