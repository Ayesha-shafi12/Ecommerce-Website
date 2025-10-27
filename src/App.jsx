import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home"; // ✅ new
import Login from "./pages/Login";
import Products from "./pages/Products";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} /> {/* ✅ Home route */}
          <Route path="/about" element={<About />} /> {/* ✅ About route */}
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} /> {/* ✅ new route */}
        </Routes>
      </main>
      <footer className="footer bg-gray-100 text-center py-4 text-gray-500">
        © {new Date().getFullYear()} Trend.pk. All rights reserved.
      </footer>
    </div>
  );
}
