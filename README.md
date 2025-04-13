# React + Vite + GraphQL + Apollo Client

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## GraphQL + Apollo Client

This template also includes Apollo Client for GraphQL queries and mutations. You can use the `useQuery` and `useMutation` hooks to interact with your GraphQL API.
To set up Apollo Client, you need to install the required packages:

```bash
npm install @apollo/client graphql
```

Then, you can create an Apollo Client instance and wrap your application with the `ApolloProvider` component:

- [GraphQL](https://graphql.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [Apollo Client Docs](https://www.apollographql.com/docs/react/)
