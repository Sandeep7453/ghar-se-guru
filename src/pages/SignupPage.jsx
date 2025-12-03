import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User, MapPin } from 'lucide-react';

const SignupPage = ({ onAuth, userType = 'student' }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    city: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      // Mock API call
      const user = {
        name: formData.name,
        email: formData.email,
        city: formData.city,
        role: userType
      };
      
      onAuth(user);
      navigate(userType === 'student' ? '/student/dashboard' : '/institute/dashboard');
    } catch (err) {
      setError('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const title = userType === 'student' 
    ? 'Sign Up for Ghar Se Guru' 
    : 'Register Your Coaching Institute';
  
  const subtitle = userType === 'student'
    ? 'Start your journey to government exam success'
    : 'Reach thousands of students';

  return (
    <main className="main-content bg-gradient-to-br from-blue-50 to-yellow-50 py-12">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-3 mb-4">
            <span className="text-white font-bold text-2xl">🎓</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 font-semibold">
              {error}
            </div>
          )}

          {/* Name */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              <User size={18} className="inline mr-2" />
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={userType === 'student' ? 'Your full name' : 'Institute name'}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              <Mail size={18} className="inline mr-2" />
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              required
            />
          </div>

          {/* City */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              <MapPin size={18} className="inline mr-2" />
              City
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder={userType === 'student' ? 'Your city' : 'Institute location'}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              <Lock size={18} className="inline mr-2" />
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="••••••••"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              <Lock size={18} className="inline mr-2" />
              Confirm Password
            </label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              placeholder="••••••••"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold hover:shadow-lg transition disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>

          {/* Divider */}
          <div className="my-6 flex items-center space-x-2">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-600 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Login Link */}
          <p className="text-center text-gray-700">
            Already have an account?{' '}
            <Link
              to={`/login?type=${userType}`}
              className="text-blue-600 font-semibold hover:underline"
            >
              Login here
            </Link>
          </p>
        </form>

        {/* Switch User Type */}
        {userType === 'student' && (
          <p className="text-center mt-6 text-gray-600">
            Are you a coaching center?{' '}
            <Link to="/institute/signup" className="text-blue-600 font-semibold hover:underline">
              Register your institute
            </Link>
          </p>
        )}

        {userType === 'institute' && (
          <p className="text-center mt-6 text-gray-600">
            Looking to join as a student?{' '}
            <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
              Sign up here
            </Link>
          </p>
        )}
      </div>
    </main>
  );
};

export default SignupPage;
