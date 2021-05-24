
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Login from "./pages/Login";
import Procurar from "./pages/Proucurar";
import Livros from "./pages/Livros";
import Documents from "./pages/Documents";
import RegistroLivros from "./pages/RegistroLivros";
import Perfil from "./pages/Perfil";
import Favorito from "./pages/LivrosFavorito";
import Recomendado from "./pages/Recomendado";
import PrivateRouter from "./config/auth/PrivateRouter";


const MainRouter = () =>{
    return(
        <Router>
          <Switch>
            <Route exact path="/"> <Home/> </Route>
            <Route exact path="/login"><Login/> </Route>
            <Route exact path="/livros"><Livros/></Route>
            <Route exact path="/livros/:livro/:id"><Livros/></Route>
            <Route exact path="/livros/:id"><Documents/></Route>
            <Route exact path="/procurar"><Procurar/> </Route>
            <PrivateRouter exact path="/perfil"><Perfil/> </PrivateRouter>
            <PrivateRouter exact path="/favorito"><Favorito/> </PrivateRouter>
            <PrivateRouter exact path="/registro"><RegistroLivros/> </PrivateRouter>
            <PrivateRouter exact path="/recomendo"><Recomendado/> </PrivateRouter>
            </Switch>
        </Router>
       
    )
}

export default MainRouter;