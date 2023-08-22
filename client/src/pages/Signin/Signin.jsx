import { Link } from "react-router-dom"

const Signin = () => {
  return (
    <main>
      <section className='container flex justify-center items-center min-h-screen py-4 mx-auto px-4'>
        <div className='rounded-lg shadow-xl ring-1 ring-secondary-900/5 ring-inset w-full max-w-lg p-8'>
          <h1 className='header-1 text-center'>O-kayto Login</h1>
          <p className='text-secondary-950 font-semibold text-center mb-4'>
            New here?{" "}
            <Link
              className='text-accent-500 [ hover:text-accent-800 focus:outline-none focus:ring-2 focus:ring-accent-500 ]'
              to='/signup'
            >
              Create an account.
            </Link>
          </p>
          <form className='flex flex-col space-y-4'>
            <div>
              <label className='form-label | block' htmlFor='email'>
                Email address
              </label>
              <input
                className='form-control |'
                type='email'
                name='email'
                id='email'
                placeholder=''
              />
            </div>
            <div>
              <label className='form-label | block' htmlFor='password'>
                Password
              </label>
              <input
                className='form-control |'
                type='password'
                name='password'
                id='password'
                placeholder=''
              />
            </div>

            <div>
              <button className='button | text-4xl font-bold w-full py-4' type='submit' id='submit'>
                Log in
              </button>
            </div>

            <div className='text-center'>
              <Link className='inline-block text-secondary-500 font-semibold [ hover:text-accent-800 focus:outline-none focus:ring-2 focus:ring-accent-500 ]'>
                Forgot password?
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Signin
