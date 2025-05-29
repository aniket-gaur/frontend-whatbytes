"use client";

import Link from "next/link";
import { useCart } from "../app/context/context";
import { ShoppingCart } from "lucide-react";

export default function CartButton() {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link href="/cart" className="relative inline-block">
      <button className="flex items-center space-x-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition">
        <ShoppingCart size={20} className="text-white" />
        <span className="font-semibold">Cart</span>
        {totalQuantity > 0 && (
          <span className="ml-1 bg-white text-blue-900 rounded-full px-1 text-xs font-bold">
            {totalQuantity}
          </span>
        )}
      </button>
    </Link>
  );
}
