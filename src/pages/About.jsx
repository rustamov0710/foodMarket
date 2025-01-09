import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
<>
<Header/>
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="text-gray-700 text-lg">
        Food Market is dedicated to bringing fresh, high-quality groceries directly to your table.
      </p>
    </div>
    <Footer/>
</>
  );
};

export default About;
