import React, { useEffect, useState } from "react";
import { ContentSession, CardBooks } from "./styles";
import bainner from "../../assets/bainner.webp";
import {
  getAllBooks,
  getWithCategoryBooks,
  Favoritar,
} from "../../services/ApiBooks";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";

import { useParams, useHistory} from "react-router-dom";

export default function Recomendado() {
  const { livro, id } = useParams();
  const [livros, setLivros] = useState([]);
  const [cat, setcat] = useState();
 const [busca, setBusca] = useState('');
  useEffect(() => {
    if (id) {
      getBooksWithCategory(id);
      setcat(livro);
    } else {
      getBooks();
    }
  }, []);

  const getBooks = async () => {
    const books = await getAllBooks();
    setLivros(books);
  };
  const getBooksWithCategory = async () => {
    const booksCategory = await getWithCategoryBooks(id);
    setLivros(booksCategory);
  };
  const favoritar = async (item, gostou) => {
      console.log(item)
    if (item) {
      const {
        _id,
        titulo,
        ano,
        numero_pagina,
        instituicao,
        formato,
        licenca,
        Descricao,
      } = item;
      const id = _id;
        const livro = {
            titulo: titulo,
            ano: ano,
            numero_pagina: numero_pagina,
            instituicao: instituicao,
            formato: formato,
            licenca: licenca,
            Descricao: Descricao
        }
        if (gostou ==="activo") {
            livro.favorito= "desativado";
            const resp = await Favoritar(livro, id);
        } else if (gostou==="desativado") {
            livro.favorito= "activo";
            const resp = await Favoritar(livro, id);
        }
        
      }
      const books = await getAllBooks();
      setLivros(books);
      console.log(books);
  };
 const handleChange = (event) => {
        setBusca(event.target.value)

  };

  let filtered = livros.filter((file) => {
    return (
      file.tema.toLowerCase().indexOf(busca) !== -1 ||
      file.ano.toUpperCase().indexOf(busca) !== -1 ||
      file.instituicao.toLowerCase().indexOf(busca) !== -1 ||
      file.Descricao.toUpperCase().indexOf(busca) !== -1
    );
  });
  return (
    <div style={{ position: "relative", top: "60px", bottom: "60px" }}>
      <ContentSession
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: ` linear-gradient(to right, rgba(0,0,0,1) 30%, transparent 90%), url(${bainner})`,
        }}
      >
        <div className="bainner-titulo">
          <div className="pesquisar">
            <input placeholder="Buscar por um livro, Ex: A fitoria de estudar" onChange={handleChange} />
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
          filtered.map((item, index) => (
            <CardBooxList item={item} key={index} favoritar={favoritar} />
          ))
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

const CardBooxList = ({ item, favoritar }) => {
  const [activo, setActivo] = useState("");
  useEffect(() => {
    setActivo(item.favorito);
  }, []);
  return (
    <>
      {item.recomedado.length >=5? (
        <CardBooks>
          <a href={`/livros/${item._id}`}>
            <div className="card-capa">
              <img src={item.capa_ul} />
            </div>
            <div className="card-desc">
              <span>{item.titulo}</span>
            </div>
          </a>
          <div className="rodape">
            <ul>
              <li>
                <a href="">
                  <span>
                    <FaIcons.FaFacebookF />
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <FaIcons.FaYoutube />
                  </span>
                </a>
              </li>
              {localStorage.getItem("app-web") ? (
                <li>
                  <a
                    onClick={() => favoritar(item, activo, setActivo(activo))}
                  >
                    <span>
                      {activo==='activo'? (
                        <MdIcons.MdFavorite color="#d00" />
                      ) : (
                        <GrIcons.GrFavorite />
                      )}
                    </span>
                  </a>
                </li>
              ) : (
                ""
              )}
            </ul>
            <div className="baixar">
              <span>
                <a target="_blank" href={item.documento.documento_url}>
                  <span style={{ color: "#0c854e" }}>
                    <FaIcons.FaBookReader color="#0c854e" /> Ler
                  </span>
                </a>
              </span>
            </div>
          </div>
        </CardBooks>
      ) : (
        ""
      )}
    </>
  );
};
