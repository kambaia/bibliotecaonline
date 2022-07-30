import axios from 'axios'
import { URL_Books_Category} from '../utils/endpoints';
import sweetalert from 'sweetalert';
export const RegistrarCategoria = (form)=> {
    return new Promise(async function (resolve, reject) {
        const token =localStorage.getItem('app-token');
        try {
            const config = {
                method: 'post',
                url: `${URL_Books_Category}`,
                headers: {'Authorization': 'Bearer ' +  `${token}`},
               data: form
            
            };
            const response = await axios(config);
            const mensagem = response.data.message;
             sweetalert({
                 title:"Confirmação de inserção",
                 text: mensagem,
                 icon:'success',
                 buttons:'OK',
                
             })
            resolve(response.data);
        } catch (error) {
            console.log(error.response.data)
            reject("Erro", error)
        }
    })
}
export const getAllCateory = ()=> {
    return new Promise(async function (resolve, reject) {
        try {
            const token =localStorage.getItem('Mep:token');
            const config = {
                method: 'get',
                url: URL_Books_Category,
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
                url:`${URL_Books_Category}/${id}`,
                headers: {'Authorization': 'Bearer ' +  `${token}`}
            };
            const response = await axios(config);
            resolve(response.data);
        } catch (error) {
            reject("Erro", error)
        }
    })
}

export const getOnlyCagory = ({id})=> {
    return new Promise(async function (resolve, reject) {
        console.log(id)
        try {
            const token =localStorage.getItem('Mep:token');
            const config = {
                method: 'get',
                url:`${URL_Books_Category}/${id}`,
                headers: {'Authorization': 'Bearer ' +  `${token}`}
            };
            const response = await axios(config);
            resolve(response.data);
        } catch (error) {
            reject("Erro", error)
        }
    })
}





