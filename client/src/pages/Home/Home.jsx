import { Container } from "react-bootstrap"
import { Main } from "../../components/layout/Frontend"
import { Link } from "react-router-dom"
<<<<<<< HEAD
import Signin from "../Signin/Signin"

=======
import Cart from "../Cart/Cart"
import Wishlist from "../Wishlist/Wishlist"
>>>>>>> 49472317c69852d12d9053a82e7ea35dce54e646

const heroContainerCss = ""

const Home = () => {
  return (
    <Main>
<<<<<<< HEAD

    <Signin/>
=======
      <Wishlist/>
      {/* <Cart/> */}
>>>>>>> 49472317c69852d12d9053a82e7ea35dce54e646
      {/* <Container className='bg-success h-75' fluid as='section'>
        <h1>Dress the Best, Forget the Rest:</h1>
        <p>Discover the latest trends and timeless classics.</p>
        <Link to='collection'>Check Collection</Link>
      </Container>
<<<<<<< HEAD
 
=======

>>>>>>> 49472317c69852d12d9053a82e7ea35dce54e646
      <Container fluid as='section'></Container> */}
    </Main>
  )
}

export default Home
