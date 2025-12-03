import React, { useState } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';

const LoginPage = ({ onAuth, userType = 'student' }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const paramType = searchParams.get('type');
  const type = paramType || userType;

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Mock API call
      const user = {
        name: 'User',
        email: formData.email,
        role: type
      };
      
      onAuth(user);
      navigate(type === 'student' ? '/student/dashboard' : '/institute/dashboard');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const title = type === 'student' 
    ? 'Student Login' 
    : 'Institute Admin Login';

  return (
    <main className="main-content bg-gradient-to-br from-blue-50 to-yellow-50 py-12">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-3 mb-4">
            <span className="text-white font-bold text-2xl">🎓</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600">Welcome back to Ghar Se Guru</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 font-semibold">
              {error}
            </div>
          )}

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

          {/* Password */}
          <div className="mb-2">
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

          {/* Forgot Password */}
          <div className="mb-6 text-right">
            <a href="#" className="text-blue-600 font-semibold hover:underline text-sm">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold hover:shadow-lg transition disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          {/* Divider */}
          <div className="my-6 flex items-center space-x-2">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-600 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Signup Link */}
          <p className="text-center text-gray-700">
            Don't have an account?{' '}
            <Link
              to={type === 'student' ? '/signup' : '/institute/signup'}
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign up now
            </Link>
          </p>
        </form>

        {/* Switch User Type */}
        {type === 'student' && (
          <p className="text-center mt-6 text-gray-600">
            Are you a coaching center?{' '}
            <Link to="/institute/login" className="text-blue-600 font-semibold hover:underline">
              Login as institute
            </Link>
          </p>
        )}

        {type === 'institute' && (
          <p className="text-center mt-6 text-gray-600">
            Looking to join as a student?{' '}
            <Link to="/login" className="text-blue-600 font-semibold hover:underline">
              Student login
            </Link>
          </p>
        )}

        {/* Demo Credentials */}
        <div className="mt-8 bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
          <p className="font-semibold text-gray-900 mb-2">Demo Credentials:</p>
          <p className="text-sm text-gray-700 mb-1">Email: demo@example.com</p>
          <p className="text-sm text-gray-700">Password: password123</p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
