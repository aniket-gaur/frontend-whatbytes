"use client";
import { useCart } from "../context/context";

export default function CartPage() {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    total,
    clearCart,
  } = useCart();

  if (cartItems.length === 0)
    return (
      <div className="p-8 text-center text-xl text-gray-600">
        Your cart is empty. Start shopping to add items!
      </div>
    );

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto space-y-10">
      <header className="border-b pb-4">
        <h1 className="text-3xl font-bold text-blue-900">Your Shopping Cart</h1>
        <p className="text-black font-semibold mt-1">
          Manage your selected items below.
        </p>
      </header>

      <section className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col  bg-gradient-to-r from-blue-400 to-blue-500 sm:flex-row sm:items-center justify-between border rounded-lg p-4 shadow-sm"
          >
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-2xl font-normal text-white">${item.price}</p>
              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                >
                  −
                </button>
                <span className="font-medium">{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            <div className="text-right mt-4 sm:mt-0 sm:ml-4">
              <p className="text-lg font-medium">
                ${item.price * item.quantity}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-3xl hover:bg-red-600 transition cursor-pointer"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Cart Summary */}
      <aside className="border-t pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xl font-semibold text-gray-800">
          Total: <span className="text-blue-700">${total.toFixed(2)}</span>
        </p>
        <button
          onClick={clearCart}
          className="bg-red-500 text-white px-4 py-2 rounded-3xl hover:bg-red-600 transition cursor-pointer"
        >
          Clear Cart
        </button>
      </aside>
    </div>
  );
}
