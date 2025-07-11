"use client";

import Image from "next/image";
import { useCart } from "../../context/context";

export default function ProductDetail({ product }) {
  const { addToCart } = useCart();
  if (!product) {
    return <div className="p-6 text-red-600">Product not found.</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto flex flex-col lg:flex-row gap-8">
      <div className="relative w-full h-96 lg:w-1/2 bg-gray-100 rounded">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>

      {/* Details Section */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-blue-600 text-xl font-semibold mb-2">
          ${product.price}
        </p>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-sm text-gray-500 mb-4">
          Category: {product.category}
        </p>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-900 text-center text-white px-2.5 py-1.5 rounded hover:bg-blue-800 transition-colors w-full cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
