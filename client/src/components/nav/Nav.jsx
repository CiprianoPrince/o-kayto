import React from "react"
import styled from "styled-components"

import NavLogo from "./NavLogo"

import NavLinkList from "./NavLinkList"
import NavButton from "./NavButton"
import { Col, Nav as BSNav } from "react-bootstrap"

const Nav = () => {
  return (
    <>
      <BSNav container='fluid p-0' expand='md' className='bg-light p-0'>
        <Col md={2} lg={4} className='bg-light'>
          <NavLogo />
        </Col>

        <ColStyled md={10} lg={8}>
          <NavButton />

          <NavLinkList />
        </ColStyled>
      </BSNav>
    </>
  )
}

export default Nav

const ColStyled = styled(Col)`
  background-color: transparent !important;
  padding: 1rem !important;
  @media only screen and (min-width: 768px) {
    background-color: var(--bs-primary) !important;
    padding: 0rem !important;
  }
`
