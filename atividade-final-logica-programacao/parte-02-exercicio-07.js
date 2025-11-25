// Exercício 7 — Sistema de Login Simples
// Este exercício simula um sistema de login básico com verificação de usuário e senha.

// Define as credenciais corretas para o login.
const usuarioCorreto = "admin";
const senhaCorreta = "1234";

// Solicita ao usuário que digite o nome de usuário via prompt.
// O prompt exibe uma caixa de diálogo no navegador.
let usuario = prompt("Digite o usuário:");

// Solicita ao usuário que digite a senha via prompt.
let senha = prompt("Digite a senha:");

// Verifica se o usuário e a senha fornecidos correspondem aos corretos.
// Se ambos estiverem corretos, exibe mensagem de sucesso.
// Caso contrário, exibe mensagem de erro.
if (usuario === usuarioCorreto && senha === senhaCorreta) {
    console.log("Login realizado com sucesso!");
} else {
    console.log("Usuário ou senha incorretos");
}
