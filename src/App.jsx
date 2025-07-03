import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"; // Import your custom styles if any
import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/signup"; // Fixed case sensitivity: 'signup' to 'Signup'
import Mobiles from "./components/Mobiles";
import OrderDetails from "./components/OrderDetails"; // Import OrderDetails component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="home" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="mobiles" element={<Mobiles />} />
          <Route path="orderdetails" element={<OrderDetails />} />{" "}
          {/* ✅ THIS LINE */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
