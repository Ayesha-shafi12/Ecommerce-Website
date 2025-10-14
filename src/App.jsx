import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="container">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} Your Store — UI Assessment
        </div>
      </footer>
    </div>
  );
}
