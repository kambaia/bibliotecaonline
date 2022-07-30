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
import { RegistrarAutor, getAllAutor, getOneAutor } from "../../services/ApiAutor";
import {
  RegistrarDocumento,
  getAllDocumento,
} from "../../services/ApiDocumento";
import { updateBook, getOnlyBooks } from "../../services/ApiBooks";
import { RegistrarCategoria, getAllCateory, getOnlyCagory } from "../../services/ApiCategory";
import sweetalert from "sweetalert";
import * as FaIcons from "react-icons/fa";
import { useParams } from "react-router-dom";

export default function RegistroLivros() {
  const { id, livro } = useParams();
  const [formMenu, setformMenu] = useState(livro);
   console.log(id);
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
                  {livro === "livros" ? (
                    <>
                      <button
                        onClick={() => setformMenu("livro")}
                        style={{ borderRight: "1px solid #ddd" }}
                      >
                        Livro
                      </button>
                      <button
                        disabled={true}
                        onClick={() => setformMenu("categoria")}
                      >
                        Categoria de livros
                      </button>
                      <button
                        disabled={true}
                        onClick={() => setformMenu("author ")}
                      >
                        Autor
                      </button>
                    </>
                  ) : (
                    ""
                  )}

                  {livro === "author" ? (
                    <>
                      <button
                        disabled={true}
                        onClick={() => setformMenu("categoria")}
                      >
                        Categoria de livros
                      </button>
                      <button
                        disabled={false}
                        onClick={() => setformMenu("author")}
                      >
                        Autor
                      </button>

                      <button
                        disabled={true}
                        onClick={() => setformMenu("livro")}
                        style={{ borderRight: "1px solid #ddd" }}
                      >
                        Livro
                      </button>
                    </>
                  ) : (
                    ""
                  )}

                  {livro === "categoria" ? (
                    <>
                      <button
                        disabled={false}
                        onClick={() => setformMenu("categoria")}
                      >
                        Categoria de livros
                      </button>
                      <button
                        disabled={true}
                        onClick={() => setformMenu("author")}
                      >
                        Autor
                      </button>

                      <button
                        disabled={true}
                        onClick={() => setformMenu("livro")}
                        style={{ borderRight: "1px solid #ddd" }}
                      >
                        Livro
                      </button>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <FormOp op={formMenu} tela={livro} id={id} />
                </div>
              </CardForm>
            </Content>
          </div>
        </ContentSession>
      </div>
    </>
  );
}

export const FormOp = ({ op, tela, id }) => {
  console.log(op, " ", tela);
  if (op == "categoria" && tela === "categoria") {
    return <RegestroCategoria id={id} />;
  } else if (op === "author" && tela === "author") {
    return <RegistroAutor id={id} />;
  }
  if (op == "livros" && tela === "livros") {
    return <RegistrarLivro id={id} />;
  } else {
    return <RegestroCategoria id={id} />;
  }
};

export const RegistrarLivro = ({ id }) => {
  const [foto, setFoto] = useState(null);
  const [documento, setDocumento] = useState({});
  const [categoria, setCategoria] = useState([]);
  const [livroEdit, setLivroEdit] = useState([]);
  const [doc, setDoc] = useState([]);
  const [info, setInfo] = useState({ id: "" });
  const [msg, setMsg] = useState("");
  const [trocarDoc, setTrocarDoc] = useState(true);

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
    pegar_livro(id);
    trocarDocumento(form?.documento_url);
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

  const pegar_livro = async (id) => {
    const result = await getOnlyBooks(id);
    setForm(result.livros[0]);
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
    if (!documento.doc) {
      sweetalert({
        title: "Erro de inserção",
        text: "Carrega o documento do livro para prosseguirmos com outos passos",
        icon: "error",
        timer: 4000,
      });
      return false;
    } else {
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
    }
  };

  const subEdit = () => {
    const newform = {
      foto: foto ? foto : form.capa_ul,
      documento: info._id ? info._id : form.documento,
      numero_pagina: form.numero_pagina,
      ano: form.ano,
      titulo: form.titulo,
      descricao: form.descricao,
    };
    return newform;
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    const formd = subEdit();
    if (
      !formd.titulo ||
      !formd.numero_pagina ||
      !formd.ano ||
      !formd.descricao ||
      !formd.documento
    ) {
      sweetalert({
        title: "Erro de inserção",
        text: "Todos os dados devem ser preenchido",
        icon: "error",
        timer: 4000,
      });
      return false;
    } else {
      const data = new FormData();
      if (foto) {
        console.log("Entrei aqui")
        data.append("capa", foto);
        data.append("titulo", formd.titulo);
        data.append("ano", formd.ano);
        data.append("numero_pagina", formd.numero_pagina);
        data.append("descricao", formd.descricao);
        data.append("documento", formd.documento);
         const result = await updateBook(data, form._id);
      }else{
        const result = await updateBook(formd, form._id);
      }

      /* const result = await RegistrarBook(data, id);
      const { mesagm } = result;
      sweetalert({
        title: "Confirmação de inserção",
        text: mesagm,
        icon: "success",
        buttons: "OK",
      });
      */
      /*
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
      */
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const trocarDocumento = (e) => {
    if (e) {
      setTrocarDoc(trocarDoc);
      console.log("Não");
    }
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
                {trocarDoc ? (
                  <>
                    <div style={{ padding: "20px" }}>
                      <button
                        style={{
                          width: "40%",
                          padding: "8px",
                          backgroundColor: "#0c854e",
                          border: "1px solid #fff",
                          marginTop: "10px",
                          marginRight: "5%",
                          color: "#fff",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                        type="button"
                        onClick={() => setTrocarDoc(!trocarDoc)}
                      >
                        Pretendes carregar outro documento?
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <label>Carregar o Documento</label>
                    <Input
                      type="file"
                      name="doc"
                      onchange={(event) =>
                        setDocumento({
                          ...documento,
                          doc: event.target.files[0],
                        })
                      }
                    />
                    <div className="btn-up">
                      <Button value="Salvar" />
                    </div>
                  </>
                )}
              </form>
            </div>
          )}
          {documento.doc ? (
            ""
          ) : (
            <>
              <div className="card-form-doc">
                <form onSubmit={onSubmit}>
                  <label>Carregar Capa do Documento</label>
                  <label
                    id="foto"
                    style={{
                      backgroundImage: `url(${
                        form.capa_ul && !PreverFoto ? form.capa_ul : PreverFoto
                      })`,
                    }}
                    className={foto ? "remove-elemet" : ""}
                  >
                    <Input
                      type="file"
                      name="foto_autor"
                      onchange={(event) => setFoto(event.target.files[0])}
                    />
                    <FaIcons.FaCamera className="icon" size={25} color="#555" />
                  </label>

                  <select
                    className="select-op"
                    name="documento"
                    onChange={onChange}
                  >
                    <option disabled selected>
                      {info.id ? info.odc : "Seleciona o Arquivo"}
                    </option>
                    <option value={info.id ? info.id : form.documento}>
                      {info.doc ? info.doc : form?.documento_url}
                    </option>
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
                  ></div>

                  <TextArea
                    name="descricao"
                    value={form.descricao}
                    text={"Digite aqui a discrição do livro"}
                    placeholder="Digite aqui a discrição do livro"
                    rows="4"
                    cols="50"
                    onchange={onChange}
                  />
                  <div className="btn-up">
                    <Button value="Enditar o livro" />
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

export const RegistroAutor = (id) => {
  const [form, setForm] = useState({});
  useEffect(()=>{
    const getAutor= async(id)=>{
      const result = await  getOneAutor(id)
      setForm(result);
    }
    if(id){
      getAutor(id);
    }
  
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    if (form.nome === "") {
      return console.log("DIgite a categoria do livro que desejas cadastrar");
    } else {
      const data = new FormData();
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

export const RegestroCategoria = (id) => {
  const [form, setForm] = useState({});
  useEffect(()=>{
    const getCategor= async(id)=>{
      console.log(id)
      const result = await  getOnlyCagory(id)
      setForm(result);
    }
  if(id){
    getCategor(id);
  }
  },[])
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
          <Button value="Editar Categoria" onSubmit={() => onSubmit} />
        </div>
      </form>
    </div>
  );
};
