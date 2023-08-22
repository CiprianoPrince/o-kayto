import { NavLink } from "react-router-dom"

const ShoppingBagMenu = () => {
  return (
    <nav aria-label='menu'>
      <ul className='flex flex-col'>
        <li className='text-lg font-semibold'>
          <NavLink to={""} className='block px-3 py-1'>
            Collection
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default ShoppingBagMenu
