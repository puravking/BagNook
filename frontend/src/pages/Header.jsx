import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { cartCountState } from '../components/atoms/cartAtom';

function Header() {
    // const [cartCount, setCartCount] = useRecoilState(cartCountState);
    // const handleAddToCart = () => {
    //     setCartCount(cartCount + 1); 
    //   };
    return (
        <header className="bg-gray-900 text-white py-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-6 sm:px-12">
            {/* Logo */}
            <div className="text-2xl font-bold">
            <Link to="/" className="text-green-400 hover:text-green-500">
                BagNook
            </Link>
            </div>

            {/* Navigation Links */}
            <nav>
            <ul className="flex gap-6">
                <li>
                <Link to="/" className="text-white hover:text-green-400">Home</Link>
                </li>
                <li>
                <Link to="/about" className="text-white hover:text-green-400">About Us</Link>
                </li>
                <li>
                <Link to="/contact" className="text-white hover:text-green-400">Contact</Link>
                </li>
            </ul>
            </nav>

            {/* Welcome Message */}
            <div className="hidden sm:block text-sm text-gray-300">
            <p>Welcome to BagNook, your premium bag shopping destination!</p>
            </div>
            <button >Cart</button>
        </div>
        </header>
    );
}

export default Header;
