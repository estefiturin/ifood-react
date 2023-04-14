import { create, get } from "lodash";
import React, { useState, useEffect, createContext } from "react";
import {setToken, getToken, removeToken } from '../api/token';
import {useUser} from '../hooks';


//creamos un contexto
export const AuthContext = createContext({
    //aun no sabemos si el usuario se loggeo
    auth: undefined,
    //esta funcion actualiza auth
    login: () => null,
    logout: () => null,

});

//se encarga de controlar que se hago todo lo anterior
export function AuthProvider(props) {
    const { children } = props;
    const [auth, setAuth] = useState(undefined);
    const {getME} = useUser();

    useEffect(() => {
        (async () => {
            //obtener el token
            const token = getToken();
            if (token) {
                //busco token del usuario logeado
                const me = await getME(token);
                setAuth({ token, me });
            } else {
                //en el caso que no existiese token
                setAuth(null)
            }
            console.log(token);
        })()
    }, [])


    const login = async (token) => {
        //manda el token a auth
        setToken(token);
        //setear, agarra el token de usuario que ingreso
        const me = await getME(token);
        setAuth({ token, me });
    };

    const logout = () => {
        if (auth) {
            removeToken();
            setAuth(null);
        };
    }

    const valueContext = {
        auth,
        login,
        logout,
    }

    if(auth === undefined) return null; 

    return (
        //contexto. Con esto englobo toda mi app dentro del AuthProvider. Ir a app.js
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )
}





