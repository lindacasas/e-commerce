import { NavLink } from "react-router-dom";
import LogoutButtonComponent from "../components/LogoutButtonComponent";

const Home = () => {


    return (
        <>
            <h1>Welcome!</h1>

            <NavLink to='/me'>My information</NavLink>

            <LogoutButtonComponent />
        </>
    )
}

export default Home;