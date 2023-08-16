import React from 'react'

function Signin() {
  return (
   

  <div className='container'>
   
    <div className='bg-white p-3 rounded w-25 border m-3' >
      <div className="text-center">
        <h3>O-kayto Login</h3>
        <p>New here? <a href="#!">Create an account</a></p>
      </div>
    <form>
    <div className="form-outline mb-4">
       <label className="form-label" for="form2Example1">Email address</label>
       <input type="email" id="form2Example1" className="form-control" placeholder='juandelacruz@email.com' />
    </div>

    <div className="form-outline mb-4">
       <label className="form-label" for="form2Example2">Password</label>
       <input type="password" id="form2Example2" className="form-control" placeholder='Password' />
    </div>

    <div className="row mb-4">
      <div className="col d-flex justify-content-center">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="form2Example34" checked />
          <label className="form-check-label" for="form2Example34"> Remember me </label>
      </div>
    </div>

    <div className="col">
  
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

  
  <div className="text-center">
    <p>or sign up with:</p>
    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-facebook-f"></i>
    </button>

    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-google"></i>
    </button>

    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-github"></i>
    </button>
  </div>
</form>
<br />
    </div>
    </div>
  )
}

export default Signin
