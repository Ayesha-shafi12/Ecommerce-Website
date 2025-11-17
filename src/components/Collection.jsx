import { useEffect, useState } from "react";
import { assets } from "../assets/assets_frontend/assets.js";

const Collection = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch("/data/collection.json")
      .then((res) => res.json())
      .then((data) => setCollections(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Shop by <span className="text-blue-600">Collection</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Explore our hand-picked collections curated for every style.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {collections.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={item.img.startsWith("http") ? item.img : assets[item.img]}
                alt={item.title}
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-center py-4 text-lg font-semibold text-gray-700 group-hover:text-blue-600">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
