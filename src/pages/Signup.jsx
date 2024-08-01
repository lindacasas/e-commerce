import React, { useRef } from 'react';
import { registerUserService } from '../services/login';

const Signup = () => {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRegisterRef = useRef(null);
    const passwordRegisterRef = useRef(null);
    const genderRef = useRef(null);
    const roleRef = useRef(null);

    const registerUser = async (e) => {
        e.preventDefault();
        const newUserInfo = {
            first_name: firstNameRef.current.value,
            last_name: lastNameRef.current.value,
            gender: genderRef.current.value,
            email: emailRegisterRef.current.value,
            password: passwordRegisterRef.current.value,
            role: "CUSTOMER"
        }

        registerUserService(newUserInfo);
    }

    return (
        <div className="auth-container">
            <div className="auth-form">
                <h1>Create Account</h1>
                <form>
                    <label>First name: </label><input ref={firstNameRef} type='text' />
                    <label>Last name: </label><input ref={lastNameRef} type='text' />
                    <label>Gender: </label>
                    <select ref={genderRef}>
                        <option value='M'>M</option>
                        <option value='F'>F</option>
                        <option value='Other'>Other</option>
                    </select>
                    <label>Email: </label><input ref={emailRegisterRef} type='text' />
                    <label>Password: </label><input ref={passwordRegisterRef} type='password' />
                    <label>Role: </label>
                    <select ref={roleRef}>
                        <option value='CUSTOMER'>Customer</option>
                    </select>
                    <button className="btn-submit" onClick={registerUser}>Signup</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
