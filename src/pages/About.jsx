// // import React from 'react';

// // const About = () => {
// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 md:mb-8">About Us</h1>
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
// //         <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
// //           <h2 className="text-xl md:text-2xl font-semibold mb-4">Our Vision</h2>
// //           <p className="mb-4">
// //             We strive for all-round development of students through various activities
// //             in a disciplined atmosphere.
// //           </p>
// //           <h2 className="text-xl md:text-2xl font-semibold mb-4">Academic Excellence</h2>
// //           <ul className="space-y-2">
// //             <li>Science (PCM, PCB)</li>
// //             <li>Commerce with Maths/IP/Eco available</li>
// //             <li>Teaching through CBSE pattern</li>
// //           </ul>
// //         </div>
// //         <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
// //           <h2 className="text-xl md:text-2xl font-semibold mb-4">Our Facilities</h2>
// //           <ul className="space-y-2">
// //             <li>Fully equipped Physics Lab</li>
// //             <li>Modern Chemistry Lab</li>
// //             <li>Computer Lab with latest equipment</li>
// //             <li>Well-stocked Library</li>
// //             <li>Biology Lab</li>
// //             <li>Sports facilities</li>
// //           </ul>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default About;

// import React from 'react';

// const About = () => {
//   return (
//     <div className="container mx-auto px-6 py-10 bg-gray-50">
//       <h1 className="text-4xl font-bold text-indigo-600 mb-8 text-center">About Us</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Vision and Academic Excellence Section */}
//         <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
//           <h2 className="text-2xl font-semibold text-indigo-600 mb-6">Our Vision</h2>
//           <p className="text-lg text-gray-700 mb-6">
//             We strive for all-round development of students through various activities
//             in a disciplined atmosphere.
//           </p>
//           <h3 className="text-xl font-semibold text-indigo-600 mb-4">Academic Excellence</h3>
//           <ul className="space-y-3 text-lg text-gray-700">
//             <li>Science (PCM, PCB)</li>
//             <li>Commerce with Maths/IP/Eco available</li>
//             <li>Teaching through CBSE pattern</li>
//           </ul>
//         </div>

//         {/* Facilities Section */}
//         <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
//           <h2 className="text-2xl font-semibold text-indigo-600 mb-6">Our Facilities</h2>
//           <ul className="space-y-3 text-lg text-gray-700">
//             <li>Fully equipped Physics Lab</li>
//             <li>Modern Chemistry Lab</li>
//             <li>Computer Lab with the latest equipment</li>
//             <li>Well-stocked Library</li>
//             <li>Biology Lab</li>
//             <li>Sports facilities</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-10 bg-blue-50">
      {/* Header Section */}

      <header className="text-center bg-blue-600 text-white py-8 rounded-b-lg shadow-md">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          Memorial Model H.S. School
        </h1>
        <p className="text-lg md:text-xl">
          53, Shikshak Nagar, Airport Road, Indore
        </p>
        <div className="mt-4 bg-yellow-400 text-blue-900 px-6 py-2 inline-block rounded-full font-semibold text-sm md:text-base">
          Admission Open
        </div>
      </header>

      {/* New Academic Session Section
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">
          New Academic Session
        </h2>
        <p className="text-gray-700 mb-4">
          Commences from{" "}
          <span className="font-bold text-red-600">15th June 2019</span>
        </p>
        <p className="text-gray-700 font-medium">
          Sunday Open (Timings 8 AM to 4 PM)
        </p>
      </div> */}

      {/* Streams Offered Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">
            Streams Offered
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>Science (PCM, PCB)</li>
            <li>Commerce (Eco, IP, Maths)</li>
            <li>English Medium & CBSE Pattern</li>
          </ul>
        </div>

        {/* Facilities Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">
            Our Facilities
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>1. Pure Drinking Water</li>
            <li>2. Best Environment (Air and Light)</li>
            <li>3. Nursery Rooms for Study, Music & Yoga</li>
            <li>4. Labs for Physics, Chemistry, Biology & IP</li>
            <li>5. Well-Stocked Library</li>
            <li>6. Best Staff for Long-Term Guidance</li>
            <li>7. Minimum Fees Structure</li>
          </ul>
        </div>
      </div>

      {/* Highlight Section */}
      <div className="mt-8 bg-yellow-100 p-6 rounded-lg shadow-md text-center">
        <h3 className="text-2xl font-bold text-yellow-600 mb-4">
          30 Successful Years of Excellent Education
        </h3>
      </div>

      {/* Footer Section */}
      <div className="mt-8 bg-blue-500 text-white py-4 text-center rounded-lg">
        <p className="text-lg">Directors: Govind Dube & Nirmala Dube</p>
      </div>
    </div>
  );
};

export default About;
