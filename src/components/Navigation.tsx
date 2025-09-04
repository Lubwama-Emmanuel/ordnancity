"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="gradient-text">ORDNANCITY</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-yellow-500 transition-colors"
            >
              About
            </a>
            <a
              href="#collection"
              className="text-gray-300 hover:text-yellow-500 transition-colors"
            >
              Collection
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-yellow-500 transition-colors"
            >
              Contact
            </a>
            <button className="glass-button text-black px-6 py-2 rounded-full font-semibold transition-all">
              Shop
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-yellow-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-gray-800">
          <div className="px-4 py-4 space-y-4">
            <a
              href="#about"
              className="block text-gray-300 hover:text-yellow-500 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#collection"
              className="block text-gray-300 hover:text-yellow-500 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Collection
            </a>
            <a
              href="#contact"
              className="block text-gray-300 hover:text-yellow-500 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <button className="glass-button text-black px-6 py-2 rounded-full font-semibold transition-all w-full">
              Shop
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
