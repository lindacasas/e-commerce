import { Routes, Route } from 'react-router-dom'
import { Login, Home, Me } from '@/pages'
import useAuthContext from '../hooks/useAuthContext'

const RoutesIndex = () => {

    const { isAuth } = useAuthContext();

    return (
        <Routes>
            <Route
                path='/'
                element={isAuth ? <Home /> : <Login />}
            // Operador ternario
            // Sintaxis:
            // condicion a evaluar ? valorDeRetornoVerdadero : valorDeRetornoFalso
            /*
                if(isAuth){
                    return <Home />
                }else{
                    return <Login />
                }
            */
            />
            <Route
                path='/me'
                element={isAuth ? <Me /> : <Login />} 
            />
        </Routes>
    )
}

export default RoutesIndex;