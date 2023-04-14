import { TOKEN } from '../utils/constants';

export function setToken(token) {
    localStorage.setItem(TOKEN, token);
}

//obtener el token
export function getToken() {
    //cojo el toñen desde la red local
    return localStorage.getItem(TOKEN);
}

export function removeToken() {
    localStorage.removeItem(TOKEN);
}