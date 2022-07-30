import axios from 'axios'
import { URL_Books_Register,URL_BookFavoriting, URL_Books, URL_Books_Mono} from '../utils/endpoints';
export const RegistrarBook = (form, id_usuario)=> {
    return new Promise(async function (resolve, reject) {
        const token =localStorage.getItem('app-token');
        try {
            const config = {
                method: 'post',
                url: `${URL_Books_Register}`,
                headers: {'Authorization': 'Bearer ' +  `${token}`, id_usuario},
               data: form
            
            };
            const response = await axios(config);
            resolve(response.data);
        } catch (error) {
            reject("Erro", error)
        }
    })
}
export const updateBook = (form, id)=> {
    return new Promise(async function (resolve, reject) {
        const token =localStorage.getItem('app-token');
        try {
            const config = {
                method: 'put',
                url: `${URL_Books_Register}/${id}`,
                headers: {'Authorization': 'Bearer ' +  `${token}`, id},
               data: form
            
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
export const getAllBooksMonografia = (id)=> {
    return new Promise(async function (resolve, reject) {
        console.log(id)
        try {
            const token =localStorage.getItem('Mep:token');
            const config = {
                method: 'get',
                url:`${URL_Books_Mono}/${id}`,
                headers: {'Authorization': 'Bearer ' +  `${token}`}
            };
            const response = await axios(config);
            console.log(response.data)
            resolve(response.data);
        } catch (error) {
            reject("Erro", error)
        }
    })
}
export const getOnlyBooks = (id)=> {
    return new Promise(async function (resolve, reject) {
        console.log(id)
        try {
            const token =localStorage.getItem('Mep:token');
            const config = {
                method: 'get',
                url:`${URL_Books}/${id}`,
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





