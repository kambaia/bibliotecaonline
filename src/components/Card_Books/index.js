import React, { useEffect, useState } from "react";
import { Containner, Content } from "./styles";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";

export default function Index({ livros }) {
  const token = localStorage.getItem("app-web");
  const [activo, setActivo] = useState(false);
  const [correntActive, setCorrentActive] = useState(false);

  const favoritar = async (id, gostou) => {
    console.log(id);
    if (correntActive === id) {
      setActivo(!activo);
    }
  };
  return (
    <Containner>
      <div className="titulo">
        <h2>Novos Livros</h2>
      </div>
      <Content>
        {livros &&
          livros.map((item, index) =>{
            if(index <6){
              return(
                <div className="item-book">
                <Link to={`livros/${item._id}`}>
                  <div className="img-body">
                    <img src={item.capa_ul} />
                  </div>
                </Link>
                <div className="content-descri">
                  <div className="item-tilulo">
                    <h3>{item.titulo} </h3>
                  </div>
  
                  <div className="item-discription">
                    <span>
                      <strong>Feito por: </strong>
                      {item.nome_autor}
                    </span>
                    <div className="item-link-downlad">
                      <div className="redes-social">
                        {token ? (
                          <>
                            <p>
                              <FaIcons.FaFacebookF color="#0c854e" />
                            </p>
                            <p>
                              {" "}
                              <FaIcons.FaBookReader color="#0c854e" />
                            </p>
                            <p>
                              {" "}
                              <FaIcons.FaYoutube color="#0c854e" />
                            </p>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="redes-social">
                        <a
                          onClick={() => {
                            favoritar(item._id, activo);
                            setCorrentActive(item._id);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          {token ? (
                            <span>
                              {correntActive === item._id && activo ? (
                                <MdIcons.MdFavorite color="#d00" />
                              ) : (
                                <GrIcons.GrFavorite />
                              )}
                            </span>
                          ) : (
                            ""
                          )}
                        </a>
  
                        <p style={{ cursor: "pointer" }}>
                          {token ? (
                            <a
                              target="_blank"
                              href={item.documento_url && item.documento_url}
                            >
                              <FaIcons.FaDownload />
                            </a>
                          ) : (
                            ""
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )}})}
      </Content>
    </Containner>
  );
}
