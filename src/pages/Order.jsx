import { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useCart } from "../contexts/CartContext";

const Order = () => {
  const { cartItems, clearCart } = useCart();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const [payment, setPayment] = useState("cod");

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleOrder = (e) => {
    e.preventDefault();

    if (
      !customer.name ||
      !customer.email ||
      !customer.phone ||
      !customer.address ||
      !customer.city
    ) {
      alert("Please fill all fields");
      return;
    }

    const orderData = {
      customer,
      payment,
      items: cartItems,
      total,
      date: new Date().toLocaleString(),
    };

    console.log("ORDER PLACED:", orderData);

    clearCart();

    alert("Order Successfully Placed! ✔");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8 mt-10">
      <form
        onSubmit={handleOrder}
        className="bg-white p-6 shadow-lg rounded-xl space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4">Customer Information</h2>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 rounded"
          value={customer.name}
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border p-2 rounded"
          value={customer.email}
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full border p-2 rounded"
          value={customer.phone}
          onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
        />

        <textarea
          placeholder="Full Address"
          className="w-full border p-2 rounded"
          rows="3"
          value={customer.address}
          onChange={(e) =>
            setCustomer({ ...customer, address: e.target.value })
          }
        ></textarea>

        <input
          type="text"
          placeholder="City"
          className="w-full border p-2 rounded"
          value={customer.city}
          onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
        />

        <div className="mt-4">
          <h3 className="font-semibold text-lg mb-2">Payment Method</h3>

          <label className="flex items-center gap-2 mb-2">
            <input
              type="radio"
              checked={payment === "cod"}
              onChange={() => setPayment("cod")}
            />
            Cash on Delivery
          </label>

          <label className="flex items-center gap-2 mb-2">
            <input
              type="radio"
              checked={payment === "card"}
              onChange={() => setPayment("card")}
            />
            Credit / Debit Card
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={payment === "bank"}
              onChange={() => setPayment("bank")}
            />
            Bank Transfer
          </label>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
        >
          Place Order
        </button>
      </form>

      <div className="bg-white p-6 shadow-lg rounded-xl h-fit">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={
                      item.img.startsWith("http") ? item.img : assets[item.img]
                    }
                    className="w-16 h-16 object-cover rounded"
                    alt={item.name}
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>

                <p className="font-semibold">Rs {item.price * item.quantity}</p>
              </div>
            ))}

            <div className="flex justify-between text-xl font-bold mt-4">
              <span>Total:</span>
              <span>Rs {total}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
