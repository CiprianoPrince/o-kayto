import React from "react"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-bootstrap"

const NavLogo = () => {
  const navigate = useNavigate()

  return (
    <NavLink onClick={() => navigate("/")} className='me-auto'>
      <img className='p-3' src='' alt='ABDevify Logo' />
    </NavLink>
  )
}

export default NavLogo
