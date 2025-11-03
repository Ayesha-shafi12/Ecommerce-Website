import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, clearCart } =
    useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-600 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Your cart is empty 🛒
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Your Cart
      </h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white shadow-md p-4 rounded-md gap-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500 text-sm sm:text-base">
                  Rs {item.price}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span className="text-sm sm:text-base">{item.quantity}</span>
              <button
                onClick={() => increaseQty(item.id)}
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-right">
              <p className="font-semibold text-sm sm:text-base">
                Rs {item.price * item.quantity}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 text-sm sm:text-base"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 border-t pt-4 gap-4">
        <button
          onClick={clearCart}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 w-full sm:w-auto"
        >
          Clear Cart
        </button>
        <p className="text-lg sm:text-xl font-bold">
          Total: Rs{" "}
          {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
