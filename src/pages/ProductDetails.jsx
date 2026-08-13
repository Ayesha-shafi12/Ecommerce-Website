import { useEffect, useState } from "react";
import { Heart, ShoppingCart, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { assets } from "../assets/assets_frontend/assets.js";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";

const ProductDetails = () => {
  const { id } = useParams();

  const { addToCart, openCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((products) => {
        const found = products.find((item) => String(item.id) === String(id));

        setProduct(found);
      })
      .catch(console.error);
  }, [id]);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-gray-500">Loading product...</p>
      </div>
    );
  }

  const image = product.img?.startsWith("http")
    ? product.img
    : assets[product.img];

  const liked = isWishlisted(product.id);

  return (
    <section className="min-h-screen py-12">
      <div className="mx-auto max-w-6xl px-4">
        <Link
          to="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600"
        >
          <ArrowLeft size={17} />
          Back to products
        </Link>

        <div className="grid gap-10 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
          <div className="overflow-hidden rounded-2xl bg-gray-100">
            <img
              src={image}
              alt={product.name}
              className="h-[450px] w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="mb-3 w-fit rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
              {product.category || "Featured"}
            </span>

            <h1 className="text-3xl font-bold md:text-4xl">{product.name}</h1>

            <p className="mt-4 text-2xl font-bold text-blue-600">
              Rs {Number(product.price).toLocaleString()}
            </p>

            <p className="mt-6 leading-7 text-gray-600">
              {product.description ||
                "A carefully selected product from Trend.pk. We focus on quality, value and a reliable shopping experience."}
            </p>

            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={() => {
                  addToCart(product);
                  openCart();
                }}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
              >
                <ShoppingCart size={19} />
                Add to Cart
              </button>

              <button
                type="button"
                onClick={() => toggleWishlist(product)}
                className="rounded-xl border px-5 py-3"
                aria-label="Wishlist"
              >
                <Heart
                  className={
                    liked ? "fill-red-500 text-red-500" : "text-gray-600"
                  }
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
