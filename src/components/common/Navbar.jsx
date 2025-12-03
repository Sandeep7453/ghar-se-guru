import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogOut } from 'lucide-react';

const Navbar = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-2">
              <span className="text-white font-bold text-xl">🎓</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-green-600 font-bold text-lg group-hover:text-green-700">Ghar Se Guru</p>
              <p className="text-xs text-gray-600">Online Learning Platform</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/coaching" className="text-gray-700 hover:text-green-600 font-medium transition">
              Find Coaching
            </Link>
            <a href="/#why" className="text-gray-700 hover:text-green-600 font-medium transition">
              About
            </a>
            <a href="/#contact" className="text-gray-700 hover:text-green-600 font-medium transition">
              Contact
            </a>

            {!user ? (
              <div className="flex items-center space-x-3">
                <Link 
                  to="/login" 
                  className="px-5 py-2.5 text-green-600 border-2 border-green-600 rounded-lg hover:bg-green-50 font-bold transition"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 hover:shadow-lg font-bold transition"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <span className="text-gray-700 font-medium">{user.name}</span>
                {user.role === 'student' && (
                  <Link 
                    to="/student/dashboard" 
                    className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg font-bold transition"
                  >
                    Dashboard
                  </Link>
                )}
                {user.role === 'institute' && (
                  <Link 
                    to="/institute/dashboard" 
                    className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg font-bold transition"
                  >
                    Admin Panel
                  </Link>
                )}
                <button
                  onClick={onLogout}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                >
                  <LogOut size={20} />
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 bg-gray-50">
            <Link to="/coaching" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 font-medium">
              Find Coaching
            </Link>
            <a href="/#why" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 font-medium">
              About
            </a>
            <a href="/#contact" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 font-medium">
              Contact
            </a>
            {!user ? (
              <div className="px-4 py-3 space-y-2 border-t border-gray-200 mt-2">
                <Link to="/login" className="block w-full text-center py-2.5 text-green-600 border-2 border-green-600 rounded-lg font-bold hover:bg-green-50">
                  Login
                </Link>
                <Link to="/signup" className="block w-full text-center py-2.5 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700">
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="px-4 py-3 space-y-2 border-t border-gray-200 mt-2">
                <p className="text-gray-700 font-bold">{user.name}</p>
                {user.role === 'student' && (
                  <Link to="/student/dashboard" className="block w-full text-center py-2.5 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">
                    Dashboard
                  </Link>
                )}
                {user.role === 'institute' && (
                  <Link to="/institute/dashboard" className="block w-full text-center py-2.5 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">
                    Admin Panel
                  </Link>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
