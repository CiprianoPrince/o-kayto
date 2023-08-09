import React from "react"
import { Container } from "react-bootstrap"
import Navbar from "../nav/Navbar"

const Header = () => {
  return (
    <>
      <Container fluid as='header' className='fixed-top p-0'>
        <Navbar />
      </Container>
    </>
  )
}

export default Header
