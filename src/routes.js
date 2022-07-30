import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Procurar from "./pages/Proucurar";
import Livros from "./pages/Livros";
import LivrosTrabalhosEscolares from "./pages/LivrosTrabalhosEscolares";
import Documents from "./pages/Documents";
import RegistroLivros from "./pages/RegistroLivros";
import Livros_Edit from "./pages/Livros_Edit";
import Perfil from "./pages/Perfil";
import Livros_Cadastrados from "./pages/Livros_Cadastrados";
import Favorito from "./pages/LivrosFavorito";
import Recomendado from "./pages/Recomendado";
import PrivateRouter from "./config/auth/PrivateRouter";

const MainRouter = () => {
  return (
  
      <Switch>
        <Route exact path="/">
          {" "}
          <Home />{" "}
        </Route>
        <Route exact path="/login">
          <Login />{" "}
        </Route>
        <Route exact path="/livros">
          <Livros />
        </Route>
        <Route exact path="/livros/monografias">
          <LivrosTrabalhosEscolares />
        </Route>
        <Route exact path="/livros/:livro/:id">
          <Livros />
        </Route>
        <Route exact path="/livros/:id">
          <Documents />
        </Route>
        <Route exact path="/procurar">
          <Procurar />{" "}
        </Route>
        <PrivateRouter exact path="/perfil">
          <Perfil />{" "}
        </PrivateRouter>
        <PrivateRouter exact path="/listagem-livros">
          <Livros_Cadastrados />{" "}
        </PrivateRouter>
        <PrivateRouter exact path="/favorito">
          <Favorito />{" "}
        </PrivateRouter>
   
        <PrivateRouter exact path="/edit/:livro/:id">
        <Livros_Edit />{" "}
        </PrivateRouter>
        
        <PrivateRouter exact path="/edit/:livro/:id">
        <Livros_Edit />{" "}
        </PrivateRouter>
      
      
        <PrivateRouter exact path="/edit/:livro/:id">
        <Livros_Edit />{" "}
        </PrivateRouter>
      
      

        <PrivateRouter exact path="/registro-livros/:page">
          <RegistroLivros />{" "}
        </PrivateRouter>
        <PrivateRouter exact path="/recomendo">
          <Recomendado />{" "}
        </PrivateRouter>
      </Switch>

  );
};

export default MainRouter;
