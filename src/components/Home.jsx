import React from "react";
import ProductCard from "./ProductCard.jsx";
import Navbar from "./Navbar.jsx";
import { useOutletContext } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Smartphone Pro",
    price: 699,
    image: "src/assets/SAMT.jpg",
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    price: 129,
    image: "src/assets/ear.jpg",
  },
  {
    id: 3,
    name: "4K Smart TV",
    price: 999,
    image: "src/assets/tv.jpg",
  },
  {
    id: 4,
    name: "Gaming Laptop",
    price: 1499,
    image: "src/assets/laptop.jpg",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 89,
    image: "src/assets/speaker.jpg",
  },
  {
    id: 6,
    name: "Smart Watch",
    price: 199,
    image: "src/assets/watch.jpg",
  },
  {
    id: 7,
    name: "Wireless Mouse",
    price: 49,
    image: "src/assets/mouse1.jpg",
  },
  {
    id: 8,
    name: "LED Monitor",
    price: 299,
    image: "src/assets/monitor.jpg",
  },
];

function Home() {
  const { addToCart, cart } = useOutletContext(); // Only destructure what you use

  return (
    <>
      <Navbar cart={cart} />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Available Electronics
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
