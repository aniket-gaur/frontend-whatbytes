import { Search } from "lucide-react";
import CartButton from "./cartbutton";
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
      <CartButton />
    </nav>
  );
}
