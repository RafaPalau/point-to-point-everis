import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
