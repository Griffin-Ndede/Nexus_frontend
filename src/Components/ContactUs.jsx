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
      <section className="relative w-full mt-16 h-96">
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
      </section>
      
      <div className="py-12 px-4 md:px-0 flex justify-center shadow-2xl container mx-auto relative">
        <div className="flex flex-col lg:flex-row lg:space-x-8 lg:gap-10 space-y-8 lg:space-y-0 w-2/3">
          {/* Contact Information on the left */}
          <div className="mx-auto lg:mx-0">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className=" font-bold mb-20">Email: support@nexus.com</p>
            <p className=" font-bold mb-20">Phone: (123) 456-7890</p>
            <p className=" font-bold mb-20">Address: 123 Example St, City, Country</p>
          </div>

          {/* Contact Form on the right */}
          <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6 mx-auto lg:mx-0">
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
                className="w-full p-2 border-black rounded-3xl shadow-2xl"
              />
            </div>
            <div>
              <label className="text-gray-500">Enter your phone number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded-3xl shadow-2xl"
              />
            </div>
            <div>
              <label className="text-gray-500">Enter your message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full sm:h-24 md:h-32 lg:h-48 p-2 border rounded-3xl shadow-2xl"
              />
            </div>
            {/* <div className="flex items-center">
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
            </div> */}
            <button type="submit" className="p-3 mx-auto w-full bg-custom-blue hover:bg-custom-orange text-white rounded-3xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
