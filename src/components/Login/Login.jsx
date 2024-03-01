// Login.jsx

import React, { useState } from 'react';
import '../Login/Login.css';
import { loginUser } from '../../services/auth';

function Login() {
    const [formData, setFormData] = useState({
        email: '', 
        password: '' 
    });
    const [valid, setValid] = useState(true);
    const [errors, setErrors] = useState({});

    function validateForm() {
        let isValid = true;
        let validationErrors = {};

        if (formData.email === "" || formData.email === null) {
            isValid = false;
            validationErrors.email = "Email Required";
        }
        if (formData.password === "" || formData.password === null) {
            isValid = false;
            validationErrors.password = "Password Required";
        } else if (formData.password.length < 7) {
            isValid = false;
            validationErrors.password = "Password must be at least 7 characters";
        }

        setErrors(validationErrors);
        setValid(isValid);
        return isValid;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (validateForm()) {
            try {
                const isLoggedIn = await loginUser(formData.email, formData.password);
                if (isLoggedIn) {
                    alert("Login Successfully");
                } else {
                    setErrors({ email: "Wrong Email or Password", password: "Wrong Email or Password" });
                    setValid(false);
                }
            } catch (error) {
                console.error('Error logging in:', error);
                // Handle login error
            }
        }
    }

    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value});
    }
    console.log(formData, errors, valid);

    return (
        <div className='container-fluid'>
            <main className='login-container'>
                <div className='login-form'>
                    <div className='card'>
                        <div className='card-body'>
                            <h4 className='card-header'>Login</h4>
                            <form onSubmit={handleSubmit}>
                                <input name='email' type="email" placeholder='Your email' value={formData.email} onChange={handleChange}/>
                                {errors.email && <span className="error">{errors.email}</span>}
                                <input name='password' type="password" placeholder='*****' value={formData.password} onChange={handleChange}/>
                                {errors.password && <span className="error">{errors.password}</span>}
                                <button className='login-btn' type='submit'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Login;
