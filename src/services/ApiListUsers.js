import React, { useState} from 'react';
import axios from 'axios'
import { URL_ALL_USERS } from '../utils/endpoints';
import { toast } from "react-toastify";

const  handlerAllUsers= ()=>{
        return new Promise(async function (resolve, reject) {
            
            try {
    
                const token =localStorage.getItem('Mep:token');
                const config = {
                    method: 'get',
                    url: URL_ALL_USERS,
                    headers: {'Authorization': 'Bearer ' +  `${token}`}
                };
                const response = await axios(config);
                resolve(response.data);
            } catch (error) {
                toast.error("Ocorreu um erro ...");
                reject("Erro", error)
            }
        })
    }

    function HandlerEditUsers (id){
     
        return new Promise(async function (resolve, reject) {
          
            try {
      
                const token =localStorage.getItem('Mep:token');
                const config = {
                    method: 'get',
                    url:`${URL_ALL_USERS}/${id}`,
                    headers: {'Authorization': 'Bearer ' +  `${token}`}
                };
                const response = await axios(config);
                resolve(response.data);
                
            } catch (error) {
                toast.error("Ocorreu um erro ...");
                reject("Erro", error)
            }
        })
      }

      function UpdateUser(form,id) {
        return new Promise(async function (resolve, reject) {
            const token =localStorage.getItem('Mep:token');
            try {
                const config = {
                    method: 'put',
                    url: `${URL_ALL_USERS}/${id}`,
                    headers: {'Authorization': 'Bearer ' +  `${token}`},
                   data: JSON.stringify(form)
                
                };
             
                const response = await axios(config);
                resolve(response.data);
    
            } catch (error) {
                toast.error("Ocorreu um erro ...");
                reject("Erro", error)
            }
        })
    }

    function HandlerDeleteUsers (id){
        return new Promise(async function (resolve, reject) {
          
            try {
      
                const token =localStorage.getItem('Mep:token');
                const config = {
                    method: 'delete',
                    url:`${URL_ALL_USERS}/${id}`,
                    headers: {'Authorization': 'Bearer ' +  `${token}`}
                };
                const response = await axios(config);
                resolve(response.data);
               
            } catch (error) {
                toast.error("Ocorreu um erro ...");
                reject("Erro", error)
            }
        })
      }
        



export {
    handlerAllUsers, HandlerEditUsers, UpdateUser, HandlerDeleteUsers
}