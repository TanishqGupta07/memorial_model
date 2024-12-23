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






// import React from 'react';

// const Contact = () => {
//   return (
//     <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen py-10 px-6">
//       {/* Header */}
//       <h1 className="text-center text-4xl font-bold text-blue-600 mb-10">
//         Contact Us
//       </h1>
    

//       <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Contact Information Section */}
//         <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
//           <h2 className="text-2xl font-bold text-blue-600 mb-6">Get in Touch</h2>
//           <p className="text-lg text-gray-700 mb-4">
//             <strong>Address:</strong> <br />
//             53, Shikshak Nagar, Airport Road, Indore
//           </p>
//           <p className="text-lg text-gray-700 mb-4">
//             <strong>Phone:</strong> <br />
//             <a
//               href="tel:0731-2414171"
//               className="text-blue-500 hover:text-blue-700 underline"
//             >
//               0731-2414171
//             </a>
//           </p>
//           <p className="text-lg text-gray-700">
//             <strong>Email:</strong> <br />
//             <a
//               href="mailto:info@school.com"
//               className="text-blue-500 hover:text-blue-700 underline"
//             >
//               info@school.com
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;



