import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <main>
      <section className='container flex justify-center items-center min-h-screen py-4 mx-auto px-4'>
        <div className='rounded-lg shadow-xl ring-1 ring-secondary-900/5 ring-inset w-full max-w-lg p-8'>
          <h1 className='header-1 text-center'>Account Sign Up</h1>
          <p className='text-secondary-950 font-semibold text-center mb-4'>
            Already have an account?{" "}
            <Link
              className='text-accent-500 [ hover:text-accent-800 focus:outline-none focus:ring-2 focus:ring-accent-500 ]'
              to='/signin'
            >
              Log in.
            </Link>
          </p>
          <form className='flex flex-col space-y-4'>
            <div className='flex gap-4'>
              <div className='flex-1'>
                <label className='form-label | block' htmlFor='email'>
                  First name
                </label>
                <input
                  className='form-control |'
                  type='email'
                  name='email'
                  id='email'
                  placeholder=''
                />
              </div>

              <div className='flex-1'>
                <label className='form-label | block' htmlFor='email'>
                  Last name
                </label>
                <input
                  className='form-control |'
                  type='email'
                  name='email'
                  id='email'
                  placeholder=''
                />
              </div>
            </div>

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
              <label className='form-label | block' htmlFor='password'>
                Confirm password
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
                Create my account
              </button>
            </div>

            <div>
              <p className='block text-secondary-500 font-semibold text-center whitespace-pre-line'>
                By clicking Create Account, you are agreeing to our{" "}
                <Link
                  className='text-accent-500 [ hover:text-accent-800 focus:outline-none focus:ring-2 focus:ring-accent-500 ]'
                  to='terms'
                >
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link
                  className='text-accent-500 [ hover:text-accent-800 focus:outline-none focus:ring-2 focus:ring-accent-500 ]'
                  to='terms'
                >
                  Privacy Policy
                </Link>
                , and to receive our promotional emails (opt out any time).
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Signup
