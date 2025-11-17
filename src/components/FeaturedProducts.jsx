import { useEffect, useState } from "react";
import { assets } from "../assets/assets_frontend/assets.js";
import { useCart } from "../contexts/CartContext";

const FeaturedProducts = () => {
  const { addToCart, openCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Featured <span className="text-blue-600">Products</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Discover the most popular and trending products this week.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => {
            const productImg = product.img.startsWith("http")
              ? product.img
              : assets[product.img];

            return (
              <div
                key={product.id}
                className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={productImg}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                    <button
                      onClick={() => {
                        addToCart(product);
                        openCart();
                      }}
                      className="bg-yellow-400 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition duration-200"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>

                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-800 text-base md:text-lg">
                    {product.name}
                  </h3>
                  <p className="text-blue-600 font-bold mt-1">
                    Rs {product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
