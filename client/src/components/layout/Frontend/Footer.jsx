import { Container, Row, Col, InputGroup, Form } from "react-bootstrap"

const Footer = () => {
  return (
    <>
      <footer className='bg-dark text-white py-3'>
        <Container>
          <Row className=' py-3'>
            <Col md={6}>
              <h5>Company</h5>
              <p>123 Street, City, Country</p>
            </Col>
            <Col md={6}>
              <h5>Subscribe to our news letter</h5>
              <p>For sales, exclusive content, and more!</p>
              <InputGroup>
                <Form.Control
                  placeholder='Email address'
                  aria-label='Search'
                  aria-describedby='write something to search'
                />
                <InputGroup.Text
                  className='bg-primary border-primary text-white'
                  role='button'
                  id='write something to search'
                >
                  Subscribe
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>

          <Row className='py-3'>
            <Col md={3}>
              <h5>My Company</h5>
              <p>123 Street, Makati City, Phillipines</p>
            </Col>
            <Col md={3}>
              <h5>Contact Us</h5>
              <p>Email: okayto@company.com</p>
              <p>Phone: +123 456 7890</p>
            </Col>
            <Col md={3}>
              <h5>Pages</h5>
              <p>Collection</p>
              <p>Adult shirt</p>
              <p>Kids shirt</p>
              <p>Home goods</p>
              <p>Cases goods</p>
            </Col>
            <Col md={3}>
              <h5>Links</h5>
              <p>Email: info@mycompany.com</p>
              <p>Phone: +123 456 7890</p>
            </Col>
          </Row>

          <Row className='py-3'>
            <Col md={3}>
              <h5>Let’s Be Friends!</h5>
              <p>123 Street, Makati City, Phillipines</p>
            </Col>
          </Row>

          <Row className='py-3'>
            <Col md={12}>
              <h5>© O-kayto Apparel 2022 - 2023</h5>
              <p>
                Intellectual Property Policy CA: Do Not Sell My Personal
                Information Privacy Policy Terms
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
