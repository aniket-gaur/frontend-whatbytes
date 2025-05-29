import { useEffect, useState } from "react";

const CATEGORIES = ["Electronics", "Clothing", "Home", "Accessories"];

export default function SidebarFilters({
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
}) {
  const [tempPrice, setTempPrice] = useState(priceRange);

  // Debounce price update
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPriceRange(tempPrice);
    }, 300);
    return () => clearTimeout(timeout);
  }, [tempPrice]);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <aside className="w-full lg:w-64 bg-white rounded-lg shadow p-4 space-y-6">
      {/* Category Filter */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Category</h3>
        <div className="space-y-2">
          {CATEGORIES.map((cat) => (
            <label key={cat} className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.toLowerCase())}
                onChange={() => handleCategoryChange(cat.toLowerCase())}
                className="accent-blue-600"
              />
              <span className="capitalize">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Price Range</h3>
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={tempPrice[1]}
          onChange={(e) =>
            setTempPrice([tempPrice[0], parseInt(e.target.value, 10)])
          }
          className="w-full"
        />
        <p className="text-sm text-gray-600 mt-1">
          ${tempPrice[0]} - ${tempPrice[1]}
        </p>
      </div>
    </aside>
  );
}
