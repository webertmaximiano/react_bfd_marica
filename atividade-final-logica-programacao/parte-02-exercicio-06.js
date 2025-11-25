// Exercício 6 — Função de Conversão
// Este exercício cria uma função para converter temperatura de Celsius para Fahrenheit.

// Define a função converterParaFahrenheit que recebe um parâmetro celsius (número em graus Celsius).
// A fórmula de conversão é: Fahrenheit = (Celsius * 9/5) + 32.
// Retorna o valor convertido.
function converterParaFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Testa a função chamando-a com diferentes valores de Celsius.
// Exibe os resultados no console para verificar a conversão.
console.log(`0°C = ${converterParaFahrenheit(0)}°F`); // Ponto de congelamento da água
console.log(`25°C = ${converterParaFahrenheit(25)}°F`); // Temperatura ambiente
console.log(`100°C = ${converterParaFahrenheit(100)}°F`); // Ponto de ebulição da água
