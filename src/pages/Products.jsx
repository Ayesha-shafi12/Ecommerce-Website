import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { getApiProducts, searchApiProducts } from "../services/productApi";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { addToCart, openCart } = useCart();

  const searchFromUrl = searchParams.get("search") || "";

  const [searchInput, setSearchInput] = useState(searchFromUrl);
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    setSearchInput(searchFromUrl);
  }, [searchFromUrl]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError("");

        let data;

        if (searchFromUrl.trim()) {
          data = await searchApiProducts(searchFromUrl);
        } else {
          data = await getApiProducts();
        }

        setProducts(data);
      } catch (err) {
        console.error("PRODUCT API ERROR:", err);
        setError("Unable to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [searchFromUrl]);

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(products.map((product) => product.category)),
    ];

    return uniqueCategories;
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== "all") {
      result = result.filter((product) => product.category === category);
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [products, category, sortBy]);

  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchInput.trim();

    if (!query) {
      setSearchParams({});
      return;
    }

    setSearchParams({
      search: query,
    });

    setCategory("all");
  };

  const handleClearSearch = () => {
    setSearchInput("");
    setCategory("all");
    setSortBy("default");
    setSearchParams({});
  };

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
    <main className="min-h-screen bg-gray-50 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        {/* Heading */}
        <div className="mb-8 text-center">
          <p className="font-bold uppercase tracking-widest text-blue-600">
            Product Store
          </p>

          <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {searchFromUrl
              ? `Search Results for "${searchFromUrl}"`
              : "Explore Products"}
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Search and explore products fetched dynamically from our external
            product API.
          </p>
        </div>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="mx-auto mb-8 flex max-w-3xl flex-col gap-3 sm:flex-row"
        >
          <div className="flex flex-1 items-center rounded-xl border bg-white px-4 shadow-sm">
            <Search className="mr-3 h-5 w-5 text-gray-400" />

            <input
              type="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search products..."
              className="w-full py-3.5 text-gray-800 outline-none"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
          >
            Search
          </button>

          {searchFromUrl && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="rounded-xl border border-gray-300 bg-white px-5 py-3.5 font-semibold text-gray-700 hover:bg-gray-100"
            >
              Clear
            </button>
          )}
        </form>

        {/* Filters */}
        <div className="mb-8 rounded-2xl bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setCategory("all")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  category === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All
              </button>

              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold capitalize transition ${
                    category === item
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Sorting */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm outline-none focus:border-blue-500"
            >
              <option value="default">Sort: Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex min-h-[350px] flex-col items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />

            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <h2 className="text-xl font-bold text-gray-800">
              Something went wrong
            </h2>

            <p className="mt-2 text-red-500">{error}</p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        )}

        {/* No products */}
        {!loading && !error && filteredProducts.length === 0 && (
          <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800">
              No products found
            </h2>

            <p className="mt-2 text-gray-500">
              Try searching for another product.
            </p>

            <button
              type="button"
              onClick={handleClearSearch}
              className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700"
            >
              View All Products
            </button>
          </div>
        )}

        {/* Product Grid */}
        {!loading && !error && filteredProducts.length > 0 && (
          <>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                {filteredProducts.length} products found
              </p>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                External API
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-44 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-52"
                    />

                    <span className="absolute left-2 top-2 rounded-full bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white">
                      API
                    </span>
                  </div>

                  <div className="p-4">
                    <h2 className="truncate font-semibold text-gray-800">
                      {product.title}
                    </h2>

                    <p className="mt-1 truncate text-sm capitalize text-gray-500">
                      {product.category}
                    </p>

                    <div className="mt-2 flex items-center justify-between">
                      <p className="font-bold text-blue-600">
                        ${product.price.toLocaleString()}
                      </p>

                      <span className="text-xs text-yellow-600">
                        ★ {product.rating}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-400 py-2.5 text-sm font-bold text-blue-900 transition hover:bg-yellow-300"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Products;
