import { Container, Nav, Navbar } from "react-bootstrap"
import { PersonCircle } from "react-bootstrap-icons"
import DataTable from "react-data-table-component"

export const Admin = () => {
  return (
    <>
      <Navbar
        bg='dark'
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

      <Container>
        <h2>Data Table</h2>
        <DataTable />
      </Container>
    </>
  )
}
