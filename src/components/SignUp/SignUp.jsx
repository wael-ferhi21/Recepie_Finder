import React from 'react'
import '../SignUp/SignUp.css'
function SignUp() {
  return (
    <div className='container-fluid'>
        <main className='login-container'>
            <div className='login-form'>
                <div className='card'>
                   <div className='card-body'>
                    <h4 className='card-header'>Sign Up</h4>
                        <form >
                            <input type="text" placeholder='Your username' />
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

export default SignUp