"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-2xl' : 'bg-white/95 backdrop-blur-md'
    }`}>
      {/* Top Bar - Name */}
      <div className="border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="relative flex items-center justify-center">
            {/* Right Side - Icons */}
            <div className="absolute right-0 flex items-center space-x-4 mr-36">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`transition-all duration-300 p-2 rounded-full ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-black hover:bg-black/5' 
                    : 'text-gray-600 hover:text-black hover:bg-black/5'
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`transition-all duration-300 p-2 rounded-full ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-black hover:bg-black/5' 
                    : 'text-gray-600 hover:text-black hover:bg-black/5'
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`transition-all duration-300 p-2 rounded-full ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-black hover:bg-black/5' 
                    : 'text-gray-600 hover:text-black hover:bg-black/5'
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
            </div>

            {/* Center - Name (Dead Center) */}
            <Link href="/" className={`transition-all duration-500 ${
              isScrolled 
                ? 'text-black text-3xl font-semibold tracking-widest' 
                : 'text-black text-4xl font-semibold tracking-wider'
            }`}>
              Hani Mahdi
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar - Navigation */}
      <div className="border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-2">
          <div className="hidden md:flex justify-center space-x-16">
            <Link href="/" className={`transition-all duration-300 text-sm font-light tracking-widest uppercase ${
              isScrolled 
                ? 'text-gray-700 hover:text-black' 
                : 'text-gray-700 hover:text-black'
            } hover:tracking-wider relative group`}>
              Home
              <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-500 group-hover:w-full ${
                isScrolled ? 'bg-black' : 'bg-black'
              }`}></span>
            </Link>
            <Link href="/about" className={`transition-all duration-300 text-sm font-light tracking-widest uppercase ${
              isScrolled 
                ? 'text-gray-700 hover:text-black' 
                : 'text-gray-700 hover:text-black'
            } hover:tracking-wider relative group`}>
              About
              <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-500 group-hover:w-full ${
                isScrolled ? 'bg-black' : 'bg-black'
              }`}></span>
            </Link>
            <Link href="/projects" className={`transition-all duration-300 text-sm font-light tracking-widest uppercase ${
              isScrolled 
                ? 'text-gray-700 hover:text-black' 
                : 'text-gray-700 hover:text-black'
            } hover:tracking-wider relative group`}>
              Projects
              <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-500 group-hover:w-full ${
                isScrolled ? 'bg-black' : 'bg-black'
              }`}></span>
            </Link>
            <Link href="/contact" className={`transition-all duration-300 text-sm font-light tracking-widest uppercase ${
              isScrolled 
                ? 'text-gray-700 hover:text-black' 
                : 'text-gray-700 hover:text-black'
            } hover:tracking-wider relative group`}>
              Contact
              <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-500 group-hover:w-full ${
                isScrolled ? 'bg-black' : 'bg-black'
              }`}></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
