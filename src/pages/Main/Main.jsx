import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import { Link } from "react-router-dom";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
console.log(products);

  useEffect(() => {
    // Backenddan mahsulotlarni olish
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://backend-1cv5.onrender.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        // Faqat 9 mahsulotni tanlash
        setProducts(data.slice(0, 9));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-center mb-8">Our Products</h1>
        {/* Grid */}
        <ul className="flex w-[1000px] flex-wrap gap-6 justify-center mx-auto">
          {products.map((product) => (
            <Card
            key={product.id}
            name={product.name}
            price={product.price}
            amount={product.amount}
            />
          ))}
        </ul>
        {/* View All Button */}
        <div className="text-center mt-8">
         <Link to='/products'>
         <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
            View All Products
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;