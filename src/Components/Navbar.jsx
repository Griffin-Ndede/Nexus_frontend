import React from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {
  return (
    <nav className="shadow-xl fixed top-0 w-full bg-white text-custom-blue">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-3xl text-custom-blue font-bold ml-5 sm:ml-4 md:ml-6 lg:ml-20">
              Nexus<span className="text-custom-orange">.</span>
            </h1>
          </Link>
        </div>
        
        <div className="hidden md:flex">
          <ul className="flex space-x-8">
            <li>
              <AnchorLink href="#how-it-works" className="hover:text-custom-orange">
                About
              </AnchorLink>
            </li>
            <li>
              <Link to='/dashboard' className="hover:text-custom-orange">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to='/contact' className="hover:text-custom-orange">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Removed mobile menu toggle */}
      </div>
    </nav>
  );
}

export default Navbar;
