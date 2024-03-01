import React, { useState } from 'react';
import { Register } from '../../services/auth';
import '../SignUp/SignUp.css';

function SignUp() {
    const [formData, setFormData] = useState({
        email: '', 
        password: '', 
        username: '' 
    });

    function handleSubmit(e) {
        e.preventDefault();
        try {
            Register(formData)
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.error('Error registering:', error);
                });
        } catch (error) {
            console.error('Error registering:', error);
        }
    }

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div className='container-fluid'>
            <main className='login-container'>
                <div className='login-form'>
                    <div className='card'>
                        <div className='card-body'>
                            <h4 className='card-header'>Sign Up</h4>
                            <form onSubmit={handleSubmit}>
                                <input 
                                    type="text" 
                                    placeholder='Your username' 
                                    value={formData.username} 
                                    onChange={handleChange}
                                    name="username"
                                />
                                <input 
                                    type="email" 
                                    placeholder='Your email' 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    name="email"
                                />
                                <input 
                                    type="password" 
                                    placeholder='*****' 
                                    value={formData.password} 
                                    onChange={handleChange} 
                                    name="password"
                                />
                                <button className='login-btn' type='submit'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default SignUp;
