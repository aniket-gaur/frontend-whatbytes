const products = [
  {
    id: "1232",
    name: "Running Shoes",
    price: 99,
    category: "Clothing",
    description:
      "Comfortable running shoes designed for daily wear and long-distance runs, with breathable mesh and cushioned support.",
    reviews: "5Star",
    image: "/shoe-image.png",
  },
  {
    id: "1233",
    name: "Wireless Headphones",
    price: 299,
    category: "Electronics",
    description:
      "High-quality wireless headphones with noise cancellation and long battery life for immersive listening on the go.",
    image: "/headphone-image.png",
  },
  {
    id: "1235",
    name: "Backpack",
    price: 129,
    category: "Clothing",
    description:
      "Durable and spacious backpack perfect for travel, school, or work, with multiple compartments and padded straps.",
    image: "/bag-image .png",
  },
  {
    id: "1231",
    name: "Smartwatch",
    price: 249,
    category: "Electronics",
    description:
      "Feature-rich smartwatch with fitness tracking, heart rate monitoring, and smart notifications, compatible with iOS and Android.",
    image: "/watch-image.png",
  },
  {
    id: "1236",
    name: "Sunglasses",
    price: 149,
    category: "Clothing",
    description:
      "Stylish UV-protected sunglasses that offer both fashion and function, ideal for outdoor activities.",
    image: "/sunglasses-image.png",
  },
  {
    id: "1238",
    name: "Digital Camera",
    price: 499,
    category: "Electronics",
    description:
      "Compact digital camera with high-resolution image capture, optical zoom, and user-friendly controls for beginners and enthusiasts.",
    image: "/camera-image.png",
  },
  {
    id: "1239",
    name: "T-shirt",
    price: 29,
    category: "Clothing",
    description:
      "Soft and breathable cotton T-shirt available in multiple colors, perfect for casual everyday wear.",
    image: "/t-shirt image.png",
  },
  {
    id: "1240",
    name: "Phone",
    price: 900,
    category: "Electronics",
    description:
      "Powerful smartphone with advanced camera system, fast processor, and stunning OLED display for a premium mobile experience.",
    image: "/phone-image.png",
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}
