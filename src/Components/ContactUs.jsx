import React, { useState } from 'react';
import Navbar from './Navbar';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <>
      <Navbar />
      
      <div className="relative mt-16 w-full h-96">
        <img
          className="absolute h-full w-full object-cover object-center"
          src="https://bucket.material-tailwind.com/magic-ai/bbe71871de8b4d6f23bb0f17a6d5aa342f3dea72677ba7238b18defa3741244d.jpg"
          alt="nature"
        />
        <div className="absolute inset-0 h-full w-full bg-black/50"></div>
        <div className="relative pt-28 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white">Get in touch with us</h2>
          <p className="text-xl text-white opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </div>
      
      <div className="py-12 flex justify-center shadow-md container mx-auto">
        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
          <div>
            <label className="text-gray-500">Enter your name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-3xl shadow-2xl"
            />
          </div>
          <div>
            <label className="text-gray-500">Enter your email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-3xl shadow-md"
            />
          </div>
          <div>
            <label className="text-gray-500">Enter your phone number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-3xl shadow-md"
            />
          </div>
          <div>
            <label className="text-gray-500">Enter your message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full sm:h-24 md:h-32 lg:h-48 p-2 border rounded-3xl shadow-md"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-gray-500">
              You agree to our <a href="#" className="text-gray-700">Privacy Policy</a>.
            </label>
          </div>
          <button type="submit" className="p-3 mx-auto w-full bg-custom-blue hover:bg-custom-orange text-white rounded-3xl">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactUs;
