import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 py-12 border-t-4 border-green-500" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-2">
                <span className="text-white font-bold text-lg">🎓</span>
              </div>
              <h3 className="text-white font-bold text-lg">Ghar Se Guru</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Chhote shehar ke students ko ghar baithe sasti padhai dena.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition duration-200 p-2 rounded-lg hover:bg-gray-800">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition duration-200 p-2 rounded-lg hover:bg-gray-800">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition duration-200 p-2 rounded-lg hover:bg-gray-800">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/coaching" className="text-gray-400 hover:text-green-400 transition font-medium">
                  Find Coaching
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-400 hover:text-green-400 transition font-medium">
                  For Students
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition font-medium">
                  Register Institute
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition font-medium">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Exam Categories */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Exam Categories</h4>
            <ul className="space-y-2.5">
              <li className="text-gray-400 hover:text-green-400 cursor-pointer transition font-medium">Railway</li>
              <li className="text-gray-400 hover:text-green-400 cursor-pointer transition font-medium">SSC</li>
              <li className="text-gray-400 hover:text-green-400 cursor-pointer transition font-medium">Banking</li>
              <li className="text-gray-400 hover:text-green-400 cursor-pointer transition font-medium">Police & Army</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">support@gharseguru.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">+91-1800-GURU-111</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Multiple Cities Across India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-green-400 transition font-medium">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition font-medium">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition font-medium">
              Refund Policy
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-3">
            Made with ❤️ for Students of Small Towns & Rural Areas
          </p>
          <p className="text-gray-500 text-xs">
            © 2024 Ghar Se Guru. All rights reserved. | Premium Learning for Everyone 🎓
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
