import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} /> {/* ✅ This line */}
      </Routes>
    </>
  );
}

export default App;
