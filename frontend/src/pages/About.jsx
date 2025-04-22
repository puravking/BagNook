import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 sm:px-12 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          About BagNook
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          At BagNook, we believe that a bag is more than just an accessory. It’s a symbol of style, elegance, and practicality. We bring you a curated collection of premium bags, designed to suit every occasion and taste. Whether you’re looking for something chic for work, trendy for a night out, or durable for travel, we have it all.
        </p>

        {/* Image Section */}
        <div className="mb-12">
          <img 
            src="https://picsum.photos/800/400" 
            alt="Bag Collection"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Mission Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-600 mb-4">
            Our mission is simple: to provide the highest quality bags that enhance your lifestyle. Every bag is designed with care, crafted from the finest materials, and tested for durability. We’re committed to offering exceptional customer service and helping you find the perfect bag for your needs.
          </p>
          <p className="text-gray-600">
            Join us in discovering the perfect blend of style, functionality, and luxury. With BagNook, your next favorite bag is just a click away.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <button 
            onClick={() => navigate("/home")} 
            className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
