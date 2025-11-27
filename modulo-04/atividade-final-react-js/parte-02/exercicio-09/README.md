# Projeto Final — Exercício 09 (Mini App de Tarefas)

Pequena aplicação React demonstrando:

- Pelo menos 3 componentes reutilizáveis (`Header`, `TodoForm`, `TodoList`, `Counter`).
- Uso de `useState` e `useEffect`.
- Formulário controlado (`TodoForm`).
- Interação entre componentes via `props` e `lifting state up` (estado `todos` no `App`).
- Estilização com CSS Modules.

Como rodar

1. Entre na pasta do exercício:

```bash
cd modulo-04/atividade-final-react-js/parte-02/exercicio-09
```

2. Instale dependências e rode em modo dev (Vite):

```bash
npm install
npm run dev
```

Arquitetura

- `index.html` — ponto de entrada
- `src/main.jsx` — boot do React
- `src/App.jsx` — componente principal (estado e lógica)
- `src/components/` — `Header`, `TodoForm`, `TodoList`, `Counter`
- `src/styles/` — `App.module.css` (CSS Module) e `reset.css`

Observações

- O app persiste tarefas no `localStorage` (chave `ex09_todos`).
- É um exemplo simples; posso estender com edição de tarefas, filtros, ou testes, se desejar.
