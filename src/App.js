import React from "react";
import "./App.css";
import MainRouter from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
function App() {
  const form = useSelector((state) => state);
  console.log(form);
  return (
    <>
      <BrowserRouter>
        <Header />
        <MainRouter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
