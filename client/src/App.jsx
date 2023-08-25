import { Routes, Route } from "react-router-dom"
import MainLayout from "./components/layout/MainLayout"
import Home from "./pages/Home/Home"
// import Checkout from "./pages/Checkout/Checkout"
import Payment from "./pages/Checkout/Payment"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' >
          <Route index element={<Home />} />
          {/* <Route path='signin' element={<Signin />} /> */}
          {/* <Route path='signup' element={<Signup />} /> */}
          {/* <Route path='about' element={<About />} /> */}
          {/* <Route path='contact' element={<Contact />} /> */}
          {/* <Route path='cart' element={<Cart />} /> */}
          {/* <Route path='wishlist' element={<Wishlist />} /> */}
          {/* <Route path='Checkout' element={<Checkout />} /> */}
          <Route path='Payment' element={<Payment/>} />
          {/* <Route path='settings' element={<Settings />} /> */}  
          {/* <Route path='admin' element={<Admin />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
