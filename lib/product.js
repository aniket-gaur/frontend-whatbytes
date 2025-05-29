const products = [
  {
    id: "1232",
    name: "Running Shoes",
    price: 99,
    category: "Clothing",
    description: "Comfortable running shoes for all-day wear.",
    reviews: "5Star",
    image: "public/shoe-image.png",
  },
  {
    id: "1233",
    name: "Wireless Headphones",
    price: 299,
    category: "Electronics",
    image: "public/headphone-image.png",
  },
  {
    id: "1235",
    name: "Backpack",
    price: 129,
    category: "Clothing",
    image: "public/backpack-image.png",
  },
  {
    id: "1231",
    name: "Smartwatch",
    price: 249,
    category: "Electronics",
    image: "public/smartwatch-image.png",
  },
  {
    id: "1236",
    name: "Sunglasses",
    price: 149,
    category: "Clothing",
    image: "public/sunglasses-image.png",
  },
  {
    id: "1238",
    name: "Digital Camera",
    price: 499,
    category: "Electronics",
    image: "public/camera-image.png",
  },
  {
    id: "1239",
    name: "T-shirt",
    price: 29,
    category: "Clothing",
    image: "public/tshirt-image.png",
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}
