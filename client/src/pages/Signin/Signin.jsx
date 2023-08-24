import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <main>
      <section className="container mx-auto flex min-h-screen items-center justify-center px-4 py-4">
        <div className="w-full max-w-lg rounded-lg p-8 shadow-xl ring-1 ring-inset ring-secondary-900/5">
          <h1 className="header-1 text-center">O-kayto Login</h1>
          <p className="mb-4 text-center font-semibold text-secondary-950">
            New here?{' '}
            <Link
              className="[ ] text-accent-500 hover:text-accent-800 focus:outline-none focus:ring-2 focus:ring-accent-500"
              to="/signup"
            >
              Create an account.
            </Link>
          </p>
          <form className="flex flex-col space-y-4">
            <div>
              <label className="form-label | block" htmlFor="email">
                Email address
              </label>
              <input
                className="form-control | px-3 py-2"
                type="email"
                name="email"
                id="email"
                placeholder=""
              />
            </div>

            <div>
              <label className="form-label | block" htmlFor="password">
                Password
              </label>
              <input
                className="form-control | px-3 py-2"
                type="password"
                name="password"
                id="password"
                placeholder=""
              />
            </div>

            <div>
              <button className="button | w-full py-4 text-4xl font-bold" type="submit" id="submit">
                Log in
              </button>
            </div>

            <div className="text-center">
              <Link className="[ ] inline-block font-semibold text-secondary-500 hover:text-accent-800 focus:outline-none focus:ring-2 focus:ring-accent-500">
                Forgot password?
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Signin;
