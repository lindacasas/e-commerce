import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react";

const useAuthContext = () => {

    const context = useContext(AuthContext);

    if(!context){
        throw new Error('useAuthContext must be used inside AuthProvider');
    }
    return context;

}

export default useAuthContext;