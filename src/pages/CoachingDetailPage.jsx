import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Users, Play, Award, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

const CoachingDetailPage = () => {
  const { id } = useParams();
  const [coaching, setCoaching] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    // Mock coaching data
    const mockData = {
      1: {
        id: 1,
        name: "Rapid Success Academy",
        city: "Lucknow",
        state: "Uttar Pradesh",
        banner: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop",
        logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        rating: 4.8,
        reviews: 342,
        students: 5000,
        description: "Best coaching for Railway & NTPC exams",
        about: "Rapid Success Academy has been training government exam aspirants for 10+ years. We specialize in Railway and NTPC exams with a 95% success rate.",
        phone: "+91-9876543210",
        email: "info@rapidsuccess.com",
        address: "123 Main Road, Lucknow, UP 226001",
        website: "www.rapidsuccess.com",
        established: 2014,
        categories: ["Railway", "NTPC"],
        teachers: [
          {
            name: "Rajesh Kumar Singh",
            subject: "Maths",
            qualification: "B.Sc, M.Ed",
            experience: "12 years",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
          },
          {
            name: "Priya Sharma",
            subject: "English",
            qualification: "BA, MA English",
            experience: "8 years",
            photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
          },
          {
            name: "Amit Verma",
            subject: "Reasoning",
            qualification: "B.Tech, MBA",
            experience: "10 years",
            photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
          },
          {
            name: "Neha Patel",
            subject: "General Awareness",
            qualification: "BA Hons",
            experience: "9 years",
            photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
          }
        ],
        courses: [
          {
            name: "Railway NTPC Complete Course",
            description: "Complete preparation for Indian Railways NTPC exam",
            price: 4999,
            duration: "6 months",
            level: "Intermediate",
            students: 1200,
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
            modules: ["Mathematics", "English", "Reasoning", "General Awareness"],
            videos: 156
          },
          {
            name: "Reasoning Mastery",
            description: "Complete logical reasoning training",
            price: 2999,
            duration: "3 months",
            level: "Beginner",
            students: 800,
            image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400&h=300&fit=crop",
            modules: ["Logic", "Puzzles", "Pattern Recognition"],
            videos: 85
          }
        ],
        videos: [
          { title: "Railway Exam Overview", duration: "12:45", views: 5200 },
          { title: "Maths Basics for Govt Exams", duration: "25:30", views: 3100 },
          { title: "English Grammar Tricks", duration: "18:15", views: 4500 }
        ],
        quizzes: [
          { title: "Maths Quiz 1", questions: 50, difficulty: "Easy", attempts: 2340 },
          { title: "Reasoning Quiz 2", questions: 40, difficulty: "Medium", attempts: 1890 },
          { title: "English Quiz 1", questions: 30, difficulty: "Medium", attempts: 1560 }
        ],
        mockTests: [
          { title: "Full Railway NTPC Mock Test 1", questions: 120, duration: 90, difficulty: "Hard", attempts: 890 },
          { title: "Maths Full Test", questions: 50, duration: 45, difficulty: "Medium", attempts: 650 },
          { title: "English Full Test", questions: 40, duration: 30, difficulty: "Easy", attempts: 780 }
        ]
      },
      2: {
        id: 2,
        name: "Target Govt Academy",
        city: "Kanpur",
        state: "Uttar Pradesh",
        banner: "https://images.unsplash.com/photo-1491841573634-28fb8d56bd21?w=1200&h=400&fit=crop",
        logo: "https://images.unsplash.com/photo-1491841573634-28fb8d56bd21?w=400&h=300&fit=crop",
        rating: 4.7,
        reviews: 287,
        students: 2000,
        description: "Expert training for Police & Army",
        about: "Target Govt Academy focuses on police and army recruitment preparation with personalized coaching and high success rate.",
        phone: "+91-9876543211",
        email: "info@targetgovt.com",
        address: "456 Victory Lane, Kanpur, UP 208001",
        website: "www.targetgovt.com",
        established: 2016,
        categories: ["Police", "Army"],
        teachers: [
          {
            name: "Vikram Singh",
            subject: "Physical & Tactical",
            qualification: "NDA, B.Sc",
            experience: "15 years",
            photo: "https://images.unsplash.com/photo-1519085360771-9852ef158dba?w=400&h=400&fit=crop"
          },
          {
            name: "Anjali Gupta",
            subject: "General Awareness",
            qualification: "BA Hons, PGDJ",
            experience: "11 years",
            photo: "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=400&h=400&fit=crop"
          }
        ],
        courses: [
          {
            name: "Police Constable Complete Course",
            description: "Full preparation for State Police",
            price: 3999,
            duration: "5 months",
            level: "Beginner",
            students: 950,
            image: "https://images.unsplash.com/photo-1491841573634-28fb8d56bd21?w=400&h=300&fit=crop",
            modules: ["Written Test", "Physical Test", "Interview"],
            videos: 120
          }
        ],
        videos: [
          { title: "Police Exam Pattern Explained", duration: "15:20", views: 4100 },
          { title: "Physical Training Tips", duration: "22:10", views: 3800 }
        ],
        quizzes: [
          { title: "Police GK Quiz", questions: 60, difficulty: "Medium", attempts: 1650 }
        ],
        mockTests: [
          { title: "Police Constable Mock Test", questions: 100, duration: 75, difficulty: "Medium", attempts: 720 }
        ]
      },
      3: {
        id: 3,
        name: "Future Banking Institute",
        city: "Indore",
        state: "Madhya Pradesh",
        banner: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop",
        logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        rating: 4.9,
        reviews: 421,
        students: 8000,
        description: "Specialized banking & SSC coaching",
        about: "Future Banking Institute is the top-rated banking exam coaching center with expert faculty and comprehensive study material.",
        phone: "+91-9876543212",
        email: "info@futurebanking.com",
        address: "789 Finance Plaza, Indore, MP 452001",
        website: "www.futurebanking.com",
        established: 2013,
        categories: ["Banking", "SSC"],
        teachers: [
          {
            name: "Arun Kumar Mishra",
            subject: "Quantitative Aptitude",
            qualification: "B.Tech, MBA",
            experience: "14 years",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
          },
          {
            name: "Deepa Sharma",
            subject: "English Language",
            qualification: "MA English, B.Ed",
            experience: "12 years",
            photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
          }
        ],
        courses: [
          {
            name: "IBPS Bank Complete Course",
            description: "All-in-one solution for IBPS banking exams",
            price: 5499,
            duration: "8 months",
            level: "Advanced",
            students: 1450,
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
            modules: ["Prelims", "Mains", "Interview"],
            videos: 200
          }
        ],
        videos: [
          { title: "Banking Exam Complete Strategy", duration: "20:30", views: 5800 },
          { title: "Quantitative Shortcuts", duration: "28:45", views: 4200 }
        ],
        quizzes: [
          { title: "Quantitative Quiz 1", questions: 50, difficulty: "Hard", attempts: 2100 }
        ],
        mockTests: [
          { title: "IBPS PO Prelims Mock", questions: 100, duration: 60, difficulty: "Hard", attempts: 1200 }
        ]
      },
      4: {
        id: 4,
        name: "Shakti Study Center",
        city: "Nagpur",
        state: "Maharashtra",
        banner: "https://images.unsplash.com/photo-1491841573634-28fb8d56bd21?w=1200&h=400&fit=crop",
        logo: "https://images.unsplash.com/photo-1491841573634-28fb8d56bd21?w=400&h=300&fit=crop",
        rating: 4.6,
        reviews: 198,
        students: 1500,
        description: "One-stop solution for all government exams",
        about: "Shakti Study Center offers comprehensive coaching for all major government exams.",
        phone: "+91-9876543213",
        email: "info@shaktistudy.com",
        address: "321 Education Road, Nagpur, MH 440015",
        website: "www.shaktistudy.com",
        established: 2015,
        categories: ["Railway", "SSC", "Banking", "Police"],
        teachers: [
          {
            name: "Rohit Patel",
            subject: "Maths",
            qualification: "B.Sc, MA Maths",
            experience: "11 years",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
          }
        ],
        courses: [
          {
            name: "All Govt Exams Bundle",
            description: "Complete bundle for all major government exams",
            price: 8999,
            duration: "12 months",
            level: "All Levels",
            students: 2100,
            image: "https://images.unsplash.com/photo-1491841573634-28fb8d56bd21?w=400&h=300&fit=crop",
            modules: ["Railway", "SSC", "Banking", "Police"],
            videos: 350
          }
        ],
        videos: [
          { title: "Govt Exam Strategy", duration: "18:00", views: 3200 }
        ],
        quizzes: [
          { title: "General Knowledge Quiz", questions: 70, difficulty: "Medium", attempts: 1320 }
        ],
        mockTests: [
          { title: "Combined Govt Exam Mock", questions: 150, duration: 120, difficulty: "Hard", attempts: 650 }
        ]
      },
      5: {
        id: 5,
        name: "Bright Career Academy",
        city: "Patna",
        state: "Bihar",
        banner: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop",
        logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        rating: 4.5,
        reviews: 156,
        students: 1200,
        description: "Budget-friendly SSC & Railway coaching",
        about: "Bright Career Academy is dedicated to making quality education accessible to all students in small towns.",
        phone: "+91-9876543214",
        email: "info@brightcareer.com",
        address: "654 Success Street, Patna, BR 800001",
        website: "www.brightcareer.com",
        established: 2017,
        categories: ["SSC", "Railway"],
        teachers: [
          {
            name: "Vinay Kumar",
            subject: "Maths",
            qualification: "B.Sc",
            experience: "8 years",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
          }
        ],
        courses: [
          {
            name: "SSC Complete Course",
            description: "Affordable SSC exam preparation",
            price: 2999,
            duration: "6 months",
            level: "Beginner",
            students: 1600,
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
            modules: ["Maths", "English", "Reasoning", "General Awareness"],
            videos: 140
          }
        ],
        videos: [
          { title: "SSC Exam Overview", duration: "14:30", views: 2800 }
        ],
        quizzes: [
          { title: "SSC Maths Quiz", questions: 50, difficulty: "Easy", attempts: 1100 }
        ],
        mockTests: [
          { title: "SSC CGL Mock Test", questions: 100, duration: 75, difficulty: "Medium", attempts: 500 }
        ]
      }
    };

    setCoaching(mockData[id]);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (!coaching) {
    return (
      <main className="main-content">
        <div className="text-center py-12">
          <p className="text-2xl text-gray-600">Coaching center not found</p>
          <Link to="/coaching" className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg">
            Back to Coaching List
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="main-content">
      {/* Banner */}
      <div className="relative h-64 md:h-96 overflow-hidden bg-gray-900">
        <img
          src={coaching.banner}
          alt={coaching.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Logo & Basic Info */}
            <div className="md:col-span-2">
              <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6">
                <img
                  src={coaching.logo}
                  alt={coaching.name}
                  className="w-32 h-32 rounded-lg shadow-lg object-cover"
                />
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">{coaching.name}</h1>
                  <p className="text-gray-600 text-lg mb-3">{coaching.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {coaching.categories.map((cat, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-semibold"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Star size={24} className="text-yellow-400 fill-yellow-400" />
                  <div>
                    <p className="text-3xl font-bold text-gray-900">{coaching.rating}</p>
                    <p className="text-gray-600 text-sm">{coaching.reviews} reviews</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={24} className="text-blue-600" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{coaching.students.toLocaleString()}+</p>
                    <p className="text-gray-600 text-sm">Active Students</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <GraduationCap size={24} className="text-green-600" />
                  <div>
                    <p className="text-lg font-bold text-gray-900">Est. {coaching.established}</p>
                    <p className="text-gray-600 text-sm">Year Established</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold hover:shadow-lg transition">
                Enroll Now
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <div className="flex space-x-8 overflow-x-auto">
              {['about', 'courses', 'teachers', 'videos', 'quizzes', 'mockTests', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 font-semibold whitespace-nowrap transition ${
                    activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div>
            {/* About */}
            {activeTab === 'about' && (
              <div className="animate-fadeIn">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">{coaching.about}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-600">To provide quality education at affordable prices to every student</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                    <p className="text-gray-600">Creating successful careers through personalized learning</p>
                  </div>
                </div>
              </div>
            )}

            {/* Courses */}
            {activeTab === 'courses' && (
              <div className="animate-fadeIn">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Courses Offered</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {coaching.courses.map((course, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                      <img
                        src={course.image}
                        alt={course.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.name}</h3>
                        <p className="text-gray-600 mb-4">{course.description}</p>
                        <div className="space-y-2 mb-4">
                          <p className="text-gray-700"><strong>Duration:</strong> {course.duration}</p>
                          <p className="text-gray-700"><strong>Level:</strong> {course.level}</p>
                          <p className="text-gray-700"><strong>Videos:</strong> {course.videos} hours</p>
                          <p className="text-gray-700"><strong>Students:</strong> {course.students.toLocaleString()}+</p>
                        </div>
                        <p className="text-3xl font-bold text-blue-600 mb-4">₹{course.price.toLocaleString()}</p>
                        <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold hover:shadow-lg transition">
                          Enroll in Course
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Expert Teachers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {coaching.teachers.map((teacher, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition text-center">
                      <img
                        src={teacher.photo}
                        alt={teacher.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900">{teacher.name}</h3>
                        <p className="text-blue-600 font-semibold mb-2">{teacher.subject}</p>
                        <p className="text-gray-600 text-sm mb-2">{teacher.qualification}</p>
                        <p className="text-gray-700 font-medium">{teacher.experience}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Videos */}
            {activeTab === 'videos' && (
              <div className="animate-fadeIn">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Demo Videos</h2>
                <div className="space-y-4">
                  {coaching.videos.map((video, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-6 flex items-center space-x-4 hover:bg-gray-100 transition cursor-pointer">
                      <Play size={48} className="text-blue-600 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900">{video.title}</h3>
                        <p className="text-gray-600">Duration: {video.duration} • Views: {video.views.toLocaleString()}</p>
                      </div>
                      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                        Watch
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quizzes */}
            {activeTab === 'quizzes' && (
              <div className="animate-fadeIn">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Quizzes</h2>
                <div className="space-y-4">
                  {coaching.quizzes.map((quiz, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{quiz.title}</h3>
                          <p className="text-gray-600">{quiz.questions} questions • Difficulty: {quiz.difficulty}</p>
                        </div>
                        <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full font-semibold">
                          {quiz.attempts.toLocaleString()} attempts
                        </span>
                      </div>
                      <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition">
                        Take Quiz
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mock Tests */}
            {activeTab === 'mockTests' && (
              <div className="animate-fadeIn">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Mock Tests</h2>
                <div className="space-y-4">
                  {coaching.mockTests.map((test, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{test.title}</h3>
                          <p className="text-gray-600">{test.questions} questions • {test.duration} mins • Difficulty: {test.difficulty}</p>
                        </div>
                        <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
                          {test.attempts.toLocaleString()} attempts
                        </span>
                      </div>
                      <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition">
                        Start Test
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact */}
            {activeTab === 'contact' && (
              <div className="animate-fadeIn">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin size={28} className="text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Address</h3>
                        <p className="text-gray-600 leading-relaxed">{coaching.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone size={28} className="text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600">{coaching.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail size={28} className="text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">{coaching.email}</p>
                      </div>
                    </div>
                  </div>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    />
                    <textarea
                      rows="4"
                      placeholder="Your Message"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    ></textarea>
                    <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold hover:shadow-lg transition">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoachingDetailPage;
