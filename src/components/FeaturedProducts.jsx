import Electronic from "../assets/assets_frontend/Electronic.jpg";
import girls_sho from "../assets/assets_frontend/girls_sho.jpg";
import tech from "../assets/assets_frontend/tech.jpg";
const FeaturedProducts = () => {
  const products = [
    {
      name: "Wireless Earbuds",
      price: "Rs. 4,999",
      img: tech,
    },
    {
      name: "Smart Watch",
      price: "Rs. 7,499",
      img: Electronic,
    },
    {
      name: "Men’s Sneakers",
      price: "Rs. 5,999",
      img: "https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg",
    },
    {
      name: "Women’s Handbag",
      price: "Rs. 6,499",
      img: girls_sho,
    },
    {
      name: "Bluetooth Speaker",
      price: "Rs. 3,999",
      img: "https://img.freepik.com/free-photo/portable-bluetooth-speaker_53876-104058.jpg",
    },
  ];

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
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                  <button className="bg-yellow-400 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800 text-base md:text-lg">
                  {product.name}
                </h3>
                <p className="text-blue-600 font-bold mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
