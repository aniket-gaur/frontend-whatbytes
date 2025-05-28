// components/Footer.jsx
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-6 py-8 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Filters Section */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Filters</h3>
          <ul className="space-y-1 text-sm">
            <li>All</li>
            <li>Electronics</li>
          </ul>
          <p className="text-xs mt-4 text-gray-300">© 2024 American</p>
        </div>

        {/* About Section */}
        <div>
          <h3 className="font-semibold text-lg mb-2">About Us</h3>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:text-blue-400" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="w-5 h-5 hover:text-blue-400" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
