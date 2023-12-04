import React, { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';
import { BsCart } from "react-icons/bs"
import { BiUser } from "react-icons/bi"
import { AiOutlineHeart } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"

  function Dropdown({ label, items, isOpen, onClick }) {
    return (
      <div className="relative inline-block text-left">
        <div>
          <button
            className="inline-flex w-full justify-center gap-x-1.5 text-sm font-semibold focus:text-gray-900 hover:text-gray-600 text-gray-400"
            onClick={onClick}
          >
            {label}
          </button>
        </div>
  
        <Transition
          as={Fragment}
          show={isOpen}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="absolute right-0 mt-2 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </Transition>
      </div>
    );
  }
  
  export default function Navbar() {
    const navItems = [
      { label: 'Home', url: '#' },
      { label: 'Shop', url: '#' },
      { label: 'New Clothes', url: '#' },
      { label: 'Contact', url: '#' },
    ];
  
    const [openDropdown, setOpenDropdown] = useState(null);
  
    const toggleDropdown = (index) => {
      if (openDropdown === index) {
        setOpenDropdown(null);
      } else {
        setOpenDropdown(index);
      }
    };
  
    return (
      <div className="flex justify-between">
        <div className="text-blue-600 text-xl cursor-pointer">
          <GiHamburgerMenu />
        </div>
        <nav className="md:block w-max ml-16 hidden">
          <ul className="flex">
            {navItems.map((item, index) => (
              <li className=" px-10" key={index}>
                <Dropdown
                  label={item.label}
                  items={[{ label: 'Subitem 1', url: '#' }, { label: 'Subitem 2', url: '#' }]}
                  isOpen={openDropdown === index}
                  onClick={() => toggleDropdown(index)}
                />
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-xl flex cursor-pointer">
          <AiOutlineHeart className="hover:text-red-500"/>
          <BsCart className="mx-4"/>
          <BiUser />
        </div>
      </div>
    );
  }
