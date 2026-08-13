import { Route, Routes } from "react-router-dom";

import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Orders from "./pages/Orders";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Wishlist from "./pages/Wishlist";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/signin/*" element={<SignIn />} />
          <Route path="/signup/*" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <CartDrawer />
      <Footer />
    </div>
  );
}

export default App;
