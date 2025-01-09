import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Main from "./Main/Main";
import Footer from "../components/Footer";


const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // 3 soniyadan keyin splash screenni yashirish
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="h-screen w-screen">
      {showSplash ? (
        <div className="flex items-center justify-center h-full bg-gray-900 relative">
          <div className="animate-logo text-4xl font-bold text-white absolute">
            Food Market
          </div>
          <style>
            {`
              @keyframes logoAnimation {
                0% {
                  transform: translateY(200%);
                  opacity: 0;
                }
                25% {
                  transform: translateY(100%);
                  opacity: 0;
                }
                50% {
                  transform: translateY(0);
                  opacity: 1;
                }
                75% {
                  transform: translateY(-100%);
                  opacity: 0;
                }
                100% {
                  transform: translateY(-200%);
                  opacity: 0;
                }
              }

              .animate-logo {
                animation: logoAnimation 3s ease-in-out forwards;
              }
            `}
          </style>
        </div>
      ) : (
        <>
        <Header/>
        <Main/>
        <Footer/>
        </>
      )}
    </div>
  );
};

export default Home;
