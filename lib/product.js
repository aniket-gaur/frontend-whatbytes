const products = [
  {
    id: "1232",
    name: "Running Shoes",
    price: 99,
    category: "Clothing",
    description: "Comfortable running shoes for all-day wear.",
    reviews: "5Star",
  },
  {
    id: "1233",
    name: "Wireless Headphones",
    price: 299,
    category: "Electronics",
  },
  { id: "1235", name: "Backpack", price: 129, category: "Clothing" },
  { id: "1231", name: "Smartwatch", price: 249, category: "Electronics" },
  { id: "1236", name: "Sunglasses", price: 149, category: "Clothing" },
  { id: "1238", name: "Digital Camera", price: 499, category: "Electronics" },
  { id: "1239", name: "T-shirt", price: 29, category: "Clothing" },
];

// ✅ This is server-safe (no useState, no localStorage)
export function getProductById(id) {
  return products.find((p) => p.id === id);
}
