"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "../components/navbar";
import SidebarFilters from "../components/sidebarfilters";
import Footer from "../components/footer";
import ProductCard from "../components/productcard";

const products = [
  {
    id: "1232",
    name: "Running Shoes",
    price: 99,
    category: "Clothing",
    image: "/shoe-image.png",
  },
  {
    id: "1233",
    name: "Wireless Headphones",
    price: 299,
    category: "Electronics",
    image: "/headphone-image.png",
  },
  {
    id: "1235",
    name: "Backpack",
    price: 129,
    category: "Clothing",
    image: "/bag-image .png", // ✅ fix space in filename
  },
  {
    id: "1231",
    name: "Smartwatch",
    price: 249,
    category: "Electronics",
    image: "/watch-image.png",
  },
  {
    id: "1236",
    name: "Sunglasses",
    price: 149,
    category: "Clothing",
    image: "/sunglasses-image.png",
  },
  {
    id: "1238",
    name: "Digital Camera",
    price: 499,
    category: "Electronics",
    image: "/camera-image.png",
  },
  {
    id: "1239",
    name: "T-shirt",
    price: 29,
    category: "Clothing",
    image: "/t-shirt image.png", // ✅ fix space in filename
  },
];

export default function HomePage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Initialize category filter from URL
  useEffect(() => {
    const categories = searchParams
      .getAll("category")
      .map((c) => c.toLowerCase());
    if (categories.length) {
      setSelectedCategories(categories);
    }
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedCategories.length > 0) {
      selectedCategories.forEach((cat) => params.append("category", cat));
    }

    const newUrl = `/?${params.toString()}`;
    router.push(newUrl);
  }, [selectedCategories, router]);

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category.toLowerCase());

    const matchPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    return matchSearch && matchCategory && matchPrice;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onSearch={setSearchTerm} />

      <main className="flex-1 bg-gray-50 p-6 flex flex-col lg:flex-row gap-6">
        <SidebarFilters
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />

        <section className="flex-1">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
