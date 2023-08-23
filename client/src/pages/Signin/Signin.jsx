import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Signin = () => {

    const [input_email,setInputEmail] = useState(null);
    const [input_password,setInputPassword] = useState(null);
    const [showValidation,setShowValidation] = useState(false);

    const seekAccount = () =>{
        let registered_user_data = JSON.parse(localStorage.getItem('registered_user'))
        let is_registered = false;

        if (registered_user_data !== null){
            registered_user_data.forEach(user_data => {
                if(user_data.email === input_email && user_data.password === input_password){
                    is_registered = user_data;
                }

            })
        }


        return is_registered;

    };

    const verifyAccount = (e) =>{
        e.preventDefault();
        let session_user =  seekAccount()
        if (session_user){
            sessionStorage.setItem('session_user', JSON.stringify(session_user));
            alert("LOGIN SUCCESSFULLY!")
            window.location = window.origin + "/"
        }else{
            setShowValidation(true);
        }
    }



  return (
  // <section class="bg-gray-50 min-h-screen flex items-center justify-center drop-shadow-2xl" >

  //       <div>
  //     <div class="bg-gray-100 flex rounded-2xl shadow-[25px_25px30px-24px_rgb(0,0,0,0.6)] max-w-3xl p-2"/>
  //     <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  // <div class="sm:mx-auto sm:w-full sm:max-w-sm">
  // {/* <img class="mx-auto h-auto w-auto" src="okayto.png" alt="Your Company"/> */}
  // <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">O-kayto Log in</h2>
  // </div>

  // <p class="mt-10 text-center text-sm text-gray-500">
  //   New here?
  //   <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Create an account</a>
  // </p>

  // <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  // <form class="space-y-6" action="#" method="POST">
  //   <div>
  //     <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
  //     <div class="mt-2">
  //       <input id="email" name="email" type="email" autocomplete="email" placeholder="juandelacruz@email.com" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  //     </div>
  //   </div>

  //   <div>
  //     <div class="flex items-center justify-between">
  //       <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
  //       <div class="text-sm">
  //         <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
  //       </div>
  //     </div>
  //     <div class="mt-2" >
  //       <input class="p-2" id="password" name="password" type="password" autocomplete="current-password" placeholder="Enter your password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  //     </div>
  //   </div>

  //   <div>
  //     <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
  //   </div>
  // </form>


  // </div>
  // </div>
  // </div>
  // </section>



  <div className='container'>
   
    <div className='bg-white p-3 rounded w-25 border m-3' >
      <div className="text-center">
        {/* <p><img src="assets/css/scss/okayto.png" alt="okayto" /></p> */}
        
        <h3>Login</h3>
        <p>New here? <Link to="/signup" 
                        className="th-color-1">Create an account</Link></p>
                        {/* <a href="Signup">Create an account</a> */}
      </div>
    <form onSubmit={verifyAccount}>
    <div className="form-outline mb-4">
       <label className="form-label" for="form2Example1"><strong>Email address*</strong></label>
       <input onChange={(e) => setInputEmail(e.target.value)} required type="email" id="form2Example1" className="form-control" placeholder='juandelacruz@email.com' />
    </div>

    <div className="form-outline mb-4">
       <label className="form-label" for="form2Example2"><strong>Password*</strong></label>
       <input onChange={(e) => setInputPassword(e.target.value)} required type="password" id="form2Example2" className="form-control" placeholder='Password' />
    </div>

 {
                    showValidation ? 
                        <div className={`alert alert-danger mt-2`} role="alert">
                            Account Not Existing, Please Register First.
                        </div>
                    : false
                }           

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

  <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

  
  {/* <div className="text-center">
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
  </div> */}
</form>
<br />
    </div>
    </div>
  );
}

export default Signin
