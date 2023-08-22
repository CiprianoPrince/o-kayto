import { Link } from "react-router-dom"

import { Bars3Icon, ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline"
import ShoppingBagMenu from "./ShoppingBagMenu"

import { okaytoLogo } from "../../../assets/images"
import UserMenu from "./UserMenu"
import Bars3Menu from "./Bars3Menu"
import NavMenu from "./NavMenu"
import SearchBar from "./SearchBar"

const Header = () => {
  return (
    <>
      <header className='sticky top-0 text-secondary-800 bg-primary-50 border-b-2 shadow-lg z-[9999]'>
        <div className='container | flex justify-between items-center mx-auto p-4'>
          <div className='group relative w-10 p-0 block [ lg:py-2 lg:w-12 lg:hidden ]'>
            <Bars3Icon className='group text-accent-300 [ hover:text-accent-500 ]' role='button' />

            <div className='bg-white-100 absolute top-[100%] left-0  w-80 border border-black-950 hidden z-10 [ group-hover:block group-active/:block group-focus:block]'>
              <Bars3Menu />
            </div>
          </div>

          <Link className='w-[8rem]' to='/'>
            <img className='' src={okaytoLogo} alt='' />
          </Link>

          <NavMenu />

          <div className='flex justify-end items-center gap-4 [ lg:w-full max-w-sm ]'>
            <SearchBar inputGroupClass='hidden [ lg:flex ]' />
            <div className='group relative w-10 p-0 [ lg:py-2 lg:w-12 ]'>
              <Link className='peer' to='cart'>
                <ShoppingBagIcon className='text-accent-300 [ hover:text-accent-500 ]' />
              </Link>

              <div className='peer absolute top-[100%] right-0  bg-white-100 w-80 rounded-md hidden z-10 [ group-hover:block group-active:block group-focus:block peer-hover:block peer-active:block peer-focus:block ]'>
                <ShoppingBagMenu />
              </div>
            </div>

            <div className='group relative w-10 p-0 hidden [ lg:py-2 lg:w-12 lg:block ]'>
              <UserIcon
                className='group peer text-accent-300 [ hover:text-accent-500 ]'
                role='button'
                tabIndex='0'
              />

              <div className='group peer bg-white-100 w-80 rounded-md ring-1 ring-white-300 absolute top-[100%]  right-[-25%]  hidden z-10 [ group-hover:block group-active:block group-focus:block peer-hover:block peer-active:block peer-focus:block ]'>
                <UserMenu />
              </div>
            </div>
          </div>
        </div>

        <div className='container | flex justify-center items-center mx-auto p-4 [ lg:hidden ]'>
          <SearchBar />
        </div>
      </header>
    </>
  )
}

export default Header
