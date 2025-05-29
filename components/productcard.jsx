import Image from "next/image";
import Link from "next/link";
import { useCart } from "../app/context/context";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
      {/* Link wrapping only the image, name, and price */}
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative w-full h-[200px] bg-white rounded mb-3 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="contain"
            sizes="(max-width: 768px) 90vw, 
                    (max-width: 1200px) 50vw, 
                    33vw"
          />
        </div>

        <h2 className="font-semibold text-lg mb-1">{product.name}</h2>
        <p className="text-blue-700 font-medium mb-3">${product.price}</p>
      </Link>

      {/* Add to Cart button is outside the Link */}
      <button
        onClick={(e) => {
          e.preventDefault(); // Prevents navigation if inside nested links
          addToCart(product);
        }}
        className="bg-blue-900 text-center text-white px-2.5 py-1.5 rounded hover:bg-blue-800 transition-colors w-full cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  );
}
