import React, { useEffect, useState, useMemo } from "react";
import {
  ContentSession,
  Messagem,
  Content,
  CardForm,
  CardMenu,
} from "./styles";
import bainner from "../../assets/bainner.webp";
import Input, { Select, TextArea } from "../../components/Input";
import Button from "../../components/Button";
import SideBar from "../../components/SideBar";
import { RegistrarAutor, getAllAutor } from "../../services/ApiAutor";
import {
  RegistrarDocumento,
  getAllDocumento,
} from "../../services/ApiDocumento";
import { RegistrarBook, getAllBooks } from "../../services/ApiBooks";
import { RegistrarCategoria, getAllCateory } from "../../services/ApiCategory";
import sweetalert from "sweetalert";
import * as FaIcons from "react-icons/fa";
import Recomendado from "../Recomendado";

export default function RegistroLivros() {
  const [formMenu, setformMenu] = useState("");
  const [form, setForm] = useState({});


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
  const [foto, setFoto] = useState(null);
  const [documento, setDocumento] = useState({});
  const [categoria, setCategoria] = useState([]);
  const [doc, setDoc] = useState([]);
  const [info, setInfo] = useState({ id: "" });
  const [msg, setMsg] = useState("");
   const [checked, setChecked] = useState({})

  const [autor, setAutor] = useState([]);

  const PreverFoto = useMemo(() => {
    return foto ? URL.createObjectURL(foto) : null;
  }, [foto]);

  const [form, setForm] = useState({});
  useEffect(() => {
    if (categoria) {
      getCategoria();
    }
    if (autor) {
      getAutor();
    }
    if (doc) {
      getDocument();
    }
  }, []);

  const getCategoria = async () => {
    let cat = [];
    const result = await getAllCateory();
    for (let i in result) {
      cat.push({
        id: result[i]._id,
        value: result[i].categoria,
      });
      setCategoria(cat);
    }
  };
  const getDocument = async () => {
    let document = [];
    const result = await getAllDocumento();
    for (let i in result) {
      document.push({
        id: result[i]._id,
        value: result[i].doc,
      });
    }
    setDoc(document);
  };
  const getAutor = async () => {
    let autor = [];
    const result = await getAllAutor();

    for (let i in result) {
      autor.push({
        id: result[i]._id,
        value: result[i].nome,
      });
      setAutor(autor);
    }
  };

  const onSubmitDoc = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("doc", documento.doc);
    const result = await RegistrarDocumento(data);
    sweetalert({
      title: "Confirmação de inserção",
      text: "Documento Inserido com sucesso!",
      icon: "success",
      buttons: "OK",
    });
    setInfo(result);
    setDocumento({});
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const { _id } = usuario;
    data.append("capa", foto);
    data.append("autor", form.autor);
    data.append("tema", form.titulo);
    data.append("ano", form.ano);
    data.append("recomedado", [1, 2, 3]);
    data.append("numero_pagina", form.numero_pagina);
    data.append("instituicao", form.instituicao);
    data.append("Descricao", form.descricao);
    data.append("categoria", form.categoria);
    data.append("formato", "PDF");
    data.append("documento", form.documento);
    const result = await RegistrarBook(data, _id);
    const { mesagm } = result;
    sweetalert({
      title: "Confirmação de inserção",
      text: mesagm,
      icon: "success",
      buttons: "OK",
    });
    setForm({
      autor: "",
      titulo: "",
      ano: "",
      numero_pagina: "",
      instituicao: "",
      descricao: "",
      licenca: "",
      categoria: "",
      documento,
    });
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <div className="info">
        <h3>Registrar Livros</h3>
        <div className="card-body-livro">
          {info.id ? (
            ""
          ) : (
            <div className="card-form-doc">
              <form onSubmit={onSubmitDoc}>
                <Input
                  type="file"
                  name="doc"
                  onchange={(event) =>
                    setDocumento({ ...documento, doc: event.target.files[0] })
                  }
                />
                <div className="btn-up">
                  <Button value="Salvar" />
                </div>
              </form>
            </div>
          )}
          {documento.doc ? (
            ""
          ) : (
            <>
              <div className="card-form-doc">
                <form onSubmit={onSubmit}>
                  <label
                    id="foto"
                    style={{ backgroundImage: `url(${PreverFoto})` }}
                    className={foto ? "remove-elemet" : ""}
                  >
                    <Input
                      type="file"
                      name="foto_autor"
                      value={form.foto}
                      onchange={(event) => setFoto(event.target.files[0])}
                    />
                    <FaIcons.FaCamera className="icon" size={25} color="#555" />
                  </label>

                  <Select
                    name="categoria"
                    text={"Seleciona a catégoria"}
                    data={categoria}
                    onchange={onChange}
                  />
                  <Select
                    name="autor"
                    value={form.autor}
                    text={"Seleciona o autor"}
                    data={autor}
                    onchange={onChange}
                  />
                  <select
                    className="select-op"
                    name="documento"
                    onChange={onChange}
                  >
                    <option disabled selected>
                      Seleciona o Arquivo
                    </option>
                    <option value={info._id}>{info.doc}</option>
                  </select>

                  <Input
                    type="text"
                    name="titulo"
                    value={form.titulo}
                    placeholder="Titulo"
                    onchange={onChange}
                  />
                  <div
                    style={{
                      display: "flex",
                      marginLeft: 30,
                      justifyContent: "space-between",
                      marginRight: 30,
                    }}
                  >
                    <Input
                      type="text"
                      name="numero_pagina"
                      value={form.numero_pagina}
                      placeholder="Nº de páginas"
                      onchange={onChange}
                    />
                    <Input
                      type="text"
                      name="ano"
                      value={form.ano}
                      onchange={onChange}
                      placeholder={"Ano de lançamento do livro"}
                    />
                   
                  </div>
                 
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      marginTop: 10,
                      marginBottom: 10,
                    }}
                  >
                  </div>
                  <Input
                    type="text"
                    name="instituicao"
                    value={form.instituicao}
                    onchange={onChange}
                    placeholder={"Instituição"}
                  />
                  <TextArea
                    name="descricao"
                    value={form.descricao}
                    text={"Digite aqui a discrição do livro"}
                    rows="4"
                    cols="50"
                    onchange={onChange}
                  />
                  <div className="btn-up">
                    <Button value="Salvar" />
                  </div>
                </form>
              </div>
            </>
          )}
          <h3>{msg}</h3>
        </div>
      </div>
    </>
  );
};

