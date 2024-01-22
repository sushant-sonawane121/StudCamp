import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-800 text-white">
      <div className="max-w-2xl p-8">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>

        <p className="mb-4">
          Welcome to StudCamp, your ultimate platform for connecting students
          within the college campus. We believe in creating a vibrant community
          where students can collaborate, share knowledge, and build meaningful
          connections.
        </p>

        <p className="mb-4">
          Our mission is to provide a centralized hub for students to stay
          updated on campus events, share academic resources, and engage in
          discussions that matter.
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-4">Our Team</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Sushant Sonawane -- Co-Founder & CEO</li>
          {/* <li>Jane Smith - Co-Founder & CTO</li>
          <li>Alice Johnson - Head of Community</li> */}
          {/* Add more team members as needed */}
        </ul>

        <p className="mb-4">
          StudCamp was founded in [year] with the vision of creating a dynamic
          and inclusive platform for students to thrive academically and
          socially.
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-4">Contact Us</h3>
        <p className="mb-4">
          If you have any questions or suggestions, feel free to reach out to us
          at{" "}
          <a
            href="mailto:sushantsonawane121@gmail.com"
            className="text-yellow-500"
          >
            sushantsonawane121@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
