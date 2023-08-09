import React from "react"
import styled from "styled-components"

import { Col } from "react-bootstrap"
import NavLinkList from "./NavLinkList"
import NavButton from "./NavButton"
import Nav from "./Nav"

const Navbar = () => {
  return (
    <>
      <Nav
        fixed='top'
        container='fluid p-0'
        expand='md'
        className='bg-light p-0'
      >
        <Col md={2} lg={4} className='bg-light'></Col>

        <ColStyled md={10} lg={8}>
          <NavButton />

          <NavLinkList />
        </ColStyled>
      </Nav>
    </>
  )
}

export default Navbar

const ColStyled = styled(Col)`
  background-color: transparent !important;
  padding: 1rem !important;
  @media only screen and (min-width: 768px) {
    background-color: var(--bs-primary) !important;
    padding: 0rem !important;
  }
`
