import React from 'react'

const Card = () => {
    return (
      <li className="w-[300px] bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
        {/* Product Image */}
        <img
          src="https://via.placeholder.com/150"
          alt="Product"
          className="w-[300px] h-32 object-cover rounded-lg mb-4"
        />
  
        {/* Product Name */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Bell Pepper Red
        </h2>
  
        {/* Product Price */}
        <p className="text-gray-600 text-sm mb-4">₹80 / kg</p>
  
        {/* Lock Icon Button */}
        <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V9a4.5 4.5 0 10-9 0v1.5m-1.5 0h12m-12 0a2.25 2.25 0 00-2.25 2.25v6.75A2.25 2.25 0 006 21.75h12a2.25 2.25 0 002.25-2.25v-6.75A2.25 2.25 0 0018 10.5m-12 0h12"
            />
          </svg>
        </button>
      </li>
    );
  };
  
  export default Card;
  