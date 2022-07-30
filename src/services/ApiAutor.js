import axios from 'axios'
import { URL_Autor} from '../utils/endpoints';

export const RegistrarAutor = (form)=> {
    console.log(form)
    return new Promise(async function (resolve, reject) {
        const token =localStorage.getItem('app-token');
        try {
            const config = {
                method: 'post',
                url: `${URL_Autor}`,
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

export const getOneAutor = ({id})=> {
    console.log(id)
    return new Promise(async function (resolve, reject) {
        try {
            const token =localStorage.getItem('Mep:token');
            const config = {
                method: 'get',
                url: `${URL_Autor}/${id}`,
                headers: {'Authorization': 'Bearer ' +  `${token}`}
            };
            const response = await axios(config);
            resolve(response.data);
        } catch (error) {
            reject("Erro", error)
        }
    })
}
export const getAllAutor = ()=> {
    return new Promise(async function (resolve, reject) {
        try {
            const token =localStorage.getItem('Mep:token');
            const config = {
                method: 'get',
                url: URL_Autor,
                headers: {'Authorization': 'Bearer ' +  `${token}`}
            };
            const response = await axios(config);
            resolve(response.data);
        } catch (error) {
            reject("Erro", error)
        }
    })
}


