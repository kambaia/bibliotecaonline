import React, { useState } from "react";
import Input from "../../components/Input";
import { Form } from "./styles";
import * as BIIcons from "react-icons/bi";
import Button from "../../components/Button";
import { SignUpUser, VerificarEscola } from "../../services/ApiUsers";
import sweetalert from "sweetalert";
import { login } from "../../store/action/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
export default function Registro() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  let history = useHistory();
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.nome || !form.email || !form.telefone || !form.numero_m || !form.senha) {
        console.log(form);
        sweetalert({
        title: "Erro de inserção",
        text: "Todos os dados devem ser preenchido",
        icon: "error",
        timer: 4000,
      });
      return false;
    }else {
       const resp = await SignUpUser(form);
        if (resp.message) {
            sweetalert({
                    title: "Erro de inserção",
                    text: resp.message,
                    icon: "error",
                    timer: 4000,
                });
          } else {
         
            const { usuario, token } = resp;
            var user = JSON.stringify(usuario);
            localStorage.setItem("app-web", token);
            localStorage.setItem("telefone", usuario.telefone);
            localStorage.setItem("email", usuario.email);
            localStorage.setItem("nome", usuario.nome);
            localStorage.setItem("autenticado", usuario.autenticado);
            localStorage.setItem("id", usuario._id);
            dispatch(login());
             sweetalert({
                    title: "Confirmado",
                    text: resp.message,
                    icon: "success",
                    timer: 4000,
                });
            history.push("/perfil");
            setForm({ nome: "", email: "", senha: "", telefone: "" });
          }
        }
  };
  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <Form style={{ textAlign: "center" }}>
      <div className="text-registro">
        <h2>Crie uma conta e desfrute dos melhores livros que há no Cemu</h2>
      </div>
      <form onSubmit={onSubmit}>
        <Input
          placeholder="Nome Completo"
          type="text"
          value={form.nome}
          name={"nome"}
          onchange={onChange}
        />
        <Input
          placeholder="Telefone"
          type="text"
          value={form.telefone}
          name={"telefone"}
          onchange={onChange}
        />
        <Input
          placeholder="E-email"
          type="text"
          value={form.email}
          name={"email"}
          onchange={onChange}
        />
        <Input
          placeholder="Nº de matricula"
          type="text"
          value={form.numero_m}
          name={"numero_m"}
          onchange={onChange}
        />
        <Input
          placeholder="senha"
          type="password"
          value={form.senha}
          name={"senha"}
          onchange={onChange}
        />
      </form>
      <div className="f-registro">
        Já tens uma conta? <a href="/login">click aqui </a>
        <div className="btn-registro">
          <Button onClick={onSubmit} value={"Registro"}>
            <span>
              <BIIcons.BiLogIn />
            </span>
          </Button>
        </div>
      </div>
    </Form>
  );
}
