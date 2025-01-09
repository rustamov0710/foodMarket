import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

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
<>
<Header/>
        <div className="App">
        <h1 className="text-2xl font-bold text-center mb-8 mt-6">Our Products</h1>
            <ul className="flex w-[1500px] flex-wrap gap-6 justify-center mx-auto mb-6">
                {products?.map(product => (
                    <Card
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    amount={product.amount}
                    category={product.category}
                    />
                ))}
            </ul>
        </div>
        <Footer/>
</>
    );
};

export default Products;
