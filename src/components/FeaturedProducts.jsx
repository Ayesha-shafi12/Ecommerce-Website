import { ArrowRight, Heart, ShoppingCart, Star } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets.js";
import { useCart } from "../contexts/CartContext";

const FeaturedProducts = ({ selectedCategory = "All", searchTerm = "" }) => {
  const { addToCart, openCart } = useCart();

  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load products");
        }

        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => console.error("Product loading error:", err));
  }, []);

  const toggleWishlist = (productId) => {
    setWishlist((previous) =>
      previous.includes(productId)
        ? previous.filter((id) => id !== productId)
        : [...previous, productId],
    );
  };

  const filteredProducts = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.category?.toLowerCase() === selectedCategory.toLowerCase();

      const matchesSearch =
        !search ||
        product.name?.toLowerCase().includes(search) ||
        product.category?.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchTerm]);

  return (
    <section id="featured-products" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div>
            <p className="text-blue-600 font-bold uppercase tracking-wider text-sm">
              Our Collection
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Featured <span className="text-blue-600">Products</span>
            </h2>

            <p className="text-gray-500 mt-2 max-w-xl">
              Explore our popular products selected for quality, style and
              everyday value.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition"
          >
            View All Products
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Active filters */}
        {(searchTerm || selectedCategory !== "All") && (
          <div className="mb-6 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-sm text-blue-800">
            Showing results for{" "}
            <strong>{searchTerm ? `"${searchTerm}"` : selectedCategory}</strong>
          </div>
        )}

        {/* Products */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center border border-dashed border-gray-300 rounded-2xl">
            <p className="text-xl font-semibold text-gray-700">
              No products found
            </p>

            <p className="text-gray-500 mt-2">
              Try another search term or category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {filteredProducts.slice(0, 10).map((product) => {
              const productImg = product.img?.startsWith("http")
                ? product.img
                : assets[product.img];

              const isWishlisted = wishlist.includes(product.id);

              return (
                <article
                  key={product.id}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative bg-gray-100 overflow-hidden">
                    <img
                      src={productImg}
                      alt={product.name}
                      className="w-full h-44 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <button
                      type="button"
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-md hover:scale-110 transition"
                      aria-label="Add to wishlist"
                    >
                      <Heart
                        size={18}
                        className={
                          isWishlisted
                            ? "text-red-500 fill-red-500"
                            : "text-gray-600"
                        }
                      />
                    </button>

                    {product.category && (
                      <span className="absolute top-3 left-3 bg-blue-600 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                        {product.category}
                      </span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="p-4">
                    <div className="flex items-center gap-1 text-yellow-400 mb-2">
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <span className="text-gray-400 text-xs ml-1">4.8</span>
                    </div>

                    <h3 className="font-semibold text-gray-800 line-clamp-2 min-h-[48px]">
                      {product.name}
                    </h3>

                    <p className="text-blue-600 font-bold text-lg mt-2">
                      Rs {Number(product.price).toLocaleString()}
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        addToCart(product);
                        openCart();
                      }}
                      className="mt-4 w-full bg-blue-600 text-white py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition"
                    >
                      <ShoppingCart size={17} />
                      Add to Cart
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition"
          >
            Explore More Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
