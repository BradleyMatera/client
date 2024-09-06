import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${styles.header} bg-gradient-to-r from-blue-600 to-purple-700 shadow-lg fixed w-full z-50`}>
      <div className="flex justify-between items-center p-4">
        <div className="text-4xl font-extrabold text-white hover:text-yellow-300 transition-colors duration-300">
          <Link href="/">Recoverynet</Link>
        </div>
        <input type="text" placeholder="Search..." className="p-2 rounded" />
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
      <nav className={`md:flex md:items-center md:justify-between ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>
        <ul className="flex flex-row space-x-8 p-4 md:p-0">
          <li>
            <Link href="/cart" className="text-white hover:text-yellow-300 transition duration-300">Cart</Link>
          </li>
          <li>
            <Link href="/" className="text-white hover:text-yellow-300 transition duration-300">Home</Link>
          </li>
          <li>
            <Link href="/shop" className="text-white hover:text-yellow-300 transition duration-300">Shop</Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-yellow-300 transition duration-300">About</Link>
          </li>

          <li>
            <Link href="/account" className="text-white hover:text-yellow-300 transition duration-300">Account</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;