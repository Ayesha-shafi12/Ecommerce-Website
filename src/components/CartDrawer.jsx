import { assets } from "../assets/assets_frontend/assets";
import { useCart } from "../contexts/CartContext";
const CartDrawer = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
    isCartOpen,
    closeCart,
  } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeCart}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl p-5 transition-transform duration-300 
        ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button onClick={closeCart} className="text-gray-500 text-2xl">
            ×
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-center mt-20">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4 overflow-y-auto h-[70vh] pr-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-3"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={
                        item.img.startsWith("http")
                          ? item.img
                          : assets[item.img]
                      }
                      className="w-16 h-16 object-cover rounded"
                    />

                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        Rs {item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex gap-2">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-2 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-2 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs text-red-500 mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <button
                onClick={clearCart}
                className="w-full bg-red-500 text-white py-2 rounded"
              >
                Clear Cart
              </button>

              <p className="text-lg font-semibold mt-3">
                Total: Rs{" "}
                {cartItems.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )}
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
