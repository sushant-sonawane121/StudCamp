import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  let login = false;
  
  return (
    <div className="bg-teal-800 min-h-screen">
      {/* Header */}
      <header className=" py-24 bg-teal-800 text-white p-8 text-center">
        <h1 className="text-4xl font-bold">Welcome to StudCamp</h1>
        <p className="text-lg">
          Your Campus Connection for Education and Collaboration
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 bg-gray-800">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Section 1 */}
          <div className="p-6 bg-teal-800 text-white text-center rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Join Communities</h2>
            <p className="text-white">
              Connect with students who share your interests. Join communities,
              clubs, and groups to collaborate and stay informed.
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-6 bg-teal-800 text-center text-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Discover Events</h2>
            <p className="text-white">
              Explore campus events, study groups, and activities. RSVP, engage,
              and stay connected with the campus community.
            </p>
          </div>
        </div>
      </main>

      {/* Call-to-Action Section */}
      <section className="bg-gray-800 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Connect?</h2>
        <p className="text-lg mb-6">
          Join StudCamp and become a part of the campus community!
        </p>

        {!login ? (
          <Link
            to="/signup"
            className="bg-yellow-500 text-black py-3 px-6 rounded-full font-bold hover:bg-yellow-400 transition duration-300"
          >
            Sign Up Now
          </Link>
        ) : (
          <Link
            to="/Explore"
            className="bg-yellow-500 text-blue-500 py-3 px-6 rounded-full font-bold hover:bg-yellow-400 transition duration-300"
          >
            Explore
          </Link>
        )}
      </section>
    </div>
  );
};

export default Home;
