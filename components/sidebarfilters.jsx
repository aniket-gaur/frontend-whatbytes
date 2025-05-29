"use client";

import { useEffect, useState } from "react";

const CATEGORIES = ["electronics", "clothing", "home", "accessories"];

export default function SidebarFilters({
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
}) {
  const [tempPrice, setTempPrice] = useState(priceRange);

  // Debounce price changes
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPriceRange(tempPrice);
    }, 300);
    return () => clearTimeout(timeout);
  }, [tempPrice, setPriceRange]);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <aside className="w-full lg:w-64 bg-white rounded-lg shadow p-5 space-y-6">
      {/* Category Filter */}
      <div className="bg-blue-700 text-white p-4 rounded-lg mb-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">Filters</h2>
          <h3 className="font-semibold text-lg mb-3">Category</h3>
          <div className="space-y-2">
            {CATEGORIES.map((cat) => (
              <label
                key={cat}
                className="flex items-center space-x-2 text-sm capitalize"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => handleCategoryChange(cat)}
                  className="appearance-none h-5 w-5 rounded-full border-1 border-white bg-blue-600 checked:bg-transparent checked:border-2 focus:outline-none transition duration-200"
                />

                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Price Range</h3>
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={tempPrice[1]}
            onChange={(e) => {
              const newMax = parseInt(e.target.value, 10);
              setTempPrice([tempPrice[0], newMax]);
            }}
            className="w-full accent-white appearance-none h-1 rounded-lg bg-blue-200 "
          />
          <div className="text-sm text-white mt-4 flex justify-between">
            <span>{tempPrice[0]}</span>
            <span>{tempPrice[1]}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
