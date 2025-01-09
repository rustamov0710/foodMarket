import React from "react";

const Header = () => {
  return (
    <header className="bg-green-600 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Food Market</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/categories" className="hover:text-yellow-300">Categories</a></li>
          <li><a href="/products" className="hover:text-yellow-300">Products</a></li>
          <li><a href="/about" className="hover:text-yellow-300">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
