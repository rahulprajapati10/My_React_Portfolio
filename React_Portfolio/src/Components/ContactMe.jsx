import React, { useEffect, useState } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { useTheme } from '../assets/Additionals/ThemeContext'; // Use theme context
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const ContactPage = () => {
  const { darkMode } = useTheme(); // Get dark mode from theme context
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1200, once: false }); // Initialize AOS
  }, []);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    const data = {
      Name: name,
      Phone: phone,
      Email: email,
      Message: message,
    };

    axios.post(`https://sheetdb.io/api/v1/4bzgeg56ab2a2`, data)
      .then((response) => {
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
        toast.success('Your message has been sent successfully!', { autoClose: 3000, position: 'top-right' });
      })
      .catch((error) => {
        toast.error('There was an error sending your message. Please try again later.', { autoClose: 3000, position: 'top-right' });
      })
      .finally(() => {
        setLoading(false); // Set loading to false when request is done
      });
  };

  return (
    <section className={`p-6 sm:p-8 lg:p-10 transition-all duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
      id="contact">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 lg:mb-10" data-aos="fade-down">
        Contact Me
      </h1>

      <form className={`max-w-lg mx-auto p-6 sm:p-8 lg:p-10 border rounded-lg shadow-md ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-red-300'}`}
        onSubmit={handleSubmit}
        data-aos="fade-up">
        <div className="mb-6">
          <label className="block mb-2 text-lg sm:text-xl font-semibold" htmlFor="name">Full Name</label>
          <input
            type="text"
            name="Name"
            id="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={`w-full px-4 py-3 sm:py-4 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'} elegant-input`}
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-lg sm:text-xl font-semibold" htmlFor="name">Phone No.</label>
          <input
            type="Number"
            name="Phone" 
            id="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className={`w-full px-4 py-3 sm:py-4 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'} elegant-input`}
            placeholder="Enter your Mobile Number"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-lg sm:text-xl font-semibold" htmlFor="email">Email</label>
          <input
            type="email"
            name="Email"
            id="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`w-full px-4 py-3 sm:py-4 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'} elegant-input`}
            placeholder="Enter your email address"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-lg sm:text-xl font-semibold" htmlFor="message">Message</label>
          <textarea
            name="Message"
            id="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className={`w-full px-4 py-3 sm:py-4 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'} elegant-input`}
            rows="4"
            placeholder="Enter your message"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className={`w-full px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold transition-transform duration-300 transform hover:scale-105 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 ${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'} elegant-button`}
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>

      {/* ToastContainer to show toasts */}
      <ToastContainer />
    </section>
  );
};

export default ContactPage;
