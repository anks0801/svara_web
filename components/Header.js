import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
              <img src="/svara-logo.png" alt="Svara Aerotech Logo" className="h-16 w-16" />
              {/* <span className="text-2xl font-bold text-blue-600">
                Svara Aerotech Solutions
              </span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Home
            </Link>
            <Link href="/mission" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Mission
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Services
            </Link>
            <Link href="/capabilities" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Capabilities
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-1">
              <Link href="/" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100">
                Home
              </Link>
              <Link href="/mission" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100">
                Mission
              </Link>
              <Link href="/services" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100">
                Services
              </Link>
              <Link href="/capabilities" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100">
                Capabilities
              </Link>
              <Link href="/about" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100">
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
