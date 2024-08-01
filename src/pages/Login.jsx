import React, { useRef } from 'react';
import useAuthContext from '../hooks/useAuthContext';
import { loginService } from '../services/login';
import { Link } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const { login } = useAuthContext();

    const loginSubmit = async (e) => {
        e.preventDefault();

        const loginInfo = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        loginService(loginInfo, login);
    }

    return (
        <div className="auth-container">
            <div className="auth-form">
                <h1>Welcome to Mels' Solutions</h1>
                <form>
                    <label>Email: </label><input className='input-form' ref={emailRef} type='text' placeholder='Username or email'/>
                    <label>Password: </label><input className='input-form' ref={passwordRef} type='password' placeholder='Password'/>
                    <button className="btn-submit" onClick={loginSubmit}>Login</button>
                    <Link to="/register" className="nav-link">Don't have an account? sign up</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
