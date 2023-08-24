import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <main>
      <section className="container mx-auto flex min-h-screen items-center justify-center px-4 py-4">
        <div className="w-full max-w-lg rounded-lg p-8 shadow-xl ring-1 ring-inset ring-secondary-900/5">
          <h1 className="header-1 text-center">Account Sign Up</h1>
          <p className="mb-4 text-center font-semibold text-secondary-950">
            Already have an account?{' '}
            <Link
              className="[ ] text-accent-500 hover:text-accent-800 focus:outline-none focus:ring-2 focus:ring-accent-500"
              to="/signin"
            >
              Log in.
            </Link>
          </p>
          <form className="flex flex-col space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="form-label | block" htmlFor="email">
                  First name
                </label>
                <input
                  className="form-control | px-3 py-2"
                  type="email"
                  name="email"
                  id="email"
                  placeholder=""
                />
              </div>

              <div className="flex-1">
                <label className="form-label | block" htmlFor="email">
                  Last name
                </label>
                <input
                  className="form-control | px-3 py-2"
                  type="email"
                  name="email"
                  id="email"
                  placeholder=""
                />
              </div>
            </div>

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
              <label className="form-label | block" htmlFor="password">
                Confirm password
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
                Create my account
              </button>
            </div>

            <div>
              <p className="block whitespace-pre-line text-center font-semibold text-secondary-500">
                By clicking Create Account, you are agreeing to our{' '}
                <Link
                  className="[ ] text-accent-500 hover:text-accent-800 focus:outline-none focus:ring-2 focus:ring-accent-500"
                  to="terms"
                >
                  Terms & Conditions
                </Link>{' '}
                and{' '}
                <Link
                  className="[ ] text-accent-500 hover:text-accent-800 focus:outline-none focus:ring-2 focus:ring-accent-500"
                  to="terms"
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
  );
};

export default Signup;
