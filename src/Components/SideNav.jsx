import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = ({ setSelectedClass, setIsMenuOpen }) => {
  return (
    <nav className="w-56 h-screen bg-custom-blue text-white flex flex-col justify-between fixed md:relative z-50 top-0 md:translate-x-0 transition-transform duration-300 transform md:translate-none">
      <div className="mt-8">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <h2 className="text-3xl font-bold text-left text-white mb-4 p-2 ml-3">Nexus</h2>
        </Link>
        <h3 className="text-2xl font-bold text-left text-white p-2 ml-3">Class Levels</h3>
        <ul className="space-y-4">
          {['Form 1', 'Form 2', 'Form 3', 'Form 4'].map((form, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  setSelectedClass(form);
                  setIsMenuOpen(false); // Close menu after selecting
                }}
                className="block w-2/3 text-left pl-2 ml-3 text-lg rounded-lg transition-colors duration-300 hover:text-custom-orange"
              >
                {form}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-400">&copy; Nexus 2024</p>
      </div>
    </nav>
  );
};

export default SideNav;
