import { useRef } from "react";
import useAuthContext from "../hooks/useAuthContext";
import { loginService, registerUserService } from "../services/login";

const Login = () => {

    // Valores de referencia para iniciar sesión.
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    // Valores de referencia para registrarse.
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRegisterRef = useRef(null);
    const passwordRegisterRef = useRef(null);
    const genderRef = useRef(null);
    const roleRef = useRef(null);


    const { login } = useAuthContext();

    const loginSubmit = async (e) => {
        e.preventDefault();

        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);

        const loginInfo = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        loginService(loginInfo, login);
    }

    const registerUser = async (e) => {
        e.preventDefault();
        const newUserInfo = {
            first_name: firstNameRef.current.value,
            last_name: lastNameRef.current.value,
            gender: genderRef.current.value,
            email: emailRegisterRef.current.value,
            password: passwordRegisterRef.current.value,
            // "role": "CUSTOMER"
        }
        console.log(newUserInfo);

        registerUserService(newUserInfo);

    }

    return (
        <>
            <form>
                <label>Email: </label><input ref={emailRef} type='text' />
                <label>Password: </label><input ref={passwordRef} type='password' />
                <button onClick={loginSubmit}>Login</button>
            </form>

            <h2>Create account</h2>
            <form>
                <label>First name: </label><input ref={firstNameRef} type='text' />
                <label>Last name: </label><input ref={lastNameRef} type='text' />
                <label>Gender: </label><select ref={genderRef}>
                    <option value='M'>M</option>
                    <option value='F'>F</option>
                    <option value='Other'>Other</option>
                </select>
                <label>Email: </label><input ref={emailRegisterRef} type='text' />
                <label>Password: </label><input ref={passwordRegisterRef} type='password' />
                <label>Role: </label><select ref={roleRef}>
                    <option value='CUSTOMER'>Customer</option>
                </select>
                <button onClick={registerUser}>Signup</button>
            </form>
        </>
    )
}

export default Login;