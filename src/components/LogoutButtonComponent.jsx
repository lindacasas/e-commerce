import useAuthContext from "../hooks/useAuthContext";

const LogoutButtonComponent = () => {

    const { logout } = useAuthContext();


    return <button onClick={logout}>Logout</button>
}

export default LogoutButtonComponent;