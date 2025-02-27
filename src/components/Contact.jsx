import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 text-center">
      <h2 className="text-3xl font-bold text-orange-800 mb-4">Get in Touch</h2>
      <p className="text-lg text-gray-700 mb-4">Interested in collaborating? Reach out!</p>
      <div className="flex justify-center gap-4">
        <a href="https://github.com/kuppal25" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600">GitHub</a>
        <a href="mailto:your.email@example.com" className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600">Email</a>
      </div>
    </section>
  );
};

export default Contact;