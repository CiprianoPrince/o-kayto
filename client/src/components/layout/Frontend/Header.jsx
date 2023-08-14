import {
  Button,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
  NavbarBrand,
  Stack,
} from "react-bootstrap"
import { Cart3, List, PersonCircle, Search } from "react-bootstrap-icons"
import { Link, NavLink } from "react-router-dom"
import {
  hideOnMdFlex,
  showOnMdFlex,
  hideOnMd,
  showOnMd,
} from "../../../assets/css/variables"

const navLinkCssClass = "fw-medium fs-6 text-white text-decoration-none "
const navCssClass = "gap-3 "
const flexCenter = "d-flex justify-content-center align-items-center "
const flexCenterEnd = "d-flex justify-content-center align-items-end "
const flexCenterStart = "d-flex justify-content-center align-items-start "

const containerCss = "my-2 "
const navbarCss = "flex-column py-3 "
const stackCss = "px-2 py-1 "

const iconSize = 40
const iconColor = "white"

const THEME_COLOR = {
  primary: "primary",
  accent: "accent",
  dark: "dark",
  light: "light",
}

const Header = () => {
  return (
    <>
      <header>
        <Navbar
          bg={THEME_COLOR.primary}
          variant={THEME_COLOR.dark}
          className={navbarCss}
        >
          <Container fluid="lg" className={containerCss}>
            <Button className={hideOnMd}>
              <List color={iconColor} size={iconSize} />
              <span>Menu</span>
            </Button>

            <Link>
              <NavbarBrand>O-KAYTO</NavbarBrand>
            </Link>

            <Stack
              className={stackCss + flexCenter}
              direction='horizontal'
              gap={3}
            >
              <InputGroup className={showOnMdFlex}>
                <Form.Control
                  placeholder='What are you looking for?'
                  aria-label='Search'
                  aria-describedby='write something to search'
                />
                <InputGroup.Text id='write something to search'>
                  <Search role='button' color='dark' size={iconSize - 20} />
                </InputGroup.Text>
              </InputGroup>

              <PersonCircle
                className={showOnMd}
                role='button'
                color={iconColor}
                size={iconSize}
              />
              <Cart3 role='button' color={iconColor} size={iconSize} />
            </Stack>
          </Container>

          <Container fluid="lg" className={containerCss}>
            <Nav className={navCssClass + showOnMdFlex}>
              <NavLink to='/t-shirt' className={navLinkCssClass}>
                Browse
              </NavLink>
              <NavLink to='' className={navLinkCssClass}>
                Adult Apparel
              </NavLink>
              <NavLink to='' className={navLinkCssClass}>
                Kids Apparel
              </NavLink>
              <NavLink to='' className={navLinkCssClass}>
                Home Goods
              </NavLink>
              <NavLink to='' className={navLinkCssClass}>
                Cases & Stickers
              </NavLink>
            </Nav>

            <InputGroup className={hideOnMdFlex}>
              <Form.Control
                placeholder='What are you looking for?'
                aria-label='Search'
                aria-describedby='write something to search'
              />
              <InputGroup.Text id='write something to search'>
                <Search role='button' color='dark' size={iconSize - 12} />
              </InputGroup.Text>
            </InputGroup>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header
