import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import "./resources/css/index.css"; // Importar Tailwind y estilos globales

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
