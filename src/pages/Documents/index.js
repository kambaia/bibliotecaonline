import React, { useEffect, useState } from "react";
import { ContentSession, CardBooks } from "./styles";
import bainner from "../../assets/bainner.webp";

import { getOnlyBooks } from "../../services/ApiBooks";
import * as FaIcons from "react-icons/fa";
import { useParams } from "react-router-dom";

export default function Documents() {
  const [livro, setLivro] = useState({});
  const { id } = useParams();
  const token = localStorage.getItem("app-web");
  useEffect(() => {
    getBooks(id);
  }, []);

  const getBooks = async (id) => {
    const book = await getOnlyBooks(id);
    setLivro(book.livros[0]);
  };

  return (
    <div style={{ position: "relative", top: "60px", bottom: "60px" }}>
      <ContentSession
        style={{
          paddingTop: '20px',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: ` linear-gradient(to right, rgba(0,0,0,1) 30%, transparent 90%), url(${bainner})`,
        }}
      >
     
        <div className="bainner-titulo">
          <h1>Detalhes do livro </h1>
        </div>
      </ContentSession>

      <ContentSession
      
      >
        <CardBooxList />
        <div className="publicidades"  style={{
        backgroundImage: `linear-gradient(to right, rgba(245, 246, 252, 0.52), rgba(0, 76, 119, 0.8)), url(${livro?.publicidade?livro?.publicidade:'/publicidade.jpg'})`,
       }}>
          <h2>Área para públicidades</h2>
        </div>
      </ContentSession>
    </div>
  );
}

const CardBooxList = () => {
  const [livro, setLivro] = useState({});
  const [categoria, setCategoria] = useState("");
  const [autor, setAutot] = useState("");
  const { id } = useParams();
  const token = localStorage.getItem("app-web");
  useEffect(() => {
    getBooks(id);
  }, []);

  const getBooks = async (id) => {
    const book = await getOnlyBooks(id);
    console.log(book.livros);
    setLivro(book.livros[0]);
  };
  return (
    <>
      {livro && (
        <CardBooks>
          <a href={`/livros/${livro._id}`}>
            <div className="card-body-book">
              <div className="disc">
                <div className="card-capa">
                  <img src={livro.capa_ul} />
                </div>
                <div  className="card-desc">
                  <span>
                    <strong>Titulo: </strong>
                    {livro.tema}
                  </span>
                  <span>
                    <strong>autor do livro: </strong>
                    {livro.nome_autor}
                  </span>
                  <span>
                    <strong>Instituicao: </strong>
                    {livro.instituicao}
                  </span>
                  <span>
                    <strong>nº pagina: </strong>
                    {livro.numero_pagina}
                  </span>
                  <span>
                    <strong>Ano de defesa: </strong>
                    {livro.ano}
                  </span>
                  <span>
                    <strong>Formato do documento : </strong>
                    {livro.formato}
                  </span>

                  <span>
                    <strong>categoria: </strong>
                    {livro.categoria}
                  </span>
                </div>
              </div>
              <div className="dist-text">
                <div>
                  <strong>Descrição</strong>
                </div>
                <span>{livro.descricao}</span>
              </div>
            </div>

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
              </ul>
              <div className="baixar">
                <span>
                  {token ? (
                    <a target="_blank" href={livro.documento_url}>
                      <span>
                        <FaIcons.FaDownload />
                      </span>
                      <span>Baixar agora</span>
                    </a>
                  ) : (
                    ""
                  )}
                </span>
              </div>
            </div>
          </a>
        </CardBooks>
      )}
    </>
  );
};
