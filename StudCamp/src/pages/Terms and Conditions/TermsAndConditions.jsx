import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-teal-800 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-md p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Terms and Conditions</h2>

        <div className="prose text-justify">
          <p>
            Welcome to [Your Website]! These terms and conditions outline the rules and regulations for the use of [Your Website]'s Website, located at [Website URL].
          </p>

          <h3>Rule 1: User Conduct</h3>
          <p>
            Users agree not to use the platform for any unlawful purpose or in a way that violates the rights of others.
          </p>

          <h3>Rule 2: Content Submission</h3>
          <p>
            Users are responsible for the content they submit and should ensure it complies with our content guidelines.
          </p>

          <h3>Rule 3: Privacy</h3>
          <p>
            We respect user privacy. Please review our Privacy Policy for details on how we collect, use, and protect your personal information.
          </p>

          {/* Add more rules as needed... */}

          <p>
            By accessing this website, you agree to abide by these rules. Do not continue to use [Your Website] if you do not agree to take all of the terms and conditions stated on this page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
