import { Link, NavLink } from "react-router-dom"
import { okaytoLogo } from "../../assets/images"

const Header = () => {
  // const { pathname } = useLocation()
  return (
    <>
      <header className='bg-primary-100  text-secondary-800 fixed top-0 w-full'>
        <div className='container | flex justify-between items-center mx-auto p-4'>
          <Link className='w-[8rem]' to='/'>
            <img className='' src={okaytoLogo} alt='' />
          </Link>

          <nav className='flex justify-end items-center gap-4 [ lg:w-full max-w-sm ]'>
            <NavLink className='font-semibold text-accent-500 rounded-full px-3 py-2' to='signin'>
              Sign in
            </NavLink>

            <NavLink
              className='font-semibold text-accent-500 rounded-full bg-accent-100 px-3 py-2'
              to='signup'
            >
              Sign up
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
