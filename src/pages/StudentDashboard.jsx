import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, BarChart3, Heart, Settings, LogOut } from 'lucide-react';

const StudentDashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const enrolledCourses = [
    {
      id: 1,
      name: "Railway NTPC Complete Course",
      institute: "Rapid Success Academy",
      progress: 65,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Reasoning Mastery",
      institute: "Rapid Success Academy",
      progress: 40,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Banking Exam Complete Strategy",
      institute: "Future Banking Institute",
      progress: 80,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    }
  ];

  const mockTests = [
    { id: 1, name: "Railway NTPC Mock 1", score: 78, total: 100, status: "Completed" },
    { id: 2, name: "Banking PO Mock 1", score: 82, total: 100, status: "Completed" },
    { id: 3, name: "SSC CGL Mock 1", score: 65, total: 100, status: "Completed" }
  ];

  const quizzes = [
    { id: 1, name: "Maths Quiz 1", score: 45, total: 50, status: "Completed" },
    { id: 2, name: "English Quiz 1", score: 38, total: 40, status: "Completed" }
  ];

  return (
    <main className="main-content bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome, {user?.name}!</h1>
              <p className="text-blue-100">Continue your learning journey</p>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <BookOpen size={32} className="text-blue-600 mb-3" />
            <p className="text-gray-600 text-sm">Enrolled Courses</p>
            <p className="text-4xl font-bold text-gray-900">{enrolledCourses.length}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <Award size={32} className="text-yellow-500 mb-3" />
            <p className="text-gray-600 text-sm">Mock Tests Completed</p>
            <p className="text-4xl font-bold text-gray-900">{mockTests.length}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <BarChart3 size={32} className="text-green-600 mb-3" />
            <p className="text-gray-600 text-sm">Avg Performance</p>
            <p className="text-4xl font-bold text-gray-900">75%</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <Heart size={32} className="text-red-500 mb-3" />
            <p className="text-gray-600 text-sm">Saved Centers</p>
            <p className="text-4xl font-bold text-gray-900">5</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8 bg-white rounded-t-xl">
          <div className="flex space-x-8 px-6 py-4">
            {[
              { id: 'overview', label: 'Overview', icon: '📊' },
              { id: 'courses', label: 'My Courses', icon: '📚' },
              { id: 'mockTests', label: 'Mock Tests', icon: '✏️' },
              { id: 'quizzes', label: 'Quizzes', icon: '❓' },
              { id: 'saved', label: 'Saved', icon: '💾' },
              { id: 'settings', label: 'Settings', icon: '⚙️' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 font-semibold flex items-center space-x-2 transition ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-b-xl shadow-md p-8">
          {/* Overview */}
          {activeTab === 'overview' && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Learning Progress</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="bg-gray-50 rounded-xl p-6">
                    <div className="flex gap-4">
                      <img
                        src={course.image}
                        alt={course.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1">{course.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{course.institute}</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-700 font-semibold">Progress</span>
                            <span className="text-blue-600 font-bold">{course.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-300 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-600 to-blue-700 h-2 rounded-full"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Courses */}
          {activeTab === 'courses' && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Enrolled Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                    <img src={course.image} alt={course.name} className="w-full h-40 object-cover" />
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2">{course.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{course.institute}</p>
                      <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                        Continue Learning
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mock Tests */}
          {activeTab === 'mockTests' && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mock Test Results</h2>
              <div className="space-y-4">
                {mockTests.map((test) => (
                  <div key={test.id} className="bg-gray-50 rounded-lg p-6 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{test.name}</h3>
                      <p className="text-gray-600">
                        Score: <span className="font-bold text-blue-600">{test.score}/{test.total}</span>
                      </p>
                    </div>
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-semibold">
                      {test.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quizzes */}
          {activeTab === 'quizzes' && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quiz Attempts</h2>
              <div className="space-y-4">
                {quizzes.map((quiz) => (
                  <div key={quiz.id} className="bg-gray-50 rounded-lg p-6 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{quiz.name}</h3>
                      <p className="text-gray-600">
                        Score: <span className="font-bold text-yellow-600">{quiz.score}/{quiz.total}</span>
                      </p>
                    </div>
                    <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg font-semibold">
                      {quiz.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Saved */}
          {activeTab === 'saved' && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Saved Coaching Centers</h2>
              <div className="space-y-4">
                <Link to="/coaching/1" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition block">
                  <h3 className="font-bold text-gray-900 mb-1">Rapid Success Academy</h3>
                  <p className="text-gray-600">⭐ 4.8 • Lucknow, UP</p>
                </Link>
                <Link to="/coaching/3" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition block">
                  <h3 className="font-bold text-gray-900 mb-1">Future Banking Institute</h3>
                  <p className="text-gray-600">⭐ 4.9 • Indore, MP</p>
                </Link>
              </div>
            </div>
          )}

          {/* Settings */}
          {activeTab === 'settings' && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Profile Settings</h2>
              <form className="space-y-6 max-w-2xl">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input type="text" defaultValue={user?.name} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input type="email" defaultValue={user?.email} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">City</label>
                  <input type="text" defaultValue={user?.city} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
                </div>
                <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">
                  Save Changes
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default StudentDashboard;
