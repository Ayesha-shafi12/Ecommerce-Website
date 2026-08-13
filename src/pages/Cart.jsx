import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { assets } from "../assets/assets_frontend/assets";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
    subtotal,
    shipping,
    total,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <section className="flex min-h-[65vh] items-center justify-center px-4">
        <div className="text-center">
          <ShoppingBag size={60} className="mx-auto mb-5 text-gray-300" />

          <h1 className="text-2xl font-bold">Your cart is empty</h1>

          <p className="mt-2 text-gray-500">Discover something you'll love.</p>

          <Link
            to="/products"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
            <p className="mt-1 text-gray-500">
              {cartItems.length} different product
              {cartItems.length !== 1 ? "s" : ""}
            </p>
          </div>

          <button
            onClick={clearCart}
            className="text-sm font-medium text-red-500 hover:text-red-700"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {cartItems.map((item) => (
              <article
                key={item.id}
                className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm sm:flex-row sm:items-center"
              >
                <img
                  src={
                    item.img?.startsWith("http") ? item.img : assets[item.img]
                  }
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />

                <div className="flex-1">
                  <h2 className="font-semibold">{item.name}</h2>

                  <p className="mt-1 text-blue-600">
                    Rs {Number(item.price).toLocaleString()}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="rounded-lg bg-gray-100 p-2"
                  >
                    <Minus size={15} />
                  </button>

                  <span className="min-w-6 text-center font-medium">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="rounded-lg bg-gray-100 p-2"
                  >
                    <Plus size={15} />
                  </button>
                </div>

                <div className="flex items-center justify-between sm:block sm:text-right">
                  <p className="font-bold">
                    Rs {(item.price * item.quantity).toLocaleString()}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-2 text-red-500"
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Order Summary</h2>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs {subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? "FREE" : `Rs ${shipping.toLocaleString()}`}
                </span>
              </div>

              <div className="flex justify-between border-t pt-4 text-xl font-bold">
                <span>Total</span>
                <span>Rs {total.toLocaleString()}</span>
              </div>
            </div>

            <Link
              to="/order"
              className="mt-7 block rounded-xl bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              Proceed to Checkout
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Cart;
