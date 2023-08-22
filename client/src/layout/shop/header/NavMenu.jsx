import { NavLink } from "react-router-dom"

const NavMenu = () => {
  return (
    <nav className='hidden [ lg:block ]' aria-label='main'>
      <ul className='flex justify-center items-center space-x-4'>
        <li className='text-lg font-semibold'>
          <NavLink className='block px-3 py-1'>Shop</NavLink>
        </li>

        <li className='text-lg font-semibold'>
          <NavLink className='block px-3 py-1'>Deals</NavLink>
        </li>

        <li className='text-lg font-semibold'>
          <NavLink className='block px-3 py-1'>What&apos;s new</NavLink>
        </li>

        <li className='text-lg font-semibold'>
          <NavLink className='block px-3 py-1'>What&apos;s new</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu
