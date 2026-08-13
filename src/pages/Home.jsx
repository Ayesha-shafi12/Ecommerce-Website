import { useState } from "react";
import Collection from "../components/Collection";
import FeaturedProducts from "../components/FeaturedProducts";
import Header from "../components/Header";
import OfferBanner from "../components/OfferBanner";
import Testimonials from "../components/Testimonials";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-gray-50">
      <Header
        onCategoryChange={setSelectedCategory}
        onSearchChange={setSearchTerm}
      />

      <Collection />

      <FeaturedProducts
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
      />

      <OfferBanner />

      <Testimonials />

      {/* Newsletter Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-8 md:p-12 text-center shadow-xl">
            <p className="text-yellow-300 font-semibold uppercase tracking-wider text-sm">
              Stay Updated
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
              Get the Latest Trends & Offers
            </h2>

            <p className="text-blue-100 max-w-2xl mx-auto mt-4">
              Subscribe to receive updates about new products, special offers,
              and seasonal collections.
            </p>

            <form
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing!");
              }}
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3 rounded-xl text-gray-800 outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <button
                type="submit"
                className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
