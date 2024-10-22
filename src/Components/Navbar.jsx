import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-xl fixed w-full bg-white text-custom-blue">
        <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
        <Link to="/">
          <h1 className="text-3xl text-custom-blue font-bold ml-5 sm:ml-4 md:ml-6 lg:ml-20">Nexus<span className="text-custom-orange">.</span></h1>
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
              <Link to='/products' className="hover:text-custom-orange">
                Contact us
              </Link>
            </li>
              {/* <li>
                <Link to="/faqs" className="hover:text-custom-orange">
                  FAQs
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="md:flex items-center">
            {/* <Link to='/login' className="mr-4">
              <button className="px-4 py-2 bg-custom-orange rounded-3xl text-white hover:bg-custom-orange-dark">
                Login/Signup
              </button>
            </Link> */}
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex md:hidden items-center justify-center p-2 rounded-md hover:text-custom-orange hover:text-focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          <ul className={`${isOpen ? 'block' : 'hidden'} absolute top-16 right-0 shadow-xl bg-white w-48  p-2 rounded-sm space-y-2 md:hidden`}>
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
              <Link to='/products' className="hover:text-custom-orange">
                Contact us
              </Link>
            </li>
            {/* <li>
              <Link to="/faqs" className="hover:text-custom-orange">
                FAQs
              </Link>
            </li> */}
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;
