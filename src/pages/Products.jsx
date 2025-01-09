import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState(null); // Mahsulotlar holati
    const [error, setError] = useState(null); // Xatolik holati


    // Mahsulotlarni olib kelish
    useEffect(() => {
       

      axios.get('https://backend-1cv5.onrender.com/products')
      .then((res)=> {
          
        setProducts(res.data);
        
      })
    }, []);

    // Xatolik yuz berganda ko'rsatiladigan xabar
    if (error) return <h2>Xatolik yuz berdi: {error}</h2>;

    // Mahsulotlar ro'yxatini chiqarish
    return (
        <div className="App">
            <h1>Food Market Products</h1>
            <div className="product-list">
                {products?.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p className="price">{product.price} so'm</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
