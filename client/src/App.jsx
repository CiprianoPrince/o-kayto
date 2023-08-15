import { Routes, Route } from "react-router-dom"
import MainLayout from "./components/layout/Frontend/Layout"
import Home from "./pages/Home/Home"
import Collection from "./pages/Collection/Collection"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Cart from "./pages/Cart/Cart"
import Wishlist from "./pages/Wishlist/Wishlist"
import Checkout from "./pages/Checkout/Checkout"
import Settings from "./pages/Settings/Settings"
import Signin from "./pages/Signin/Signin"
import Signup from "./pages/Signup/Signup"
import Admin from "./pages/Admin/Admin"
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* <Route path='signin' element={<Signin />} /> */}
          {/* <Route path='signup' element={<Signup />} /> */}
          {/* <Route path='about' element={<About />} /> */}
          {/* <Route path='contact' element={<Contact />} /> */}
          {/* <Route path='cart' element={<Cart />} /> */}
          {/* <Route path='wishlist' element={<Wishlist />} /> */}
          {/* <Route path='checkout' element={<Checkout />} /> */}
          {/* <Route path='settings' element={<Settings />} /> */}
          {/* <Route path='admin' element={<Admin />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
