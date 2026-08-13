import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
import { getApiProducts } from "../services/productApi";

const ApiProducts = () => {
  const { addToCart, openCart } = useCart();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getApiProducts();

        setProducts(data.slice(0, 10));
      } catch (err) {
        console.error("API ERROR:", err);
        setError("Unable to load products from the external API.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleAddToCart = (product) => {
    const cartProduct = {
      id: `api-${product.id}`,
      name: product.title,
      price: product.price,
      img: product.thumbnail,
      category: product.category,
      quantity: 1,
    };

    addToCart(cartProduct);
    openCart();
  };

  return (
    <section className="bg-blue-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-10 text-center">
          <p className="font-bold uppercase tracking-widest text-blue-600">
            External API
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Explore More Products
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover additional products fetched dynamically from an external
            product API.
          </p>
        </div>

        {loading && (
          <div className="py-12 text-center">
            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />

            <p className="text-gray-600">Loading products...</p>
          </div>
        )}

        {!loading && error && (
          <div className="rounded-xl bg-white p-8 text-center shadow">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-5">
            {products.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-40 w-full object-cover sm:h-48"
                  />

                  <span className="absolute left-2 top-2 rounded-full bg-blue-600 px-2 py-1 text-xs font-semibold text-white">
                    API
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="truncate font-semibold text-gray-800">
                    {product.title}
                  </h3>

                  <p className="mt-1 truncate text-sm capitalize text-gray-500">
                    {product.category}
                  </p>

                  <p className="mt-2 font-bold text-blue-600">
                    ${product.price.toLocaleString()}
                  </p>

                  <button
                    type="button"
                    onClick={() => handleAddToCart(product)}
                    className="mt-4 w-full rounded-lg bg-yellow-400 py-2 text-sm font-bold text-blue-900 transition hover:bg-yellow-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <a
            href="/products"
            className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default ApiProducts;
