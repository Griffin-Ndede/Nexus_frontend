import React from 'react';

const SideNav = ({ setSelectedClass }) => {
  return (
    <nav className="w-64 h-screen bg-gray-800 text-white flex flex-col justify-between">
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Class Levels</h2>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setSelectedClass('Form1')}
              className="block w-full text-left p-4 text-lg rounded-lg transition-colors duration-300 hover:bg-gray-700 hover:text-yellow-400"
            >
              Form 1
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedClass('Form2')}
              className="block w-full text-left p-4 text-lg rounded-lg transition-colors duration-300 hover:bg-gray-700 hover:text-yellow-400"
            >
              Form 2
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedClass('Form3')}
              className="block w-full text-left p-4 text-lg rounded-lg transition-colors duration-300 hover:bg-gray-700 hover:text-yellow-400"
            >
              Form 3
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
