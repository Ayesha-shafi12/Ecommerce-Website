import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, clearCart } =
    useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty 🛒</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-white shadow-md p-4 rounded-md"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">Rs {item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => increaseQty(item.id)}
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <div className="flex items-center gap-4">
              <p className="font-semibold">Rs {item.price * item.quantity}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8 border-t pt-4">
        <button
          onClick={clearCart}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
        >
          Clear Cart
        </button>
        <p className="text-xl font-bold">
          Total: Rs{" "}
          {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
