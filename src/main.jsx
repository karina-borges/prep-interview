import { ApolloProvider } from "@apollo/client";
import { createRoot } from "react-dom/client";
import client from "./apollo/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
