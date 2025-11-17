import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white-700 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
          <p className="text-white text-sm leading-relaxed">
            We provide premium sneakers, fashion items, beauty essentials, and
            tech gadgets. Fast delivery, trusted service, and great prices.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Customer Service
          </h3>
          <ul className="space-y-2 text-white text-sm">
            <li>Help Center</li>
            <li>Returns & Refunds</li>
            <li>Shipping Information</li>
            <li>Track Your Order</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white text-sm">
            <li>Home</li>
            <li>Collections</li>
            <li>Products</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="text-right">
          <h1 className="text-3xl font-extrabold tracking-wide text-white">
            <span className="text-yellow-500">Trend</span>.Pk
          </h1>

          <p className="text-white text-sm mt-2">
            Your trusted online shopping destination.
          </p>

          <div className="flex justify-end gap-4 mt-5">
            <Facebook
              size={20}
              className=" text-white hover:text-blue-500 cursor-pointer"
            />
            <Instagram
              size={20}
              className=" text-white hover:text-pink-500 cursor-pointer"
            />
            <Twitter
              size={20}
              className="hover: text-white text-sky-400 cursor-pointer"
            />
            <Youtube
              size={20}
              className="hover: text-white text-red-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-white text-sm border-t border-white-700 pt-5">
        © {new Date().getFullYear()} Trend.Pk. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
