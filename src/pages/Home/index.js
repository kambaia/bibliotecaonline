import React, { useEffect, useState } from "react";
import { MainContainner, ContentSession, ContentCategoria } from "./styles";
import Card_Book from "../../components/Card_Books";
import bainner from "../../assets/bainner.webp";
import * as FaIcons from "react-icons/fa";
import CardRecBook from "../../components/CardRecBook/CardRecBook";
import { getAllCateory } from "../../services/ApiCategory";
import { getAllBooks } from "../../services/ApiBooks";
export default function Home() {
  const [livros, setLivros] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const books = await getAllBooks();
    setLivros(books);
  };
  return (
    <MainContainner>
      <ContentSession>
        <div className="card-category">
          <Categoria titulo="Encontre o seu conhecimento aquic" />
        </div>

        {livros && livros.length >0 ? (
          <>
            <div className="card-books">
              <Card_Book livros={livros} />
            </div>
          </>
        ) : (
          <div className="titulo1">
            <h2>
              <h3>Nenhum Livro Registrado</h3>
            </h2>
          </div>
        )}
      </ContentSession>
      <ContentSession
        style={{
          height: "300px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundImage: ` linear-gradient(to right, rgba(0,0,0,1) 30%, transparent 90%), url(${bainner})`,
        }}
      >
        <div className="bainner-titulo">
          <h1>
            {" "}
            Todos os dias você aprende uma coisa nova aqui no seu gabarito de
            conhecimento de monografias{" "}
          </h1>
        </div>
      </ContentSession>
      <ContentSession>
        <div style={{ height: "10px" }}> </div>
      </ContentSession>
    </MainContainner>
  );
}
const Categoria = ({ titulo, style }) => {
  const [categoria, setcategoria] = useState([]);
  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const category = await getAllCateory();
    setcategoria(category);
  };
  return (
    <>
      <ContentCategoria>
        <div className="content">
          <div className="text-categoria">
            {" "}
            <h2 style={{ color: style ? "#f0f" : "#000" }}> {titulo} </h2>
          </div>
          <ul>
            {categoria.length > 0 &&
              categoria.map((item, index) => (
                <li key={index}>
                  {" "}
                  <a href={`/livros/${item.categoria}/${item._id}`}>
                    {" "}
                    <span>
                      {" "}
                      <FaIcons.FaAngleRight />{" "}
                    </span>
                    {item.categoria}
                  </a>{" "}
                </li>
              ))}
          </ul>
        </div>
      </ContentCategoria>{" "}
    </>
  );
};
