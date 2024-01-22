import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8"  >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div className="footer-column flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">StudCamp</h3>
          <p className="text-gray-300">
            Your Campus Connection for Education and Collaboration.
          </p>
          <p className="text-green-400">
            This Project is made By:{" "}
            <a href="#" className="text-blue-500 underline">
              Sushant Sonawane
            </a>
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-column flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="list-none">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/TermsAndConditions">Terms And Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a href="#" className="text-white hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
