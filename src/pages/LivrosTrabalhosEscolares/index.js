import React, { useEffect, useState } from "react";
import { ContentSession, Containner, Content } from "./styles";
import bainner from "../../assets/bainner.webp";
import {
  getAllBooksMonografia,
  getWithCategoryBooks,
  Favoritar,
} from "../../services/ApiBooks";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";

import { useParams, Link } from "react-router-dom";
export default function LivrosTrabalhosEscolares() {
  const { livro, id } = useParams();
  const [livros, setLivros] = useState([]);
  const [cat, setcat] = useState();
  const [busca, setBusca] = useState("");

  useEffect(() => {
    getBooks();
  }, []);
  const getBooks = async () => {
    const book = await getAllBooksMonografia("6262cef0666f19152cc808a8");
    setLivros(book);
  };
  const favoritar = async (item, gostou) => {
    if (item) {
      const { _id, tema, ano, numero_pagina, instituicao, formato, Descricao } =
        item;
      const id = _id;
      const livro = {
        titulo: tema,
        ano: ano,
        numero_pagina: numero_pagina,
        instituicao: instituicao,
        formato: formato,
        Descricao: Descricao,
      };
      if (gostou === "activo") {
        livro.favorito = "desativado";
        const resp = await Favoritar(livro, id);
      } else if (gostou === "desativado") {
        livro.favorito = "activo";
        const resp = await Favoritar(livro, id);
      }
    }
  };
  const handleChange = (event) => {
    setBusca(event.target.value);
  };
  let filtered = livros.filter((file) => {
    return (
      (file.ano.toUpperCase().indexOf(busca) !== -1) |
      (file.titulo.toLowerCase().indexOf(busca) !== -1)
    );
  });

  return (
    <div style={{ position: "relative", top: "60px", bottom: "60px" }}>
      <ContentSession
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundImage: ` linear-gradient(to right, rgba(0,0,0,1) 30%, transparent 90%), url(${bainner})`,
        }}
      >
        <div className="bainner-titulo">
          <div className="pesquisar">
            <input
              placeholder="Buscar por um livro, Ex: A fitoria de estudar"
              onChange={handleChange}
            />
            <button>
              <FaIcons.FaSearch />
            </button>
          </div>
        </div>
      </ContentSession>

      <ContentSession
        style={{
          width: "98%",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          marginBottom: "100px",
        }}
      >
        <div style={{ padding: 10, width: "100%" }}>
          {cat ? (
            <h2>{`Todos Livros de ${cat} disposição`}</h2>
          ) : (
            <h2>Todos Livros a sua disposição</h2>
          )}{" "}
        </div>
        {filtered.length > 0 ? (
          <CardBooxList items={filtered} />
        ) : (
          <h3
            style={{ borderTop: "1px solid #ddd", padding: 20, width: "100%" }}
          >
            Nenhum Livro disponivel de momento
          </h3>
        )}
      </ContentSession>
    </div>
  );
}

const CardBooxList = ({ items }) => {
  const [activo, setActivo] = useState(false);
  const [correntActive, setCorrentActive] = useState(false);
  const token = localStorage.getItem("app-web");
  const favoritar = async (id, gostou) => {
    console.log(id);
    if (correntActive === id) {
      setActivo(!activo);
    }
  };

  return (
    <>
      {items ? (
        <Containner>
          <Content>
            {items &&
              items.map((item, index) => (
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
                            ): "" }
                          </a>

                          <p style={{ cursor: "pointer" }}>
                            <a
                              target="_blank"
                              href={item.documento_url && item.documento_url}
                            >
                              <FaIcons.FaDownload />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Content>
        </Containner>
      ) : (
        ""
      )}
      <hr />
    </>
  );
};
