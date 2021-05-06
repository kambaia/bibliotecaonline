import axios from 'axios'
import { AuthContext, UserAuth } from '../providers/auth';
import { URL_REGISTER, URL_access} from '../utils/endpoints';

const  SigInUser= (form)=> {
    return new Promise(async function (resolve, reject) {
        try {
            const config = {
                method: 'post',
                url: URL_access,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: form
            };
         
            const response = await axios(config);
            const { usuario, token } = response.data;
             localStorage.setItem('app-token', token);
             localStorage.setItem('usuario', JSON.stringify(usuario));
            resolve(response.data);

        } catch (error) {
            console.log("ERRO: ", error)
            reject(error)
        }
    })
}


function SigUpUser(form) {
    return new Promise(async function (resolve, reject) {
        try {
            const config = {
                method: 'post',
                url: URL_REGISTER,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: form
            };

            const response = await axios(config);
            resolve(response.data);
            

        } catch (error) {
            console.log("ERRO: ", error)
            reject(error)
        }
    })
}
function handleAskForPassword(username) {
    return new Promise(async function (resolve, reject) {
        try {
            const data='';
            const config = {
                method: 'post',
                url: 'http://10.137.10.100:8000/api/askpass',
                headers: { },
                data: data
            };
            const response = await axios(config);
            console.log(response.data);
            resolve("HERE => ", response);

        } catch (error) {

            console.log("ERRO: ", error)
            reject(error)
        }
    })
}
export {
    SigInUser,
    SigUpUser
}