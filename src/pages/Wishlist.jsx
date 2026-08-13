import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";

import { assets } from "../assets/assets_frontend/assets";
import { useWishlist } from "../contexts/WishlistContext";
import { useCart } from "../contexts/CartContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart, openCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <section className="flex min-h-[65vh] items-center justify-center px-4">
        <div className="text-center">
          <Heart className="mx-auto mb-4 text-gray-300" size={55} />
          <h1 className="text-2xl font-bold">Your wishlist is empty</h1>
          <p className="mt-2 text-gray-500">
            Save products you want to buy later.
          </p>

          <Link
            to="/products"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
          >
            Browse Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-8 text-3xl font-bold">My Wishlist</h1>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {wishlist.map((product) => {
            const image = product.img?.startsWith("http")
              ? product.img
              : assets[product.img];

            return (
              <article
                key={product.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <Link to={`/products/${product.id}`}>
                  <img
                    src={image}
                    alt={product.name}
                    className="h-52 w-full object-cover"
                  />
                </Link>

                <div className="p-4">
                  <h2 className="font-semibold">{product.name}</h2>

                  <p className="mt-2 font-bold text-blue-600">
                    Rs {Number(product.price).toLocaleString()}
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      addToCart(product);
                      openCart();
                    }}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-2 text-sm font-semibold text-white"
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>

                  <button
                    type="button"
                    onClick={() => removeFromWishlist(product.id)}
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border py-2 text-sm text-red-500"
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
