//useCOntext contiene tiene valoe de nuestro contexto almacenado en AuthContext
import { useContext } from "react";

import { AuthContext } from '../context';

export const useAuth = () => useContext(AuthContext);