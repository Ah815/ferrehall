import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#2c3e50] text-[#FFD700] py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold text-[#FFD700]  mb-4">About Us</h2>
          <p className="text-sm">
            Step back in time with our vintage collection. We bring you the best of the past with a touch of modernity. Discover timeless treasures for your home and lifestyle.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-lg font-semibold text-[#FFD700]  mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-[#a67c52] transition">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-[#a67c52] transition">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#a67c52] transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#a67c52] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold text-[#FFD700]  mb-4">Contact Us</h2>
          <p className="text-sm mb-2">123 Vintage Lane</p>
          <p className="text-sm mb-2">Old Town, Retro City</p>
          <p className="text-sm">
            Email:{' '}
            <a
              href="mailto:info@vintage.com"
              className="hover:text-[#a67c52] transition"
            >
              info@vintage.com
            </a>
          </p>
          <p className="text-sm">
            Phone:{' '}
            <a
              href="tel:+123456789"
              className="hover:text-[#a67c52] transition"
            >
              +123 456 789
            </a>
          </p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex justify-center mt-8 space-x-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-xl hover:scale-110 transition-transform"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-xl hover:scale-110 transition-transform"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 text-xl hover:scale-110 transition-transform"
        >
          <FaInstagram />
        </a>
        
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#d4c4b5] mt-8 pt-4 text-center">
        <p className="text-sm text-[#FFD700] ">
          &copy; {new Date().getFullYear()} Vintage Collection. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
