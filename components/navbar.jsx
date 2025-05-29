import { Search } from "lucide-react";
import CartButton from "./cartbutton";
import Image from "next/image";

export default function Navbar({ onSearch }) {
  return (
    <nav className="bg-blue-800 text-white px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Logo */}
      <div className="relative w-[120px] h-[40px] mx-auto sm:mx-0">
        <Image
          src="/logo-image.png"
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>

      <div className="flex items-center bg-blue-700 rounded-md px-3 py-2 w-full max-w-md mx-auto sm:mx-0 border border-blue-500 focus-within:border-blue-400 transition-colors">
        <Search className="w-4 h-4 mr-2 text-white" />
        <input
          type="text"
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search for products..."
          className="bg-transparent outline-none placeholder-white text-white w-full"
        />
      </div>

      <div className="flex justify-center sm:justify-end ">
        <CartButton />
      </div>
    </nav>
  );
}
