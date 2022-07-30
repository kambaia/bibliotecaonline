import React, { useEffect, useState, useMemo } from "react";
import {
  ContentSession,
  Content,
  CardForm,
  CardMenu,
  ContentTable,
} from "./styles";
import bainner from "../../assets/bainner.webp";
import SideBar from "../../components/SideBar";
import { getAllAutor } from "../../services/ApiAutor";

import {getAllBooks } from "../../services/ApiBooks";
import { getAllCateory } from "../../services/ApiCategory";
import sweetalert from "sweetalert";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
export default function RegistroLivros() {
  const [formMenu, setformMenu] = useState("");
  return (
    <>
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
            <h1>Registros dos dados</h1>
          </div>
        </ContentSession>
        <ContentSession
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: "#fff",
          }}
        >
          <div className="bainner-titulo">
            <Content>
              <CardMenu className="menu">
                <SideBar />
              </CardMenu>
              <CardForm>
                <div className="reader-top">
                  <button onClick={() => setformMenu("categoria")}>
                    Categoria de livros
                  </button>
                  <button onClick={() => setformMenu("autor")}>Autor</button>
                  <button
                    onClick={() => setformMenu("livro")}
                    style={{ borderRight: "1px solid #ddd" }}
                  >
                    Livro
                  </button>
                </div>
                <div>
                  <FormOp op={formMenu} />
                </div>
              </CardForm>
            </Content>
          </div>
        </ContentSession>
      </div>
    </>
  );
}

export const FormOp = ({ op }) => {
  if (op == "categoria") {
    return <RegestroCategoria />;
  } else if (op === "autor") {
    return <RegistroAutor />;
  } else if (op === "livro") {
    return <RegistrarLivro />;
  } else {
    return <RegestroCategoria />;
  }
};

export const RegistrarLivro = () => {
  const [livros, setLivros]  = useState([]);

  useEffect(() => {
      const listLivros = async () => {
        const res = await getAllBooks();
        setLivros(res);
      };
      listLivros();
  }, []);

 
  return (
    <>
      <div className="info">
        <h3>Todos os Livros </h3>
        <div className="card-body-livro">
          <ContentTable>
            <table id="customers">
              <tr>
                <th>#</th>
                <th>Tituilo</th>
                <th>ano de lanc</th>
                <th>Nº pag</th>
                <th>Descrição</th>
                <th>Categoria</th>
                <th>Capa</th>
                <th colSpan="2" style={{ textAlign: "center" }}>
                  Ações
                </th>
              </tr>
              <tbody>
            {livros &&
              livros.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td  style={{ textAlign: "left" }}>{item?.titulo}</td>
                  <td  style={{ textAlign: "left" }}>{item.ano}</td>
                  <td  style={{ textAlign: "left" }}>{item?.numero_pagina}</td>
                  <td  style={{ textAlign: "left" }}>{item?.descricao?.slice(-20)}...</td>
                  <td  style={{ textAlign: "left" }}>{item.categoria?.slice(-10)}..</td>
                  <td  style={{ textAlign: "left" }}><img width={20}  src={item.capa_ul} /></td>

                 
                  <td>


                     <Link to={`/edit/livros/${item._id}`}> <FaIcons.FaEdit /></Link>
                  </td>
                  <td>
                    <FaIcons.FaRegTrashAlt color="#D00" />
                  </td>
                </tr>
              ))}
          </tbody>
            </table>
          </ContentTable>
        </div>
      </div>
    </>
  );
};

export const RegistroAutor = () => {
  const [autor, setAutor] = useState([]);
  useEffect(() => {
    const listAutor = async () => {
      const res = await getAllAutor();
      setAutor(res);
    };
    listAutor();
  }, []);

  return (
    <div className="info">
      <h3>Todos os Autores </h3>
      <ContentTable>
        <table id="customers">
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Bibliografia</th>
            <th>Foto</th>
            <th colSpan="2" style={{ textAlign: "center" }}>
              Ações
            </th>
          </tr>
          <tbody>
            {autor &&
              autor.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td  style={{ textAlign: "left" }}>{item.nome}</td>
                  <td  style={{ textAlign: "left" }}>{item.bibliografia.slice(-60)}...</td>
                  <td>
                  <Link to={`/edit/author/${item._id}`}> <FaIcons.FaEdit /></Link>
                  </td>
                  <td>
                    <FaIcons.FaRegTrashAlt color="#D00" />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </ContentTable>
    </div>
  );
};

export const RegestroCategoria = () => {
  const [catgory, setCategory] = useState([]);
  useEffect(() => {
    const listCat = async () => {
      const res = await getAllCateory();
      setCategory(res);
    };
    listCat();
  }, []);
  return (
    <div className="info">
      <h3>Todas de Categoria </h3>
      <ContentTable>
        <table id="customers">
          <tr>
            <th>#</th>
            <th>Categoria</th>
            <th colSpan="2" style={{ textAlign: "center" }}>
              Ações
            </th>
          </tr>
          <tbody>
            {catgory &&
              catgory.map((item, index) => (
                <tr>
                  <td>{index+1}</td>
                  <td  style={{ textAlign: "left" }}>{item.categoria}</td>
                  <td>
                  <Link to={`/edit/categoria/${item._id}`}> <FaIcons.FaEdit /></Link>
                  </td>
                  <td>
                    <FaIcons.FaRegTrashAlt color="#D00" />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </ContentTable>
    </div>
  );
};
