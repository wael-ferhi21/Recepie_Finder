import React from 'react'
import '../Login/Login.css'
function Login() {
  return (
    <div className='container-fluid'>
        <main className='login-container'>
            <div className='login-form'>
                <div className='card'>
                   <div className='card-body'>
                    <h4 className='card-header'>Login</h4>
                        <form >
                            <input type="email" placeholder='Your email' />
                            <input type="password" placeholder='*****' />
                            <button  className='login-btn' type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>

  

  
  </div>
  )
}

export default Login