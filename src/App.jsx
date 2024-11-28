import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Men's Casual Shirt",
      price: "$39.99",
      image:
        "https://www.snitch.co.in/cdn/shop/files/4MSS3622-01-M22_471b313a-f11a-4455-bb81-7a3fcdb31662.jpg?v=1730972525&width=1080",
      description: "A stylish casual shirt perfect for everyday wear.",
      features: [
        "100% Cotton",
        "Button-down collar",
        "Available in multiple colors",
      ],
      isFavorited: false,
      isExpanded: false,
    },
    {
      id: 2,
      name: "Men's Slim Fit Jeans",
      price: "$49.99",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSEGsaaF2TM2j1P-OtOihPE-u9AJldKXuoFRnTPAk6GUpkgJjPiLUMXFE9dIp14NwaIrl9u5KqrD1dWvhvG-OrsEiEGDQpi3zS1MeOS756QR9jUV6GnuMqFXA",
      description: "Slim-fit jeans that provide a modern, sleek look.",
      features: [
        "Stretch denim",
        "Comfortable fit",
        "Available in black and blue",
      ],
      isFavorited: false,
      isExpanded: false,
    },
    {
      id: 3,
      name: "Men's Leather Jacket",
      price: "$129.99",
      image:
        "https://images.meesho.com/images/products/345027796/mtlz3_1200.jpg",
      description: "A premium leather jacket that adds style and warmth.",
      features: [
        "Genuine leather",
        "Zipper pockets",
        "Available in black and brown",
      ],
      isFavorited: false,
      isExpanded: false,
    },
    {
      id: 4,
      name: "Men's Athletic Sneakers",
      price: "$69.99",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRZ1XVamYXYS7D77CLiiNyA13bCvLQ-FRcmUwD5dGOOCEXhwJQ2FIw6pPryGvYa67SJY41H7YtOqFEDfqUpsgXI8P8zcEOhukWpWC9XSuQqCTcN8op_v5CH",
      description: "Comfortable and stylish sneakers designed for active wear.",
      features: [
        "Breathable mesh",
        "Cushioned sole",
        "Available in multiple colors",
      ],
      isFavorited: false,
      isExpanded: false,
    },
    {
      id: 5,
      name: "Men's Wool Blend Blazer",
      price: "$99.99",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTXsBk6TfTUiouKb9-CasiCx8u3btSMbpi3H10uz4YmG6kKQSBmW65bdgwGniksKLa8adgV3gPxIYczLQRhwcUeZ1VYa7YvGG1H5HRqs6260g9nkBYJQa0n",
      description:
        "A sharp wool blazer ideal for both casual and formal occasions.",
      features: [
        "Wool blend fabric",
        "Single-breasted design",
        "Available in navy and grey",
      ],
      isFavorited: false,
      isExpanded: false,
    },
    {
      id: 6,
      name: "Men's Classic Polo Shirt",
      price: "$29.99",
      image:
        "https://images.meesho.com/images/products/333384612/gzbu7_1200.jpg",
      description: "A versatile polo shirt for a smart-casual look.",
      features: ["100% cotton", "Ribbed collar", "Available in various colors"],
      isFavorited: false,
      isExpanded: false,
    },
    {
      id: 7,
      name: "Men's Chino Pants",
      price: "$59.99",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSN5_hepKchslknCEksELBekHIdPhWHZD8KB1u69L_zHzBCFSYE9wCtuNNQfSgaiXdn3bIn2U1JKpZqblXh1NxVzXOHobUayLWwrX6saGu-",
      description: "A stylish pair of chino pants, perfect for any occasion.",
      features: [
        "Slim fit",
        "Lightweight fabric",
        "Available in khaki and olive",
      ],
      isFavorited: false,
      isExpanded: false,
    },
  ]);

  const toggleFavorite = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, isFavorited: !product.isFavorited }
          : product
      )
    );
  };

  const toggleExpand = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, isExpanded: !product.isExpanded }
          : product
      )
    );
  };

  const resetFavorites = () => {
    setProducts((prev) =>
      prev.map((product) => ({ ...product, isFavorited: false }))
    );
  };

  const showFavorites = () => {
    setProducts((prev) => prev.filter((product) => product.isFavorited));
  };

  return (
    <div className="app">
      <h1>Product List</h1>
      <button className="reset-button" onClick={resetFavorites}>
        Reset Favorites
      </button>
      <button className="filter-button" onClick={showFavorites}>
        Show Favorites
      </button>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onToggleFavorite={() => toggleFavorite(product.id)}
            onToggleExpand={() => toggleExpand(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
