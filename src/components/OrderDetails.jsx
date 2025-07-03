import React from "react";
import Navbar from "./Navbar"; // Fix import path to be relative to components folder
import AddressBlock from "./AddressBlock";

const OrderDetails = () => {
  const order = {
    id: 15,
    date: "October 10, 2021",
    status: "Processing",
    product: {
      name: "Product 1",
      quantity: 1,
      price: 3.0,
    },
    shipping: "Flat rate",
    payment: "Cash on delivery",
    total: 3.0,
    address: {
      name: "John Doe",
      street: "Bridge Street, Sir Darnley Alexander St",
      city: "Soufriere",
      state: "LC09101",
      zip: "LC09101",
      country: "Saint Lucia",
      phone: "555-555-5555",
      email: "johndoe@gmail.com",
    },
  };

  return (
    <>
      <Navbar cart={[]} /> {/* ✅ Navbar added here */}
      <div className="p-6 font-sans">
        <h1 className="text-3xl font-bold mb-2">Order #{order.id}</h1>
        <p className="mb-4">
          Order <strong>#{order.id}</strong> was placed on{" "}
          <strong>{order.date}</strong> and is currently{" "}
          <strong className="text-yellow-600">{order.status}</strong>.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Order details</h2>
        <table className="w-full mb-6 border">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">Product</th>
              <th className="p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">
                {order.product.name} × {order.product.quantity}
              </td>
              <td className="p-2">${order.product.price.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="p-2">Subtotal:</td>
              <td className="p-2">${order.product.price.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="p-2">Shipping:</td>
              <td className="p-2">{order.shipping}</td>
            </tr>
            <tr>
              <td className="p-2">Payment method:</td>
              <td className="p-2">{order.payment}</td>
            </tr>
            <tr>
              <td className="p-2 font-bold">Total:</td>
              <td className="p-2 font-bold">${order.total.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        {/* Google Map */}
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Bridge+Street,+Soufriere,+Saint+Lucia&output=embed"
          width="100%"
          height="300"
          className="border mb-6"
          loading="lazy"
        ></iframe>

        {/* Address Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AddressBlock title="Billing address" address={order.address} />
          <AddressBlock title="Shipping address" address={order.address} />
        </div>
      </div>
    </>
  );
};

export default OrderDetails;

// Make sure your route path is all lowercase: "/orderdetails"
// And you navigate to "/orderdetails" (not "/Orderdetails")

// No code change needed in this file, but ensure your router (App.jsx or wherever you define routes) has:
//
// <Route path="/orderdetails" element={<OrderDetails />} />
//
// And all navigation/links use "/orderdetails" (not "/Orderdetails")
//
// Example:
// navigate("/orderdetails")
// or
// <Link to="/orderdetails">Order Details</Link>
//
// React Router is case-sensitive for paths.
