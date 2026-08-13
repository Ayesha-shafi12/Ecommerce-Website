import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets.js";

const Collection = () => {
  const navigate = useNavigate();

  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch("/data/collection.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load collections");
        }

        return res.json();
      })
      .then((data) => setCollections(data))
      .catch((err) => console.error("Collection loading error:", err));
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-10">
          <p className="text-blue-600 font-bold uppercase tracking-wider text-sm">
            Explore Categories
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            Shop by <span className="text-blue-600">Collection</span>
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Browse our carefully selected collections and discover products that
            match your style and everyday needs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {collections.map((item, index) => (
            <button
              type="button"
              key={item.id || index}
              onClick={() => navigate("/products")}
              className="group text-left bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={
                    item.img?.startsWith("http") ? item.img : assets[item.img]
                  }
                  alt={item.title}
                  className="w-full h-36 sm:h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <span className="absolute bottom-3 left-3 text-white font-bold">
                  {item.title}
                </span>
              </div>

              <div className="p-4 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">
                  Explore collection
                </span>

                <ArrowRight
                  size={17}
                  className="text-blue-600 group-hover:translate-x-1 transition"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
