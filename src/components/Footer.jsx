import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <h2 className="text-3xl font-extrabold tracking-tight">
                <span className="text-yellow-400">Trend</span>
                <span className="text-white">.pk</span>
              </h2>
            </Link>

            <p className="text-gray-400 text-sm leading-7 mt-4 max-w-xs">
              Your trusted online shopping destination for fashion, electronics,
              beauty products and everyday essentials.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2.5 rounded-full bg-white/10 hover:bg-blue-600 hover:text-white transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="p-2.5 rounded-full bg-white/10 hover:bg-pink-600 hover:text-white transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="p-2.5 rounded-full bg-white/10 hover:bg-sky-500 hover:text-white transition"
              >
                <Twitter size={18} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="p-2.5 rounded-full bg-white/10 hover:bg-red-600 hover:text-white transition"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Quick Links</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-yellow-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="hover:text-yellow-400 transition"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-yellow-400 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/cart" className="hover:text-yellow-400 transition">
                  Shopping Cart
                </Link>
              </li>

              <li>
                <Link to="/order" className="hover:text-yellow-400 transition">
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">
              Customer Service
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Returns & Refunds
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Shipping Information
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Contact Us</h3>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin size={18} className="text-yellow-400 shrink-0" />

                <span>Lahore, Pakistan</span>
              </div>

              <div className="flex gap-3">
                <Phone size={18} className="text-yellow-400 shrink-0" />

                <span>+92 300 0000000</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} className="text-yellow-400 shrink-0" />

                <span className="break-all">support@trend.pk</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-6">
              Customer support available Monday to Saturday.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Trend.pk. All rights reserved.
          </p>

          <p className="text-gray-500">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
