import React, { useState } from 'react';
import SideNav from './SideNav';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';

function Dashboard() {
  const [selectedClass, setSelectedClass] = useState('Form1');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling menu on mobile

  const renderClassContent = () => {
    switch (selectedClass) {
      case 'Form1': return <Form1 />;
      case 'Form2': return <Form2 />;
      case 'Form3': return <Form3 />;
      case 'Form4': return <Form4 />;
      default: return <Form1 />;
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Toggleable Side Navigation on small screens */}
        <button 
          className="md:hidden p-4 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        
        {/* SideNav component with conditional rendering */}
        {isMenuOpen && <SideNav setSelectedClass={setSelectedClass} setIsMenuOpen={setIsMenuOpen} />}
        
        <div className="md:flex hidden">
          <SideNav setSelectedClass={setSelectedClass} />
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-100 px-4 md:px-6">
          {/* Profile Section */}
          <div className="bg-white shadow-sm p-4 md:p-6 flex justify-between items-center">
            <div className="flex items-center">
              <img
                className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                src="/images/profile.jpeg"
                alt="Profile"
              />
              <div className="ml-3 md:ml-4">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">Welcome, {}</h2>
                <p className="text-gray-600 text-sm md:text-base">Continue your learning journey</p>
              </div>
            </div>
          </div>
          
          {/* Render Class Content */}
          <div className="mt-4">{renderClassContent()}</div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
