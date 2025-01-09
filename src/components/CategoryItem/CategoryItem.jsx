import React from "react";
import { useParams, Link } from "react-router-dom";

// Mahsulotlar
const products = [
  { id: 1, name: "Olma", price: 5000, amount: '2', category: "meva_sabzavotlar", description: "Qizil olma silliq va jozibali tashqi ko'rinishga ega. U O'zbekistonda, ayniqsa Toshkent va Farg'ona vodiysida yetishtiriladi. Pishgan olma shirin va nordon ta'mga ega, ko'plab vitaminlarga boy." },
  { id: 2, name: "Pomidor", price: 8000, amount: '3', category: "meva_sabzavotlar", description: "Pomidor yangi va shirin ta'mga ega, salatlar uchun juda mos." },
  { id: 3, name: "Mol go'shti", price: 25000, amount: '1', category: "gosht_mahsulotlari", description: "Mol go'shti yuqori sifatli va to'yimli bo'lib, turli taomlarga juda mos keladi." },
  { id: 4, name: "Sut", price: 6000, amount: '1', category: "sut_mahsulotlari", description: "Taze sut, tabiiy va foydali, bolalar uchun juda zarur." },
  { id: 5, name: "Choy", price: 3000, amount: '2', category: "ichimliklar", description: "Yoqimli va qizil choy, bir piyola ichish orqali tinchlanasiz." },
  // ... boshqa mahsulotlar
];

// Kategoriyaga asoslangan mahsulotlarni olish uchun funksiya
function filterByCategory(category) {
  return products.filter(product => product.category === category);
}

function CategoryProducts() {
  const { categoryName } = useParams();

  // Kategoriyaga mos mahsulotlarni olish
  const categoryProducts = filterByCategory(categoryName);

  return (
    <div style={{ padding: "20px" }}>
      <h1>{categoryName.replace("_", " ").toUpperCase()}</h1>
      {categoryProducts.length > 0 ? (
        <ul>
          {categoryProducts.map((product) => (
            <li key={product.id} style={{ marginBottom: "10px" }}>
              <h3>{product.name}</h3>
              <p>Price: {product.price} so'm</p>
              <p>Amount: {product.amount}</p>
              <p>Description: {product.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Bu kategoriya bo'yicha mahsulotlar mavjud emas.</p>
      )}
      <Link to="/">
        <button style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}>
          Orqaga qaytish
        </button>
      </Link>
    </div>
  );
}

export default CategoryProducts;
