import { Nav, Navbar } from "react-bootstrap"
import { PersonCircle } from "react-bootstrap-icons"

const Header = () => {
  return (
    <>
      <Navbar
        bg='primary'
        variant='dark'
        className='d-flex justify-content-between'
      >
        <Navbar.Brand href='#home'>Admin Dashboard</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#features'>Features</Nav.Link>
          <Nav.Link href='#pricing'>Pricing</Nav.Link>
        </Nav>
        <PersonCircle color='white' size={32} />
      </Navbar>
    </>
  )
}

export default Header
