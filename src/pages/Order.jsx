import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

import { useCart } from "../contexts/CartContext";
import { useOrders } from "../contexts/OrderContext";

const Order = () => {
  const navigate = useNavigate();

  const { cartItems, subtotal, shipping, total, clearCart } = useCart();

  const { createOrder } = useOrders();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [payment, setPayment] = useState("cod");
  const [error, setError] = useState("");

  if (cartItems.length === 0) {
    return (
      <section className="flex min-h-[65vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Your cart is empty</h1>

          <p className="mt-2 text-gray-500">
            Add products before checking out.
          </p>

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

  const handleChange = (event) => {
    setCustomer({
      ...customer,
      [event.target.name]: event.target.value,
    });
  };

  const handleOrder = (event) => {
    event.preventDefault();
    setError("");

    const values = Object.values(customer);

    if (values.some((value) => !value.trim())) {
      setError("Please complete all delivery information.");
      return;
    }

    const order = createOrder({
      customer,
      payment,
      items: cartItems,
      subtotal,
      shipping,
      total,
    });

    clearCart();

    navigate(`/orders?success=${order.id}`);
  };

  return (
    <section className="min-h-screen py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-5">
        <form
          onSubmit={handleOrder}
          className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-3"
        >
          <h1 className="text-2xl font-bold">Checkout</h1>

          <p className="mt-1 text-sm text-gray-500">
            Enter your delivery information.
          </p>

          {error && (
            <div className="mt-5 rounded-xl bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["name", "Full Name", "text"],
              ["email", "Email Address", "email"],
              ["phone", "Phone Number", "tel"],
              ["city", "City", "text"],
              ["postalCode", "Postal Code", "text"],
            ].map(([name, placeholder, type]) => (
              <input
                key={name}
                name={name}
                type={type}
                value={customer[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
              />
            ))}

            <textarea
              name="address"
              value={customer.address}
              onChange={handleChange}
              placeholder="Complete Delivery Address"
              rows="4"
              className="rounded-xl border px-4 py-3 outline-none focus:border-blue-500 sm:col-span-2"
            />
          </div>

          <div className="mt-8">
            <h2 className="font-semibold">Payment Method</h2>

            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {[
                ["cod", "Cash on Delivery"],
                ["card", "Card Payment"],
                ["bank", "Bank Transfer"],
              ].map(([value, label]) => (
                <label
                  key={value}
                  className={`cursor-pointer rounded-xl border p-4 ${
                    payment === value ? "border-blue-600 bg-blue-50" : ""
                  }`}
                >
                  <input
                    type="radio"
                    value={value}
                    checked={payment === value}
                    onChange={(event) => setPayment(event.target.value)}
                    className="mr-2"
                  />

                  {label}
                </label>
              ))}
            </div>

            {payment !== "cod" && (
              <p className="mt-3 rounded-lg bg-yellow-50 p-3 text-sm text-yellow-700">
                This is a frontend demonstration. Real payment processing will
                be connected through a secure backend/payment provider.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Place Order — Rs {total.toLocaleString()}
          </button>
        </form>

        <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="text-xl font-bold">Order Summary</h2>

          <div className="mt-5 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between gap-4 border-b pb-4"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>

                <p className="font-semibold">
                  Rs {(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3">
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
        </aside>
      </div>
    </section>
  );
};

export default Order;
