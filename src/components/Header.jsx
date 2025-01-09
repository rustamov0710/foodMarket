import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-green-600 text-white py-4 px-6 flex justify-between items-center">
      <Link to='/'><h1 className="text-2xl font-bold">Food Market</h1></Link>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/categories" className="hover:text-yellow-300">Categories</Link></li>
          <li><Link to="/products" className="hover:text-yellow-300">Products</Link></li>
          <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
