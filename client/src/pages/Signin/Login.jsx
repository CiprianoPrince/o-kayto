import React from 'react'

function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-light vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <form action="">
          <div className='mb-3'>
            <img src="./assets/scss/okayto.png" alt="okayto" />
            <h4>Log in</h4>
            <p>New here? <a href="#!">Create an account</a></p>
          </div>
          <div className='mb-3'>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='juandelacruz@email.com'/>
          </div>
          <div className='mb-3'>
            <label htmlFor="password">Pasword</label>
            <input type="text" placeholder='Enter your password'/>
          </div>
          <div>
            <button className='btn btn-success'>Log in</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login
