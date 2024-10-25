import React from 'react';

const SideNav = ({ setSelectedClass }) => {
  return (
    <nav className="w-56 pt-16 h-screen bg-custom-blue text-white flex flex-col justify-between  top-0">
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-left text-white mb-6 p-2 ml-3">Class Levels</h2>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setSelectedClass('Form1')}
              className="block w-2/3 text-left p-2 ml-3 text-lg rounded-lg transition-colors duration-300  hover:text-custom-orange"
            >
              Form 1
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedClass('Form2')}
              className="block w-2/3 text-left p-2 ml-3 text-lg rounded-lg transition-colors duration-300  hover:text-custom-orange"
            >
              Form 2
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedClass('Form3')}
              className="block w-2/3 text-left p-2 ml-3 text-lg rounded-lg transition-colors duration-300  hover:text-custom-orange"
            >
              Form 3
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedClass('Form4')}
              className="block w-2/3 text-left p-2 ml-3 text-lg rounded-lg transition-colors duration-300  hover:text-custom-orange"
            >
              Form 4
            </button>
          </li>
        </ul>
      </div>
      <div className="p-4 text-center">
        <p className="text-sm text-gray-400">&copy; 2024 Your LMS</p>
      </div>
    </nav>
  );
};

export default SideNav;
