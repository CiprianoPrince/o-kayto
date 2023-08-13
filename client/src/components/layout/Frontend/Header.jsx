import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap"
import { PersonCircle } from "react-bootstrap-icons"
import { Link, NavLink } from "react-router-dom"

const navLinkCssClass = "text-primary text-decoration-none fw-semibold fs-3"
const navCssClass = "ms-auto"

const Header = () => {
  return (
    <>
      <Navbar bg='primary' variant='dark'>
        <Container>
          <Link>
            <NavbarBrand>O-kayto</NavbarBrand>
          </Link>
          <Nav className={navCssClass}>
            <NavLink className={navLinkCssClass}>Home</NavLink>
            <NavLink className={navLinkCssClass}>Features</NavLink>
            <NavLink className={navLinkCssClass}>Pricing</NavLink>
          </Nav>
          <PersonCircle color='white' size={32} />
        </Container>
      </Navbar>
    </>
  )
}

export default Header
