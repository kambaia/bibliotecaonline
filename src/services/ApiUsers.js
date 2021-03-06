import axios from "axios";
import { URL_REGISTER, URL_access, URL_VERIFICAR_MATRICULA } from "../utils/endpoints";
import sweetalert from "sweetalert";

export const SignInUser = (form) => {
  return new Promise(async function (resolve, reject) {
    const token = localStorage.getItem("app-web");
    try {
      const config = {
        method: "POST",
        url: URL_access,
        data: form,
      };

      const response = await axios(config);
      resolve(response.data);
    } catch (error) {
      reject("Erro", error);
    }
  });
};

export function SignUpUser(form) {
  return new Promise(async function (resolve, reject) {
    const token = localStorage.getItem("app-web");
    try {
      const config = {
        method: "POST",
        url: URL_REGISTER,
        data: form,
      };

      const response = await axios(config);
      console.log(response);
      resolve(response.data);
    } catch (error) {
      reject("Erro", error);
    }
  });
}


export function VerificarEscola(form) {
  return new Promise(async function (resolve, reject) {
    const token = localStorage.getItem("app-web");
    try {
      const config = {
        method: "GET",
        url:`${URL_VERIFICAR_MATRICULA}/${form}`,
      };

      const response = await axios(config);
      resolve(response.data);
    } catch (error) {
      reject("Erro", error);
    }
  });
}
