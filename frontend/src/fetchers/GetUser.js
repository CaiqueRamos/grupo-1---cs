import { URL_REQUEST } from "../constants"

export const GetUser = (token, idUser) => {
    return fetch(`${URL_REQUEST}/auth/usuario/${idUser}`, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + token
        }
    }).then((data) => {
        return data.json();
    }).then((data) => {
        return data;
    }).catch((e) => {
        console.error(e)
    });
}