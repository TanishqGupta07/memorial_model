import React from "react";
import Front from "../assets/front.jpeg";

const Home = () => {
  return (
    <div className="container bg-gradient-to-br from-blue-100 via-red-50 to-yellow-100 min-h-screen mx-auto px-6 py-10">
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

      {/* Key Highlights Section */}
      <section className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Classes Offered
          </h2>
          <p className="text-gray-700 text-sm md:text-lg">
            From <span className="font-semibold">Nursery to XII</span> with
            English Medium & CBSE Curriculum.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Academic Streams
          </h2>
          <p className="text-gray-700 text-sm md:text-lg">
            <span className="font-semibold">Commerce</span> (Eco, IP & Maths)
            and <span className="font-semibold">Science</span> (Physics,
            Chemistry, Biology, Maths).
          </p>
        </div>
      </section> 

      {/* Image Section */}
      <section className="max-w-6xl mx-auto py-10 px-4">
  <div className="flex justify-center">
    <img
      src={Front}
      alt="School Image"
      className="w-full max-w-2xl max-h-[600px] rounded-lg shadow-lg"
    />
  </div>
</section>

    </div>
  );
};

export default Home;
