import { Search, ShoppingCart } from "lucide-react";
export default function Navbar({ onSearch }) {
  return (
    <nav className="bg-blue-800 text-white px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="text-lg font-bold">Logo</div>

      {/* Search Bar */}
      <div className="flex items-center bg-blue-700 rounded-md px-3 py-2 w-full max-w-md border border-blue-500 focus-within:border-blue-400 transition-colors">
        <Search className="w-4 h-4 mr-2 text-white" />
        <input
          type="text"
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search for products..."
          className="bg-transparent outline-none placeholder-white text-white w-full"
        />
      </div>

      {/* Cart Button */}
      <button className="bg-blue-900 hover:bg-blue-800 transition-colors px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer ">
        <ShoppingCart className="w-4 h-4" />
        <span>Cart</span>
      </button>
    </nav>
  );
}
