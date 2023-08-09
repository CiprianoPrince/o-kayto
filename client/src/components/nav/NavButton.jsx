import React from "react"
import { BiMenu } from "react-icons/bi"
import styled from "styled-components"

const NavButton = () => {
  return (
    <>
      <BiMenuSyled role='button' className='fs-1 text-primary' />
    </>
  )
}

export default NavButton

const BiMenuSyled = styled(BiMenu)`
  @media only screen and (min-width: 768px) {
    display: none !important;
  }
`
