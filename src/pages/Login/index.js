import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as BIIcons from "react-icons/bi";
import bainner from "../../assets/bainner.webp";
import { useHistory, Link } from "react-router-dom";
import { Containner, CardLogin, Form, FormLogin } from "./styles";
import { SignInUser } from "../../services/ApiUsers";
import { login } from "../../store/action/auth";
import { useDispatch } from "react-redux";
import Registro from "../Registro";
import Input from "../../components/Input";
import Button from "../../components/Button";
import sweetalert from "sweetalert";

export default function Login() {
  const [acesso, setAcesso] = useState(true);
  return (
    <Containner>
      <CardLogin
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: ` linear-gradient(to right, rgba(0,0,0,1) 30%, transparent 90%), url(${bainner})`,
        }}
      >
        <div className="eslog">
          <h1>Desfruto dos melhores livros!</h1>
          <span>
            A sua conta e desfrute dos melhres livros, angolanos, brasileiros,
            grandes univerdades, escritórios nacionais, e muito mais.
          </span>
        </div>
        <Form>
          <div className="btn-acesso">
            <button onClick={() => setAcesso(true)}>
              <span>
                <FaIcons.FaLock color="#ddd" />
              </span>
              <span style={{ marginLeft: 10 }}>Leitores</span>
            </button>
            <button onClick={() => setAcesso(false)}>
              <span>
                <FaIcons.FaLock color="#ddd" />
              </span>
              <span style={{ marginLeft: 10 }}>Registrar</span>
            </button>
          </div>

          {acesso ? (
            <>
              {" "}
              <LoginForm></LoginForm>
            </>
          ) : (
            <>
              <Registro></Registro>
            </>
          )}
        </Form>
      </CardLogin>
    </Containner>
  );
}
export const LoginForm = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  let history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.email === "") {
      sweetalert({
        title: "Erro de inserção",
        text: "Entroduza o seu email",
        icon: "error",
        timer: 4000,
      });
      return false;
    }
    if (form.senha === "") {
      sweetalert({
        title: "Erro de inserção",
        text: "Introduza uma palavra-passe",
        icon: "error",
        timer: 4000,
      });
      return false;
    } else {
      const resp = await SignInUser(form);
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
        setForm({ email: "", senha: "" });
      }
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <FormLogin style={{ textAlign: "center" }}>
      <div className="text-registro">
        <h2>Cria uma conta e adiciona os seus melhores livros</h2>
      </div>
      <form onSubmit={onSubmit}>
        <Input
          placeholder="E-email"
          type="text"
          value={form.email}
          name={"email"}
          onchange={onChange}
        />
        <Input
          placeholder="Palavra Pass"
          type="password"
          value={form.senha}
          name={"senha"}
          onchange={onChange}
        />
      </form>
      <div className="f-login">
        <a></a>
        <div className="btn-login">
          <Button onClick={onSubmit} value={"Acessar"}>
            <span>
              <BIIcons.BiLogIn color="#fff" />
            </span>
          </Button>
        </div>
      </div>
    </FormLogin>
  );
};
