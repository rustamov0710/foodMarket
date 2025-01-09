import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    { name: "Meva va Sabzavotlar", path: "meva_sabzavotlar" },
    { name: "Go'sht Mahsulotlari", path: "gosht_mahsulotlari" },
    { name: "Ichimliklar", path: "ichimliklar" },
    { name: "Sut Mahsulotlari", path: "sut_mahsulotlari" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Kategoriyalar</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {categories.map((category) => (
          <li key={category.path} style={{ marginBottom: "10px" }}>
            <Link to={`/category/${category.path}`} style={{ textDecoration: "none", color: "blue" }}>
              <button style={{ padding: "10px 20px", fontSize: "16px" }}>
                {category.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
