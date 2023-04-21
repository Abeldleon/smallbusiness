import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='header'>
      <h2 className="logo">La Michoacana</h2>
      <button
        className="mobileMenuButton"
        onClick={handleMobileMenuToggle}
      >
        <span>&#9776;</span>
      </button>
      <nav className={isMobileMenuOpen ? "nav expanded" : "nav"}>
        <ul>
          <li>
            <Link to="/smallbusiness" className="" onClick={handleMobileMenuToggle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/smallbusiness/about" className="" onClick={handleMobileMenuToggle}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}