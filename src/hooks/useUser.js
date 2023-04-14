import {getMeApi, getUsersApi} from '../api/user'; 
import {useState} from 'react';
//importara hooks
import {useAuth} from '.';

export function useUser() {
    //creamos un nuevo estado
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState(null);
    //dentro tenemos el token
    const {auth} = useAuth();


    const getME = async (token) =>  {
        try {
            const response = await getMeApi(token);
            return response
        } catch(error) {
            throw error;
        }
    };
// tendrra tres estados: loading, result, error
    const getUsers = async () => {
        try {
            //esta cargando la peticion
            setLoading(true);
            const response = await getUsersApi(auth.token);
            //los datos fueron obtenidos, deja de cargar, y pasamos los datos a setUsers
            setLoading(false);
            setUsers(response); 

        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };
    //para usar el loading, error y users, tengo que exportarlos tambien
    return {
        loading, 
        error,
        users,
        getME,
        getUsers,
    };
}