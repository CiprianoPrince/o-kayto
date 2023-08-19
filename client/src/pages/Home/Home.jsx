import { Container } from "react-bootstrap"
import { Main } from "../../components/layout/Frontend"
import { Link } from "react-router-dom"
import Cart from "../Cart/Cart"
import Wishlist from "../Wishlist/Wishlist"

const heroContainerCss = ""

const Home = () => {
  return (
    <Main>
      <Wishlist/>
      {/* <Cart/> */}
      {/* <Container className='bg-success h-75' fluid as='section'>
        <h1>Dress the Best, Forget the Rest:</h1>
        <p>Discover the latest trends and timeless classics.</p>
        <Link to='collection'>Check Collection</Link>
      </Container>

      <Container fluid as='section'></Container> */}
    </Main>
  )
}

export default Home
