import React from 'react';
import '../components/Navbar.css';

function Navbar() {
  return (
    <header className="Navbar">
      <h1>Travel Blog</h1>
      <ul>
        <li><a href="">Visit</a></li>
        <li><a href="">Contact Us</a></li>
      </ul>
    </header>
  );
}

export default Navbar;