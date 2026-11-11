# Site Oficial - Nacional Futebol Clube

Website estático do Nacional Futebol Clube, de Manaus, Amazonas. 

Este projeto usa Astro com TypeScript estrito e tem como objetivos iniciais as páginas institucionais e editoriais.

## Requisitos

- Node.js `>=22.23.4`
- npm

## Desenvolvimento

Instale as dependências e inicie o servidor Astro em segundo plano:

```sh
npm install
npm run dev
```

O servidor local usa `http://localhost:4321` por padrão. Para consultar ou gerir o processo:

```sh
npx astro dev status
npx astro dev logs
npx astro dev stop
```

## Comandos

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o servidor local em segundo plano |
| `npm run build` | Gera o site estático em `dist/` |
| `npm run preview` | Pré-visualiza o build localmente |
| `npm run astro -- --help` | Mostra a ajuda do Astro CLI |

## Estrutura atual

```text
├── docs/          # Escopo, arquitetura, modelo de dados, design e roadmap
├── public/        # Arquivos públicos e assets aprovados
├── src/layouts/   # Estrutura comum das páginas
└── src/pages/     # Rotas do site
```

O conteúdo atual da página inicial é um placeholder de desenvolvimento. Não publique conteúdo factual sem aprovação do clube. A arquitetura e as decisões do projeto estão documentadas em `docs/`.
