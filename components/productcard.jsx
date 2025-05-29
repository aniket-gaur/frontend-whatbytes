// components/ProductCard.jsx
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="block bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
    >
      {/* Image */}
      <div className="relative w-full h-40 bg-gray-100 rounded mb-3 overflow-hidden">
        <Image
          src={product.image || "/images/placeholder.png"}
          alt={product.name}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Name + Price */}
      <h2 className="font-semibold text-lg mb-1">{product.name}</h2>
      <p className="text-blue-700 font-medium mb-1">${product.price}</p>

      {/* Optional Rating */}
      {product.rating && (
        <div className="flex items-center gap-1 text-yellow-500 mb-2">
          {Array.from({ length: product.rating }, (_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-500" />
          ))}
        </div>
      )}

      <p className="text-sm text-gray-500">Click to view</p>
    </Link>
  );
}
