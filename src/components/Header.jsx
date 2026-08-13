import { Search, ShieldCheck, Truck, Headphones } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import beauty from "../assets/assets_frontend/beauty.png";

const Header = ({ onSearchChange, onCategoryChange }) => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearch(value);
    onSearchChange(value);
  };

  const handleCategory = (e) => {
    const value = e.target.value;

    setCategory(value);
    onCategoryChange(value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (search.trim()) {
      navigate("/products");
    }
  };

  const scrollToProducts = () => {
    document
      .getElementById("featured-products")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-700 to-blue-500 text-white">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${beauty})` }}
        />

        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-yellow-300/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              ✨ Discover what's trending
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Everything You Love,
              <span className="block text-yellow-400">All in One Place.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-blue-100 max-w-2xl leading-relaxed">
              Discover fashion, electronics, beauty products, accessories and
              everyday essentials with a simple and enjoyable shopping
              experience.
            </p>

            {/* Search */}
            <form
              onSubmit={handleSearchSubmit}
              className="mt-8 bg-white rounded-2xl p-2 shadow-2xl max-w-3xl"
            >
              <div className="flex flex-col md:flex-row gap-2">
                <select
                  value={category}
                  onChange={handleCategory}
                  className="text-gray-700 bg-gray-100 px-4 py-3 rounded-xl outline-none text-sm font-medium"
                >
                  <option value="All">All Categories</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Beauty">Beauty</option>
                  <option value="Home & Living">Home & Living</option>
                </select>

                <div className="flex-1 relative">
                  <Search
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={handleSearch}
                    className="w-full pl-12 pr-4 py-3 rounded-xl outline-none text-gray-800 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-yellow-400 text-blue-900 px-7 py-3 rounded-xl font-bold hover:bg-yellow-300 transition flex items-center justify-center gap-2"
                >
                  <Search size={18} />
                  Search
                </button>
              </div>
            </form>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={scrollToProducts}
                className="bg-white text-blue-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
              >
                Shop Featured Products
              </button>

              <button
                onClick={() => navigate("/products")}
                className="border border-white/40 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition"
              >
                Explore All Products
              </button>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center gap-3">
              <Truck size={24} className="text-yellow-300" />
              <div>
                <p className="font-semibold">Fast Delivery</p>
                <p className="text-xs text-blue-100">Across Pakistan</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center gap-3">
              <ShieldCheck size={24} className="text-yellow-300" />
              <div>
                <p className="font-semibold">Secure Shopping</p>
                <p className="text-xs text-blue-100">
                  Safe checkout experience
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center gap-3">
              <Headphones size={24} className="text-yellow-300" />
              <div>
                <p className="font-semibold">Customer Support</p>
                <p className="text-xs text-blue-100">We're here to help</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
