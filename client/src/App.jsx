import { Routes, Route } from 'react-router-dom';
import { AuthLayout, ShopLayout } from './layout';

import {
  About,
  Account,
  Admin,
  Cart,
  Checkout,
  Shop,
  Contact,
  Home,
  Payment,
  Signin,
  Signup,
  Wishlist,
} from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShopLayout />}>
          <Route index element={<Home />} />
          <Route path="shop">
            <Route index element={<Shop />} />
            <Route path=":category" element={<Shop />}>
              <Route path=":slug" element={<Shop />} />
            </Route>
          </Route>

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="payment" element={<Payment />} />
          <Route path="settings" element={<Account />} />
        </Route>

        <Route path="/" element={<AuthLayout />}>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        <Route path="/" element={<ShopLayout />}>
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
