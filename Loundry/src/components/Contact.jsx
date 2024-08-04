import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rxe4', 'template_0400', form.current, {
        publicKey: '',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
  <div id='contact'>
    <h1 className='text-center  text-teal-600 text-2xl'>CONTACT US</h1>
    <form ref={form} onSubmit={sendEmail} className="w-96 mx-auto bg-white p-8 shadow-md rounded-lg">
        
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input 
          type="text" 
          name="user_name" 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input 
          type="email" 
          name="user_email" 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
        <textarea 
          name="message" 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none" 
        />
      </div>
      <div className="flex items-center justify-between">
        <input 
          type="submit" 
          value="Send" 
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
        />
      </div>
    </form>

  </div>
    );
};

export default ContactUs;
