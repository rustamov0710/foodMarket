import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-md p-4 shadow hover:shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600 mt-1">${product.price}</p>
      <button className="bg-green-600 text-white px-4 py-2 mt-2 rounded hover:bg-green-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