export const RegistroAutor = () => {
  const [foto, setFoto] = useState(null);
  const PreverFoto = useMemo(() => {
    return foto ? URL.createObjectURL(foto) : null;
  }, [foto]);

  const [form, setForm] = useState({});
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    if (form.nome === "") {
      return console.log("DIgite a categoria do livro que desejas cadastrar");
    } else {
      const data = new FormData();
      data.append("foto_autor", foto);
      data.append("nome", form.nome);
      data.append("bibliografia", form.bibliografia);
      data.append("link", form.link);

      const result = await RegistrarAutor(data);
      sweetalert({
        title: "Confirmação de inserção",
        text: "Inserido com sucesso!",
        icon: "success",
        buttons: "OK",
      });
      setForm({ nome: "", bibliografia: "", link: "" });
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(value);
  };
  return (
    <div className="info">
      <h3>Regostro de Autores </h3>
      <form onSubmit={onSubmit}>
        <label
          id="foto"
          style={{ backgroundImage: `url(${PreverFoto})` }}
          className={foto ? "remove-elemet" : ""}
        >
          <Input
            type="file"
            name="foto_autor"
            value=""
            onchange={(event) => setFoto(event.target.files[0])}
          />
          <FaIcons.FaCamera className="icon" size={25} color="#555" />
        </label>
        <Input
          type="text"
          name="nome"
          value={form.nome}
          placeholder="Nome do autor"
          onchange={onChange}
        />
        <TextArea
          name="bibliografia"
          value={form.bibliografia}
          rows="4"
          cols="50"
          onchange={onChange}
          defaultValue={form.bibliografia}
          placeholder={"Escreva aqui a biblíografia do autor "}
        />

        <Input
          type="text"
          name="link"
          value={form.link}
          placeholder="Link do site ou pagina do autor caso tenha."
          onchange={onChange}
        />
        <div className="btn-up">
          <Button value="Adicionar" />
        </div>
      </form>
    </div>
  );
};

export const RegestroCategoria = () => {
  const [form, setForm] = useState({});
  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.categoria === "") {
      return console.log("DIgite a categoria do livro que desejas cadastrar");
    } else {
      const result = await RegistrarCategoria(form);
      sweetalert({
        title: "Confirmação de inserção",
        text: "Inserido com sucesso!",
        icon: "success",
        buttons: "OK",
      });
      setForm({ categoria: "" });
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(value);
  };
  return (
    <div className="info">
      <h3>Registro de Categoria </h3>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          name="categoria"
          value={form.categoria}
          placeholder="Digite aqui as categorias. ex. Matématica"
          onchange={onChange}
        />

        <div className="btn-up">
          <Button value="Adicionar" onSubmit={() => onSubmit} />
        </div>
      </form>
    </div>
  );
};
