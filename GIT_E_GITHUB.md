# Controle de Versão com Git e GitHub

Este guia é para você que está começando e nunca ouviu falar sobre Git ou GitHub. Vamos entender o que são, por que são importantes e como você pode usá-los para salvar e compartilhar seus projetos.

## O que é Controle de Versão?

Imagine que você está escrevendo um trabalho muito importante. A cada alteração, você salva uma nova versão do arquivo: `trabalho_v1.doc`, `trabalho_v2.doc`, `trabalho_final.doc`, `trabalho_final_agora_vai.doc`.

O controle de versão faz isso de forma muito mais inteligente e organizada. Ele guarda um histórico de todas as alterações que você faz no seu código, permitindo que você:

*   **Volte no tempo:** Se algo der errado, você pode facilmente voltar para uma versão anterior que estava funcionando.
*   **Entenda as mudanças:** Você consegue ver exatamente o que foi alterado, quando e por quem.
*   **Trabalhe em equipe:** Várias pessoas podem trabalhar no mesmo projeto sem que um atrapalhe o outro.

## O que é Git?

**Git** é a ferramenta que você usa no seu computador para fazer o controle de versão. É um programa de linha de comando que "tira fotos" do seu projeto a cada alteração importante que você queira salvar.

## O que é GitHub?

**GitHub** é uma plataforma online, um site, onde você pode guardar (hospedar) seus projetos que usam Git. Pense nele como uma "rede social para programadores", onde você pode:

*   **Guardar seus projetos online:** Seus códigos ficam seguros na nuvem.
*   **Criar um portfólio:** Mostrar seus projetos para outras pessoas e empresas.
*   **Colaborar:** Trabalhar em projetos com outras pessoas de qualquer lugar do mundo.

## Por que usar Git e GitHub?

*   **Organização:** Mantém seu trabalho organizado e com um histórico claro.
*   **Segurança:** Seu código fica salvo online, como um backup.
*   **Portfólio:** É a principal forma de mostrar suas habilidades como desenvolvedor(a).
*   **Mercado de Trabalho:** Praticamente todas as empresas de tecnologia usam Git e GitHub.

## Caso de Uso: Publicando suas Aulas no GitHub

Vamos a um passo a passo simples para você publicar o código de cada aula.

1.  **Crie uma conta no GitHub:** Acesse [github.com](https://github.com) e crie sua conta gratuita.

2.  **Crie um novo repositório:**
    *   No canto superior direito, clique no sinal de `+` e depois em `New repository`.
    *   Dê um nome para o seu repositório (ex: `minhas-aulas-react`).
    *   Marque como `Public` (Público).
    *   Clique em `Create repository`.

3.  **Abra o terminal no seu computador.**

4.  **"Clone" o repositório para sua máquina:**
    *   Na página do seu repositório no GitHub, clique no botão verde `Code`.
    *   Copie a URL (HTTPS).
    *   No terminal, digite `git clone URL_QUE_VOCE_COPIOU` e aperte Enter.

5.  **Trabalhe na sua aula:**
    *   Acesse a pasta que o `git clone` criou.
    *   Crie e edite os arquivos da sua aula normalmente.

6.  **Salve e envie suas alterações:**
    *   Depois de terminar o trabalho da aula, volte para o terminal e execute os seguintes comandos, um de cada vez:

    ```bash
    # 1. Adiciona todos os arquivos novos ou modificados para serem "fotografados"
    git add .

    # 2. "Tira a foto" (commit) e adiciona uma mensagem descrevendo o que você fez
    git commit -m "Adiciona exercícios da aula 1"

    # 3. Envia as alterações para o seu repositório no GitHub
    git push
    ```

Pronto! Se você atualizar a página do seu repositório no GitHub, verá seus arquivos lá. Repita o passo 6 para cada nova aula ou alteração que fizer.
