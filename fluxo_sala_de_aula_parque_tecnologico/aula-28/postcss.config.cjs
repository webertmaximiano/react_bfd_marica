module.exports = {
  plugins: {
    // Não carregar o plugin `tailwindcss` herdado do diretório pai.
    // Mantemos apenas o `autoprefixer` para compatibilidade simples.
    autoprefixer: {},
  },
};
