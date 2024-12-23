import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 md:mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <p>
              <strong>Address:</strong> 53, Shikshak Nagar, Airport Road, Indore
            </p>
            <p>
              <strong>Phone:</strong> 0731-2414171
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;





