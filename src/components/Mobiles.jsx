import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Mobiles = () => {
  // UseOutletContext returns undefined if not used inside an Outlet context
  const outletContext = useOutletContext();
  const cart = outletContext?.cart || [];
  const setCart = outletContext?.setCart || (() => {});

  const [products] = useState([
    {
      id: 1,
      name: "iPhone 14 Pro",
      price: 1199,
      screenSize: '6.1" Super Retina XDR',
      color: "Deep Purple",
      image: "src/assets/iphone_14.png", // Use a local image path
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      price: 1399,
      screenSize: '6.8" QHD+ AMOLED',
      color: "Titanium Gray",
      image: "src/assets/mobile2.jpg",
    },
    {
      id: 3,
      name: "OnePlus 12",
      price: 799,
      screenSize: '6.7" Fluid AMOLED',
      color: "Silky Black",
      image: "src/assets/download phh.jpg", // Use a local image path
    },
  ]);

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      // If product exists, increase quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Else, add new item with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Mobiles</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((mobile) => (
          <div
            key={mobile.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={mobile.image}
              alt={mobile.name}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{mobile.name}</h3>
              <p className="text-gray-600">Price: ${mobile.price}</p>
              <p className="text-gray-600">Screen: {mobile.screenSize}</p>
              <p className="text-gray-600">Color: {mobile.color}</p>
              <button
                onClick={() => handleAddToCart(mobile)}
                className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobiles;
