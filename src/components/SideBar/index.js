import React, { useState, useEffect } from "react";
import { Containner } from "./styles";
import * as FaIcons from "react-icons/fa";
import logo from "../../assets/lg.png";
import { logout } from "../../store/action/auth";
import { Link } from "react-router-dom";
export default function SideBar() {
  const [user, setUser] = useState(localStorage.getItem("autenticado"));
  const [auth, setAuth] = useState("");
  useEffect(() => {
    if (user === "leitor") {
      setAuth("leitor");
    } else if (user === "admin") {
      setAuth("admin");
    } else {
      logout();
    }
  }, []);

  return (
    <Containner>
      <div className="content">
        <div className="logo">
          <img src={logo} />
        </div>
        <ul>
          <div className="public">
            <li>
              <a href="/perfil">
                <span>
                  <FaIcons.FaAngleRight color="#0c854e" size={15} />
                </span>
                Perfil
              </a>
            </li>
            <li>
              <Link to="/livros">
                <span>
                  <FaIcons.FaAngleRight color="#0c854e" size={15} />
                </span>
                Livros Lidos
              </Link>
            </li>
           
            {auth === "admin" ? (
              <li>
                <Link to="/listagem-livros">
                  <span>
                    <FaIcons.FaAngleRight color="#0c854e" size={15} />
                  </span>
                  Livros Cadastrados
                </Link>
              </li>
            ) : (
              ""
            )}

            {auth === "admin" ? (
              <li>
                <Link to="/registro-livros/categoria">
                  <span>
                    <FaIcons.FaAngleRight color="#0c854e" size={15} />
                  </span>
                   Cadastrar Livros
                </Link>
              </li>
            ) : (
              ""
            )}

            <li>
              <a
                target=""
                href="https://www.facebook.com/manuelalberto.kambaia/"
              >
                <span>
                  <FaIcons.FaAngleRight color="#0c854e" size={15} />
                </span>
                Partilhar
              </a>
            </li>
          </div>
        </ul>
      </div>
    </Containner>
  );
}
