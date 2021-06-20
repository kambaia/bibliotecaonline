import axios from 'axios'
import { URL_documents} from '../utils/endpoints';

export const RegistrarDocumento = (form)=> {
    console.log(form)
    return new Promise(async function (resolve, reject) {
        const token =localStorage.getItem('app-token');
        try {
            const config = {
                method: 'post',
                url: `${URL_documents}`,
                headers: {'Authorization': 'Bearer ' +  `${token}`},
               data: form
            };
            const response = await axios(config);
            
            resolve(response.data);
        } catch (error) {
            reject("Erro", error)
        }
    })
}
export const getAllDocumento = ()=> {
    return new Promise(async function (resolve, reject) {
        try {
            const token =localStorage.getItem('Mep:token');
            const config = {
                method: 'get',
                url: URL_documents,
                headers: {'Authorization': 'Bearer ' +  `${token}`}
            };
            const response = await axios(config);
            resolve(response.data);
        } catch (error) {
            reject("Erro", error)
        }
    })
}


