// app/cart/page.js
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
    return <div className="p-8 text-center text-xl">Your cart is empty 🛒</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">Your Cart</h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b pb-4"
        >
          <div>
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-gray-600">${item.price}</p>
            <div className="mt-2 flex items-center space-x-2">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => increaseQty(item.id)}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-medium">${item.price * item.quantity}</p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-sm text-red-500 hover:underline mt-1"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="text-right space-y-2">
        <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
        <button
          onClick={clearCart}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
