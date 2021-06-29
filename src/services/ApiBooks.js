import axios from 'axios'
import { URL_Books_Register,URL_BookFavoriting} from '../utils/endpoints';
export const RegistrarBook = (form,foto,id_usuario)=> {
    console.log(form);
    console.log(foto)
    const data = new FormData();
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

    return new Promise(async function (resolve, reject) {
        const token =localStorage.getItem('app-token');
        try {
            const config = {
                method: 'post',
                url: `${URL_Books_Register}`,
                headers: {'Authorization': 'Bearer ' +  `${token}`, id_usuario},
               data: data
            
            };
            const response = await axios(config);
            resolve(response.data);
        } catch (error) {
            reject("Erro", error)
        }
    })
}
export const getAllBooks = ()=> {
    return new Promise(async function (resolve, reject) {
        try {
            const token =localStorage.getItem('Mep:token');
            const config = {
                method: 'get',
                url: URL_Books_Register,
                headers: {'Authorization': 'Bearer ' +  `${token}`}
            };
            const response = await axios(config);
            resolve(response.data);
        } catch (error) {
            reject("Erro", error)
        }
    })
}
export const getOnlyBooks = (id)=> {
    return new Promise(async function (resolve, reject) {
        try {
            const token =localStorage.getItem('Mep:token');
            const config = {
                method: 'get',
                url:`${URL_Books_Register}/${id}`,
                headers: {'Authorization': 'Bearer ' +  `${token}`}
            };
            const response = await axios(config);
            resolve(response.data);
        } catch (error) {
            reject("Erro", error)
        }
    })
}

export const getWithCategoryBooks = (id)=> {
    return new Promise(async function (resolve, reject) {
        try {
            const token =localStorage.getItem('Mep:token');
            const config = {
                method: 'get',
                url:`${URL_Books_Register}/categoria/${id}`,
                headers: {'Authorization': 'Bearer ' +  `${token}`}
            };
            const response = await axios(config);
            resolve(response.data);
        } catch (error) {
            reject("Erro", error)
        }
    })
}

export function Favoritar(form,id) {
    return new Promise(async function (resolve, reject) {
        const token =localStorage.getItem('Mep:token');
        try {
            const config = {
                method: 'Post',
                url: `${URL_BookFavoriting}/${id}`,
                headers: {'Authorization': 'Bearer ' +  `${token}`},
               data: form
            };
            const response = await axios(config);
            console.log(response);
            resolve(response.data);
        } catch (error) {
            reject("Erro", error)
        }
    })
}

export function allFavorite(id) {
    return new Promise(async function (resolve, reject) {
        const token =localStorage.getItem('Mep:token');
        try {
            const config = {
                method: 'get',
                url: `${URL_BookFavoriting}/${id}`,
                headers: {'Authorization': 'Bearer ' +  `${token}`},
            };
            const response = await axios(config);
            console.log(response);
            resolve(response.data);
        } catch (error) {
            reject("Erro", error)
        }
    })
}




