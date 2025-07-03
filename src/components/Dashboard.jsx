import React from "react";
import Navbar from "./Navbar.jsx";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <p className="text-center text-gray-600">
          Welcome to your dashboard! Manage your account, view orders, and more.
        </p>
        {/* Add dashboard content here */}
      </div>
    </>
  );
}

export default Dashboard;
