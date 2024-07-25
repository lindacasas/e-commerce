import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'


// 1. Creamos el contexto.
const AuthContext = createContext();

// 2. Crear el provider asociado al contexto.
const AuthProvider = ({ children }) => {

    // 2.1 Crear variables de estado globales.
    const [isAuth, setIsAuth] = useState(false);
    const [userPayload, setUserPayload] = useState(null);

    // 2.2 Crear las funciones que quiero compartir en el contexto.
    const login = (token) => {
        setIsAuth(true);
        const decodedToken = jwtDecode(token);
        setUserPayload(decodedToken);
        localStorage.setItem('token', token);
    }

    const logout = () => {
        setIsAuth(false);
        setUserPayload(null);
        localStorage.removeItem('token');
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            const decodedToken = jwtDecode(token);
            setIsAuth(true);
            setUserPayload(decodedToken);
        }
    }, []);

    const contextData = {
        isAuth, userPayload, login, logout
    }

    // 3. Crear el componente que encierra a los hijos que van a poder acceder al contexto.
    return (
        <AuthContext.Provider value={contextData}>
            { children }
        </AuthContext.Provider>
    )
}

// 4. Exportar el contexto y el provider del contexto.
export { AuthContext, AuthProvider }
