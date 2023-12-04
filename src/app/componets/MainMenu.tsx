import React from 'react';

function MainMenu({ isOpen, toggleMenu }) {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="fixed top-0 right-0 h-full w-64 bg-white p-4 shadow-md">
        <ul>
          <li>
            <a href="#" onClick={toggleMenu}>Home</a>
          </li>
          <li>
            <a href="#" onClick={toggleMenu}>Shop</a>
          </li>
          <li>
            <a href="#" onClick={toggleMenu}>New Clothes</a>
          </li>
          <li>
            <a href="#" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainMenu;
