import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Mariga Bags</h3>
            <p className="text-sm">Premium bags designed for elegance, durability, and style. Shop our exclusive collection.</p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/about" className="hover:text-green-400">About Us</a></li>
              <li><a href="/shop" className="hover:text-green-400">Shop</a></li>
              <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
              <li><a href="/faq" className="hover:text-green-400">FAQ</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-blue-600">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-pink-600">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Email: <a href="mailto:support@marigabag.com" className="hover:text-green-400">support@marigabag.com</a></p>
            <p className="text-sm">Phone: +1 800-123-4567</p>
          </div>
        </div>

        <div className="text-center mt-8 border-t border-gray-600 pt-4">
          <p className="text-sm text-gray-400">&copy; 2025 Mariga Bags. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
