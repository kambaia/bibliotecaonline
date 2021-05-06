import { URL_user } from "./../utils/endpoints";

const axios = require("axios");
export const AllUser = () => {
    return new Promise((resolve, reject) => {
        try {
            const config = {
                method: 'get',
                url: URL_user,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            axios(config)
                .then(res => {
                    resolve(res.data)
                }
            ).catch(err => reject(err))
        } catch (error) {
            reject(error);
        }
    })
}