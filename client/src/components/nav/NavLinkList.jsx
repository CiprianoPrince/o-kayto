import React, { memo } from "react"
import { Nav, NavItem } from "react-bootstrap"
import { BiEnvelope } from "react-icons/bi"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const NavLinkList = memo(() => {
  return (
    <NavStyled
      as='nav'
      className='justify-content-end align-items-center gap-md-1 gap-lg-3'
      horizontal='end'
    >
      <NavLink to='/'>Home</NavLink>

      <NavLink to='services'>Services</NavLink>

      <NavLink to='careers'>Careers</NavLink>

      <NavLink to='about'>About Us</NavLink>

      <NavLink to='admin'>Admin</NavLink>

      <NavItem className='bg-light'>
        <NavLinkStyled className='fw-bold nav-link' to='/contact'>
          <BiEnvelope className='bg-transparent fs-2 d-block m-auto' />
          Inquiry
        </NavLinkStyled>
      </NavItem>
    </NavStyled>
  )
})

export default NavLinkList

const NavStyled = styled(Nav)`
  display: none !important;
  @media only screen and (min-width: 768px) {
    display: flex !important;
  }
`
const NavLinkStyled = styled(NavLink)`
  &:hover {
    color: var(--bs-light);
    background-color: hsl(172, 100%, 38%, 0.4);
  }

  &.active {
    color: var(--bs-light);
    background-color: hsl(172, 100%, 38%, 0.4);
  }
`
