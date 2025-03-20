"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
      <div className='container flex flex-wrap items-center justify-between mx-auto px-4 py-2 lg:py-4'>
        <Link href={'/'} 
        className='text-2xl sm:text-3xl lg:text-5xl text-white font-semibold'>
          MOHALE
        </Link>
        <div className='mobile-menu block md:hidden'>
          {!navbarOpen ? (
            <button 
            onClick={() => setNavbarOpen(true)} 
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
              <Bars3Icon className='h-8 w-8 md:h-10 md:w-10 text-white' />
            </button>
          ) : (
            <button 
              onClick={() => setNavbarOpen(false)} 
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
              <XMarkIcon className='h-8 w-8 md:h-10 md:w-10 text-white' />
            </button>
          )}
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex flex-col md:flex-row md:space-x-8 p-4 md:p-0'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay links={navLinks} />
      ) : null}
      {navbarOpen ? (
        <div className="md:hidden bg-[#121212] bg-opacity-95 fixed inset-0 z-20 flex flex-col items-center justify-center space-y-4">
          <button
            onClick={() => setNavbarOpen(false)}
            className="absolute top-4 right-4 text-white focus:outline-none"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              href={link.path}
              title={link.title}
              className="text-white text-xl"
              onClick={() => setNavbarOpen(false)}
            />
          ))}
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
