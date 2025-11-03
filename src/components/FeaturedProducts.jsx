import Electronic from "../assets/assets_frontend/Electronic.jpg";
import girls_sho from "../assets/assets_frontend/girls_sho.jpg";
import tech from "../assets/assets_frontend/tech.jpg";
import { useCart } from "../contexts/CartContext";

const FeaturedProducts = ({ selectedCategory, searchTerm }) => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 101,
      name: "Wireless Earbuds",
      price: 4999,
      img: tech,
      category: "Electronics",
    },
    {
      id: 102,
      name: "Smart Watch",
      price: 7499,
      img: Electronic,
      category: "Electronics",
    },
    {
      id: 103,
      name: "Men’s Sneakers",
      price: 5999,
      img: "https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg",
      category: "Fashion",
    },
    {
      id: 104,
      name: "Women’s Handbag",
      price: 6499,
      img: girls_sho,
      category: "Fashion",
    },
    {
      id: 105,
      name: "Bluetooth Speaker",
      price: 3999,
      img: "https://img.freepik.com/free-photo/portable-bluetooth-speaker_53876-104058.jpg",
      category: "Electronics",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

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

        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                    <button
                      onClick={() => addToCart(product)}
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
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
