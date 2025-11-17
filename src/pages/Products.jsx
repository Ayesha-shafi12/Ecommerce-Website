import { useEffect, useState } from "react";
import { assets } from "../assets/assets_frontend/assets.js";
import { useCart } from "../contexts/CartContext.jsx";
// import Electronic from "../assets/assets_frontend/Electronic.jpg";
// import menwatch from "../assets/assets_frontend/menwatch.jpg";
// import skincare from "../assets/assets_frontend/skincare.jpg";
// import tech from "../assets/assets_frontend/tech.jpg";
// import { useCart } from "../contexts/CartContext";

// const Products = () => {
//   const { addToCart } = useCart();

//   const [products] = useState([
//     {
//       id: 1,
//       name: "Smart Watch",
//       price: 12000,
//       img: Electronic,
//       category: "Men",
//     },
//     {
//       id: 2,
//       name: "Men Sneakers",
//       price: 18000,
//       img: "https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg",
//       category: "Men",
//     },
//     {
//       id: 3,
//       name: "Apple AirPods Pro",
//       price: 42000,
//       img: tech,
//       category: "Gadgets",
//     },
//     {
//       id: 4,
//       name: "Skincare Combo Pack",
//       price: 6500,
//       img: skincare,
//       category: "Beauty",
//     },
//     {
//       id: 5,
//       name: "Casual Men’s Watch",
//       price: 8500,
//       img: menwatch,
//       category: "Accessories",
//     },
//     {
//       id: 6,
//       name: "Elegant Women’s Handbag",
//       price: 9500,
//       img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
//       category: "Women",
//     },
//   ]);

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
//             Our <span className="text-blue-600">Products</span>
//           </h2>
//           <p className="text-gray-500 mt-2">
//             Explore our best-selling items and latest trends.
//           </p>
//         </div>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {products.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
//             >
//               <div className="relative">
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded">
//                   {item.category}
//                 </div>
//               </div>
//               <div className="p-5">
//                 <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
//                   {item.name}
//                 </h3>
//                 <p className="text-gray-500 mt-1">
//                   Rs {item.price.toLocaleString()}
//                 </p>
//                 <button
//                   onClick={() => addToCart(item)}
//                   className="mt-4 w-full bg-yellow-400 text-blue-900 font-semibold py-2 rounded-lg hover:bg-yellow-300 transition duration-200"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;

const MyProducts = () => {
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

export default MyProducts;
