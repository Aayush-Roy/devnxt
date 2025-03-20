import { useState } from 'react';
import Logo from '../assets/logo.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 py-4 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src={Logo} alt="Skyline" className="h-8" />
          <span className="ml-2 text-xl font-semibold">DevNXT</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-black hover:text-primary">Home</a>
          <a href="#" className="text-black hover:text-primary">Services</a>
          <a href="#" className="text-black hover:text-primary">Project</a>
          <a href="#" className="text-black hover:text-primary">About Us</a>
          <button className="bg-white text-black border border-black rounded-full px-6 py-2 hover:bg-primary hover:text-white hover:border-primary transition">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="block lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`
          absolute top-full left-0 right-0 
          bg-white shadow-lg lg:hidden 
          transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}>
          <div className="flex flex-col p-4 space-y-4">
            <a href="#" className="text-black hover:text-primary">Home</a>
            <a href="#" className="text-black hover:text-primary">Services</a>
            <a href="#" className="text-black hover:text-primary">Project</a>
            <a href="#" className="text-black hover:text-primary">About Us</a>
            <button className="bg-white text-black border border-black rounded-full px-6 py-2 hover:bg-primary hover:text-white hover:border-primary transition w-full">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}