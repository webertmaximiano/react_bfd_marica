// Exercício 8 — Modularização Simples
// Este exercício demonstra modularização criando funções separadas para menu e execução de opções.

// Define a função mostrarMenu que exibe as opções do menu no console.
// Não recebe parâmetros e não retorna valor, apenas imprime o menu.
function mostrarMenu() {
    console.log("1 - Iniciar jogo");
    console.log("2 - Instruções");
    console.log("3 - Sair");
}

// Define a função executarOpcao que recebe um número (opcao) e retorna uma mensagem correspondente.
// Usa um switch para verificar a opção e retornar a mensagem apropriada.
// Se a opção não for 1, 2 ou 3, retorna uma mensagem de opção inválida.
function executarOpcao(opcao) {
    switch (opcao) {
        case 1:
            return "Iniciando o jogo…";
        case 2:
            return "Instruções: Este é um jogo simples. Escolha suas opções no menu.";
        case 3:
            return "Saindo…";
        default:
            return "Opção inválida. Escolha 1, 2 ou 3.";
    }
}

// Demonstra o funcionamento chamando mostrarMenu para exibir o menu.
mostrarMenu();

// Demonstra executarOpcao com diferentes opções, exibindo os resultados no console.
console.log("Opção 1:", executarOpcao(1));
console.log("Opção 2:", executarOpcao(2));
console.log("Opção 3:", executarOpcao(3));
console.log("Opção 4:", executarOpcao(4)); // Testa opção inválida
