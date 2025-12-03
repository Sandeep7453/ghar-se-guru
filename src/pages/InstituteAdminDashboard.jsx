import React, { useState } from 'react';
import { LogOut, Plus, Edit2, Trash2, Users, BookOpen, Video, BarChart3 } from 'lucide-react';

const InstituteAdminDashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [courses, setCourses] = useState([
    { id: 1, name: "Railway NTPC Complete Course", students: 1200, price: 4999 },
    { id: 2, name: "Reasoning Mastery", students: 800, price: 2999 }
  ]);
  const [teachers, setTeachers] = useState([
    { id: 1, name: "Rajesh Kumar Singh", subject: "Maths", experience: "12 years" },
    { id: 2, name: "Priya Sharma", subject: "English", experience: "8 years" }
  ]);

  return (
    <main className="main-content bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-blue-100">{user?.name}</p>
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
            <Users size={32} className="text-blue-600 mb-3" />
            <p className="text-gray-600 text-sm">Total Students</p>
            <p className="text-4xl font-bold text-gray-900">5,000+</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <BookOpen size={32} className="text-yellow-500 mb-3" />
            <p className="text-gray-600 text-sm">Total Courses</p>
            <p className="text-4xl font-bold text-gray-900">{courses.length}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <Video size={32} className="text-green-600 mb-3" />
            <p className="text-gray-600 text-sm">Total Videos</p>
            <p className="text-4xl font-bold text-gray-900">156</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <BarChart3 size={32} className="text-purple-600 mb-3" />
            <p className="text-gray-600 text-sm">Revenue This Month</p>
            <p className="text-4xl font-bold text-gray-900">₹2.4L</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8 bg-white rounded-t-xl">
          <div className="flex space-x-8 px-6 py-4 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'courses', label: 'Courses' },
              { id: 'teachers', label: 'Teachers' },
              { id: 'students', label: 'Students' },
              { id: 'content', label: 'Content' },
              { id: 'settings', label: 'Settings' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 font-semibold whitespace-nowrap transition ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-b-xl shadow-md p-8">
          {/* Overview */}
          {activeTab === 'overview' && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Institute Statistics</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Institute Name:</strong> Rapid Success Academy</p>
                    <p className="text-gray-700"><strong>Location:</strong> Lucknow, UP</p>
                    <p className="text-gray-700"><strong>Founded:</strong> 2014</p>
                    <p className="text-gray-700"><strong>Rating:</strong> ⭐ 4.8 (342 reviews)</p>
                    <p className="text-gray-700"><strong>Courses:</strong> {courses.length}</p>
                    <p className="text-gray-700"><strong>Teachers:</strong> {teachers.length}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center space-x-2">
                      <Plus size={20} />
                      <span>Add New Course</span>
                    </button>
                    <button className="w-full py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center space-x-2">
                      <Plus size={20} />
                      <span>Add Teacher</span>
                    </button>
                    <button className="w-full py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition flex items-center justify-center space-x-2">
                      <Video size={20} />
                      <span>Upload Video</span>
                    </button>
                    <button className="w-full py-2 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition flex items-center justify-center space-x-2">
                      <Plus size={20} />
                      <span>Create Quiz</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Courses */}
          {activeTab === 'courses' && (
            <div className="animate-fadeIn">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Manage Courses</h2>
                <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">
                  <Plus size={20} />
                  <span>Add Course</span>
                </button>
              </div>
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="bg-gray-50 rounded-lg p-6 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{course.name}</h3>
                      <p className="text-gray-600">
                        Students: <span className="font-bold">{course.students}</span> • Price: ₹{course.price}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition">
                        <Edit2 size={20} />
                      </button>
                      <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Teachers */}
          {activeTab === 'teachers' && (
            <div className="animate-fadeIn">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Manage Teachers</h2>
                <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">
                  <Plus size={20} />
                  <span>Add Teacher</span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teachers.map((teacher) => (
                  <div key={teacher.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
                    <div className="w-full h-32 bg-gray-300 rounded-lg mb-4"></div>
                    <h3 className="font-bold text-gray-900">{teacher.name}</h3>
                    <p className="text-blue-600 font-semibold text-sm mb-2">{teacher.subject}</p>
                    <p className="text-gray-600 text-sm mb-4">{teacher.experience}</p>
                    <div className="flex gap-2">
                      <button className="flex-1 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition font-semibold text-sm">
                        Edit
                      </button>
                      <button className="flex-1 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition font-semibold text-sm">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Students */}
          {activeTab === 'students' && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Enrolled Students</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100 border-b-2">
                      <th className="px-6 py-3 text-left font-bold text-gray-900">Student Name</th>
                      <th className="px-6 py-3 text-left font-bold text-gray-900">Email</th>
                      <th className="px-6 py-3 text-left font-bold text-gray-900">Enrolled Course</th>
                      <th className="px-6 py-3 text-left font-bold text-gray-900">Progress</th>
                      <th className="px-6 py-3 text-left font-bold text-gray-900">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-3">Ravi Kumar</td>
                      <td className="px-6 py-3">ravi@example.com</td>
                      <td className="px-6 py-3">Railway NTPC Complete Course</td>
                      <td className="px-6 py-3">65%</td>
                      <td className="px-6 py-3"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Active</span></td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-3">Priya Singh</td>
                      <td className="px-6 py-3">priya@example.com</td>
                      <td className="px-6 py-3">Reasoning Mastery</td>
                      <td className="px-6 py-3">80%</td>
                      <td className="px-6 py-3"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Active</span></td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-3">Amit Verma</td>
                      <td className="px-6 py-3">amit@example.com</td>
                      <td className="px-6 py-3">Railway NTPC Complete Course</td>
                      <td className="px-6 py-3">45%</td>
                      <td className="px-6 py-3"><span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Inactive</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Content */}
          {activeTab === 'content' && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Manage Content</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <Video size={32} className="text-blue-600 mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Videos</h3>
                  <p className="text-gray-700 mb-4">Manage course videos and lectures</p>
                  <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                    Upload Video
                  </button>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
                  <BookOpen size={32} className="text-purple-600 mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Study Material</h3>
                  <p className="text-gray-700 mb-4">Upload PDFs and study notes</p>
                  <button className="w-full py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition">
                    Upload Material
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Settings */}
          {activeTab === 'settings' && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Institute Settings</h2>
              <form className="space-y-6 max-w-2xl">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Institute Name</label>
                  <input type="text" defaultValue="Rapid Success Academy" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input type="email" defaultValue="info@rapidsuccess.com" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input type="tel" defaultValue="+91-9876543210" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">About Institute</label>
                  <textarea rows="4" defaultValue="Best coaching for Railway & NTPC exams..." className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"></textarea>
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

export default InstituteAdminDashboard;
