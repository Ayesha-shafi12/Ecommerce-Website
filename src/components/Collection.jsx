import Collection_boys from "../assets/assets_frontend/Collection_boys.jpg";
import Electronic from "../assets/assets_frontend/Electronic.jpg";
import girls_sho from "../assets/assets_frontend/girls_sho.jpg";
import sports from "../assets/assets_frontend/sports.jpg";
// import {
//   Collection_boys,
//   Electronic,
//   girls_sho,
//   sports,
// } from "../assets/assets_frontend/assets.js";

const Collection = () => {
  const collections = [
    {
      title: "Men's Collection",
      img: Collection_boys,
    },
    {
      title: "Women's Collection",
      img: girls_sho,
    },
    {
      title: "Gadgets & Tech",
      img: Electronic,
    },
    {
      title: "Beauty & Self Care",
      img: "https://img.freepik.com/premium-photo/makeup-accessories-beauty-products_93675-124760.jpg",
    },
    {
      title: "Sports & Fitness",
      img: sports,
    },
  ];

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
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <button className="bg-yellow-400 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition duration-200">
                    Explore Now
                  </button>
                </div>
              </div>
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
