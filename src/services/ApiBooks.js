import axios from 'axios'
import { URL_Books_Register} from '../utils/endpoints';
export const RegistrarBook = (form, id_usuario)=> {
    console.log(form)
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




