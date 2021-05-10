import axios from 'axios'
import { AuthContext, UserAuth } from '../providers/auth';
import { URL_REGISTER, URL_access} from '../utils/endpoints';
import sweetalert from 'sweetalert';

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
             const mensagem = response.data.message;
             sweetalert({
                 title:"Confirmação de inserção",
                 text: mensagem,
                 icon:'success',
                 buttons:'OK',
                
             })
            
            resolve(response.data);

        } catch (error) {
            const mensagem = error.response.data.error;
            sweetalert({
                title:"Confirmação de inserção",
                text: mensagem,
                icon:'error',
                timer:4000
               
            })
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
            const mensagem = response.data.message;
            sweetalert({
                title:"Confirmação de inserção",
                text: mensagem,
                icon:'success',
                buttons:'OK',
                timer:2000
               
            })
            console.log();
            resolve(response.data);
            

        } catch (error) {
            const mensagem = error.response.data.error;
            sweetalert({
                title:"Confirmação de inserção",
                text: mensagem,
                icon:'error',
                timer:4000
               
            })
            console.log();
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